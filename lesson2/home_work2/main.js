// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код,
// який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let number = Math.floor(Math.random()*59);
if (number<=15) {
    console.log('1')
}else if(number>15 && number<=30) {
    console.log('2')
}else if(number>30 && number<=45) {
    console.log('3')
}else {
    console.log('4')
}



//
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку 
// половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = Math.floor(Math.random()*31);
if (day<=10) {
    console.log('1')
}else if(day>10 && day<=20) {
    console.log('2')
}else {
    console.log('3')
}


// - У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 
// 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два 
//     варіанти скрипта - з коротким записом(тернаркою)

let test = true
if (test===true) {
    console.log('you are right')
}
let test2 = false;
if (test2 === false){
    console.log('you are wrong')
}

let test3 = confirm('true ?') ? console.log('Вірно') : console.log('Неправильно');

switch (test) {
    case 'true':
        console.log('Вірно')
        break
    case 'false':
        console.log('Неправильно')
}

//
// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
// Перевірте  скрипт при a, що дорівнює 1, 0, -3
//
let a = 0;
a = 1;
if (a!==0){
    console.log('Вірно')
}else {
    console.log('Неправильно')
}
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий 
// номер дня тижня і на екрані відображається інфа що заплановано на цей день.
//
let dayX = +prompt('Enter number of day')
switch (dayX) {
    case '1':
        console.log('support or defend someone')
        break
    case '2':
        console.log('stop working, especially when referring to machines')
        break
    case '3':
        console.log('contact multiple people')
        break
    case '4':
        console.log('relax after an energetic or irritated state')
        break
    case '5':
        console.log('verify a person or thing')
        break
    case '6':
        console.log('make someone happy, especially if they were previously sad')
        break
    case '7':
        console.log('change an opinion or see a new point of view')
        break
    default:
        console.log('Enter only numbers from 1 to 7')
}
// - Потрібнnо визначити Високосний рік чи ні. Високосні роки діляться націло на 4.
//
let quantityDays = +prompt('Enter quantity days of this year')
let leapYear = quantityDays%4
if (leapYear===false && quantityDays===366) {
    console.log('It is a leap year')
}else if (leapYear===365){
    console.log('It is a normal year')
}else {
    console.log('Enter quantity days of this year')
}


let leapYear2
if (confirm('this year has 365 days?')) {
    console.log('It is a normal year')
}else {
    console.log('It is a leap year')
}

// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме:
// „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», 
// інакше – відобразити: «Не знаєте? ECMAScript!

let question = prompt('Яка «офіційна» назва JavaScript?')
if (question==='ECMAScript'){
    console.log('Правильно!')
}else {
    console.log('Не знаєте? ECMAScript!')
}