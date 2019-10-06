<script context="module">
import { clone } from '@ctx-core/object'
import { join } from 'path'
export async function preload({ path, query, params }) {
	const response = await this.fetch(`${path}/md.json`)
	if (response.ok) {
		const md = await response.json()
		return clone(md, { path })
	} else {
		return this.error(response.statusCode, await response.text())
	}
}
</script>

<script>
import A__Edit from '@myproject/content/A__Edit.svelte'
export let path
export let a1__name = null
</script>

{#if a1__name}
	<table>
		{#each a1__name as name}
			<tr>
				<td><a href="{join('/', path, name)}">{name}</a></td>
				<td><A__Edit href="{join('/', path, name)}.md"></A__Edit></td>
			</tr>
		{/each}
	</table>
{/if}
