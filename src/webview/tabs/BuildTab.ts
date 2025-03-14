// src/webview/tabs/BuildTab.ts

export function BuildTab() {
    const container = document.createElement('div');
    container.className = 'tab-content build-tab';
    container.innerHTML = `<p>Build Tab Content (empty for now)</p>`;
    return container;
  }
  