// src/webview/components/ContentViewer.ts

export function ContentViewer() {
    const container = document.createElement('div');
    container.className = 'content-viewer';
    container.style.display = 'none';
    container.innerHTML = '<p>Select an item from the menu to view content here.</p>';
    return container;
  }
  
  export function updateContentViewer(content: string) {
    const container = document.querySelector('.content-viewer');
    if (container) {
      container.innerHTML = content;
    }
  }
  