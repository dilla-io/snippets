const path = 'https://data.dilla.io/bindgen/bootstrap_5/browser/bootstrap_5.js'

const payload = {
  "@component": "alert",
  "@variant": "info",
  heading: "Hello Dilla from JavaScript WebComponents!",
}

class Dilla extends HTMLElement {
  constructor() {
    super()
    this.shadow = document.createElement('iframe')
    this.shadow.style = 'border:none;height:100px;width:100%'
    this.appendChild(this.shadow)
  }
  async connectedCallback() {
    const module = await import(path)
    await module.default()
    let result = module.render(payload)
    this.shadow.contentWindow.document.head.innerHTML = result.system_stylesheet + result.stylesheet
    this.shadow.contentWindow.document.body.innerHTML = '<div class="container mt-4">' + result.body + '</div>'
  }
}

window.customElements.define('dilla-render', Dilla)
