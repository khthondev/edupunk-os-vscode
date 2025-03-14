// src/webview/tabs/TestTab.ts

export function TestTab() {
    const container = document.createElement('div');
    container.className = 'tab-content test-tab';
    container.innerHTML = `<p>Test Tab Content (empty for now)</p>`;
    return container;
  }
  