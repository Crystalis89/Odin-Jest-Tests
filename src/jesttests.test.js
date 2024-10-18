// import { sum } from './scripts';
const tests = require('./scripts');


// npm run watch

// A capitalize function that takes a string and returns it with the first character capitalized. --complete


test('Capitalize', () => {

    expect(tests.capitalize('test')).toBe('Test')
    expect(tests.capitalize('Test2')).toBe('Test2')


})


// // A reverseString function that takes a string and returns it reversed. -- Passed
test('reverseString', () => {

    expect(tests.reverseString('test')).toBe('tset')
    expect(tests.reverseString('supercalifragilisticexpialidocious')).toBe('suoicodilaipxecitsiligarfilacrepus')
    expect(tests.reverseString('apple')).toBe('elppa')
    expect(tests.reverseString('test test')).toBe('tset tset')


})




// A calculator object that contains functions for the basic operations: add, subtract, divide, and multiply. Each of these functions should take two numbers and return the correct calculation. -- Passed


test('Calculator', () => {

    expect(tests.calculator(2,2, '+')).toBe(4)
    expect(tests.calculator(2,2, '-')).toBe(0)
    expect(tests.calculator(2,2, '*')).toBe(4)
    expect(tests.calculator(2,2, '/')).toBe(1)
    expect(tests.calculator(2,2, '+-')).toBe('Invalid input please try again.')



})


//Takes a string and a shift factor then returns each character shifted that many forward, like 3 forward turns H to K and Z becomes C. Remember to retain same capitalization and puncutation. --Complete



test('caesarCipher', () => {

    expect(tests.caesarCipher('Test', 3)).toBe('Whvw')
    expect(tests.caesarCipher('zoo', 4)).toBe('dss')
    expect(tests.caesarCipher('apple', 10)).toBe('kzzvo')
    expect(tests.caesarCipher('test test', 6)).toBe('zkyz zkyz')
    expect(tests.caesarCipher('Apple Test', 5)).toBe('Fuuqj Yjxy')


})




// //Take array of numbers for input. Output an object with their average, min, max, and array length. --Complete

test('analyzeArray', () => {

    expect(tests.analyzeArray([1,2,3,4,5])).toEqual({
        'average': 3,
        'min': 1,
        'max': 5,
        'length': 5
     })
    expect(tests.analyzeArray([5,4,3,2,1])).toEqual({
        'average': 3,
        'min': 1,
        'max': 5,
        'length': 5
     })
    expect(tests.analyzeArray([1,8,3,4,2,6])).toEqual({
        'average': 4,
        'min': 1,
        'max': 8,
        'length': 6
     })

    expect(tests.analyzeArray([8,9,4,7,1,9])).toEqual({
        'average': 6,
        'min': 1,
        'max': 9,
        'length': 6
     })


})

