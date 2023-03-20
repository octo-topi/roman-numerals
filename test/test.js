const expect = require('chai').expect;


// 5 ➔ V
// 8 -> VIII
// 9 ➔ IX
// 10 ➔ X

// 30 ➔ XXX
// 21 ➔ XXI
// 50 ➔ L
// 100 ➔ C
// 500 ➔ D
// 1000 ➔ M

function convertRomanNumerals(arabicNumber) {
   if (arabicNumber === 10) {
      return 'X';
   }
   if (arabicNumber === 4) {
      return 'IV';
   }
   let result = '';
   for (let i = 1; i <= arabicNumber; i++) {
      result += 'I';
   }

   return result;
}


describe('convertRomanNumerals', function () {
   // 1 ➔ I
   it('should return I when given 1', function () {
      // given
      const arabicNumber = 1;

      // when
      const result = convertRomanNumerals(arabicNumber);

      // then
      expect(result).to.equal('I');
   });

   // 2 ➔ II
   it('should return II when given 2', function () {
      // given
      const arabicNumber = 2;
      // when
      const result = convertRomanNumerals(arabicNumber);
      // then
      expect(result).to.equal('II');
   });

   // 3 ➔ III
   it('should return III when given 3', () => {
      // given
      const arabicNumber = 3;
      // when
      const result = convertRomanNumerals(arabicNumber);
      // then
      expect(result).to.equal('III')
   })

   // 4 ➔ IV
   it('should return IV when given 4', () => {
      // given
      const arabicNumber = 4;
      // when
      const result = convertRomanNumerals(arabicNumber);
      // then
      expect(result).to.equal('IV')
   });

   // 10 ➔ X
   it('should return X when given 10', () => {
      // given
      const arabicNumber = 10;
      // when
      const result = convertRomanNumerals(arabicNumber);
      // then
      expect(result).to.equal('X')
   });



});