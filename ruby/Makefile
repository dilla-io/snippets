build:
	@ docker build -t dilla-ruby-extism .

clean:
	@ docker rmi dilla-ruby-extism

render:
	@ docker run -it --rm -v "$$(pwd)":/app -w /app dilla-ruby-extism ruby render.rb

describe:
	@ docker run -it --rm -v "$$(pwd)":/app -w /app dilla-ruby-extism ruby describe.rb
