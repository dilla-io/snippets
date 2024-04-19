FROM php:8.2-cli

RUN \
  apt-get update && apt-get install -y libffi-dev libzip-dev zip ; \
  docker-php-ext-configure ffi --with-ffi ; \
  docker-php-ext-install zip ffi ; \
  curl -fsSL https://github.com/extism/extism/releases/download/v1.2.0/libextism-x86_64-unknown-linux-gnu-v1.2.0.tar.gz -o libextism.tar.gz; \
  tar -xf libextism.tar.gz -C /usr/local/lib/

WORKDIR /app

COPY . ./

COPY --from=composer /usr/bin/composer /usr/bin/composer

ENV COMPOSER_ALLOW_SUPERUSER=1

# RUN \
#   composer install
