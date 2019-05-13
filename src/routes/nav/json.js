import fs from 'fs'
import { promisify } from 'util'
import { map, filter } from '@ctx-core/array'
const readdir = promisify(fs.readdir)
const lstat = promisify(fs.lstat)
export async function get(req, res) {
	const a1__name = await readdir('src/routes/[...a1__segment]/_content')
	const a1__promise__stats =
		map(a1__name, name => lstat('src/routes/[...a1__segment]/_content'))
	const a1__stats = await Promise.all(a1__promise__stats)
	const a1__name__root__content =
		filter(a1__name, (name, i) => a1__stats[i].isDirectory())
	const a1__path__root__content =
		map(a1__name__root__content, name__root__content => `/${name__root__content}`)
	const headers = {
		'Content-Type': 'application/json',
	}
	if (process.env.NODE_ENV !== 'development') {
		headers['Cache-Control'] = `max-age=${5 * 60 * 1e3}` // 5 minutes
	}
	res.writeHead(200, headers)
	res.end(JSON.stringify({
		a1__name__root__content,
		a1__path__root__content,
	}))
}