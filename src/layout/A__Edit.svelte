<script>
	import { join } from 'path'
	import { __url__edit__source } from './store'
	export let href = ''
</script>

<a
	href="{$__url__edit__source}/packages/web/src/routes{join('', href)}"
	target="_blank"
><slot>edit</slot></a>