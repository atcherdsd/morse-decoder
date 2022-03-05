const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arrayExt = Array.from(expr);
    let matrix = [];
    let char = '';
    let result = '';
    
    for (let i = 0; i < arrayExt.length/10; i++) {
      matrix[i] = arrayExt.slice((i*10), (i*10) + 10);
    }
    
    for (let k = 0; k < matrix.length; k++) {
  
      if (matrix[k][0] === '*')
        result += ' ';
  
      else {
        for (let j = 0; j < matrix[k].length; j++) {
          if ((matrix[k][j] + matrix[k][j + 1]) === '10') {
            char += '.';
            j++;
          } else if ((matrix[k][j] + matrix[k][j + 1]) === '11') {
            char += '-';
            j++;
          }
        }
        result += MORSE_TABLE[char];
        char = '';
      }
    }
    return result;
}

module.exports = {
    decode
}