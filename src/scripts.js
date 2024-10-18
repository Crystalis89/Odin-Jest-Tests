//Capitalize the first character of the input string.
function capitalize(string) {
    let newstring = string

    return newstring
}

//Reverses an input string. -- Complete
function reverseString(string) {
    let splitString = string.split("")
    let reversed
    console.log(splitString)


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

//Takes a string and a shift factor then returns each character shifted that many forward, like 3 forward turns H to K and Z becomes C. Remember to retain same capitalization and puncutation.
function caesarCipher(string) {

const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
let splitString = string.split("")

    
}


//Take array of numbers for input. Output an object with their average, min, max, and array length.
function analyzeArray(params) {
    
}

  module.exports = {}
  module.exports.capitalize = capitalize;
  module.exports.reverseString = reverseString;
  module.exports.calculator = calculator;
  module.exports.caesarCipher = caesarCipher;
  module.exports.analyzeArray = analyzeArray;