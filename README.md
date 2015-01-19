# EA-HASH

EA-Hash is a NodeJS Library to generate the secret answer hash used to
authenticate in FIFA Ultimate Team.

[![npm version](https://badge.fury.io/js/ea-hash.svg)](http://badge.fury.io/js/ea-hash)
[![Build Status](https://travis-ci.org/legiao/ea-hash.svg?branch=master)](https://travis-ci.org/legiao/ea-hash)
[![Coverage Status](https://coveralls.io/repos/legiao/ea-hash/badge.svg?branch=master)](https://coveralls.io/r/legiao/ea-hash?branch=master)

## Installation

```sh
npm install ea-hash --save
```


## Example

```javascript
var eaHash = require('ea-hash')
var myString = '12345'
var myResult = eaHash(myString)
```

## License

[The MIT License (MIT)](./LICENSE)
