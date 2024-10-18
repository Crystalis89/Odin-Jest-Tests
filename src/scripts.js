//Capitalize the first character of the input string. -- complete
function capitalize(string) {
    let splitString = string.split("")
    let rejoined

        for (const letter of splitString) {
            if (letter === splitString[0] && rejoined === undefined) {
                rejoined = splitString[0].toUpperCase()
            } else {
                rejoined = `${rejoined}${letter}`
            }

        }


    return rejoined
}

//Reverses an input string. -- Complete
function reverseString(string) {
    let splitString = string.split("")
    let reversed


    for (const letter of splitString.reverse()) {

        if (reversed === undefined) {
            reversed = letter
            continue
        }
        reversed =`${reversed}${letter}`
        console.log(reversed)

    }
    return reversed

}

//Takes number to add, subtract, divide, and multiply. Only needs to take two numbers for input. --Complete
function calculator(numone, numtwo, operator) {
  let answer

  switch (operator) {
        case '+':
        answer = numone + numtwo    

        break;

        case '-':
            answer = numone - numtwo    

        break;

        case '*':
            answer = numone * numtwo    

        break;

        case  '/':
            answer = numone / numtwo    

        break;
  
    default:
        answer = 'Invalid input please try again.'
        break;
  }


    return answer
}

//Takes a string and a shift factor then returns each character shifted that many forward, like 3 forward turns H to K and Z becomes C. Remember to retain same capitalization and puncutation.  --Complete
function caesarCipher(string, offset) {

const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const splitString = string.split("")
let cipheredWord
let index 



// Get index of character in the alphabet and add the offset to it, check if character is capitalized, finally add the new letter to cipheredWord, capitalized if needed.

 for (const letter of splitString) {
    if (letter === ' ') {

        cipheredWord = `${cipheredWord}${' '}`       
         continue
    }

    index = alphabet.indexOf(letter.toLowerCase())

    if (index + offset > 25) {
        newletter =  alphabet[index + offset - 26]
    } else {
        newletter = alphabet[index + offset]
    }


    if (cipheredWord === undefined) {

        if (letter === letter.toUpperCase()) {
            cipheredWord = newletter.toUpperCase()
  
        } else {cipheredWord = newletter}

        continue
    }

    if (letter === letter.toUpperCase()) {
        cipheredWord = `${cipheredWord}${newletter.toUpperCase()}`
    } else { cipheredWord = `${cipheredWord}${newletter}`}

 }
return cipheredWord
    
}


//Take array of numbers for input. Output an object with their average, min, max, and array length. --Complete
function analyzeArray(array) {
    let analysis = {
        'average': null,
        'min': null,
        'max': null,
        'length': array.length
    }
    let average
    let min = array[0]
    let max = array[0]

    for (const number of array) {
        if (average === undefined) {
            average = number
            continue
        }

        average += number

        if (number < min) {
            min = number
        }

        if (number > max) {
            max = number
        }


    }

    analysis.average = Math.round(average / analysis.length)
    analysis.min = min
    analysis.max = max

    return analysis


}

  module.exports = {}
  module.exports.capitalize = capitalize;
  module.exports.reverseString = reverseString;
  module.exports.calculator = calculator;
  module.exports.caesarCipher = caesarCipher;
  module.exports.analyzeArray = analyzeArray;