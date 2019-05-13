<script>
	import { __path__sapper } from '@ctx-core/sapper/store'
	import { __path__home } from '../route/store'
	import {
		__theme__invert,
		invert__theme,
	} from '@ctx-core/theme/store'
	import Handle__Nav from '@ctx-core/nav/Handle__Nav.html'
	import Content__Nav from '@ctx-core/nav/Content__Nav.html'
	import Item__Nav from '@ctx-core/nav/Item__Nav.html'
	import {
		register__project_diagram,
		register__sun_solid,
		register__moon_regular,
	} from '@ctx-core/font-awesome'
	import Icon from '@ctx-core/font-awesome/Icon.html'
	register__project_diagram()
	register__sun_solid()
	register__moon_regular()
	$: about_selected = $__path__sapper.startsWith('/about')
</script>

<Handle__Nav class="Handle__Nav__Holochain"></Handle__Nav>
<div class="container__Content__Nav" class:path__home="{$__path__home}">
	<Content__Nav>
		<Item__Nav href="/" class="container__logo">
			<Icon name="project-diagram" alt="@briantakita-business"></Icon>
		</Item__Nav>
		<Item__Nav
			href="/about/"
			selected="{about_selected}"
			class="child_nav"
		>About</Item__Nav>
		<div class="theme">
			<a
				href="."
				on:click|preventDefault={invert__theme}
			><Icon name="{$__theme__invert ? 'sun-solid' : 'moon-regular'}"></Icon></a>
		</div>
	</Content__Nav>
</div>

<style type="text/scss">
	@import '~REPO__TODO/src/css/variables';
	@import '~@ctx-core/nav/lib';
	@include Handle__Nav($width__wide: $width__max__tablet);
	@include Content__Nav($width__wide: $width__max__tablet);
	@include Content__Nav__selected__underline($background: $color__a);
	:global(._layout.invert) {
		:global(.Content__Nav) {
			:global(.dialog) {
				:global(.container) {
					:global(.Item__Nav) {
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
	@media(max-width: #{$width__max__tablet}) {
		@include Content__Nav__selected__background(
			$background: mix($color__layout, $color__header, 10%)
		);
		:global(._layout.invert) {
			:global(.Content__Nav) {
				:global(.dialog) {
					:global(.container) {
						:global(.Item__Nav) {
							&.selected {
								background: invert(mix($color__layout, $color__header, 10%));
							}
						}
					}
				}
			}
		}
		@include Content__Nav__cancel__selected__underline();
	}
	@include Content__Nav__slide_from_right($width__wide: $width__max__tablet);
	:global(.Handle__Nav) {
		fill: $color__layout;
		@media(max-width: #{$width__max__tablet}) {
			position: absolute;
			top: 0.6rem;
			right: 0.4rem;
		}
	}
	:global(._layout.invert) {
		:global(.Content__Nav) {
			@media(max-width: #{$width__max__tablet}) {
				background-color: invert(mix($color__layout, $color__header, 50%));
			}
		}
	}
	:global(.Content__Nav) {
		height: auto;
		z-index: 1;
		@media(max-width: #{$width__max__tablet}) {
			width: 10rem;
			position: fixed;
			top: 0;
			height: 100vh;
			background-color: mix($color__layout, $color__header, 50%);
		}
		:global(.dialog) {
			:global(.container) {
				position: relative;
				display: flex;
				&.path__home {
					:global(.child_nav) {
						display: none;
						@media(max-width: #{$width__max__tablet}) {
							display: block;
						}
					}
				}
				:global(.Item__Nav) {
					flex: 0;
					&.container__logo {
						margin-right: 1.5rem;
					}
					:global(svg) {
						height: 40px;
						width: 40px;
						fill: $color__layout;
					}
					:global(a) {
						margin-right: 0.8rem;
						color: $color__layout;
						fill: $color__layout;
						&.selected {
							box-shadow: 0 2px 0 $color__a__mid;
						}
					}
				}
				:global(.theme) {
					position: absolute;
					right: 1rem;
					:global(svg) {
						height: 1.2rem;
						width: 1.2rem;
						fill: $color__layout;
					}
				}
			}
		}
	}
	:global(._layout.invert) {
		:global(.Content__Nav) {
			:global(.dialog) {
				:global(.container) {
					:global(.Item__Nav) {
						:global(svg) {
							fill: $color__layout__invert;
						}
					}
					:global(.theme) {
						:global(svg) {
							fill: $color__layout__invert;
						}
					}
				}
			}
		}
	}
	:global(._layout.invert) {
		:global(.Content__Nav.content-wrap) {
			:global(.dialog) {
				:global(.container) {
					:global(.Item__Nav) {
						:global(a) {
							fill: $color__layout__invert;
						}
					}
				}
			}
		}
	}
</style>
