export interface PluginContext {
  id: string;
  name: string;
  version: string;
}

export interface ToolbarButtonDef {
  id: string;
  pluginId: string;
  title: string;
  icon?: string;
  onClick: () => void | Promise<void>;
}

export interface SplitPanelDef {
  id: string;
  pluginId: string;
  title: string;
  open: boolean;
  render: (container: HTMLElement) => void;
}
