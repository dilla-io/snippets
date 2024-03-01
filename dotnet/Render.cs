using System;
using System.IO;
using System.Threading.Tasks;
using Extism.Sdk;

public class Render
{
    public static async Task Main(string[] args)
    {
        var payload = "{\"@component\":\"alert\", \"@variant\":\"info\",\"heading\":\"Hello Dilla from .NET!\"}";

        var url = "https://data.dilla.io/extism/bootstrap_5/bootstrap_5.wasm";
        var manifest = new Manifest(new UrlWasmSource(url));
        // Or local file
        // var path = "bootstrap_5.wasm";
        // var manifest = new Manifest(new PathWasmSource(path));

        using var plugin = new Plugin(manifest, new HostFunction[] { }, withWasi: true);

        var result = plugin.Call("render", payload);

        Console.WriteLine(result);
    }
}
