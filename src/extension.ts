import * as vscode from 'vscode';
import { WebviewProvider } from './webviewProvider';

import { getWelcomePanelHtml } from './extension/pages/WelcomePage';
import { getLearnPanelHtml } from './extension/pages/LearnPage';
import { getTestPanelHtml } from './extension/pages/TestPage';
import { getTunePanelHtml } from './extension/pages/TunePage';
import { getBuildPanelHtml } from './extension/pages/BuildPage';

let contentPanel: vscode.WebviewPanel | undefined;

export function activate(context: vscode.ExtensionContext) {
  console.log('Activating EDUPUNK OS extension');

  // Register sidebar webview
  const webviewProvider = new WebviewProvider(context.extensionUri);
  context.subscriptions.push(
    vscode.window.registerWebviewViewProvider('edupunk-os.panel', webviewProvider)
  );

  // Show panel command
  const showPanelCommand = vscode.commands.registerCommand('edupunk-os.showPanel', () => {
    vscode.commands.executeCommand('workbench.view.extension.edupunk-os');
  });
  context.subscriptions.push(showPanelCommand);

  // Single command to open or switch the content panel
  // Provide a default value for 'tab' so that it's never undefined.
  const openTabCommand = vscode.commands.registerCommand('edupunk-os.openTab', (tab: string = 'welcome') => {
    console.log(`openTabCommand invoked with tab: ${tab}`);
    
    // If we already have a panel, reuse it; otherwise create a new one
    if (!contentPanel) {
      contentPanel = vscode.window.createWebviewPanel(
        'edupunkContent', // internal ID
        'Content Viewer', // displayed title
        vscode.ViewColumn.One,
        {
          enableScripts: true,
          localResourceRoots: [context.extensionUri],
        }
      );

      // If user closes the panel, let us create a new one next time
      contentPanel.onDidDispose(() => {
        contentPanel = undefined;
      }, null, context.subscriptions);
    } else {
      // If the panel exists but isn't focused, reveal it
      contentPanel.reveal(vscode.ViewColumn.One);
    }

    // Update the panel title based on the selected tab
    const newTitle = tab.charAt(0).toUpperCase() + tab.slice(1);
    console.log(`Updating content panel title to: ${newTitle}`);
    contentPanel.title = newTitle;

    // Switch the HTML in the existing panel based on the tab
    try {
      let htmlContent = '';
      switch (tab) {
        case 'learn':
          console.log('Loading Learn page content.');
          htmlContent = getLearnPanelHtml(context.extensionUri, contentPanel.webview);
          break;
        case 'test':
          console.log('Loading Test page content.');
          htmlContent = getTestPanelHtml(context.extensionUri, contentPanel.webview);
          break;
        case 'tune':
          console.log('Loading Tune page content.');
          htmlContent = getTunePanelHtml(context.extensionUri, contentPanel.webview);
          break;
        case 'build':
          console.log('Loading Build page content.');
          htmlContent = getBuildPanelHtml(context.extensionUri, contentPanel.webview);
          break;
        default:
          console.log('Loading Welcome page content.');
          htmlContent = getWelcomePanelHtml(context.extensionUri, contentPanel.webview);
      }
      contentPanel.webview.html = htmlContent;
    } catch (error) {
      console.error(`Error loading content for tab: ${tab}`, error);
      contentPanel.webview.html = `<html><body>Error loading content for tab: ${tab}</body></html>`;
    }
  });
  context.subscriptions.push(openTabCommand);

  // Command to open the welcome screen
  const openWelcomeCommand = vscode.commands.registerCommand('edupunk-os.openWelcome', () => {
    console.log('Executing openWelcomeCommand');
    // Unify logic by calling openTab with 'welcome'
    vscode.commands.executeCommand('edupunk-os.openTab', 'welcome');
  });
  context.subscriptions.push(openWelcomeCommand);

  // Automatically open the welcome content on activation
  vscode.commands.executeCommand('edupunk-os.openWelcome');

  console.log('EDUPUNK OS extension activated');
}

export function deactivate() {
  // no-op
}
