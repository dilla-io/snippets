const artefact = 'component'
const id = 'card'

const path = "https://data.dilla.io/bindgen/bootstrap_5/browser/bootstrap_5_dev.js"

const Dilla = () => {
  const [rendered, setDillaRender] = React.useState("")
  const [dillaIsRendered, setDillaIsRendered] = React.useState(null)
  const renderedHTML = React.useRef(null)

  React.useEffect(() => {
    import(path).then((dilla) => {
      dilla
        .default()
        .then(() => {
          const result = JSON.parse(dilla.describe(artefact, id))
          setDillaRender(result)
        })
        .then(() => {
          setDillaIsRendered(true)
        })
    })
  }, [rendered])

  React.useEffect(() => {
    renderedHTML.current.innerHTML = JSON.stringify(rendered, null, 2)
  }, [renderedHTML, dillaIsRendered])

  return <pre ref={renderedHTML} />
}

const root = ReactDOM.createRoot(document.getElementById('describe'))
root.render(<Dilla />)