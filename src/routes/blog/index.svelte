<script context="module">
	export async function preload({ params, query }) {
		const response = await this.fetch(`/blog.json`)
		const a1__post = await response.json()
		return { a1__post }
	}
</script>

<script>
	export let a1__post
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<h1>Recent posts</h1>

<ul>
	{#each a1__post||[] as post}
	<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
		<li><a rel='prefetch' href='blog/{post.slug}'>{post.title}</a></li>
	{/each}
</ul>

<style>
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}
</style>
