import createPlugin from '@extism/extism'

const payload = {
  "@component": "alert",
  "@variant": "info",
  heading: "Hello Dilla from NodeJS!",
}

const path = 'https://data.dilla.io/extism/bootstrap_5/bootstrap_5.wasm'
// Or local file
// const path = 'bootstrap_5.wasm'

const plugin = await createPlugin(path, { useWasi: true })

let req = await plugin.call('render', new TextEncoder().encode(JSON.stringify(payload)))

let result = new TextDecoder().decode(req.buffer)

console.log(JSON.parse(result))
