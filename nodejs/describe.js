import createPlugin from '@extism/extism'

const request = 'component::card'

const path = 'https://data.dilla.io/extism/bootstrap_5/bootstrap_5_dev.wasm'
// Or local file
// const path = 'bootstrap_5_dev.wasm'

const plugin = await createPlugin(path, { useWasi: true })

let req = await plugin.call('describe', new TextEncoder().encode(request))

let result = new TextDecoder().decode(req.buffer)

console.log(JSON.parse(result))
