import * as vscode from "vscode";
import { renderComponent } from "./renderComponent";

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    "extension.renderComponent",
    () => {
      const editor = vscode.window.activeTextEditor;
      if (editor) {
        const document = editor.document;
        const text = document.getText();
        renderComponent(text, "Value 2");
      }
    }
  );

  context.subscriptions.push(disposable);

  // Регистрируем обработчик для события сохранения документа
  vscode.workspace.onDidSaveTextDocument((document) => {
    const text = document.getText();
    renderComponent(text, "Value 2");
  });
}
