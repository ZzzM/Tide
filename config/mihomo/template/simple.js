const { type, name, port } = $arguments

const yaml = ProxyUtils.yaml.safeLoad($content ?? $files[0])

let proxies = await produceArtifact({
  name,
  type: /^1$|col/i.test(type) ? 'collection' : 'subscription',
  platform: 'ClashMeta',
  produceType: 'internal',
})

yaml.proxies.unshift(...proxies)

$content = ProxyUtils.yaml.safeDump(yaml)