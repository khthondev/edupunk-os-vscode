// src/webview/App.ts

import { TabBar } from './components/TabBar.js';
import { Footer } from './components/Footer.js';
import { WelcomeTab } from './tabs/WelcomeTab.js';
import { LearnTab } from './tabs/LearnTab.js';
import { TestTab } from './tabs/TestTab.js';
import { TuneTab } from './tabs/TuneTab.js';
import { BuildTab } from './tabs/BuildTab.js';

export function renderApp() {
  const root = document.getElementById('root');
  if (!root) {
    console.error('Root element not found');
    return;
  }

  root.innerHTML = '';
  root.appendChild(TabBar());

  // Main container for tab content
  const container = document.createElement('div');
  container.className = 'main-container';

  // Show WelcomeTab by default
  container.appendChild(WelcomeTab());
  root.appendChild(container);

  /* root.appendChild(Footer()); */

  // Listen for messages from TabBar
  window.addEventListener('message', event => {
    const message = event.data;
    switch (message.command) {
      case 'switchTab':
        // Clear old content
        container.innerHTML = '';
        // Display the chosen tab
        switch (message.tab) {
          case 'learn':
            container.appendChild(LearnTab());
            break;
          case 'test':
            container.appendChild(TestTab());
            break;
          case 'tune':
            container.appendChild(TuneTab());
            break;
          case 'build':
            container.appendChild(BuildTab());
            break;
          default:
            container.appendChild(WelcomeTab());
        }
        break;
      default:
        break;
    }
  });
}

// Render immediately
renderApp();