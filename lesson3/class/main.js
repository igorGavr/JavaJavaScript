
// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
let array = [2,17,13,6,22,31,45,66,100,-18]
// 1. перебрати його циклом while
console.log('Task 1')
console.log(array)
let item = 0
while (item < array.length) {
    console.log(array[item])
    item++
}

console.log('В зворотньому порядку')
// В зворотньому порядку
let item_r  = array.length-1
while (item_r>=0) {
    console.log(array[item_r])
    item_r--
}

// 2. перебрати його циклом for
console.log('Task 2')
console.log(array)
for (const arrayKey in array) {
    console.log(array[arrayKey])
}

// В зворотньому порядку
console.log('В зворотньому порядку')
for (let j = array.length - 1; j >= 0; j--) {
    const arrayElement = array[j];
    console.log(arrayElement)
}

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
console.log('Task 3')
console.log(array)
let item3 = 0
while (item3 < array.length) {
    if (item3%2===1) {
        console.log(array[item3])
    }
    item3++
}

// В зворотньому порядку
console.log('В зворотньому порядку')
let item3_r = array.length-1
while (item3_r>=0 ) {
    if (item3_r % 2 === 1){
        console.log(array[item3_r])
    }
   item3_r--
}
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
console.log('Task 4')
console.log(array)
for (const arrayKey4 in array) {
    if (arrayKey4%2===1) {
        console.log(array[arrayKey4])
    }
}

// В зворотньому порядку
console.log('В зворотньому порядку')
for (let j = array.length - 1; j >= 0; j--) {
    const arrayElement = array[j];
    if (j%2===1) {
        console.log(arrayElement)
    }
}
// 5. перебрати циклом while та вивести  числа тільки парні  значення
console.log('Task 5')
console.log(array)
let item5 = 0
while (item5 < array.length) {
    if (array[item5]%2===0) {
        console.log(array[item5])
    }
    item5++
}

// В зворотньому порядку
console.log('В зворотньому порядку')
let item5_r = array.length-1
while (item5_r>=0 ) {
    if (array[item5_r] % 2 === 0){
        console.log(array[item5_r])
    }
    item5_r--
}
// 6. перебрати циклом for та вивести  числа тільки парні  значення
console.log('Task 6')
console.log(array)
for (const arrayKey6 in array) {
    if (array[arrayKey6]%2===0) {
        console.log(array[arrayKey6])
    }
}

// В зворотньому порядку
console.log('В зворотньому порядку')
for (let j = array.length - 1; j >= 0; j--) {
    const arrayElement = array[j];
    if (arrayElement%2===0) {
        console.log(arrayElement)
    }
}
// 7. замінити кожне число кратне 3 на слово "okten"
console.log('Task 7')


// console.log(array)
// console.log('forof')
// for (let number of array) {
//     if (array[number]%3===0){
//         array[number] = 'okten'  //чомусь не може знайти всіх чисел
//         console.log(array[number])
//     }
// }
// console.log(array)


// for (let j = 0; j < array.length; j++) {
//     let arrayElement = array[j];
//     if (arrayElement%3===0){
//         arrayElement = 'okten'    //чомусь не може знайти всіх чисел
//     }
// }
// console.log(array)




//
// console.log(array)
// console.log('forin')
// for (let arrayKey in array) {
//     if (array[arrayKey]%3===0){
//         array[arrayKey] = 'okten'      // тут прaцює
//     }
// }
// console.log(array)
//


// console.log(array)
// console.log('itar')
// for (let j = 0; j < array.length; j++) {
//     if (array[j]%3===0){
//         array[j] = 'okten'        //  тут прaцює
//     }
// }
// console.log(array)




for (let j = 0; j < array.length; j++) {
    const arrayElement = array[j];
    if (array[j]%3===0){
        array[j] = 'okten'        //  тут прaцює
    }
}
console.log(array)

// В зворотньому порядку
console.log('В зворотньому порядку')
for (let j = array.length-1; j >= 0; j--) {
    let arrayElement = array[j];
    if (arrayElement%3===0){
        array[j] = 'okten'        //  тут прaцює
    }
    console.log(array[j])
}
console.log(array)


// 8. вивести масив в зворотньому порядку.
console.log('Task 8')


for (let j = array.length - 1; j >= 0; j--) {
    const arrayElement = array[j];
    console.log(arrayElement)
}
console.log(array)
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі
// (с заду на перед)






