// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його,
// якщо два аргументи - складає або конкатенує їх між собою.
console.log('створити функцію, яка якщо приймає один аргумент, просто вивдоить його,\n' +
    '// якщо два аргументи - складає або конкатенує їх між собою.')

function arg1(...asd) {
    if (arguments.length>1) {
        res = 0
        for (const argument of arguments) {
            res +=argument
        }
        console.log(res)
    }else {
        console.log(arguments[0])
    }
}
arg1(1, 2, 3)

// - створити функцію  яка приймає два масиви та скаладає значення елементів
// з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
console.log('створити функцію  яка приймає два масиви та скаладає значення елементів\n' +
    '// з однаковими індексами  та повертає новий результуючий масив.')

let arr1 = [1, 2, 3, 4]
let arr2 = [2, 3, 4, 5]
let arr3 = []
function sumOfArrays(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        const arr1Element = arr1[i];
        arr3[i] = arr1[i]+arr2[i]
    }
    console.log(arr3)
    return arr3
}
sumOfArrays(arr1, arr2)

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив
// ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
console.log('Створити функцію яка приймає масив будь яких объектів, та повертає масив\n' +
    '// ключів всіх обєктів')

let arr = [{name: 'Dima', age: 13}, {model: 'Camry'}, {name2: 'Area', ag2: 143}, {model2: 'bmw'}]
function masivOfFilds(arr) {
    let newArr = []
    for (const arrElement of arr) {
        for (const arrElementKey in arrElement) {
            console.log(arrElementKey)
            newArr.push(arrElementKey)
        }
    }
    console.log(newArr)
}
masivOfFilds(arr)

//     - Створити функцію яка приймає масив будь яких объектів, та повертає
//     масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
console.log(' Створити функцію яка приймає масив будь яких объектів, та повертає\n' +
    '//     масив значень всіх обєктів')

// let arr = [{name: 'Dima', age: 13}, {model: 'Camry'}, {name2: 'Dima', ag2: 13}, {model2: 'Camry'}]
function masivOfKeys(arr) {
    let newArr2 = []
    for (const arrElement of arr) {
        for (const arrElementKey in arrElement) {
            console.log(arrElement[arrElementKey])
            newArr2.push(arrElement[arrElementKey])
        }
    }
    console.log(newArr2)
}
masivOfKeys(arr)
