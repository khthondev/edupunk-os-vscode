// src/webview/components/SectionHeader.ts

export function SectionHeader(): HTMLElement {
    // Create the main container
    const container = document.createElement('div');
    container.className = 'section-header';
  
    // Create left side container with text
    const leftContainer = document.createElement('div');
    leftContainer.className = 'section-header-left';
  
    // Create the remaining text element for "Homebrew AI"
    const text = document.createElement('span');
    text.className = 'section-header-text';
    text.textContent = ' Homebrew AI';
    
    // Create tag/pill element for "Mastery Path"
    const tag = document.createElement('span');
    tag.className = 'section-header-tag';
    tag.textContent = 'Mastery';
  
    leftContainer.appendChild(text);
    leftContainer.appendChild(tag);
  
    // Create right side container for the icon
    const rightContainer = document.createElement('div');
    rightContainer.className = 'section-header-right';
    rightContainer.innerHTML = `<svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
    </svg>`;
  
    // Assemble the component
    container.appendChild(leftContainer);
    container.appendChild(rightContainer);
  
    return container;
  }
  