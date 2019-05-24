<script>
	import Nav from './Nav.svelte'
</script>

<header>
	<Nav></Nav>
</header>

<style type="text/scss">
	@import '../css/variables';
	header {
		display: flex;
		flex-direction: row;
		align-items: center;
		height: 3rem;
		width: 100%;
		padding: 1rem 0;
		background: $color__background__header;
	}
	:global(._layout.invert) {
		header {
			background: $color__background__header__invert;
		}
	}
</style>
