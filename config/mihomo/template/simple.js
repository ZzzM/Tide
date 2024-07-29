const { type, name, port } = $arguments



const platform = 'ClashMeta'

const proxies = await produceArtifact({
    name,
    type: /^1$|col/i.test(type) ? 'collection' : 'subscription',
    platform: platform,
    produceType: 'internal'
})

$content = $content.replace(`$port`, port)
$content = ProxyUtils.produce(proxies, platform) + '\n\n' + $content