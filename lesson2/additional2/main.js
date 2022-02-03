// - Нам дано масив друзів
// let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
// Потрібно зробити перевірку якщо
// кількість елементів у масиві більше або дорівнює 3, то виводиться
// повідомлення про те, що це великий масив, в якому  3 і більше елементи.
//     Інакше слід вивести на екран повідомлення про те, що це маленький
//     масив, в якому менше 3-х елементів.
let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
if(friends.length>=3) {
    console.log('це великий масив, в якому  3 і більше елементи')
}else {
    console.log('це маленький масив, в якому менше 3-х елементі')
}
//
// - Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
//     Знайти, яке з них є середнім (більше одного, але менше за інше).
//     Перевірити, чи знаходиться перше число між двома іншими.
//

let number1 = 122;
let number2 = 3;
let number3 = 133;

//Програма визначає найбільше число

if (number1>number2 && number1>number3) {
    console.log('number1 is the biggest')
    maxNum = number1
}else if (number2>number1 && number2>number3){
    console.log('number2 is the biggest')
    maxNum = number2
}else {
    console.log('number3 is the biggest')
    maxNum = number3
}
console.log(maxNum+' max number')


//Програма визначає середнє число


if (number1>number2 && number1>number3){
    if (number2>number3){
        console.log('number2 is middle')
        midleName = number2
    }else {
        console.log('number3 is middle')
        midleName = number3
    }
}else if (number2>number1 && number2>number3){
    if (number1>number3){
        console.log('number1 is middle')
        midleName = number1
    }else {
        console.log('number3 is middle')
        midleName = number3
    }
}else {
    if (number2>number1){
        console.log('number2 is middle')
        midleName = number2
    }else {
        console.log('number1 is middle')
        midleName = number1
    }
}

console.log(midleName+' middle number')

// - Перепишіть конструкцію if з використанням умовного оператора '?':
// let result;
// if (a + b < 4) {
//     result = 'Мало';
// } else {
//     result = 'Багато';
// }
//
//
let a = 1
let b = 2
let resalt = a+b
a+b<4 ? console.log(resalt+' - мало') : console.log(resalt+' - багато')

// - Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є
// число: позитивним, негативним або нулем
// напишіть це тернарним оператором
let num = 0
num<0 ? console.log('негативне число') : console.log('0 або позитивне число')
if (num===0){
    console.log('це 0')
}
// напишіть це тернарним оператором ------ не знаю як це зробити
