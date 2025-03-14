// src/extension/pages/WelcomePage.ts

import * as vscode from 'vscode';
import { buildIcon, learnIcon, testIcon, tuneIcon } from '../../media/Icons';
import { WorkflowSteps } from '../components/WorkflowSteps';
import { WelcomeCard } from '../components/WelcomeCard';

export function getWelcomePanelHtml(extensionUri: vscode.Uri, webview: vscode.Webview): string {
  const nonce = getNonce();
  const cspSource = webview.cspSource;

  // We reference global.css so the user’s new styles are applied
  const pagesStyles = webview.asWebviewUri(
    vscode.Uri.joinPath(extensionUri, 'src', 'extension', 'styles', 'pages.css')
  );
  
  const componentsStyles = webview.asWebviewUri(
    vscode.Uri.joinPath(extensionUri, 'src', 'extension', 'styles', 'components.css')
  );
  
  const globalStyles = webview.asWebviewUri(
    vscode.Uri.joinPath(extensionUri, 'src', 'webview', 'styles', 'global.css')
  );

  const steps = [
    { title: 'Setup', description: 'Prepare your environment for the workflow.' },
    { title: 'Data', description: 'Gather and preprocess the necessary data.' },
    { title: 'Training', description: 'Train your model using the prepared data.' },
    { title: 'Evaluation', description: 'Evaluate the performance of your model.' }
  ];

  const workflowStepsHtml = generateWorkflowStepsHtml(steps);

  return /* html */ `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta
        http-equiv="Content-Security-Policy"
        content="default-src 'none';
                img-src ${cspSource} data:;
                style-src ${cspSource} 'unsafe-inline';
                script-src 'nonce-${nonce}';"
      >
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome to Edupunk OS</title>
      <link rel="stylesheet" href="${globalStyles}">
      <link rel="stylesheet" href="${pagesStyles}">
      <link rel="stylesheet" href="${componentsStyles}">
    </head>
    <body>
      <div class="content">
        <div class="page-heading">Welcome to the AI Dojo</div>
        <div class="page-subheading">Train, build, and master AI without limits</div>

        <div class="card-container">
          <div class="card">
            <div class="card-icon">${buildIcon}</div>
            <div class="card-content">
              <h2>Forge Your Own AI</h2>
              <p>Customize AI models for your specific tasks with guided workflows.</p>
            </div>
          </div>
          <div class="card">
            <div class="card-icon">${learnIcon}</div>
            <div class="card-content">
              <h2>Train Your AI Knowledge</h2>
              <p>Explore our curriculum to understand AI fundamentals and advanced topics.</p>
            </div>
          </div>
          <div class="card">
            <div class="card-icon">${tuneIcon}</div>
            <div class="card-content">
              <h2>Refine & Optimize AI</h2>
              <p>Customize AI models for your specific tasks with guided workflows.</p>
            </div>
          </div>
          <div class="card">
            <div class="card-icon">${testIcon}</div>
            <div class="card-content">
              <h2>Run & Experiment with AI Models</h2>
              <p>Run and experiment with open-source AI models on your own hardware.</p>
            </div>
          </div>
        </div>
      </div>
      <script nonce="${nonce}">
        const vscode = acquireVsCodeApi();

        // When user clicks "Open Tab Bar", ask the extension to show the side panel
        document.getElementById('openTabBar')?.addEventListener('click', () => {
          vscode.postMessage({ command: 'showTabBar' });
        });
      </script>
    </body>
    </html>
  `;
}

// Helper to generate a nonce
function getNonce(): string {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < 32; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

// Helper to generate HTML for WorkflowSteps
function generateWorkflowStepsHtml(steps: { title: string; description?: string; iconSVG?: string }[]): string {
  return `
    <div class="workflow-steps-container">
      ${steps.map(step => `
        <div class="workflow-step">
          ${step.iconSVG ? `<div class="workflow-step-icon">${step.iconSVG}</div>` : ''}
          <h3 class="workflow-step-title">${step.title}</h3>
          ${step.description ? `<p class="workflow-step-description">${step.description}</p>` : ''}
        </div>
      `).join('')}
    </div>
  `;
}