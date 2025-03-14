// src/extension/pages/LearnPage.ts

import * as vscode from 'vscode';

export function getLearnPanelHtml(extensionUri: vscode.Uri, webview: vscode.Webview): string {
  const nonce = getNonce();
  const cspSource = webview.cspSource;
  return /* html */ `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta 
        http-equiv="Content-Security-Policy" 
        content="default-src 'none'; img-src ${cspSource} data:; style-src ${cspSource} 'unsafe-inline'; script-src 'nonce-${nonce}';"
      >
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Learn AI Concepts</title>
    </head>
    <body>
      <h1>Learn AI Concepts</h1>
      <p>Learn Page Content (empty for now)</p>
    </body>
    </html>
  `;
}

function getNonce(): string {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < 32; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}
