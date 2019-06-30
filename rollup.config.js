require = require('esm')(module)
import resolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace'
import builtins__plugin from 'rollup-plugin-node-builtins'
import globals__plugin from 'rollup-plugin-node-globals'
import commonjs from 'rollup-plugin-commonjs'
import svelte from 'rollup-plugin-svelte'
import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'
const { clone } = require('@ctx-core/object')
const { reject } = require('@ctx-core/array')
const { _preprocess } = require('@ctx-core/svelte/preprocess')
const { _preprocess__sass } = require('@ctx-core/sass/svelte')
const { _preprocess__svg } = require('@ctx-core/svg/svelte')
const { _preprocess__markdown } = require('@ctx-core/markdown/svelte')
import config from 'sapper/config/rollup'
import pkg from './package.json'
const mode = process.env.NODE_ENV
const dev = mode === 'development'
const legacy = !!process.env.SAPPER_LEGACY_BUILD
const __replace = {
	'process.env.NODE_ENV': JSON.stringify(mode),
	'process.env.ROOT__PATH': JSON.stringify('/'),
}
const extensions__svelte = ['.svelte', '.html', '.md']
const preprocess__sass = _preprocess__sass()
const preprocess__markdown = _preprocess__markdown({
	extension: '.md',
})
const preprocess__svg = _preprocess__svg()
const preprocess = _preprocess([
	preprocess__sass,
	preprocess__markdown,
	preprocess__svg,
])
const onwarn = (warning, onwarn) => (warning.code === 'CIRCULAR_DEPENDENCY' && /[/\\]@sapper[/\\]/.test(warning.message)) || onwarn(warning)
export default {
	client: {
		input: config.client.input(),
		output: config.client.output(),
		plugins: [
			replace__({
				'process.browser': true,
			}),
			svelte({
				dev,
				extensions: extensions__svelte,
				hydratable: true,
				emitCss: true,
				preprocess,
			}),
			globals__plugin(),
			builtins__plugin(),
			resolve({
				browser: true
			}),
			commonjs(),
			legacy && babel({
				extensions: ['.js', '.mjs', '.html', '.svelte'],
				runtimeHelpers: true,
				exclude: ['node_modules/@babel/**'],
				presets: [
					['@babel/preset-env', {
						targets: '> 0.25%, not dead'
					}]
				],
				plugins: [
					'@babel/plugin-syntax-dynamic-import',
					['@babel/plugin-transform-runtime', {
						useESModules: true
					}]
				]
			}),
			!dev && terser({
				module: true
			})
		],

		onwarn,
	},
	server: {
		input: config.server.input(),
		output: config.server.output(),
		plugins: [
			replace__({
				'process.browser': false,
			}),
			svelte({
				generate: 'ssr',
				dev,
				extensions: extensions__svelte,
				preprocess,
			}),
			resolve(),
			commonjs()
		],
		external: reject(
			Object.keys(pkg.dependencies),
			path => /(@myproject\/dev|@ctx-core|@sapper)\/.*/.test(path)
		).concat(
			require('module').builtinModules || Object.keys(process.binding('natives'))
		),

		onwarn,
	},
	serviceworker: {
		input: config.serviceworker.input(),
		output: config.serviceworker.output(),
		plugins: [
			resolve(),
			replace__({
				'process.browser': true,
			}),
			commonjs(),
			!dev && terser()
		],
		onwarn,
	}
}
function replace__(params) {
	return replace(clone(__replace, params))
}
