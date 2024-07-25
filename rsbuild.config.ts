import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSvgr } from '@rsbuild/plugin-svgr';

export default defineConfig({
  plugins: [pluginReact(), pluginSvgr()],
  html: {
    favicon: './src/assets/rocket.svg',
    title: 'React, Tailwind and RSBuild Boilerplate',
  },
});
