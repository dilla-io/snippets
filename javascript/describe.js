const artefact = 'component'
const id = 'card'

const path = 'https://data.dilla.io/bindgen/bootstrap_5/browser/bootstrap_5_dev.js'

const module = await import(path)
await module.default()

const result = JSON.parse(module.describe(artefact, id))
document.getElementById('dilla-describe').innerHTML = JSON.stringify(result, null, 2)
