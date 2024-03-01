const payload = {
  '@component': 'alert',
  "@variant": "info",
  heading: 'Hello Dilla from JavaScript!',
}

const path = 'https://data.dilla.io/bindgen/bootstrap_5/browser/bootstrap_5.js'

const dilla = await import(path)
await dilla.default()

const result = dilla.render(payload)
document.getElementById('dilla').innerHTML = result.body + result.system_stylesheet + result.stylesheet
