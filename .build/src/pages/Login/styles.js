"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var styles_exports = {};
__export(styles_exports, {
  Column: () => Column,
  Container: () => Container,
  LoginContainer: () => LoginContainer,
  Row: () => Row,
  Spacing: () => Spacing,
  Title: () => Title
});
module.exports = __toCommonJS(styles_exports);
var import_styled_components = __toESM(require("styled-components"));
const Container = import_styled_components.default.div`
    width: 100%; 
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
`;
const LoginContainer = import_styled_components.default.div`
    width: 100%;
    max-width: 420px;
    background-color: #FFFFFF;

    border-radius: 8px;
    padding: 20px;

    flex:1;
    display: flex;
    align-items: flex-start;
    justify-content: center;
`;
const Title = import_styled_components.default.h1`
    font-size: 42px;
    font-weight: 700;
    color: #81259D;
`;
const Row = import_styled_components.default.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
`;
const Column = import_styled_components.default.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;
const Spacing = import_styled_components.default.div`
    margin: 10px 0;
`;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Column,
  Container,
  LoginContainer,
  Row,
  Spacing,
  Title
});
//# sourceMappingURL=styles.js.map
