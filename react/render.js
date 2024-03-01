const payload = {
  "@component": "alert",
  "@variant": "info",
  heading: "Hello Dilla from React!",
}

const path = 'https://data.dilla.io/bindgen/bootstrap_5/browser/bootstrap_5.js'

const Dilla = () => {
  const [rendered, setDillaRender] = React.useState('')
  const [dillaIsRendered, setDillaIsRendered] = React.useState(null)
  const renderedHTML = React.useRef(null)

  React.useEffect(() => {
    import(path).then((dilla) => {
      dilla
        .default()
        .then(() => {
          const result = dilla.render(payload)
          setDillaRender(result.body + result.system_stylesheet + result.stylesheet)
        })
        .then(() => {
          setDillaIsRendered(true)
        })
    })
  }, [rendered])

  React.useEffect(() => {
    renderedHTML.current.innerHTML = rendered
  }, [renderedHTML, dillaIsRendered])

  return <div ref={renderedHTML} />
}

const root = ReactDOM.createRoot(document.getElementById('render'))
root.render(<Dilla />)
