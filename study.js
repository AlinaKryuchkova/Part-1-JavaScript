/*
const answer = [];
answer[0] = prompt('Сколько вам лет?', '');
answer[1] = prompt('Как вас зовут?', '');
answer[2] = prompt('Из какого вы города?', '');
*/
/*
const category = 'toy';
console.log('barby' + category);
*/

for(let i = 1; i < 7; i++) {
    console.log(i);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let i = 0;

while (i < numbers.length) {
  if (numbers[i] % 2 === 0) {
    i++;
    continue;
  }
  console.log(numbers[i]);
  i++;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let i = 0;
while (i < numbers.length) {
  if (numbers[i] === 5) {
    break;
  }
  console.log(numbers[i]);
  i++;
} 

for (let i = 0; i < 3; i++){
    console.log(i);
    for(let j = 0; j < 3; j++){
        console.log(j);
    }
}

let result = '';
const length = 7;

for(let i = 1; i < length; i++){
    for(let a = 0; a < i; a++){
        result +='*';
    }
    result += '\n';
}
console.log(result);

outerloop:
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(i, j);
    if (i === 1 && j === 1) {
      break outerloop;
    }
  }
}

let a = 5;
    while(a <= 10) {
    console.log(a);
    a++;
}

for(i = 2; i <= 10; i++){
  if(i % 2 !== 0){
      continue;
  }
  console.log(i);
}

for(i = 20; i >= 10; i--){
  if (i === 13){
      break;
  }
  console.log(i);
}  

for (let i = 2; i <= 16; i++) {
  if (i % 2 === 0) {
      continue;
  } else {
      console.log(i);
  }
}

/*let j = 2;
while(j <= 16) {
  if(j % 2 === 0){
    continue;
  } else{
    console.log(j);
    j++;
  }
}*/

let j = 2;
while(j <= 16) {
  if(j % 2 === 0){
    j++;
    continue;
  } else{
    console.log(j);
    j++;
  }
}
let j = 2;

while (j <= 16) {
  if (j % 2 !== 0) {
    console.log(j);
  }
  j++;
}
/*
for (let i = 5; i < 11; i++) {
  arrayOfNumbers[i - 5] = i;
}

console.log(arrayOfNumbers);
return arrayOfNumbers;*/


const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [];
  for(let i = 3; i <= arr.length; i++){
    
    result.push(arr[i]);
}

const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [];
for (let i = 0; i <= arr.length - 1; i++) {
  result[i] = arr[i];
}
console.log(result);
/*
const data = [5, 10, 'Shopping', 20, 'Homework'];
let newArr= [];

    for(i = 0; i <= data.length-1; i){
        if(typeof data[i] === 'number'){
            newArr[i] = data[i] * 2;
        } else  {
            newArr[i] = data[i] + '- done';
        }
        console.log(newArr);
    }
*/

const lines = 7;
let result = '';
for(let i = 1; i < lines; i++){  
  for(let a = 0; a < i; a +=2){   
      result +='*';             
  }
result += '\n';  
}

console.log(result);



const lines = 5;
let result = '';

for(let i = 1; i <= lines; i++){  
  for (let j = 1; j <= lines - i; j++) {
    result += ' ';
  }
  for(let a = 1; a < i*2; a++){   
    result +='*';             
  }
  result += '\n';  
}

console.log(result);

function showMessage() {
  console.log('Hello!');
}
showMessage();

function showMessage(text) {
  console.log(text);
}
showMessage('Hello!');

function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
const numbers = [1, 2, 3, 4, 5];
const result = sumArray(numbers);
console.log(result);


const usdCurr = 28;
const euroCurr = 30;
function convert(amount, curr) {
  console.log(curr * amount);
}
convert(500, usdCurr);
convert(500, euroCurr);

const usdCurr = 28;
const euroCurr = 30;
const discount = 0.9;

function convert(amount, curr) {
  return curr * amount;
}

function promotion(result) {
  console.log(result * discount);
}

const res = convert(500, usdCurr);
promotion(res);

function test() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
    if (i === 3) return
  }
  console.log('done');
}

test();

function sayHello(name) {
  return 'Привет! ${name} !';
  }
sayHello('Антон');

// Создайте функцию, которая будет принимать в себя 2 аргумента, оба числа. Первое число - это база, второе число - это сколько раз нужно будет повторить это число в прогрессии. (Смотри пример ниже). Функция должна возвращать строку (или число в особых случаях, о которых ниже), где эти числа идут по порядку, разделенные тремя дефисами "---". После последнего числа их не должно быть.

// Если второй аргумент не является числом, равен или меньше нуля - то возвращать просто первый аргумент. (Проверяем через оператор typeof)


function getMathResult(num, count) {
  let result = [];
  if (typeof count !== 'number' || count <= 0){
      return num
  }

  for( let i = 1; i <= count; i++){
    result.push(num * i);
}

return result.join("---")
}

console.log(getMathResult(5, 3)); //даст ответ 5---10---15



const str = 'start';
console.log(str.length);

const str = 'hello world';
console.log(str.slice(6));

const test = '123 gbc';
console.log(parseInt(test)); // 123

const test = '123.45 gbc';
console.log(parseFloat(test));