// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
// - Переприсвоїти кожній змінній з завдання значення на довільне.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
let a = 'hello';
let b = 10;
let c = true;
let d = false;
console.log(a)
console.log(b)
console.log(c)
console.log(d)
// alert(a)
// alert(b)
// alert(c)
// alert(d)
document.write(a)
document.write(b)
document.write(c)
document.write(d+"<br/>")


// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//  Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
let firstName = 'Ihor';
let midleName = 'Gavruliyk';
let lastName = 'Yaroslavivson';
let person = firstName+midleName+lastName;
// prompt(firstName);
// prompt(lastName);
// prompt(24);
console.log('Вітаю '+firstName+ ' '+ lastName+'.Тобі 24 роки')


// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
// - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразах не використовувати однакові оператори!!!

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