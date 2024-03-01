import extism
import json

request = "component::alert"

url = "https://data.dilla.io/extism/bootstrap_5/bootstrap_5_dev.wasm"
manifest = {"wasm": [{"url": url}]}
# Or local file
# path = "bootstrap_5_dev.wasm"
# manifest = {"wasm": [{"path": path}]}

with extism.Plugin(manifest, wasi=True) as plugin:
    result = plugin.call(
        "describe",
        request,
        parse = lambda output: json.loads(
            bytes(output).decode('utf-8')
        )
    )
    print(json.dumps(result, indent=2))
