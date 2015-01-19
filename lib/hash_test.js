(function() {
  'use strict'

  var expect = require('chai').expect
  var hash = require('./hash')

  describe('EA Hash', function() {

    it('Should build a valid hash for "   1   2   3   "', function() {

      // given
      var string = '   1   2   3   '
      var expectedResult = '795ded8d8abdad44889559cc13358602'

      // when
      var result = hash(string)

      // then
      expect(result).to.be.equal(expectedResult)

    })

    it('Should build a valid hash for "graham"', function() {

      // given
      var string = 'graham'
      var expectedResult = 'ed04e7de7106842af09a7c69bd72c4cc'

      // when
      var result = hash(string)

      // then
      expect(result).to.be.equal(expectedResult)

    })

    it('Should build a valid hash for "mike"', function() {

      // given
      var string = 'mike'
      var expectedResult = '9f9bde2cd83036ff6e9a8960304fe5aa'

      // when
      var result = hash(string)

      // then
      expect(result).to.be.equal(expectedResult)

    })

    it('Should build the same hash', function() {

      // given
      var string1 = '    123    45    '
      var string2 = '123 45'
      var expectedResult = '6e8f39f93a0c227e946d3d4609df363e'

      // when
      var result1 = hash(string1)
      var result2 = hash(string2)

      // then
      expect(result1).to.be.equal(expectedResult)
      expect(result2).to.be.equal(expectedResult)
    })

    it('Should clean white spaces', function() {

      // given
      var string = '    123    45    '
      var expectedResult = '6e8f39f93a0c227e946d3d4609df363e'

      // when
      var result = hash(string)

      // then
      expect(result).to.be.equal(expectedResult)

    })

    it('Should not accept empty string', function() {

      // given
      var string = ' '

      // when
      var result = function() { hash(string) }

      // then
      expect(result).to.throw(Error)

    })

  })
})()
