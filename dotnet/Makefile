build:
	@ docker build --tag dilla-dotnet-extism .

render:
	@ docker run -it --rm dilla-dotnet-extism ./render/dilla

describe:
	@ docker run -it --rm -w /app dilla-dotnet-extism ./describe/dilla

clean:
	@ docker rmi dilla-dotnet-extism