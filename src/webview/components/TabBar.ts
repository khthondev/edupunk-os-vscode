// src/webview/components/TabBar.ts

// Declare the VS Code API function (provided in the webview environment)
declare function acquireVsCodeApi(): any;

// Get the VS Code API instance once.
const vscode = acquireVsCodeApi();

/**
 * Minimal tab bar component that includes the 4 icons (from heroicons.dev):
 *  - Learn
 *  - Test
 *  - Tune
 *  - Build
 */
export function TabBar() {
  // SVG icons for each tab
  const learnIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
    <rect width="256" height="256" fill="none"/>
    <path d="M200,176V64a24,24,0,0,0-24-24H40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
    <line x1="104" y1="104" x2="168" y2="104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
    <line x1="104" y1="136" x2="168" y2="136" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
    <path d="M24,80s-8-6-8-16a24,24,0,0,1,48,0V192a24,24,0,0,0,48,0c0-10-8-16-8-16H216s8,6,8,16a24,24,0,0,1-24,24H88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  </svg>
  `;

  const testIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
    <rect width="256" height="256" fill="none"/>
    <circle cx="168" cy="104" r="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
    <circle cx="88" cy="168" r="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
    <polyline points="152 216 152 160 88 96 88 40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
    <line x1="88" y1="152" x2="88" y2="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
    <rect x="40" y="40" width="176" height="176" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
    <polyline points="136 40 136 72 156.69 92.69" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  </svg>
  `;

  const tuneIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
    <rect width="256" height="256" fill="none"/><rect x="104" y="104" width="48" height="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><rect x="48" y="48" width="160" height="160" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="208" y1="104" x2="232" y2="104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="208" y1="152" x2="232" y2="152" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="24" y1="104" x2="48" y2="104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="24" y1="152" x2="48" y2="152" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="152" y1="208" x2="152" y2="232" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="104" y1="208" x2="104" y2="232" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="152" y1="24" x2="152" y2="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="104" y1="24" x2="104" y2="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  </svg>
  `;

  const buildIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
    <rect width="256" height="256" fill="none"/>
    <line x1="80" y1="160" x2="80" y2="224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><ellipse cx="80" cy="100" rx="32" ry="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><ellipse cx="160" cy="60" rx="32" ry="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="16 128 80 160 240 80 191.23 55.61" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="132.19" y1="69.9" x2="101.56" y2="85.22" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="240 80 240 144 80 224 16 192 16 128 52.19 109.9" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  </svg>
  `;

  // Define the tabs; note no tab is set active by default.
  const tabs = [
    { label: 'Build', icon: buildIcon },
    { label: 'Learn', icon: learnIcon },
    { label: 'Tune', icon: tuneIcon },
    { label: 'Test', icon: testIcon },
  ];

  // Create container element for the tab bar.
  const container = document.createElement('div');
  container.className = 'tab-bar';

  // Generate a button for each tab.
  tabs.forEach((tab) => {
    const button = document.createElement('button');
    button.className = 'tab-bar-item';
    
    // Create icon wrapper.
    const iconWrapper = document.createElement('span');
    iconWrapper.className = 'tab-bar-icon';
    iconWrapper.innerHTML = tab.icon;
    
    // Create label element.
    const labelSpan = document.createElement('span');
    labelSpan.className = 'tab-bar-label';
    labelSpan.textContent = tab.label;
    
    // Click handler: remove active state from all buttons, set active on this one,
    // and post messages to update sidebar content and content viewer.
    button.addEventListener('click', () => {
      console.log(`Tab button clicked: ${tab.label}`);
      
      // Remove active class from all tab-bar items.
      container.querySelectorAll('.tab-bar-item').forEach((btn) => {
        btn.classList.remove('active');
      });

      // Immediately blur the button after click to prevent focus styling
      setTimeout(() => {
        button.blur();
      }, 0);

      // Mark this button as active.
      button.classList.add('active');
      
      // Determine the tab identifier (lowercase version of the label).
      const tabId = tab.label.toLowerCase();
      console.log(`Sending messages for tab: ${tabId}`);
      
      // Send messages to the extension via the VS Code API.
      vscode.postMessage({ command: 'switchTab', tab: tabId });
      vscode.postMessage({ command: 'openTab', tab: tabId });
    });
    
    button.appendChild(iconWrapper);
    button.appendChild(labelSpan);
    container.appendChild(button);
  });

  return container;
}
