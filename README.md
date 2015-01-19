# EA-HASH

EA-Hash is a NodeJS Library to generate the secret answer hash used to
authenticate in FIFA Ultimate Team.

[![npm version](https://badge.fury.io/js/ea-hash.svg)](http://badge.fury.io/js/ea-hash)
[![Build Status](https://travis-ci.org/legiao/ea-hash.svg?branch=master)](https://travis-ci.org/legiao/ea-hash)
[![Coverage Status](https://coveralls.io/repos/legiao/ea-hash/badge.svg?branch=master)](https://coveralls.io/r/legiao/ea-hash?branch=master)
[![Dependency Status](https://david-dm.org/legiao/ea-hash.svg)](https://david-dm.org/legiao/ea-hash)
[![devDependency Status](https://david-dm.org/legiao/ea-hash/dev-status.svg)](https://david-dm.org/legiao/ea-hash#info=devDependencies)


## Installation

```sh
$ npm install ea-hash --save
```


## Usage

```javascript
var eaHash = require('ea-hash')

var hash = eaHash('secret answer')

console.log(hash)
```


## Tests

To run the test suite, first install the dependencies, the run `npm test`:

```bash
$ npm install
$ npm test
```


## License

[The MIT License (MIT)](./LICENSE)
