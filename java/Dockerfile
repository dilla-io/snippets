FROM debian:12-slim

RUN \
  apt-get update ; \
  apt-get install -y \
    openjdk-17-jdk \
    maven \
    curl \
    make \
    wget \
    sudo ; \
  wget https://github.com/extism/extism/releases/download/v1.0.3/libextism-x86_64-unknown-linux-gnu-v1.0.3.tar.gz ; \
  tar -xf libextism*.tar.gz -C /usr/lib/

WORKDIR /app

COPY . ./

RUN \
  make java-install

RUN \
  javac -source 17 -target 17 Render.java -d . ; \
  javac -source 17 -target 17 Describe.java -d .
