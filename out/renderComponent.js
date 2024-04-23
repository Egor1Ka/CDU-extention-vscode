"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderComponent = void 0;
var vscode = __importStar(require("vscode"));
var React = __importStar(require("react"));
var ReactDOM = __importStar(require("react-dom/server"));
var MyComponent_1 = __importDefault(require("./MyComponent"));
function renderComponent(prop1, prop2) {
    var panel = vscode.window.createWebviewPanel("myWebview", "My Webview", vscode.ViewColumn.Two, {});
    var html = ReactDOM.renderToString(React.createElement(MyComponent_1.default, { prop1: prop1, prop2: prop2 }));
    panel.webview.html = "\n    <!DOCTYPE html>\n    <html lang=\"en\">\n    <head>\n      <meta charset=\"UTF-8\">\n      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n      <title>My Webview</title>\n    </head>\n    <body>\n      <div id=\"root\">".concat(html, "</div>\n    </body>\n    </html>\n  ");
}
exports.renderComponent = renderComponent;
//# sourceMappingURL=renderComponent.js.map