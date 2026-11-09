import { PluginContext } from './types';

// Declare ConfigStudio global API
declare const ConfigStudio: any;

export function initializePlugin(context: PluginContext) {
  console.log(`[Plugin] Initializing ${context.name} v${context.version}...`);

  const cs =
    typeof ConfigStudio !== 'undefined'
      ? ConfigStudio
      : typeof window !== 'undefined'
      ? (window as any).ConfigStudio
      : (globalThis as any).ConfigStudio;
  if (!cs) {
    console.warn('[Plugin] ConfigStudio global API not found, running standalone.');
    return;
  }

  // 1. Register a Toolbar Button
  cs.registerToolbarButton?.({
    id: `${context.id}-action`,
    pluginId: context.id,
    title: `${context.name} Action`,
    icon: '⚡',
    onClick: () => {
      cs.showNotification?.(`${context.name} button clicked!`, 'info');
    },
  });

  // 2. Hook Editor Events
  cs.onFileOpen?.((file: any) => {
    console.log(`[Plugin] File opened: ${file?.name}`);
  });

  cs.onFileSave?.((file: any) => {
    console.log(`[Plugin] File saved: ${file?.name}`);
  });

  console.log(`✓ [Plugin] ${context.name} initialized successfully.`);
}

// Auto-run when injected by Config Studio plugin runtime
if (typeof window !== 'undefined') {
  initializePlugin({
    id: 'my-plugin',
    name: 'My Custom Plugin',
    version: '1.0.0',
  });
}
