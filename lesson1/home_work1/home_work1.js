// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
// - Переприсвоїти кожній змінній з завдання значення на довільне.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
let aa = 'hello';
let bb = 10;
let cc = true;
let d = false;
console.log(aa)
console.log(bb)
console.log(cc)
console.log(d)
// alert(aa)
// alert(bb)
// alert(cc)
// alert(d)
document.write(aa)
document.write(bb)
document.write(cc)
document.write(d+"<br/>")


// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//  Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
// let firstName = 'Ihor';

// let lastName = 'Yaroslavivson';
let midleName = 'Gavruliyk';
let firstName = prompt();
let lastName = prompt();
let age = prompt();
console.log('Вітаю '+firstName+ ' '+ lastName+'.Тобі '+age+' роки')
let person = firstName+midleName+lastName;

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
// - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразах не використовувати однакові оператори!!!
let a = 100;
let b = '100';
let c = true;
console.log(typeof a)
console.log(typeof b)
console.log(typeof c)

// 5 ? 6 -> true
// 5 ? 6 -> false
// 5 ? 6 -> false
// 5 ? 6 -> false
// 10 ? 10 -> true
// 10 ? 10 -> true
// 10 ? 10 -> false
// 10 ? 10 -> false
// 10 ? 10 -> false
// 123 ? '123' -> false
// 123 ? '123' -> true

// 5 < 6 -> true
// 5 > 6 -> false
// 5 >= 6 -> false
// 5 = 6 -> false
// 10 = 10 -> true
// 10 >= 10 -> true
// 10 < 10 -> false
// 10 != 10 -> false
// 10 !== 10 -> false
// 123 != '123' -> false
// 123 == '123' -> true

console.log(10>=10)
console.log(10!=10)
console.log(10 =='10')
console.log(10 !='10')


// - Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
//     let str = "20";
// let a = 5;
// document.write(str + a + "<br/>");
// document.write(str - a + "<br/>");
// document.write(str * "2" + "<br/>");
// document.write(str / 2 + "<br/>");

let str = "20";
let a2 = 5;
document.write(str + a2 + "<br/>");   // тут конкатенація спрацьовує
document.write(str - a2 + "<br/>");   // хз
document.write(str * "2" + "<br/>");  // хз
document.write(str / 2 + "<br/>");    // хз

// Оператор «+» является единственным оператором airthmatic,
// который также используется в случае конкатенированной строки.
// Поэтому, когда найдены строка и целое число, он действует как
// оператор конкатенации.
// Все другие операторы airthmatic, такие как -, *, / предназначены
// только для расчета, поэтому они рассматривают все как числа как:
//
// '20' * 3= 60
// '20'/ 2= 10
// '20'-5= 15
// '20'+ 3 = '203'