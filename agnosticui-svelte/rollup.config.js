import svelte from 'rollup-plugin-svelte';
import postcss from 'rollup-plugin-postcss'
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

const name = pkg.name.replace('-', '');

export default {
	input: 'src/stories/index.js',
	output: [
		{ file: pkg.module, 'format': 'es' },
		{ file: pkg.main, 'format': 'umd', name },
    { file: pkg.main.replace('.js','.min.js'), format: 'iife', name, plugins: [terser()]}
	],
	plugins: [
		svelte(),
		resolve(),
    postcss({
      plugins: []
    })
	]
};
