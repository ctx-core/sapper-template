<script>
	import Nav from './Nav.svelte'
</script>

<header>
	<Nav></Nav>
</header>

<style type="text/scss">
	@import 'src/css/variables';
	header {
		position: fixed;
		display: flex;
		top: 0;
		left: 0;
		flex-direction: row;
		align-items: center;
		height: $height__header;
		width: 100%;
		padding: 1rem 0;
		background: $color__background__header;
		z-index: 1;
	}
	:global(._layout.invert) {
		header {
			background: $color__background__header__invert;
		}
	}
</style>
