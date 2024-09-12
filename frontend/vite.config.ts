import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import * as path from 'path';
import { cwd } from 'process';

// From highest priority to lowest.
const envDirs = ['./', '../'];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = envDirs
    .map((dir) => loadEnv(mode, path.resolve(cwd(), dir), ''))
    .reduce((prev, curr) => ({ ...curr, ...prev }));

  return {
    plugins: [react()],
    define: {
      BACKEND_HOST: JSON.stringify(env['BACKEND_HOST']),
      BACKEND_PORT: JSON.stringify(env['BACKEND_PORT']),
    },
    server: {
      host: env['FRONTEND_HOST'],
      port: Number.parseInt(env['FRONTEND_PORT'], 10),
    },
  };
});
