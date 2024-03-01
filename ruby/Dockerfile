FROM ruby:latest

RUN \
  apt-get update && apt-get install -y curl ; \
  curl -fsSL https://github.com/extism/extism/releases/download/v1.0.3/libextism-x86_64-unknown-linux-gnu-v1.0.3.tar.gz -o libextism.tar.gz ; \
  tar -xf libextism.tar.gz -C /usr/local/lib/

WORKDIR /app

COPY . ./

RUN gem install extism