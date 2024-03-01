build:
	@ docker build --tag dilla-go-extism .

render:
	@ docker run -it --rm -w /app dilla-go-extism ./dilla-render

# Slower to run without build
render-run:
	@ docker run -it --rm -w /app -v "$$(pwd)":/app dilla-go-extism go run render.go

describe:
	@ docker run -it --rm -w /app dilla-go-extism ./dilla-describe

# Slower to run without build
describe-run:
	@ docker run -it --rm -w /app -v "$$(pwd)":/app dilla-go-extism go run describe.go

clean:
	@ docker rmi dilla-go-extism