import extism
import json

payload = '{"@component": "alert", "@variant": "info", "heading": "Hello Dilla from Python!"}'

url = "https://data.dilla.io/extism/bootstrap_5/bootstrap_5.wasm"
manifest = {"wasm": [{"url": url}]}
# Or local file
# path = "bootstrap_5.wasm"
# manifest = {"wasm": [{"path": path}]}

with extism.Plugin(manifest, wasi=True) as plugin:
    result = plugin.call(
        "render",
        payload,
        parse = lambda output: json.loads(
          bytes(output).decode('utf-8')
        )
    )
    print(json.dumps(result, indent=2))
