require "extism"

request = 'component::alert'

url = "https://data.dilla.io/extism/bootstrap_5/bootstrap_5_dev.wasm"

manifest = Extism::Manifest.from_url url
plugin = Extism::Plugin.new(manifest)

result = plugin.call("describe", request)

print(result)