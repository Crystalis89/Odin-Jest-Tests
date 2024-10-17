//Capitalize the first character of the input string.
function capitalize(string) {
    let newstring = string

    return newstring
}

//Reverses an input string.
function reverseString(string) {
    
}

//Takes number to add, subtract, divide, and multiply. Only needs to take two numbers for input.
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
function caesarCipher(params) {
    
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