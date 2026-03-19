#!/usr/bin/env node
import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Garante que a porta 3000 está livre antes de iniciar
const vite = spawn('vite', ['--host', '0.0.0.0', '--port', '3000'], {
  stdio: 'inherit',
  cwd: dirname(__dirname),
  env: {
    ...process.env,
    VITE_HOST: '0.0.0.0',
    VITE_PORT: '3000',
  }
});

vite.on('error', (err) => {
  console.error('Erro ao iniciar Vite:', err);
  process.exit(1);
});

vite.on('exit', (code) => {
  process.exit(code || 0);
});

process.on('SIGINT', () => {
  vite.kill('SIGINT');
});

process.on('SIGTERM', () => {
  vite.kill('SIGTERM');
});
