import * as vscode from 'vscode';

export function registerHelloCommand(): vscode.Disposable {
  return vscode.commands.registerCommand('tabCodeComplete.hello', () => {
    void vscode.window.showInformationMessage('Tab Code Complete 已激活。');
  });
}
