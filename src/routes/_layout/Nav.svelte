<script>
	import { __path__sapper } from '@ctx-core/sapper/store'
	import { __path__home } from '../_store'
	import {
		__theme__invert,
		invert__theme,
		__class__theme__invert,
	} from '@ctx-core/theme/store'
	import Handle__Nav from '@ctx-core/nav/Handle__Nav.svelte'
	import Content__Nav from '@ctx-core/nav/Content__Nav.svelte'
	import Item__Nav from '@ctx-core/nav/Item__Nav.svelte'
	import FA_project_diagram_solid from '@ctx-core/font-awesome/ui/FA-project-diagram-solid.html'
	import FA_sun_solid from '@ctx-core/font-awesome/ui/FA-sun-solid.html'
	import FA_moon_regular from '@ctx-core/font-awesome/ui/FA-moon-regular.html'
</script>

<Handle__Nav class="Handle__Nav__Holochain"></Handle__Nav>
<div class="container__Content__Nav" class:path__home="{$__path__home}">
	<Content__Nav class="{$__class__theme__invert}">
		<Item__Nav
			href="/"
			class="container__logo {$__class__theme__invert}"
		>
			<FA_project_diagram_solid></FA_project_diagram_solid>
		</Item__Nav>
		<Item__Nav
			href="/blog"
			selected="{$__path__sapper.startsWith('/blog')}"
			class="child_nav {$__class__theme__invert}"
		>blog</Item__Nav>
		<Item__Nav
			href="/about"
			selected="{$__path__sapper.startsWith('/about')}"
			class="child_nav {$__class__theme__invert}"
		>about</Item__Nav>
		<div class="theme {$__class__theme__invert}">
			<a
				href="."
				on:click|preventDefault={invert__theme}
			><svelte:component
				this="{$__theme__invert ? FA_sun_solid : FA_moon_regular}"></svelte:component></a>
		</div>
	</Content__Nav>
</div>

<style type="text/scss" global>
	@import 'src/css/variables';
	@import '~@ctx-core/nav/lib';
	$width__wide: $width__max__tablet;
	@include Handle__Nav($width__wide: $width__wide);
	@include Content__Nav($width__wide: $width__wide);
	@include Content__Nav__selected__underline($background: $color__a);
	.container__Content__Nav {width: 100%;
	}
	.Content__Nav {
		.dialog {
			.container {
				.Item__Nav {
					&.theme__invert {
						&.selected {
							&::after {
								background: $color__a__invert;
							}
						}
					}
				}
			}
		}
	}
	@media(max-width: #{$width__wide}) {
		@include Content__Nav__selected__background(
			$background: $color__a
		);
		.Content__Nav {
			.dialog {
				.container {
					.Item__Nav {
						&.theme__invert {
							&.selected {
								background: invert($color__a__invert);
							}
						}
					}
				}
			}
		}
		@include Content__Nav__cancel__selected__underline();
	}
	@include Content__Nav__slide_from_right($width__wide: $width__wide);
	.Handle__Nav {
		fill: $color__layout;
		@media(max-width: #{$width__wide}) {
			position: absolute;
			top: 0.6rem;
			right: 0.4rem;
		}
	}
	.Content__Nav {
		&.theme__invert {
			@media(max-width: #{$width__wide}) {
				background-color: mix($color__layout__invert, $color__background__header__invert, 50%);
			}
		}
	}
	.Content__Nav {
		height: auto;
		z-index: 1;
		@media(max-width: #{$width__wide}) {
			width: 10rem;
			position: fixed;
			top: 0;
			height: 100vh;
			background-color: mix($color__layout, $color__background__header, 50%);
		}
		.dialog {
			.container {
				position: relative;
				display: flex;
				&.path__home {
					.child_nav {
						display: none;
						@media(max-width: #{$width__wide}) {
							display: block;
						}
					}
				}
				.Item__Nav {
					flex: 0;
					&.container__logo {
						margin-right: 1.5rem;
						@media(max-width: #{$width__wide}) {
							margin-right: 0;
						}
					}
					&.theme__invert {
						svg {
							fill: $color__header__invert;
						}
						a {
							color: $color__header__invert;
							&.selected {
								box-shadow: 0 2px 0 $color__a__mid__invert;
							}
						}
					}
					svg {
						height: 40px;
						width: 40px;
						fill: $color__header;
					}
					a {
						margin-right: 0.8rem;
						color: $color__header;
						fill: $color__header;
						&.theme__invert {
							color: $color__header__invert;
						}
						&.selected {
							box-shadow: 0 2px 0 $color__a__mid;
						}
					}
				}
				.theme {
					margin: auto 1rem 0 auto;
					@media(max-width: #{$width__wide}) {
						position: static;
						a {
							display: flex;
							align-items: center;
							justify-content: center;
						}
					}
					&.theme__invert {
						svg {
							fill: $color__header__invert;
						}
					}
					svg {
						height: 1.2rem;
						width: 1.2rem;
						fill: $color__header;
					}
				}
			}
		}
	}
</style>
