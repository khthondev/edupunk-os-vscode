// src/webview/components/TextCard.ts

export interface TextCardOptions {
    title?: string;
    content?: string;
  }
  
  export function TextCard(options: TextCardOptions = {}) {
    const { title = '', content = '' } = options;
  
    const card = document.createElement('div');
    card.className = 'text-card';
  
    if (title) {
      const cardTitle = document.createElement('h2');
      cardTitle.className = 'text-card-title';
      cardTitle.textContent = title;
      card.appendChild(cardTitle);
    }
  
    if (content) {
      const cardContent = document.createElement('p');
      cardContent.className = 'text-card-content';
      cardContent.textContent = content;
      card.appendChild(cardContent);
    }
  
    return card;
  }
  