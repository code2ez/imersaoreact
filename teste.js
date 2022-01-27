// const reg = new RegExp(
//   '/^(?=.*[@!#$%^&*()/\\])(?=.*[0-9])(?=.*[a-zA-Z])[@!#$%^&*()/\\a-zA-Z0-9]$/'
// );

// console.log(reg.test('agua'));

let regex = /[a-zA-Z0-9\u0080-\u009F]/;

// concatenar as strings abaixo com esta, para ter pelo menos 8 caracteres
let s = 'abc123$ABC';

// espaço (https://www.fileformat.info/info/unicode/char/0020/index.htm)
let space = ' ' + s;
console.log('senha: [' + space + ']');
console.log(regex.test(space)); // false

let teste2 = 'nao e a mamae';
console.log(teste2, regex.test(teste2));

teste2 = 'não é a mamãe - há - ü , ô , ))(*&)¨&%$%&$#¨$#@%$#!°■';
console.log(teste2, regex.test(teste2));

teste2 = 'não é a mamãe - há - NÃÂO';
console.log(teste2, regex.test(teste2));
