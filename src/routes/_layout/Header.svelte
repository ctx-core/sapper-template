<script>
	import Nav from './Nav.svelte'
</script>

<header>
	<Nav></Nav>
</header>

<style type="text/scss">
	@import '../css/variables';
	header {
		height: 3rem;
		padding: 1rem 0;
		background: $color__background__header;
	}
	:global(._layout.invert) {
		header {
			background: $color__background__header__invert;
		}
	}
</style>
