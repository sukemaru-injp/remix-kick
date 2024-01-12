import path from 'path'
import { defineConfig } from 'vitest/config'
import react from "@vitejs/plugin-react";
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

export default defineConfig({
  test: {
    globals: true,
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "app"),
    },
  },
  plugins: [vanillaExtractPlugin(), react()]
});
