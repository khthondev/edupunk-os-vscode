// src/webview/tabs/WelcomeTab.ts

import { KaiMessenger } from '../components/KaiMessenger.js';

export function WelcomeTab() {
  const container = document.createElement('div');
  container.className = 'tab-content welcome-tab';

  // Insert Kai's messenger UI
  container.appendChild(KaiMessenger());

  return container;
}
