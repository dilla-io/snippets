build:
	@ docker run -it --rm -u node -v "$$(pwd)":/home/node/app -w /home/node/app node:alpine npm install

clean:
	@ docker rmi dilla-nodejs-extism

render:
	@ docker run -it --rm -v "$$(pwd)":/home/node/app -w /home/node/app node:alpine node --no-warnings render.js

describe:
	@ docker run -it --rm -v "$$(pwd)":/home/node/app -w /home/node/app node:alpine node --no-warnings describe.js
