build:
	@ docker build -t dilla-php-extism .
	@ docker run -it --rm -v "$$(pwd)":/app -w /app dilla-php-extism composer install

clean:
	@ docker rmi dilla-php-extism

render:
	@ docker run -it --rm -v "$$(pwd)":/app -w /app dilla-php-extism php render.php

describe:
	@ docker run -it --rm -v "$$(pwd)":/app -w /app dilla-php-extism php describe.php
