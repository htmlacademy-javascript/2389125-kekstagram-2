// Функция для проверки длины строки.

const checkLength = (string = '', maxLength = 1) => string.length <= maxLength;
console.log(checkLength('Функционал', 10));

// Функция для проверки. Является ли строка палиндромом?

const isPalindrome = (string = '') => {
  let reverseString = '';
  string = string.replaceAll(' ', '').toLowerCase();

  for (let i = string.length - 1; i >= 0; i--) {
    reverseString += string[i];
  }

  return string === reverseString;
};
console.log(isPalindrome('Лилипут сома на мосту пилил'));

// Функция извлечения цифр из переданной строки

const extractNumbers = (string = '') => {
  let result = '';

  for (let i = 0; i <= string.length - 1; i++) {
    if (Number.isNaN(parseInt(string[i], 10)) === false) {
      result += string[i];
    }
  }

  return result === '' ? NaN : Number(result);
};
console.log(extractNumbers('Мне 38'));
