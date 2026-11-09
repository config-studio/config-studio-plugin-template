"use strict";
var ConfigStudioCustomPlugin = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
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
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // src/index.ts
  var index_exports = {};
  __export(index_exports, {
    initializePlugin: () => initializePlugin
  });
  function initializePlugin(context) {
    console.log(`[Plugin] Initializing ${context.name} v${context.version}...`);
    const cs = typeof ConfigStudio !== "undefined" ? ConfigStudio : typeof window !== "undefined" ? window.ConfigStudio : globalThis.ConfigStudio;
    if (!cs) {
      console.warn("[Plugin] ConfigStudio global API not found, running standalone.");
      return;
    }
    cs.registerToolbarButton?.({
      id: `${context.id}-action`,
      pluginId: context.id,
      title: `${context.name} Action`,
      icon: "\u26A1",
      onClick: () => {
        cs.showNotification?.(`${context.name} button clicked!`, "info");
      }
    });
    cs.onFileOpen?.((file) => {
      console.log(`[Plugin] File opened: ${file?.name}`);
    });
    cs.onFileSave?.((file) => {
      console.log(`[Plugin] File saved: ${file?.name}`);
    });
    console.log(`\u2713 [Plugin] ${context.name} initialized successfully.`);
  }
  if (typeof window !== "undefined") {
    initializePlugin({
      id: "my-plugin",
      name: "My Custom Plugin",
      version: "1.0.0"
    });
  }
  return __toCommonJS(index_exports);
})();
