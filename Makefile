install: 
	npm ci

make lint:
	npx eslint .

make lint fix:
	npx eslint --fix .

make test:
	NODE_OPTIONS=--experimental-vm-modules npx jest