function listCreator2(size) {
    document.write(`<ul>`);
    for (let i = 0; i < size; i++) {
        document.write(`<li>item ${i + 1}</li>`);
    }
    document.write(`</ul>`);
}

function numberChecker(a, b) {
    return typeof a === 'number' && typeof b === 'number';
}

function calculator(action, a, b) {
    let result;
    if (action === '+' && numberChecker(a, b)) {
        result = a + b;
    } else if (action === '-' && numberChecker(a, b)) {
        result = a - b;
    }
    return result;
}
let calculatorResult1 = calculator('+', 10, 20); // 30

console.log(calculatorResult1);

// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function square(sideA, sideB) {
    return sideA*sideB
}
square(23, 43)
// - створити функцію яка обчислює та повертає площу кола з радіусом r
function squareOfcircle(radius) {
    return Math.PI*radius*radius
}
squareOfcircle(23)
// - створити функцію яка обчислює та повертає площу циліндру висотою h,
// та радіутом r
function squareOfcilinder(radius, height) {
    return 2*Math.PI*radius*radius + 2*Math.PI*radius*height
}
squareOfcilinder(12, 32)
// - створити функцію яка приймає масив та виводить кожен його елемент
let Array1 = [1, 2, 3, 4]
function iteratorOfArray(arr) {
    for (const item of arr) {
        console.log(item)
    }
}
iteratorOfArray(Array1)
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function paragraphCreator(p) {
    document.write(`<p>${p}</p>`)
}
paragraphCreator('qwe')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати
// через аргумент всім однаковий
function liCreator(a) {
    document.write('<ul>')
    document.write(`<li>${a}</li>`)
    document.write('</ul>');
}
liCreator('li')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати
// через аргумент всім однаковий. Кількість li визначається другим аргументом,
// який є числовим (тут використовувати цикл)
function liCreatorPlusCount(a, quantity) {
    document.write('<ul>')
    for (let i = 0; i < quantity; i++) {
        const element = a[i];
        document.write(`<li>${a}</li>`)
    }
    document.write('</ul>');
}
liCreatorPlusCount('li', 3)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список
let Array2 = [1, 2, true, false, 'we ','fdg']
function creatorListFromArray(arr) {
    document.write('<ul>')
    for (let i = 0; i < Array2.length; i++) {
        const alement = Array2[i];
        document.write(`<li>${alement}</li>`)
    }
    document.write('</ul>');
}
creatorListFromArray(Array2)
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,
// та виводить їх в документ. Для кожного об'єкту окремий блок.
let Array3 = [{id:1, name: 'Goodman', age:45}, {id:2, name: 'Pinkman', age:32},
              {id:3, name: 'Tynka', age:21}, {id:4, name: 'Irka_Shkirka', age:21}]
function OutputOfIdNameAge(arr) {
    for (const array3Element of Array3) {
        document.write(`<div>${array3Element.id}
                            ${array3Element.name}
                            ${array3Element.age}</div>`)
    }
}
OutputOfIdNameAge(Array3)