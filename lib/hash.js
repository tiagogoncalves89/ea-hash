(function() {
  'use strict'

  var r1Shifts = [7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22]
  var r2Shifts = [5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20]
  var r3Shifts = [4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23]
  var r4Shifts = [6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21]
  var hexCharacters = '0123456789abcdef'

  var calculateHash = function(input) {
    var chunks = chunkInput(input)

    var a =  1732584193
    var b = -271733879
    var c = -1732584194
    var d =  271733878
    for(var i = 0; i < chunks.length; i += 16)
    {
      var tempA = a
      var tempB = b
      var tempC = c
      var tempD = d
      a = ff(a, b, c, d, chunks[i+ 0], r1Shifts[0] , -680876936)
      d = ff(d, a, b, c, chunks[i+ 1], r1Shifts[1] , -389564586)
      c = ff(c, d, a, b, chunks[i+ 2], r1Shifts[2] ,  606105819)
      b = ff(b, c, d, a, chunks[i+ 3], r1Shifts[3] , -1044525330)
      a = ff(a, b, c, d, chunks[i+ 4], r1Shifts[4] , -176418897)
      d = ff(d, a, b, c, chunks[i+ 5], r1Shifts[5] ,  1200080426)
      c = ff(c, d, a, b, chunks[i+ 6], r1Shifts[6] , -1473231341)
      b = ff(b, c, d, a, chunks[i+ 7], r1Shifts[7] , -45705983)
      a = ff(a, b, c, d, chunks[i+ 8], r1Shifts[8] ,  1770035416)
      d = ff(d, a, b, c, chunks[i+ 9], r1Shifts[9] , -1958414417)
      c = ff(c, d, a, b, chunks[i+10], r1Shifts[10], -42063)
      b = ff(b, c, d, a, chunks[i+11], r1Shifts[11], -1990404162)
      a = ff(a, b, c, d, chunks[i+12], r1Shifts[12],  1804603682)
      d = ff(d, a, b, c, chunks[i+13], r1Shifts[13], -40341101)
      c = ff(c, d, a, b, chunks[i+14], r1Shifts[14], -1502002290)
      b = ff(b, c, d, a, chunks[i+15], r1Shifts[15],  1236535329)
      a = gg(a, b, c, d, chunks[i+ 1], r2Shifts[0] , -165796510)
      d = gg(d, a, b, c, chunks[i+ 6], r2Shifts[1] , -1069501632)
      c = gg(c, d, a, b, chunks[i+11], r2Shifts[2] ,  643717713)
      b = gg(b, c, d, a, chunks[i+ 0], r2Shifts[3] , -373897302)
      a = gg(a, b, c, d, chunks[i+ 5], r2Shifts[4] , -701558691)
      d = gg(d, a, b, c, chunks[i+10], r2Shifts[5] ,  38016083)
      c = gg(c, d, a, b, chunks[i+15], r2Shifts[6] , -660478335)
      b = gg(b, c, d, a, chunks[i+ 4], r2Shifts[7] , -405537848)
      a = gg(a, b, c, d, chunks[i+ 9], r2Shifts[8] ,  568446438)
      d = gg(d, a, b, c, chunks[i+14], r2Shifts[9] , -1019803690)
      c = gg(c, d, a, b, chunks[i+ 3], r2Shifts[10], -187363961)
      b = gg(b, c, d, a, chunks[i+ 8], r2Shifts[11],  1163531501)
      a = gg(a, b, c, d, chunks[i+13], r2Shifts[12], -1444681467)
      d = gg(d, a, b, c, chunks[i+ 2], r2Shifts[13], -51403784)
      c = gg(c, d, a, b, chunks[i+ 7], r2Shifts[14],  1735328473)
      b = gg(b, c, d, a, chunks[i+12], r2Shifts[15], -1926607734)

      a = hh(a, b, c, d, chunks[i+ 5], r3Shifts[0] , -378558)
      d = hh(d, a, b, c, chunks[i+ 8], r3Shifts[1] , -2022574463)
      c = hh(c, d, a, b, chunks[i+11], r2Shifts[2] ,  1839030562)
      b = hh(b, c, d, a, chunks[i+14], r3Shifts[3] , -35309556)
      a = hh(a, b, c, d, chunks[i+ 1], r3Shifts[4] , -1530992060)
      d = hh(d, a, b, c, chunks[i+ 4], r3Shifts[5] ,  1272893353)
      c = hh(c, d, a, b, chunks[i+ 7], r3Shifts[6] , -155497632)
      b = hh(b, c, d, a, chunks[i+10], r3Shifts[7] , -1094730640)
      a = hh(a, b, c, d, chunks[i+13], r3Shifts[8] ,  681279174)
      d = hh(d, a, b, c, chunks[i+ 0], r3Shifts[9] , -358537222)
      c = hh(c, d, a, b, chunks[i+ 3], r3Shifts[10], -722521979)
      b = hh(b, c, d, a, chunks[i+ 6], r3Shifts[11],  76029189)
      a = hh(a, b, c, d, chunks[i+ 9], r3Shifts[12], -640364487)
      d = hh(d, a, b, c, chunks[i+12], r3Shifts[13], -421815835)
      c = hh(c, d, a, b, chunks[i+15], r3Shifts[14],  530742520)
      b = hh(b, c, d, a, chunks[i+ 2], r3Shifts[15], -995338651)
      a = ii(a, b, c, d, chunks[i+ 0], r4Shifts[0] , -198630844)
      d = ii(d, a, b, c, chunks[i+ 7], r4Shifts[1] ,  1126891415)
      c = ii(c, d, a, b, chunks[i+14], r4Shifts[2] , -1416354905)
      b = ii(b, c, d, a, chunks[i+ 5], r4Shifts[3] , -57434055)
      a = ii(a, b, c, d, chunks[i+12], r4Shifts[4] ,  1700485571)
      d = ii(d, a, b, c, chunks[i+ 3], r4Shifts[5] , -1894986606)
      c = ii(c, d, a, b, chunks[i+10], r4Shifts[6] , -1051523)
      b = ii(b, c, d, a, chunks[i+ 1], r4Shifts[7] , -2054922799)
      a = ii(a, b, c, d, chunks[i+ 8], r4Shifts[8] ,  1873313359)
      d = ii(d, a, b, c, chunks[i+15], r4Shifts[9] , -30611744)
      c = ii(c, d, a, b, chunks[i+ 6], r4Shifts[10], -1560198380)
      b = ii(b, c, d, a, chunks[i+13], r4Shifts[11],  1309151649)
      a = ii(a, b, c, d, chunks[i+ 4], r4Shifts[12], -145523070)
      d = ii(d, a, b, c, chunks[i+11], r4Shifts[13], -1120210379)
      c = ii(c, d, a, b, chunks[i+ 2], r4Shifts[14],  718787259)
      b = ii(b, c, d, a, chunks[i+ 9], r4Shifts[15], -343485551)
      b = ii(b, c, d, a, chunks[i+ 9], r4Shifts[15], -343485551)
      a = add(a, tempA)
      b = add(b, tempB)
      c = add(c, tempC)
      d = add(d, tempD)
    }

    return numberToHex(a) + numberToHex(b) + numberToHex(c) + numberToHex(d)
  }

  var numberToHex = function(number) {
    var result = ''
    var char1 = ''
    var char2 = ''

    for(var i = 0; i <= 3; i++)
    {
      char1 = (number >> (i * 8 + 4)) & 0x0F
      char2 = (number >> (i * 8)) & 0x0F
      result += hexCharacters.charAt(char1) + hexCharacters.charAt(char2)
    }

    return result
  }

  var chunkInput = function(input) {
    var numberOfBlocks = ((input.length + 8) >> 6) + 1
    var blocks = new Array(numberOfBlocks * 16)
    var i;

    for(i = 0; i < numberOfBlocks * 16; i++) {
      blocks[i] = 0
    }

    for(i = 0; i < input.length; i++) {
      blocks[i >> 2] |= input.charCodeAt(i) << ((i % 4) * 8)
    }

    blocks[i >> 2] |= 0x80 << ((i % 4) * 8)
    blocks[numberOfBlocks * 16 - 2] = input.length * 8

    return blocks
  }

  var add = function(x, y) {
    var lsw = (x & 0xFFFF) + (y & 0xFFFF)
    var msw = (x >> 16) + (y >> 16) + (lsw >> 16)
    return (msw << 16) | (lsw & 0xFFFF)
  }

  var bitwiseRotate = function(x, c) {
    return (x << c) | (x >>> (32 - c))
  }

  var cmn = function(q, a, b, x, s, t) {
    return add(bitwiseRotate(add(add(a, q), add(x, t)), s), b)
  }

  var ff = function(a, b, c, d, x, s, t) {
    return cmn((b & c) | ((~b) & d), a, b, x, s, t)
  }

  var gg = function(a, b, c, d, x, s, t) {
    return cmn((b & d) | (c & (~d)), a, b, x, s, t)
  }
  var hh = function(a, b, c, d, x, s, t) {
    return cmn(b ^ c ^ d, a, b, x, s, t)
  }
  var ii = function(a, b, c, d, x, s, t) {
    return cmn(c ^ (b | (~d)), a, b, x, s, t)
  }

  module.exports = function(dirtyString) {
    var cleanString = dirtyString.trim().replace(/\s+/g, ' ')
    if (cleanString === '') {
      throw new Error('Invalid string')
    }

    return calculateHash(cleanString)
  }

})()
