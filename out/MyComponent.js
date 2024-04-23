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
var react_1 = __importStar(require("react"));
var MyComponent = function (_a) {
    var prop1 = _a.prop1, prop2 = _a.prop2;
    var _b = (0, react_1.useState)(0), state = _b[0], setState = _b[1];
    return (react_1.default.createElement("div", null,
        "state : ",
        state,
        react_1.default.createElement("p", null,
            "Prop 1: ",
            prop1),
        react_1.default.createElement("p", null,
            "Prop 2: ",
            prop2),
        react_1.default.createElement("button", { onClick: function () {
                console.log("click");
                setState(function (prevState) { return prevState + 1; });
            } },
            " ",
            "Click me")));
};
exports.default = MyComponent;
//# sourceMappingURL=MyComponent.js.map