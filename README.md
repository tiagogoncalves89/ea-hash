# EA-HASH

EA-Hash is a NodeJS Library to generate the secret answer hash used to
authenticate in FIFA Ultimate Team.

[![npm version](https://badge.fury.io/js/ea-hash.svg)](http://badge.fury.io/js/ea-hash)


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
