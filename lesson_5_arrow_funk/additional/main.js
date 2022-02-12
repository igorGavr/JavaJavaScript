// - Дано натуральное число n. Выведите все числа
// от 1 до n.
console.log('Дано натуральное число n. Выведите все числа\n' +
    '// от 1 до n.')

let outputNum = (minNum, maxNum) => {
    for (let i = minNum; i <= maxNum; i++) {
        console.log(i)
    }
}
outputNum(0, 4)

// - Даны два целых числа A и В . Выведите все
// числа от A до B включительно, в порядке
// возрастания, если A < B, или в порядке убывания
// в противном случае.
console.log('Даны два целых числа A и В . Выведите все\n' +
    '// числа от A до B включительно, в порядке\n' +
    '// возрастания, если A < B, или в порядке убывания\n' +
    '// в противном случае.')

let outputAandB = (a, b) => {
    if (a > b) {
        for (let i = b; i <= a; i++) {
            console.log(i)
        }
    } else {
        for (let i = b; i > 0; i--) {
            console.log(i)
        }
    }
}
outputAandB(12, 4)

// -   функція Приймає масив та число "i", та
// міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
console.log('функція Приймає масив та число "i", та\n' +
    '// міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"')

let createMasiv2 = (quantity, max_limit, low_limit) => {
    let array4 =  Array.from({length: quantity}, () => Math.floor(Math.random()*max_limit)-low_limit)
    console.log(array4+' --- masiv')
    return array4
}

let changeByI = (arr, i) => {
    let temp = arr[i]
    arr[i] = arr[i+1]
    arr[i+1] = temp
    console.log(arr, temp, arr[i])
}
changeByI(createMasiv2(12, 12, 0), 0)

// - Сворити функцію яка буде переносити елементи
// з значенням 0 у кінець маисву. Зберігаючи при
// цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
console.log('Сворити функцію яка буде переносити елементи\n' +
    '// з значенням 0 у кінець маисву. Зберігаючи при\n' +
    '// цьому порядок не нульових значень.')

const arr = [ 0, 1, 0, 0, 0, 2, 0, 3, 4]
console.log(arr+' - input array')
let addNullToTheEnd = (arr) => {
    let upperBound = arr.length
    for (let i = 0; i < upperBound; i++) {
        if (arr[i] === 0) {
            arr.push(0)
            arr.splice(i, 1)
            upperBound--
            i--
        }
    }
    console.log(arr+' - output array')
    return arr;
}

addNullToTheEnd(arr)

// - Сворити функцію яка буде переносити елементи
// з значенням 0 у кінець маисву. Зберігаючи при
// цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
console.log('Сворити функцію яка буде переносити елементи\n' +
    '// з значенням 0 у кінець маисву. Зберігаючи при\n' +
    '// цьому порядок не нульових значень.')

arr2 = [ 0, 1, 0, 0, 0, 2, 0, 3, 4]
console.log(arr2+' - input array')

let addNullToTheEnd2 = (arr) => {
    let filtered = arr.filter((item, index) => {
        console.log(index, item)
        return item !== 0
    })
    let quantityOfZero = (arr.length - filtered.length)
    console.log(filtered)
    for (let i = 0; i < quantityOfZero; i++) {
        filtered.push(0)

    }
    // filtered.concat(Array(arr.length - filtered.length).fill(0))
    console.log(filtered)
}
addNullToTheEnd2(arr2 )




// - Сворити функцію яка буде переносити елементи
// з значенням 0 у кінець маисву. Зберігаючи при
// цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
console.log('Сворити функцію яка буде переносити елементи\n' +
    '// з значенням 0 у кінець маисву. Зберігаючи при\n' +
    '// цьому порядок не нульових значень.')

arr3 = [ 0, 1, 0, 0, 0, 2, 0, 3, 4]
console.log(arr3+' - input array')

let addNullToTheEnd3 = (arr) => {
    let filtered = arr.filter(el => el !== 0);
    let concat = filtered.concat(Array(arr.length - filtered.length).fill(0));
    console.log(concat)
}
addNullToTheEnd3(arr3 )



