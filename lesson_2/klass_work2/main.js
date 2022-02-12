// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.
//
let num1 = +prompt('Enter first number');
let num2 = +prompt('Enter first number');
if (num1>num2) {
    console.log('Max number is num1')
}else if (num2>num1){
    console.log('Max number is num2')
}else {
    console.log('They are equal')
}

// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48.
// У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.
//
let apartment = Math.floor(Math.random()*90);
console.log(apartment+' apartment')
if (apartment<=20) {
    console.log('1 підїзд')
}else if(apartment>20 && apartment<=48) {
    console.log('2 підїзд')
}else {
    console.log('3 підїзд')
}
//
// - Ми маємо змінну number в яку користувач задає числове значення,
// якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10
// - тоді НЕВІРНО
//
(+prompt('Введіть число') === 10) ? console.log('ВІРНО') :  console.log('НЕ ВІРНО')


// - Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну
// записане число, вивести 1,
//     якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3,
//     якщо об'єкт або масив - 3.
// якщо в змінну записали щось інше, спрацьовує else
//
let x = [1,2,3,4]
if ((typeof x)==="number"){
    console.log('1 number')
}else if((typeof x)==="string"){
    console.log('2 string')
}else if((typeof x)==="boolean"){
    console.log('3 boolean')
}else if((typeof x)==="object"){
    console.log('4 object')
}else if(Array.isArray(x)){
    console.log('4 Array')
} else{
    console.log('again please')
}
//
// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22
//     вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і
//     вчимося ОНЛАЙН
//
let temperature = +prompt(' Введіть число')
if (temperature >= 10 && temperature <= 22) {
    console.log('  ми йдемо ВЧИТИСЯ')
} else {
    console.log('вчимося ОНЛАЙН')
}
//
// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо
// число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не
//     підходить тоді  вивести Повідомлення - що число не вірне ... .
let yourNum = +prompt('Enter number ')
switch (yourNum) {
    case '1':
        console.log('auto')
        break
    case '2':
        console.log('moto')
        break
    case '3':
        console.log('pikachu')
        break
    case '4':
        console.log('garlic')
        break
    case '5':
        console.log('ukulele')
        break
    default:
        console.log('Enter only numbers from 1 to 5')
}