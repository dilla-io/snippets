<?php

declare(strict_types=1);

require 'vendor/autoload.php';

use Extism\Plugin;
use Extism\Manifest;
use Extism\PathWasmSource;
use Extism\UrlWasmSource;

$request = "component::card";

$url = "https://data.dilla.io/extism/bootstrap_5/bootstrap_5_dev.wasm";
$wasm = new UrlWasmSource($url);
// Or local file
// $path = "bootstrap_5_dev.wasm";
// $wasm = new PathWasmSource($path);

$manifest = new Manifest($wasm);
$plugin = new Plugin($manifest, true);

$result = $plugin->call("describe", $request);

print $result;