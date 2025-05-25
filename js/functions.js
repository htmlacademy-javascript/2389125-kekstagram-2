// Функции для проверки длины строки.
// Первая функция.

function checkStringLength(string, maxLength) {
  if (string.length <= maxLength) {
    return true;
  }
  return false;
}
console.log(checkStringLength('Массив', 5));

// Вторая функция (стрелочная).

const checkLength = (string = '', maxLength = 1) => string.length <= maxLength;
console.log(checkLength('Функционал', 10));

// Функции для проверки. Является ли строка палиндромом?
// Первая функция

const isPalindrom = (string = '') => {
  string = string.replaceAll(' ', '').toLowerCase();
  let reverseString = '';
  for (let i = string.length - 1; i >= 0; i--) {
    reverseString += string[i];
  }
  return string === reverseString;
};
console.log(isPalindrom('Лилипут сома на мосту пилил'));

// Вторая функция

const checkPalindrom = (string = '') => {
  const normalString = string.replaceAll(' ', '').toUpperCase();
  const reverseString = normalString.split('').reverse().join('');
  return reverseString === normalString;
};
console.log(checkPalindrom('Лилипут сома на мосту пилил'));


