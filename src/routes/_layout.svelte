<script context="module">
	export async function preload({ query, params }) {
		const response__version = await this.fetch('/version')
		const version__ = await response__version.text()
		const version = version__.trim()
		return {
			version,
		}
	}
</script>

<script>
	import { stores } from '@sapper/app'
	import { __page__sapper, __preloading__sapper, __session__sapper } from '@ctx-core/sapper/store'
	import { __VERSION } from '@ctx-core/env/store'
	import { _no__dom } from '@ctx-core/dom'
	import { _html__webfont__fout } from '@ctx-core/google/html'
	import { __class__layout, __prepend__footer } from '@myproject/layout/store'
	import { __theme__invert } from '@ctx-core/theme/store'
	import Header from '@myproject/layout/Header.svelte'
	import Footer from '@myproject/layout/Footer.svelte'
	export let segment
	export let version
	const { page, preloading, session } = stores()
	__VERSION.set(version)
	$: __page__sapper.set($page)
	$: __preloading__sapper.set($preloading)
	$: __session__sapper.set($session)
	$: $page, __prepend__footer.set('')
</script>

{#if _no__dom()}
{@html _html__webfont__fout({ families: ['Source Sans Pro'] })}
{/if}

<div
	{version}
	class="_layout {$__class__layout||''}"
	class:theme__invert="{$__theme__invert}"
>
	<Header></Header>

	<main class="content">
		<div class="content-wrap">
			<slot></slot>
		</div>
	</main>

	<Footer></Footer>
</div>

<style type="text/scss" global>
	@import '~@myproject/css/variables';
	* {
		box-sizing: border-box;
	}
	html {
		opacity: 0;
		&.wf-active {
			opacity: 1;
		}
	}
	body {
		font-family: 'Source Sans Pro', arial, sans-serif;
		font-size: 16px;
		line-height: 1.52;
		text-rendering: optimizeLegibility;
		-webkit-font-smoothing: antialiased;
	}
	._layout {
		position: relative;
		background-color: $color__layout;
		color: $color__text;
		min-height: 100vh;
		&.theme__invert {
			background-color: $color__layout__invert;
			color: $color__text__invert;
		}
		main {
			position: relative;
			display: flex;
			flex-direction: column;
			overflow: hidden;
			min-height: 600px;
			padding: 1rem 0;
			margin: $height__header auto 0;
			box-sizing: border-box;
			z-index: 0;
		}
	}
	a {
		text-decoration: none;
		color: $color__a;
	}
	._layout.theme__invert {
		a {
			color: $color__a__invert;
		}
	}
	.content-wrap {
		width: $width__centering;
		margin: 0 auto;
		padding: 0 1.5rem;
		@media (max-width: $width__centering) {
			width: 100%;
		}
	}
	h1, h2, h3, h4, h5, h6, p, body, a, img, blockquote, pre {
		margin: 0;
		padding: 0;
		border: 0;
	}
	h1 {
		font-size: 1.8em;
		margin-bottom: 1em;
	}
	h2 {
		font-size: 1.6em;
		font-weight: 400;
		line-height: 1.43;
	}
	h3 {
		font-style: italic;
		font-weight: 400;
		font-size: 1.4em;
		margin-top: 1.8em;
		margin-bottom: 0.8em;
	}
	.centering {
		margin: auto;
		width: $width__centering;
		@media (max-width: $width__centering) {
			width: 100%;
		}
	}
	blockquote {
		margin: 1.2em 3em;
		padding-left: 1em;
		font-style: italic;
	}
	hr {
		border: 0;
		border-top: 1px dashed #d2d2d2;
		height: 0;
		margin: 1.6em 0;
	}
	iframe {
		display: block;
		margin: 0 auto;
	}
	p, ul {
		margin-bottom: 1.52em;
	}
	a {
		&:hover {
			text-decoration: underline;
		}
	}
	img {
		width: 100%;
	}
	code {
		font-family: 'Anonymous Pro', monospace;
		display: block;
		padding: 1em;
		background: $color__background__code;
		color: $color__text;
		border-width: 1px;
		border-style: solid;
		&.lang-markdown {
			color: #424242;
			.header, .strong {
				font-weight: bold;
			}
			&.emphasis {
				font-style: italic;
			}
			.horizontal_rule, .link_label, .code, .header, .link_url {
				color: #555;
			}
			.blockquote, .bullet {
				color: #bbb;
			}
		}
	}
	._layout.theme__invert {
		code {
			background: $color__background__code__invert;
			color: $color__text__invert;
		}
	}
	.post {
		margin: 1em 0 2.5em;
	}
</style>
