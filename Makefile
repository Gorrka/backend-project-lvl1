# Makefile


install: install-deps

brain-calc:
	npx bin/brain-calc.js

brain-even:
	npx bin/brain-even.js

brain-prime:
	npx bin/brain-prime.js

brain-gcd:
	npx bin/brain-gcd.js

brain-progression:
	npx bin/brain-progression.js

install-deps:
	npm ci

lint:
	npx eslint .

publish:
	npm publish --dry-run