'use strict'

let input;
const numbers = [];
let total = 0;
// let message;
// let number;


do { 
     input = prompt('Введите число');
     if(input !== null) {
         numbers.push(Number(input));}
} while(input !== null);

// for( const number of numbers) {
//     total += number;
// }

for(let i = 0; i < numbers.length; i += 1) {
     total += numbers [i];
     console.log('numbers:', numbers[i]);
}

console.log(`Общая сумма чисел равна ${total}`);




