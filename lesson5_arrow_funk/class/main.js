
// let foo = function () {
//     console.log('foobar');
// }


let foobar = () => {console.log('foobar');};
console.log(foobar)

let calcl = (a, b) => a + b;
console.log(calcl(10, 20));





(function (msg) {
    console.log(msg);
}('hello'));


function rec(i, limit) {
    i++;
    console.log(i);
    if (i > limit) {
        return;
    }
    rec(i, limit);
}
rec(-1, 9);


function calc(action, a, b) {
    return action(a, b)
}
calc((a, b) => a-b, 2, 1)
console.log(calc((a, b) => a-b, 2, 1))
// let aPlusB = calc(function (a, b) { return a+b}, 2, 2)
// console.log(aPlusB)





let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

// let filter = [];
//
// for (const user of users) {
//     if (user.age > 30) {
//         filter.push(user);
//     }
// }
//
// console.log(filter)

let filter = users.filter((user) => {
    return user.age > 30
});
console.log(filter);

console.log('----------------=========------------------------')
// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та
// виводить найменьше. (Без Math.min!)
console.log('створити функцію яка приймає три числа та\n' +
    '// виводить найменьше.')

let minFunk = (number1, number2, number3) => {
    let maxNum;
    if (number1 < number2 && number1 < number3) {
        console.log('number1 - ' + number1 + ' is the least')
        maxNum = number1
    } else if (number2 < number1 && number2 < number3) {
        console.log('number2 - ' + number2 + ' is the least')
        maxNum = number2
    } else {
        console.log('number3 - ' + number3 + ' is the least')
        maxNum = number3
    }
    return maxNum
}
minFunk(1232, 344, 54)

// - створити функцію яка приймає три числа та виводить
// найбільше. (Без Math.max!)
console.log('створити функцію яка приймає три числа та виводить\n' +
    '// найбільше.')

let maxFunk = (number1, number2, number3) => {
    if (number1>number2 && number1>number3) {
        console.log('number1-'+number1+' is the biggest')
        maxNum = number1
    }else if (number2>number1 && number2>number3){
        console.log('number2-'+number2+' is the biggest')
        maxNum = number2
    }else {
        console.log('number3-'+number3+' is the biggest')
        maxNum = number3
    }
    return maxNum
}
maxFunk(12, 344, 54)

// - створити функцію яка повертає найбільше число з
// масиву
console.log('створити функцію яка повертає найбільше число з масиву')
let createMasiv = (max, m) => {
    let Array3 =  Array.from({length: 10}, () => Math.floor(Math.random()*max)-m)
    console.log(Array3+' --- masiv')
    return Array3
}
let maxNumberOfMasiv = (array) => {
    let max = array[0];
    for (const element of array) {
        max = element > max ? max = element : max
        // if(element > max){                     //max = (el > max) ? el : max
        //     max = element;
        // }
    }
    console.log(max+' max element')
    return max;
}
maxNumberOfMasiv(createMasiv(10, 0))

// - створити функцію яка повертає найменьше число з
// масиву
console.log('створити функцію яка повертає найменьше число з масиву')


let minNumberOfMasiv = (array) => {
    let min = array[0];
    for (const element of array) {
        min = element < min ? min = element : min
        // if(element < min){
        //     min = element;
        // }
    }
    console.log(min +' min element')
    return min;
}
minNumberOfMasiv(createMasiv(10, 0))

// - створити функцію яка приймає масив чисел, сумує
// значення елементів масиву та повертає його.
//     Приклад [1,2,10]->13

let sumElementOfMasiv = (arr) => {
    let sum = 0
    for (const arrElement of arr) {
        sum+=arrElement
    }
    console.log(sum)
    return sum
}
sumElementOfMasiv(createMasiv(12, 0))

// - створити функцію яка приймає масив чисел та повертає
// середнє арифметичне його значень.
console.log('створити функцію яка приймає масив чисел та повертає середнє арифметичне\n' +
    '// його значень.')

let avarageElementOfMasiv = (arr) => {
    let sum = 0
    for (const arrElement of arr) {
        sum+=arrElement
    }
    console.log(sum +' total')
    let avarageElement = sum/arr.length
    console.log(avarageElement+' avarage element')
    return sum , avarageElement
}
avarageElementOfMasiv(createMasiv(12, 3))

// - створити функцію яка приймає будь-яку кількість чисел,
//     повертає найменьше, а виводить найбільше (Math
// використовувати заборонено);
console.log('створити функцію яка приймає будь-яку кількість чисел, повертає найменьше,\n' +
    '// а виводить найбільше (Math використовувати заборонено);')

let minAndMaxElement = (...arg) => {
    let min = arg[0]
    let max = arg[0]
    for (const element of arg) {
        max = element > max ? max = element : max
        min = element < min ? min = element : min
        // if (element > max) {
        //     max = element
        // }                                 //  Тут все для мене зрозуміло
        // if (element < min) {
        //     min = element
        // }
    }
    console.log( max +" -- max ")
    return min
}
minAndMaxElement(1, 2, 3)

// - створити функцію яка заповнює масив рандомними
// числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100
// - Math.round(Math.random()*100)) та виводить його.
// - створити функцію яка заповнює масив рандомними
// числами в діапазоні від 0 до limit. limit - аргумент,
//     який характеризує кінцеве значення діапазону.
console.log('створити функцію яка заповнює масив рандомними\n' +
    '// числами')
let createMasiv2 = (quantity, max_limit, low_limit) => {
    let Array4 =  Array.from({length: quantity}, () => Math.floor(Math.random()*max_limit)-low_limit)
    console.log(Array4+' --- masiv')
    return Array4
}
createMasiv2(10, 10, 0)



// - Функція приймає масив та робить з нього новий масив
// в зворотньому порядку. [1,2,3] -> [3, 2, 1].
console.log(' Функція приймає масив та робить з нього новий масив в зворотньому\n' +
    '// порядку. [1,2,3] -> [3, 2, 1].')


let reverseMasiv = (reverse_arr) => {
    let reverse_arr2 = []
    for (let i = reverse_arr.length - 1, j = 0; i >= 0; i--, j++) {
        reverse_arr2[j] = reverse_arr[i]
    }
    console.log(reverse_arr2+' ---- reversed masiv')
    return reverse_arr2
}
reverseMasiv([1, 2, 3])
