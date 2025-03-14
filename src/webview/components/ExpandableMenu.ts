// src/webview/components/ExpandableMenu.ts

export interface ExpandableMenuItem {
  title: string;
  path?: string;
  children?: ExpandableMenuItem[];
}
  
export interface ExpandableMenuOptions {
  items: ExpandableMenuItem[];
  onChildClick?: (child: ExpandableMenuItem) => void;
}

/**
 * Creates an expandable/collapsible menu (curriculum tree).
 */
export function ExpandableMenu(options: ExpandableMenuOptions) {
  const { items } = options;

  const container = document.createElement('div');
  container.className = 'expandable-menu';

  // Recursively create each menu item
  items.forEach((item) => {
    container.appendChild(createMenuItem(item, 0, options));
  });

  return container;
}

function createMenuItem(item: ExpandableMenuItem, level: number = 0, options?: ExpandableMenuOptions): HTMLElement {
  const itemEl = document.createElement('div');
  itemEl.className = 'menu-item';
  
  if (level > 0) {
    itemEl.classList.add('menu-item-level-' + level);
  }

  // The header (clickable to expand/collapse if there are children)
  const headerEl = document.createElement('div');
  headerEl.className = 'menu-item-header';
  
  // Add title text
  const titleSpan = document.createElement('span');
  titleSpan.textContent = item.title;
  titleSpan.className = 'menu-item-title';
  headerEl.appendChild(titleSpan);

  // Create header content with icon for first level items
  if (item.children && item.children.length > 0 && level === 0) {
    // Add chevron icon at the end
    const iconContainer = document.createElement('div');
    iconContainer.className = 'menu-item-icon';
    iconContainer.innerHTML = `<svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path clip-rule="evenodd" fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path>
    </svg>`;
    
    headerEl.appendChild(iconContainer);
  }

  itemEl.appendChild(headerEl);

  // If the item has children, build the nested list
  if (item.children && item.children.length > 0) {
    // Add a class so we can show an arrow/caret in CSS
    headerEl.classList.add('has-children');

    const childrenContainer = document.createElement('div');
    childrenContainer.className = 'menu-item-children collapsed';

    item.children.forEach((child, index) => {
      const childElement = createMenuItem(child, level + 1, options);
      // Add extra padding to the last child
      if (item.children && index === item.children.length - 1) {
        childElement.classList.add('last-child');
      }
      childrenContainer.appendChild(childElement);

      childElement.addEventListener('click', () => {
        if (options && options.onChildClick) {
          options.onChildClick(child);
        }
      });
    });

    // Add divider between parent and children
    if (level === 0) {
      const divider = document.createElement('div');
      divider.className = 'menu-item-divider';
      childrenContainer.prepend(divider);
    }

    itemEl.appendChild(childrenContainer);

    // Toggle expand/collapse on header click
    headerEl.addEventListener('click', () => {
      const isCollapsed = childrenContainer.classList.contains('collapsed');
      childrenContainer.classList.toggle('collapsed', !isCollapsed);
      childrenContainer.classList.toggle('expanded', isCollapsed);
      
      // Rotate chevron icon when expanding/collapsing
      if (level === 0) {
        const iconElement = headerEl.querySelector('.menu-item-icon');
        if (iconElement) {
          iconElement.classList.toggle('rotated', isCollapsed);
        }
      }
    });
  }

  return itemEl;
}
