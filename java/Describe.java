package io.dilla;

import java.nio.file.FileSystems;
import java.nio.file.Path;
import java.util.List;
import org.extism.sdk.manifest.Manifest;
import org.extism.sdk.Plugin;
import org.extism.sdk.wasm.UrlWasmSource;
import org.extism.sdk.wasm.WasmSourceResolver;

public class Describe {

  public static void main(String[] args) {

    var request = "component::card";

    var url = "https://data.dilla.io/extism/bootstrap_5/bootstrap_5_dev.wasm";
    var manifest = new Manifest(List.of(UrlWasmSource.fromUrl(url)));
    // Or local file
    // Path path = FileSystems.getDefault().getPath("./", "bootstrap_5_dev.wasm");
    // var src = new WasmSourceResolver().resolve(path);
    // var manifest = new Manifest(List.of(src));
  
    var plugin = new Plugin(manifest, true, null);

    var result = plugin.call("describe", "component::card");

    System.out.println(result);
  }

}
