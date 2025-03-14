// src/webview/components/Header.ts

export function Header() {
    const header = document.createElement('header');
    header.className = 'header';
    header.textContent = 'Edupunk OS';
    return header;
  }