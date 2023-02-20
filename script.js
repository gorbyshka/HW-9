// // 1

// let j = '';
// for (let i = 10; i < 21; i++) {
//     j = j + i + ',';
// }
// console.log(j);

// 2

// let a = '';
// for (let i = 10; i < 21; i++) {
//     a = a + i * i + ',';
// }
// console.log(a);

// 3

// let b = '';
// for (let i = 1; i < 11; i++) {
//     b = b + i * 7 + ',';
// }
// console.log(b);

// // 4

// let v = '';
// for (let i = 1; i < 16; i++) {
//     v = v + (i * (i + 1)) / 2 + ',';
// }
// console.log(v);

// 5

// let mult = 1;

// for (let i = 15; i <= 35; i++) {
//     mult = mult * i;
// }

// console.log(mult);

// 6

// for (let i = 1; i < 501; i++) {
//     j = (1 + i) / 2;
// }
// console.log(j);

// 7

// let k = 0;

// for (let i = 30; i < 81; i += 2) {
//     if (i >= 0) {
//         k += i
//     }
// }

// console.log(k);

// 8

// for (let i = 100; i < 201; i++) {
//     if (i % 3 == 0) {
//         console.log(i);
//     }
// }

// // 9

const num = 100;
const divisors = [];
let positive = [];

for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
        divisors.push(i);
        positive = divisors.filter((e) => e % 2 === 0);
    }
}

console.log('Все делители' + ': ' + divisors); // 9
console.log('Все парные делители' + ': ' + positive);
console.log('Количество парных делителей' + ': ' + positive.length); // 10
console.log('Сумма парных делителей' + ': ' + positive.reduce((a, b) => a + b)); // 11


// // // 12

// let one = '';
// let two = '';
// let three = '';
// let four = '';
// let five = '';
// let six = '';
// let seven = '';
// let eight = '';
// let nine = '';
// let ten = '';

// for (let i = 1; i < 11; i++) {
//     one = one + i * 1 + ',';
//     two = two + i * 2 + ',';
//     three = three + i * 3 + ',';
//     four = four + i * 4 + ',';
//     five = five + i * 5 + ',';
//     six = six + i * 6 + ',';
//     seven = seven + i * 7 + ',';
//     eight = eight + i * 8 + ',';
//     nine = nine + i * 9 + ',';
//     ten = ten + i * 10 + ',';
// }

// console.log(one);
// console.log(two);
// console.log(three);
// console.log(four);
// console.log(five);
// console.log(six);
// console.log(seven);
// console.log(eight);
// console.log(nine);
// console.log(ten);