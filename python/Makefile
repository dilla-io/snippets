build:
	@ docker build -t dilla-python-extism .

clean:
	@ docker rmi dilla-python-extism

render:
	@ docker run -it --rm -v "$$(pwd)":/app dilla-python-extism python render.py

describe:
	@ docker run -it --rm -v "$$(pwd)":/app dilla-python-extism python describe.py
