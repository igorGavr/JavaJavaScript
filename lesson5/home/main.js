//
// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка обчислює та повертає
//     площу прямокутника висотою
console.log('створити функцію яка обчислює та повертає\n' +
    '//     площу прямокутника висотою')

let square = (sideA, sideB) => sideA*sideB
console.log(square(2, 34))

// - створити функцію яка обчислює та повертає площу
// кола
console.log('створити функцію яка обчислює та повертає площу\n' +
    '// кола')

let squareOfCircle = (radius) => Math.PI*radius*radius
console.log(squareOfCircle(3))

// - створити функцію яка обчислює та повертає площу
// циліндру
console.log('створити функцію яка обчислює та повертає площу\n' +
    '// циліндру')

let squareOfCilinder = (radius, height) => 2*Math.PI*radius*radius + 2*Math.PI*radius*height
console.log(squareOfCilinder(23, 3))

// - створити функцію яка приймає масив та виводить
// кожен його елемент
console.log('створити функцію яка приймає масив та виводить\n' +
    '// кожен його елемент')

let Array1 = [1, 2, 3, 4]
let arrayOutput = (arr) => {
    for (const arrElement of arr) {
        console.log(arrElement)
    }
}
arrayOutput(Array1)

// - створити функцію яка  створює параграф з текстом.
// Текст задати через аргумент
console.log('створити функцію яка  створює параграф з текстом.\n' +
    '// Текст задати через аргумент')

let paragraphCreator = (p) => {document.write(`<p>${p}</p>`)}
paragraphCreator('quq')

// - створити функцію яка  створює ul з трьома
// елементами li. Текст li задати
// через аргумент всім однаковий
console.log('створити функцію яка  створює ul з трьома\n' +
    '// елементами li. Текст li задати\n' +
    '// через аргумент всім однаковий')

let liCreator = (a) => {
    document.write('<ul>')
    document.write(`<li>${a}</li>`)
    document.write(`<li>${a}</li>`)
    document.write(`<li>${a}</li>`)
    document.write('</ul>');
}
liCreator('li')

// - створити функцію яка  створює ul з трьома
// елементами li. Текст li задати
// через аргумент всім однаковий. Кількість li
// визначається другим аргументом,
// який є числовим (тут використовувати цикл)
console.log('створити функцію яка  створює ul з трьома\n' +
    '// елементами li. Текст li задати\n' +
    '// через аргумент всім однаковий. Кількість li\n' +
    '// визначається другим аргументом,\n' +
    '// який є числовим (тут використовувати цикл)')

let liCreatorPlusCount = (a, quantity) => {
    document.write('<ul>')
    for (let i = 0; i < quantity; i++) {
        const element = a[i];
        document.write(`<li>${a}</li>`)
    }
    document.write('</ul>');
}
liCreatorPlusCount('li quantity', 3)

// - створити функцію яка приймає масив примітивних
// елементів (числа,стрінги,булеві)
// , та будує для них список
console.log('створити функцію яка приймає масив примітивних\n' +
    '// елементів (числа,стрінги,булеві)\n' +
    '// , та будує для них список')

let Array2 = [1, 2, true, false, 'we ','fdg']
let creatorListFromArray = (arr) => {
    document.write('<ul>')
    for (let i = 0; i < Array2.length; i++) {
        const alement = Array2[i];
        document.write(`<li>${alement}</li>`)
    }
    document.write('</ul>');
}
creatorListFromArray(Array2)

// - створити функцію яка приймає масив об'єктів з
// наступними полями id,name,age ,
// та виводить їх в документ. Для кожного об'єкту
// окремий блок.
console.log('створити функцію яка приймає масив об\'єктів з\n' +
    '// наступними полями id,name,age ,\n' +
    '// та виводить їх в документ. Для кожного об\'єкту\n' +
    '// окремий блок.')

let Array3 = [{id:1, name: 'Goodman', age:45}, {id:2, name: 'Pinkman', age:32},
    {id:3, name: 'Tynka', age:21}, {id:4, name: 'Irka_Shkirka', age:21}]
let OutputOfIdNameAge = (arr) => {
    for (const array3Element of Array3) {
        document.write(`<div>${array3Element.id}
                            ${array3Element.name}
                            ${array3Element.age}</div>`)
    }
}
OutputOfIdNameAge(Array3)