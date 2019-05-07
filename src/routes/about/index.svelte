<script context="module">
	export async function preload({ query, params }) {
		const response = await this.fetch('/about/json')
		const json = await response.json()
		const { a1__name, a1__content__md } = json
		return {
			a1__name,
			a1__content__md
		}
	}
</script>

<script>
	import A__Edit from '../../layout/A__Edit.svelte'
	export let a1__name
	export let a1__content__md
</script>

{#each a1__content__md as content__md__dir, i}
	{@html content__md__dir.html}
	<A__Edit href="/about/_content/{a1__name[i]}.md"></A__Edit>
{/each}
