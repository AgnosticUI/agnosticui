import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';

import packageJson from './package.json';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  input: './src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
      globals: {
        react: 'React',
      },
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
      globals: {
        react: 'React',
      },
    },
    {
      file: packageJson.browser,
      format: 'umd',
      name: 'umdbundle',
      sourcemap: true,
      globals: {
        react: 'React',
      },
    },
  ],
  plugins: [
    peerDepsExternal(),
    postcss({
      minimize: true,
      modules: true,
      sourceMap: true,
      extract: true,
    }),
    resolve(),
    commonjs(),
    typescript({
      declaration: true,
    }),
    terser(),
  ],
  external: Object.keys(packageJson.peerDependencies || {}),
};
