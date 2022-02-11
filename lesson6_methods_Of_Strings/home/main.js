// - Знайти та вивести довижину настипних стрінгових значень
// ['hello world', 'lorem ipsum', 'javascript is cool']
console.log('// - Знайти та вивести довижину настипних стрінгових значень')

arr = ['hello world', 'lorem ipsum', 'javascript is cool']
console.log(arr)
let lenght = (arr) => {
    for (const arrElement of arr) {
        console.log(arrElement.length)
    }
}
lenght(arr)

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log('// Перевести до великого регістру наступні стрінгові значення')

let toUpperCase = (arr) => {
    for (const arrElement of arr) {
        console.log(arrElement.toUpperCase())
    }
}
toUpperCase(arr)

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
console.log('// Перевести до нижнього регістру настипні стрінгові значення')

let toLowerCase = (arr) => {
    for (const arrElement of arr) {
        console.log(arrElement.toLowerCase())
    }
}
toLowerCase(arr)

// - Є "брудна" стрінга let str = ' dirty string   ' .
// Почистити її від зайвих пробілів.
console.log('// Є "брудна" стрінга  Почистити її від зайвих пробілів.')

let str = ' dirty string   '
console.log(str)
console.log(str.length+' lenght before')
let dirtyString = (str) => {
    console.log(str.trim() )
    console.log(str.trim().length+' lenght after')
}
dirtyString(str)

// - Напишіть функцію stringToarray(str), яка
// перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); //
// ['Каждый', 'охотник', 'желает', 'знать']
console.log('Напишіть функцію stringToarray(str), яка\n' +
    '// перетворює рядок на масив слів.')

let str2 = 'Каждый охотник желает знать'
let stringToArray = (str) => {
    let newArray = str.split(' ')
    console.log(newArray)
    document.writeln(newArray)
}
stringToArray(str2)

// - Напишіть функцію delete_characters(str, length),
// яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
console.log('Напишіть функцію delete_characters(str, length),\n' +
    '// яка повертає підрядок, що складається із зазначеної кількості символів.')

let str3 = 'Каждый охотник желает знать '
let deleteCharacters = (str, length) => {
    let newArray = str.split(' ')
    console.log(newArray)
    for (const newArrayElement of newArray) {
        if (newArrayElement.length === 7) {
            console.log(newArrayElement)
        }
    }
}
deleteCharacters(str3, 7)

// - Напишіть функцію insert_dash(str), яка приймає рядок str
// як аргумент і вставляє тире (-) між словами.
// При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
console.log('Напишіть функцію insert_dash(str), яка приймає рядок str\n' +
    '// як аргумент і вставляє тире (-) між словами.\n' +
    '// При цьому всі символи рядка необхідно перевести у верхній регістр.')

let insertDash = (str) => {

}
// - Напишіть функцію, яка приймає рядок як аргумент і
// перетворює регістр першого символу рядка з нижнього регістру у верхній.
//
//
//
// - Напишіть функцію capitalize(str), яка повертає рядок
// у якому кожне слово починається з великої літери.