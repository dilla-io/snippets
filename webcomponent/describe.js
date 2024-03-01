const artefact = 'component'
const id = 'card'

const path = 'https://data.dilla.io/bindgen/bootstrap_5/browser/bootstrap_5_dev.js'

class Dilla extends HTMLElement {
  constructor() {
    super()
    this.shadow = this.attachShadow({
      mode: 'open',
    })
  }
  async connectedCallback() {
    const module = await import(path)
    await module.default()
    const result = JSON.parse(module.describe(artefact, id))
    this.shadow.innerHTML = JSON.stringify(result, null, 2)
  }
}

window.customElements.define('dilla-describer', Dilla)
