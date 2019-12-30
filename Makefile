install:
	npm install

calc:
	npx babel-node src/bin/calc.js

even:
	npx babel-node src/bin/even.js

prime:
	npx babel-node src/bin/prime.js

progression:
	npx babel-node src/bin/progression.js

gcd:
	npx babel-node src/bin/gcd.js

publish:
	npm publish --dry-run | npm link

lint:
	npx eslint .