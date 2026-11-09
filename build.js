const esbuild = require('esbuild');
const path = require('path');
const fs = require('fs');

async function build() {
  console.log('[Build] Building plugin bundle...');
  try {
    const entry = path.join(__dirname, 'src', 'index.ts');
    if (!fs.existsSync(entry)) {
      console.error(`[Build] Entry file not found: ${entry}`);
      process.exit(1);
    }

    await esbuild.build({
      entryPoints: [entry],
      bundle: true,
      outfile: path.join(__dirname, 'main.js'),
      format: 'iife',
      globalName: 'ConfigStudioCustomPlugin',
      target: ['es2020'],
      platform: 'browser',
      sourcemap: false,
    });
    console.log('[Build] Successfully generated main.js');
  } catch (err) {
    console.error('[Build] Build failed:', err);
    process.exit(1);
  }
}

build();
