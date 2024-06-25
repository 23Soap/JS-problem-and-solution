"use strict";

const chai = window.chai;
const expect = chai.expect;

describe('_findNumOfDigits', () =>  {
    it('The functions determines that meets the fallowing requirements',  () => {
        expect(_findNumOfDigits(1000)).to.deep.equal(4)
        expect(_findNumOfDigits("abcd")).to.deep.equal(0)
        expect(_findNumOfDigits(12)).to.deep.equal(2)
        expect(_findNumOfDigits("COMP1235")).to.deep.equal(4)
        expect(_findNumOfDigits(0)).to.deep.equal(1)
        expect(_findNumOfDigits("C1O2M3P5")).to.deep.equal(4)
    })
})

describe('_surplus', () =>  {
    it('Return the original str argument',  () => {
        expect(_surplus("orange")).to.deep.equal("orange")
        expect(_surplus("pear")).to.deep.equal("pear")
        expect(_surplus("")).to.deep.equal("")
    })
})


describe('_strNumbers', () =>  {
    it('Deremines strings and numbers',  () => {
        expect(_strNumbers(["1a", "a", "2b", "b"])).to.deep.equal(["1a", "2b"])
    })
})

describe('_moveCapitalLetters', () =>  {
    it('Check the capital letters and put it at the beginning',  () => {
        expect(_moveCapitalLetters('hApPy')).to.deep.equal("APhpy")
        expect(_moveCapitalLetters('moveMENT')).to.deep.equal("MENTmove")
        expect(_moveCapitalLetters("shOrtCAKE")).to.deep.equal("OCAKEshrt")
    })
})

describe('_determineClassGrading', () =>  {
    it('Check the capital letters and put it at the beginning',  () => {
        expect(_determineClassGrading([50,51,80,45])).to.deep.equal([3,1,56.5])
        expect(_determineClassGrading([35,45,25,10,6,33])).to.deep.equal([0,6,25.7])
        expect(_determineClassGrading([80,90])).to.deep.equal([2,0,85.0])
    })
})

/***************************************************************************************
describe('yourFunctionName', () =>  {
    it('please enter your function description here',  () => {
        expect(yourFunctionName(parameters)).to.deep.equal(expected_result)
    })
})
 ***************************************************************************************/
// describe(_findNumOfDigits, () => {
//     it('Find the Number of Digits in an Argument', () => {
//         expect(_findNumOfDigits())
//     });
// });

