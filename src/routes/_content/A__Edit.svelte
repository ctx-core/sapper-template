<script>
	import { join } from 'path'
	import { __url__edit__source } from './store'
	export let href = ''
</script>

<a
	href="{join($__url__edit__source, href)}"
	target="_blank"
><slot>edit</slot></a>
