// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
console.log('створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)')

function minFunk(number1, number2, number3) {
    let maxNum;
    if (number1 < number2 && number1 < number3) {
        console.log('number1-' + number1 + ' is the least')
        maxNum = number1
    } else if (number2 < number1 && number2 < number3) {
        console.log('number2-' + number2 + ' is the least')
        maxNum = number2
    } else {
        console.log('number3-' + number3 + ' is the least')
        maxNum = number3
    }
    return maxNum
}
minFunk(1232, 344, 54)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
console.log('створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)')

function maxFunk(number1, number2, number3) {
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

// - створити функцію яка повертає найбільше число з масиву
console.log('створити функцію яка повертає найбільше число з масиву')

function MaxNumberOfMasiv(array) {
    let max = array[0];
    for (const element of array) {
        if(element > max){
            max = element;
        }
    }
    console.log(max+' max element')
    return max;
}
MaxNumberOfMasiv(createMasiv(10, 0))


// - створити функцію яка повертає найменьше число з масиву
console.log('створити функцію яка повертає найменьше число з масиву')

function MinNumberOfMasiv(array) {
    let min = array[0];
    for (const element of array) {
        if(element < min){
            min = element;
        }
    }
    console.log(min +' min element')
    return min;
}
MinNumberOfMasiv(createMasiv(10, 0))

// - створити функцію яка приймає масив чисел, сумує значення елементів
// масиву та повертає його. Приклад [1,2,10]->13
console.log('створити функцію яка приймає масив чисел, сумує значення елементів\n' +
    '// масиву та повертає його.')

function createMasiv(max, m) {
    let Array3 =  Array.from({length: 10}, () => Math.floor(Math.random()*max)-m)
    console.log(Array3+' --- masiv')
    return Array3
}
function sumElementOfMasiv(arr) {
    let sum = 0
    for (const arrElement of arr) {
        sum+=arrElement
    }
    console.log(sum)
    return sum
}
sumElementOfMasiv(createMasiv(12, 0))

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне
// його значень.
console.log('створити функцію яка приймає масив чисел та повертає середнє арифметичне\n' +
    '// його значень.')

function avarageElementOfMasiv(arr) {
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

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше,
// а виводить найбільше (Math використовувати заборонено);
console.log('створити функцію яка приймає будь-яку кількість чисел, повертає найменьше,\n' +
    '// а виводить найбільше (Math використовувати заборонено);')

// function minAndMaxElement(arg) {
//     let min = arguments[0];
//     let max = arguments[0];
//     for (const element of arguments) {
//         if (element > max) {
//             max = element;
//         }                                 //  Тут все для мене зрозуміло
//         if (element < min) {
//             min = element;
//         }
//     }
//     console.log( max +" -- max ");
//     return min;
// }
// minAndMaxElement(1, 2, 3)


let Masiv2 = []
Masiv2.push(createMasiv(12, 2))
console.log(Masiv2+' masiv2')

function returnMinOutputMax() {           // Функція чомусь адекватно не працює -
    MaxNumberOfMasiv(Masiv2)             //  замість мах повертає цілий масив
    return MinNumberOfMasiv(Masiv2)
}
returnMinOutputMax()




// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 -
// Math.round(Math.random()*100)) та виводить його.
// - створити функцію яка заповнює масив рандомними числами в діапазоні
// // від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
console.log('створити функцію яка заповнює масив рандомними числами')

createMasiv(100, 0)


// - Функція приймає масив та робить з нього новий масив в зворотньому
// порядку. [1,2,3] -> [3, 2, 1].
console.log(' Функція приймає масив та робить з нього новий масив в зворотньому\n' +
    '// порядку. [1,2,3] -> [3, 2, 1].')


function reverseMasiv(reverse_arr) {           // тут теж не працює(
    let reverse_arr2 = []
    for (let i = reverse_arr.length - 1, j = 0; i >= 0; i--, j++) {
        reverse_arr2[j] = reverse_arr2[i]
    }
    console.log(reverse_arr2+' ---- reversed masiv')
    return reverse_arr2
}
reverseMasiv([1, 2, 3])