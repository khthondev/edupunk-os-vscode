// src/webview/components/Footer.ts

export function Footer() {
    const footer = document.createElement('footer');
    footer.className = 'footer';
    footer.textContent = '© 2025 Edupunk OS';
    return footer;
  }