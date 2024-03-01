using System;
using System.IO;
using System.Threading.Tasks;
using Extism.Sdk;

public class Describe
{
    public static async Task Main(string[] args)
    {
        var request = "component::alert";

        var url = "https://data.dilla.io/extism/bootstrap_5/bootstrap_5_dev.wasm";
        var manifest = new Manifest(new UrlWasmSource(url));
        // Or local file
        // var path = "bootstrap_5_dev.wasm";
        // var manifest = new Manifest(new PathWasmSource(path));

        using var plugin = new Plugin(manifest, new HostFunction[] { }, withWasi: true);

        var result = plugin.Call("describe", request);

        Console.WriteLine(result);
    }
}
