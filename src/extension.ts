import * as vscode from 'vscode';
import { registerHelloCommand } from './commands/hello';
import { registerProviders } from './providers';

export function activate(context: vscode.ExtensionContext): void {
  context.subscriptions.push(registerHelloCommand(), ...registerProviders());
}

export function deactivate(): void {}
