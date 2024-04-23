import * as vscode from "vscode";
import * as React from "react";
import * as ReactDOM from "react-dom/server";
import MyComponent from "./MyComponent";

export function renderComponent(prop1: any, prop2: any) {
  const panel = vscode.window.createWebviewPanel(
    "myWebview",
    "My Webview",
    vscode.ViewColumn.Two,
    {}
  );

  const html = ReactDOM.renderToString(
    <MyComponent prop1={prop1} prop2={prop2} />
  );

  panel.webview.html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>My Webview</title>
    </head>
    <body>
      <div id="root">${html}</div>
    </body>
    </html>
  `;
}
