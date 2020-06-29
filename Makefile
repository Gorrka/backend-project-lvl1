# Makefile


install-deps:
	npm ci
		
install: 
	npm install

brain-games: 
    node bin/brain-games.js

publish:
    npm publish --dry-run

lint:
	npx eslint .

install-deps:
	npm ci