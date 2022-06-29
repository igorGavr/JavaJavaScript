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
const total = numList.reduce(function (a,b){
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

////////////////////////////////////////////////////
console.log('---JavaScript:\n' +
    'The Definitive\n' +
    'Guide\n' +
    'Master the World\'s Most-Used\n' +
    'Programming Language----')

// Логические операции объединяют или инвертируют булевские значения:
let j = 2, f = 3
let and = (j===2) && (f===3); // обидва вирази мають давати true
console.log(and) // => true

let pipe = (j===2) || (f===2); // якщо хоча б один вираз дає false то буде false
console.log(pipe)

let exclamation = !(j<f); // ! инвертирует булевское значение
console.log(exclamation)

//Мы также можем определять наш собственный метод.
let points = [
    {x: 0, y: 0},
    {x: 1, y: 1}
]
points.distance = function () {
    let el1 = this [0];
    let el2 = this [1];
    let t1 = el2.x-el1.x;
    let t2 = el2.y-el1.y;
    return Math.sqrt(t1*t1 + t2*t2)
}
console.log(points.distance());

function factorial(n) {
    let firstEl = 1
    while (n>1) {
        firstEl *= n;
        n--
    }
    return firstEl
}

console.log(factorial(12))


class Point {
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }
    distance() {
        return Math.sqrt(this._x*this._x + this._y*this._y)
    }
}
let point1 = new Point(1, 2)
console.log(point1.distance())
