import { describe, it } from 'node:test';
import assert from 'node:assert';
import { initializePlugin } from '../src/index';

describe('Custom Plugin Test Suite', () => {
  it('should initialize cleanly without throwing errors', () => {
    assert.doesNotThrow(() => {
      initializePlugin({
        id: 'test-plugin',
        name: 'Test Plugin',
        version: '1.0.0',
      });
    });
  });

  it('should register toolbar button when ConfigStudio API is mocked', () => {
    let registeredBtn: any = null;
    (globalThis as any).ConfigStudio = {
      registerToolbarButton: (btn: any) => {
        registeredBtn = btn;
      },
    };

    initializePlugin({
      id: 'mock-plugin',
      name: 'Mock Plugin',
      version: '1.0.0',
    });

    assert.ok(registeredBtn);
    assert.strictEqual(registeredBtn.id, 'mock-plugin-action');
    assert.strictEqual(registeredBtn.pluginId, 'mock-plugin');
  });
});
