<script context="module">
	export async function preload({ path }) {
	  return { path }
	}
</script>

<script>
	import A__Edit from '../_content/A__Edit.svelte'
	export let path
</script>

<slot></slot>
<A__Edit href="{path}.md"></A__Edit>
