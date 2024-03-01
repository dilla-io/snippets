package main

import (
	"context"
	"fmt"
	"os"

	extism "github.com/extism/go-sdk"
)

func main() {
	payload := []byte(`{"@component":"alert", "@variant": "info", "heading": "Hello Dilla from Go!"}`)

	wasm := extism.WasmUrl{
		Url: "https://data.dilla.io/extism/bootstrap_5/bootstrap_5.wasm",
	}
	// Or local file
	// wasm := extism.WasmFile{
	//   Path: "bootstrap_5.wasm",
	// }

	manifest := extism.Manifest{
		AllowedPaths: map[string]string{
			"data": "/mnt",
		},
		Wasm: []extism.Wasm{
			wasm,
		},
	}

	ctx := context.Background()
	config := extism.PluginConfig{EnableWasi: true}
	plugin, err := extism.NewPlugin(ctx, manifest, config, []extism.HostFunction{})
	if err != nil {
		fmt.Printf("Failed to initialize plugin: %v\n", err)
		os.Exit(1)
	}

	exit, out, err := plugin.Call("render", payload)
	if err != nil {
		fmt.Println(err)
		os.Exit(int(exit))
	}

	fmt.Println(string(out))
}
