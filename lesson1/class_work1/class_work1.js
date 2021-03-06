// 1. Створити масив з 10 чисел (можна використовувати Math.random
// Та Math.floor). Скласти результат цих чисел в змінній result.

let newList = [];
for (let i = 1; i<=10; i++) {
    newList.push(i);
}
const result = (previousValue, currentValue) => previousValue + currentValue;

console.log('Завдання 1а')
console.log(newList)
console.log(newList.reduce(result))


// 2 спосіб
let numList = Array.from({length: 10}, () => Math.floor(Math.random()*100));
let total = numList.reduce(function (a, b){
    return a+b;
});

console.log('Завдання 1б')
console.log(numList)
console.log(total)


// 2. Створити об'єкт book з наступними полями  - назва,
// кількість сторінок, жанр

let book = {
    name: 'Kobzar',
    quantity: 3,
    genre: 'Horror'
}

console.log('Завдання 2')
console.log(book)

//3. Створити об'єкт book з наступними полями  - назва, кількість сторінок,
// жанр, автори

let book2 = {
    name: 'Kobzar',
    quantity: 3,
    genre: 'Horror',
    author: 'Shevchenko'
}

console.log('Завдання 3')
console.log(book2)

//4. Створити масив об'єктів book з наступними полями  -
// назва, кількість сторінок, жанр, автори.
// Вивести кожну книгу як окремий об'єкт

let books = [
    book1 = {
        name: 'Kobzar',
        quantity: 3,
        genre: 'Horror',
        author: 'Shevchenko'
    },
    book2 = {
        name: 'Kobzar2',
        quantity: 3,
        genre: 'Horror',
        author: 'Shevchenko'
    },
    book3 = {
        name: 'Kobzar3',
        quantity: 3,
        genre: 'Horror',
        author: 'Shevchenko'
    },
    book4 = {
        name: 'Kobzar4',
        quantity: 3,
        genre: 'Horror',
        author: 'Shevchenko'
    }
]

console.log('Завдання 4')
books.forEach(function (item,index, array){
    console.log( index+1,item);
})

//5. Напишіть код, який вираховує площу прямокутника висотою 23см.
// (змінна height) та шириною 10см (змінна width).
//    Значення площі зберігати в змінній s.

let height = 23;
let width = 10;
const s = height*width;

console.log('Завдання 5')
console.log(s+'  cm2')


// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC)
// та діаметром основи 4м (dC),
// результат помістіть у змінну v.

let heightC = 10;
let dC  = 4;
// V=PI*r*r*heightC
let r = dC/2
const V = Math.PI*r*r*heightC;

console.log('Завдання 6')
console.log(V+'  cm3')

// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m
// (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати
// функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).

let n = 3;
let m = 4;
const k = Math.sqrt(n*n+m*m)

console.log('Завдання 7')
console.log(k+' cm')


