package io.dilla;

import java.io.IOException;
import java.nio.file.FileSystems;
import java.nio.file.Path;
import java.util.List;
import org.extism.sdk.Plugin;
import org.extism.sdk.manifest.Manifest;
import org.extism.sdk.wasm.UrlWasmSource;
import org.extism.sdk.wasm.WasmSourceResolver;

public class Render {

  public static void main(String[] args) {

    var payload = "{\"@component\":\"alert\", \"@variant\": \"info\", \"heading\":\"Hello Dilla from JAVA!\"}";

    var url = "https://data.dilla.io/extism/bootstrap_5/bootstrap_5.wasm";
    var manifest = new Manifest(List.of(UrlWasmSource.fromUrl(url)));
    // Or local file
    // Path path = FileSystems.getDefault().getPath("./", "bootstrap_5.wasm");
    // var src = new WasmSourceResolver().resolve(path);
    // var manifest = new Manifest(List.of(src));

    var plugin = new Plugin(manifest, true, null);

    var result = plugin.call("render", payload.toString());

    System.out.println(result);
  }
}
