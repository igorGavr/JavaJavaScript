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

let lengthEmpty = 'javascript is cool';
let upEmpty = lengthEmpty.toLocaleUpperCase();
console.log(upEmpty);

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

let str3 = 'Каждый охотник желает знать'
let delete_characters = (str, index) => {
    return str.substr(0, index)
}
document.writeln(delete_characters(str3, 7))



// функція яка повертає слово , що складається із зазначеної кількості символів

let deleteCharacters = (str, length) => {
    let arrayFromString = str.split(' ')
    console.log(arrayFromString)
    for (const arrayFromStringElement of arrayFromString) {
        if (arrayFromStringElement.length === 7) {
            console.log(arrayFromStringElement)
            document.writeln('---'+arrayFromStringElement)
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

let str4 = "HTML JavaScript PHP"
console.log(str4)

let insertDash = (str) => {
    let resOfSplitJoinUpper = str.split(' ').join('-').toUpperCase()
    document.writeln(resOfSplitJoinUpper)
    console.log(resOfSplitJoinUpper)
    return resOfSplitJoinUpper
}
insertDash(str4)

// - Напишіть функцію, яка приймає рядок як аргумент і
// перетворює регістр першого символу рядка з нижнього регістру у верхній.
console.log('апишіть функцію, яка приймає рядок як аргумент і\n' +
    '// перетворює регістр першого символу рядка з нижнього регістру у верхній.')


// let firstUp = (str) => {
//     if (!str) return str; // перевірка на те чи стрічка не пуста, а саме чи не пустий [0] індекс
//     return str[0].toUpperCase() + str.slice(1)
// };
// document.write(firstUp(' hello okten   '));  // коли ставлю пробіл перед першим словом,
// console.log(firstUp(' hello okten'));     // то перша буква не стає великою


let upperOfFirstSimbol = (str) => {   // це мій карявий варіант який  працює
    let up = str.trim()
    return up[0].toUpperCase() + up.slice(1)
}
console.log(upperOfFirstSimbol(' lol'))
document.writeln(upperOfFirstSimbol(' lol'))

// - Напишіть функцію capitalize(str), яка повертає рядок
// у якому кожне слово починається з великої літери.
console.log('Напишіть функцію capitalize(str), яка повертає рядок\n' +
    '// у якому кожне слово починається з великої літери.')

let capitalize = (str) => {
    return str.split(' ').map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
};
document.write(capitalize('okten i love U'));
console.log(capitalize('okten i love U'));