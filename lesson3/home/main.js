

// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
//
let array = [1, 2, 3, 4, 5, 'sake', 'good', true, false]
console.log(array)
// -- Створити пустий масив. Наповнити його будь-якими значеннями
// звертаючись до конкретного індексу. Вивести в консоль
//
let array2 = []
array2[0] = 1
array2[1] = 2
array2[2] = 3
array2[3] = 4
array2[4] = true
console.log(array2)
//
// - За допомогою циклу for і document.write() вивести 10 блоків div
// c довільним текстом всередині
for (let i = 0; i < 10; i++) {
    document.write(`<div>good boy  </div>`)

}

// - За допомогою циклу for і document.write() вивести 10 блоків div
// c довільним текстом і індексом всередині

for (let i = 0; i < 10; i++) {
    document.write(`<div>good boy ${i} </div> `)

}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним
// текстом всередині.
let j = 0
while (j<20) {
    document.write(`<h1>good girl </h1>`)
    j++
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним
// текстом і індексом всередині.
//
let j2 = 0
while (j2<20) {
    document.write(`<h1>good girl ${j2}</h1>`)
    j2++
}
// - Створити масив з 10 числових елементів. Вивести в консоль всі його
// елементи в циклі.
let array3  = [1, 2, 3, 4, 5, 6, 67, 7, 78]
for (let i = 0; i < array3.length; i++) {
    const array3Element = array3[i];
    console.log(array3Element)
}
for (const number of array3) {
    console.log(number)
}
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його
// елементи в циклі.
let array4 = ['as', 'ads','as','adfs','asdt','asgddh','adhs','asdhs','dhas','ahds',]
for (const string of array4) {
    console.log(string)
}
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі
// його елементи в циклі.
let array5 = [1, 2, 3, 4, 5, 'sake', 'good',
               true, false, 1, 2, 3, 4, 5,
              'sake', 'good', true, false]
let k = 0
while (k!==array5.length) {
    console.log(array5[k])
    k++
}

console.log(array5)
// - Створити масив з 10 елементів числового, стірчкового і булевого типу.
// За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу.
// // За допомогою if та typeof вивести тільки числові елементи
// // - Створити масив з 10 елементів числового, стрічкового і булевого типу.
// // За допомогою if та typeof вивести тільки рядкові елементи
// //
let array6 = [4, 5, 'sake', 'good', true, false, 4, 5, 'sake', 'good', true, false]
for (const array6Element of array6) {
    if (typeof array6Element === "boolean") {
        console.log('булеве значення '+array6Element)
    }
    if (typeof array6Element === "number") {
        console.log('число '+array6Element)
    }
    if (typeof array6Element === "string") {
        console.log('строка '+array6Element)
    }
}

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами)
// через звернення до конкретних індексів. Вивести в консоль всі його елементи
// в циклі.
let item7 = []
item7[0] = 1
item7[1] = 2
item7[2] = 'sdf'
item7[3] = 4
item7[4] = true
item7[5] = 1
item7[6] = 2
item7[7] = 'sdf'
item7[8] = 4
item7[9] = false
for (const item7Element of item7) {
    console.log(item7Element)
}
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер
// кроку через console.log та document.write
let j3 = 0
while (j3<10) {
    document.write(`${j3}`)
    console.log(j3)
    j3++
}
for (let i = 0; i < 10; i++) {
    console.log(i)
    document.write(`${i}`)
}
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер
// кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер
// кроку через console.log та document.write
for (let i = 0; i < 10; i+=2) {
    console.log(i)
    document.write(`${i}`)
}
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через
// console.log + document.write
for (let i = 0; i < 100; i++) {
    if(i % 2 === 0){
        console.log('парні кроки : ' + i + ' ');
        document.write('парні кроки : ' + i + ' ');
    }

}
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки.
// через console.log + document.write
for (let i = 0; i < 100; i++) {
    if(i % 2 !== 0){
        console.log('непарні кроки : ' + i + ' ');
        document.write('непарні кроки : ' + i + ' ');
    }

}