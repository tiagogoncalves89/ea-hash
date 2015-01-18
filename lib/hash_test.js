(function() {
  'use strict'

  var expect = require('chai').expect
  var hash = require('./hash')

  describe('EA Hash', function() {

    it('Make hash"', function() {

      // given
      var string = '123 45'
      var expectedResult = '6e8f39f93a0c227e946d3d4609df363e'

      // when
      var result = hash(string)

      // then
      expect(result).to.be.equal(expectedResult)

    })

    it('Deve limpar os espaços da string', function() {

      // given
      var string = '    123    45    '
      var expectedResult = '6e8f39f93a0c227e946d3d4609df363e'

      // when
      var result = hash(string)

      // then
      expect(result).to.be.equal(expectedResult)

    })

    it('Não deve aceitar string vazia', function() {

      // given
      var string = ' '
      var expectedResult = '6e8f39f93a0c227e946d3d4609df363e'

      // when
      var result = function() { hash(string) }

      // then
      expect(result).to.throw(Error)

    })

  })
})()
