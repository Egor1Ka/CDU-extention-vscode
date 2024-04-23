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
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
var vscode = __importStar(require("vscode"));
var renderComponent_1 = require("./renderComponent");
function activate(context) {
    var disposable = vscode.commands.registerCommand("extension.renderComponent", function () {
        var editor = vscode.window.activeTextEditor;
        if (editor) {
            var document = editor.document;
            var text = document.getText();
            (0, renderComponent_1.renderComponent)(text, "Value 2");
        }
    });
    context.subscriptions.push(disposable);
    // Регистрируем обработчик для события сохранения документа
    vscode.workspace.onDidSaveTextDocument(function (document) {
        var text = document.getText();
        (0, renderComponent_1.renderComponent)(text, "Value 2");
    });
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map