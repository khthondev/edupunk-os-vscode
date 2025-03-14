// src/webviewProvider.ts

import * as vscode from 'vscode';
import { getFlattenedCurriculum } from './curriculum/curriculum';

export class WebviewProvider implements vscode.WebviewViewProvider {
  constructor(private readonly _extensionUri: vscode.Uri) {}

  public resolveWebviewView(
    webviewView: vscode.WebviewView,
    context: vscode.WebviewViewResolveContext,
    _token: vscode.CancellationToken
  ) {
    webviewView.webview.options = {
      enableScripts: true,
      localResourceRoots: [this._extensionUri],
    };

    webviewView.webview.html = this._getHtmlForWebview(webviewView.webview);

    webviewView.webview.onDidReceiveMessage((message) => {
      switch (message.command) {
        case 'sendMessage':
          this._handleChatMessage(message.text, webviewView.webview);
          break;
        case 'loadContent':
          this._handleLoadContent(message.path, webviewView.webview);
          break;
        case 'openTab':
          // Use message.tab (which the TabBar sends) to trigger the extension command.
          vscode.commands.executeCommand('edupunk-os.openTab', message.tab);
          break;
        case 'switchTab':
          // Forward the switchTab message back to the webview content.
          webviewView.webview.postMessage(message);
          break;
      }
    });
  }

  private _getHtmlForWebview(webview: vscode.Webview): string {
    const scriptUri = webview.asWebviewUri(
      vscode.Uri.joinPath(this._extensionUri, 'out', 'webview', 'App.js')
    );
    const styleUri = webview.asWebviewUri(
      vscode.Uri.joinPath(this._extensionUri, 'src', 'webview', 'styles', 'global.css')
    );
    const styleComponentsUri = webview.asWebviewUri(
      vscode.Uri.joinPath(this._extensionUri, 'src', 'webview', 'styles', 'components.css')
    );
    const qStyleUri = webview.asWebviewUri(
      vscode.Uri.joinPath(this._extensionUri, 'src', 'webview', 'styles', 'kai.css')
    );    
    const nonce = this._getNonce();
  
    return /* html */ `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta
        http-equiv="Content-Security-Policy"
        content="
          default-src 'none';
          img-src ${webview.cspSource} data:;
          style-src ${webview.cspSource} 'unsafe-inline';
          script-src 'nonce-${nonce}' ${webview.cspSource};
        "
      >
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link href="${styleUri}" rel="stylesheet">
      <link href="${styleComponentsUri}" rel="stylesheet">
      <link href="${qStyleUri}" rel="stylesheet">
      <title>Edupunk OS</title>
    </head>
    <body>
      <div id="root"></div>
  
      <!-- Inline script using the nonce -->
      <script type="module" nonce="${nonce}" src="${webview.asWebviewUri(
        vscode.Uri.joinPath(this._extensionUri, 'out', 'webview', 'App.js')
      )}">
      </script>
  
      <!-- External script with type="module" -->
      <script type="module" nonce="${nonce}" src="${scriptUri}"></script>
    </body>
    </html>`;
  }  

  private _handleChatMessage(text: string, webview: vscode.Webview) {
    const response = `I received your message: "${text}". This is where your local AI would respond.`;
    webview.postMessage({ command: 'receiveMessage', text: response });
  }

  private async _handleLoadContent(path: string, webview: vscode.Webview) {
    const content = await this._loadContent(path);
    webview.postMessage({ command: 'receiveContent', content });
  }

  private async _loadContent(path: string): Promise<string> {
    try {
      const fileUri = vscode.Uri.joinPath(this._extensionUri, 'src', 'curriculum', 'content', path);
      const fileData = await vscode.workspace.fs.readFile(fileUri);
      return Buffer.from(fileData).toString('utf8');
    } catch (error) {
      console.error(`Error loading content from ${path}:`, error);
      return `Error loading content: ${path}. Make sure the file exists and the path is correct.`;
    }
  }

  private _getNonce(): string {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 32; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }
}
