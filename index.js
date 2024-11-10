function capaitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function reverseString(string) {
  return string.split('').reverse().join('');
}

const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b
    };

    function caesarCipher(string, shift) {
        return string
          .split('')
          .map(char => {
            const code = char.charCodeAt(0);
            if (code >= 65 && code <= 90) {
              return String.fromCharCode(((code - 65 + shift) % 26) + 65);
            } else if (code >= 97 && code <= 122) {
              return String.fromCharCode(((code - 97 + shift) % 26) + 97);
            } else {
              return char;
            }
          })
          .join('');
      }

      function analyzeArray(array) {
        return {
          average: array.reduce((acc, cur) => acc + cur, 0) / array.length,
          min: Math.min(...array),
          max: Math.max(...array),
          length: array.length
        };
      }

      module.exports = {
        capaitalizeFirstLetter,
        reverseString,
        calculator,
        caesarCipher,
        analyzeArray,
    };