const artefact = 'component'
const id = 'card'

const path = "https://data.dilla.io/bindgen/bootstrap_5/browser/bootstrap_5_dev.js"

const Dilla = () => {
  const [rendered, setDillaRender] = React.useState("")

  React.useEffect(() => {
    import(path).then((dilla) => {
      dilla.default()
        .then(() => {
          const result = JSON.parse(dilla.describe(artefact, id))
          setDillaRender(result)
        })
    })
  }, [rendered])

  return <pre>{JSON.stringify(rendered, null, 2)}</pre>
}

const root = ReactDOM.createRoot(document.getElementById('describe'))
root.render(<Dilla />)