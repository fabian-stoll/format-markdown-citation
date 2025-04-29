import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  const cmd = 'formatMarkdownCitation.format';
  let disposable = vscode.commands.registerCommand(cmd, async () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) { return; }

    const sel = editor.selection;
    const text = editor.document.getText(sel);
    if (!text) { return; }

    // 1) Remove '@'
    let formatted = text.replace(/@/g, '');
    // 2) Replace ';' with ','
    formatted = formatted.replace(/;/g, ',');
    // 3) Integrate in \cite{…} command
    formatted = `\\cite{${formatted}}`;

    await editor.edit(edit => {
      edit.replace(sel, formatted);
    });
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
