'use strict';

var expect = require("chai").expect;
const calculator = require("./../app/calculator");

describe('calculator - test', () => {
    describe('testing operations', () => {
        it('should test sum operation sucessfully', () => {
            expect(calculator.add(1,2)).to.equal(1+2)
        })

        it('should test minus operation sucessfully', () => {
            expect(calculator.minus(1,2)).to.equal(1-2)
        })

        it('should test multiply operation sucessfully', () => {
            expect(calculator.multiply(1,2)).to.equal(1*2)
        })

        it('should test divide operation sucessfully', () => {
            expect(calculator.divide(1,2)).to.equal(1/2)
        })

        it('should throw an error when divide operation by 0 divider', () => {
            const expectError = new Error("No puedo dividir por cero")
            expect(calculator.divide(1,0).message).to.equal(expectError.message)
        })
    })
})