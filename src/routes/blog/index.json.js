import * as post_0 from './what-is-sapper.md'
import * as post_1 from './how-to-use-sapper.md'
import * as post_2 from './why-the-name.md'
import * as post_3 from './how-is-sapper-different-from-next.md'
import * as post_4 from './how-can-i-get-involved.md'
const posts = [post_0, post_1, post_2, post_3, post_4]
const contents = JSON.stringify(posts.map(post => {
	return {
		slug: post.slug,
		title: post.title,
	}
}))
export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	})
	const { query } = req
	res.end(contents)
}
