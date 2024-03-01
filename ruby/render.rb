require "extism"

payload = '{"@component": "alert", "@variant": "info", "heading": "Hello Dilla from Ruby!"}'

url = "https://data.dilla.io/extism/bootstrap_5/bootstrap_5.wasm"
# url = "https://github.com/extism/plugins/releases/latest/download/count_vowels.wasm"

manifest = Extism::Manifest.from_url url
plugin = Extism::Plugin.new(manifest)

# result = plugin.call("count_vowels", payload)
result = plugin.call("render", payload)

print(result)