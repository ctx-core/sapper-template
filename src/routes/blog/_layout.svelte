<script context="module">
export async function preload({ path }) {
	return { path }
}
</script>

<script>
import A__Edit from '@myproject/content/A__Edit.svelte'
export let segment
export let path
$: path__edit = path.endsWith('/blog') ? `${path}/index.md` : path
</script>

<slot></slot>
<A__Edit href="{path__edit}.md"></A__Edit>
