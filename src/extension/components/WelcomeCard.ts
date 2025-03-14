// src/extension/components/WelcomeCard.ts

export interface WelcomeCardOptions {
  title?: string;
  description?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  iconSVG?: string; // optional: if you want to pass in an SVG for the icon
}

export function WelcomeCard(options: WelcomeCardOptions = {}) {
  const {
    title = 'Learn AI Concepts',
    description = 'Explore our curriculum to understand AI fundamentals and advanced topics',
    buttonText = 'Start Learning',
    onButtonClick,
    iconSVG,
  } = options;

  // Container (using the unified class "card")
  const card = document.createElement('div');
  card.className = 'card';

  // Icon container
  if (iconSVG) {
    const iconWrapper = document.createElement('div');
    iconWrapper.className = 'card-icon';
    iconWrapper.innerHTML = iconSVG;
    card.appendChild(iconWrapper);
  }

  // Content container: wraps title and description
  const contentWrapper = document.createElement('div');
  contentWrapper.className = 'card-content';

  // Title
  if (title) {
    const titleElem = document.createElement('h2');
    titleElem.textContent = title;
    contentWrapper.appendChild(titleElem);
  }

  // Description
  if (description) {
    const descElem = document.createElement('p');
    descElem.textContent = description;
    contentWrapper.appendChild(descElem);
  }

  card.appendChild(contentWrapper);

  // Optional button (if needed)
  if (buttonText) {
    const buttonElem = document.createElement('button');
    buttonElem.className = 'button';
    buttonElem.textContent = buttonText;
    if (onButtonClick) {
      buttonElem.addEventListener('click', onButtonClick);
    }
    card.appendChild(buttonElem);
  }

  return card;
}
