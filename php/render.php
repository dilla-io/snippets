<?php

declare(strict_types=1);

require 'vendor/autoload.php';

use Extism\Plugin;
use Extism\Manifest;
use Extism\PathWasmSource;
use Extism\UrlWasmSource;

$payload = \json_encode([
  '@component' => 'alert',
  "@variant" => "info",
  'heading' => 'Hello from PHP!'
]);

$url = "https://data.dilla.io/extism/bootstrap_5/bootstrap_5.wasm";
$wasm = new UrlWasmSource($url);
// Or local file
// $path = "bootstrap_5.wasm";
// $wasm = new PathWasmSource($path);

$manifest = new Manifest($wasm);
$plugin = new Plugin($manifest, true);

$output = $plugin->call("render", $payload);

$result = json_encode(json_decode($output), JSON_PRETTY_PRINT);

print $result;