const { type, name, port } = $arguments

const sub = /^1$|col/i.test(type) ? 'collection' : 'subscription'
const url = 'https://sub.store/download/${sub}/${name}?target=ClashMeta'

$content = $content.replace(`$url`, url)
$content = $content.replace(`$port`, port)