

//
// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя,
// та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
console.log('Написати функцію, яка приймає будь яке не валідне імя,\n' +
    '// та нормалізує його в наступнйи вигляд')

let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'

let name = (string, symbol) => {
    let newArr = []
    if (string.includes(symbol)) {
        let a = string.split(symbol)
        console.log(a)
        a.forEach((item) => {
            if (item) {newArr.push(item)
        }})
        console.log(newArr.join(' ').toString())
        console.log(typeof newArr)
    }
}
name(n1, '.')


//     - створити функцію, яка генерує масив рандомних числових
//     цілих значень в діапазоні від 0 до 100.
console.log('створити функцію, яка генерує масив рандомних числових\n' +
    '//     цілих значень в діапазоні від 0 до 100.')

let randomMasiv = (min, max, quantity) =>  {
    let array1 = []
    for (let i = 0; i < quantity; i++) {
        array1.push(Math.floor(Math.random()*(max - min)+min))
    }
    console.log(array1)
    return array1
}
let resultArray = randomMasiv(0, 100, 10)

// - створити (або згенерувати, за допомоги попередньої функції)
// масив рандомних цілих числових значень. Відсортувати його за допомоги sort
console.log('створити (або згенерувати, за допомоги попередньої функції)\n' +
    '// масив рандомних цілих числових значень. Відсортувати його за допомоги sort')

let sortMasivUp = resultArray.sort(( a, b ) =>  a - b)
console.log(sortMasivUp)
let sortMasivDown = resultArray.sort((a, b) => b - a)
console.log(sortMasivDown)

// - створити (або згенерувати, за допомоги попередньої функції)
// масив рандомних цілих числових значень. відфільтрувати  його
// за допомоги filter, залишивши тільки парні числа

console.log('створити (або згенерувати, за допомоги попередньої функції)\n' +
    '// масив рандомних цілих числових значень. відфільтрувати  його\n' +
    '// за допомоги filter, залишивши тільки парні числа')

let filterArray = resultArray.filter(item => item%2 === 0)
console.log(filterArray)

// - створити масив рандомних цілих числових значень
// (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти
// в масиві на стрінгові.
console.log('створити масив рандомних цілих числових значень\n' +
    '// (або згенерувати, за допомоги попередньої функції) .\n' +
    '// за допомоги map та колбеку перетворити всі об\'єкти\n' +
    '// в масиві на стрінгові.')

let stringFromArray = resultArray.map(value => value+'')
console.log(stringFromArray)

let stringFromArray2 = resultArray.map(value => value.toString())
console.log(stringFromArray2)

// - створити функцію sortNums(direction), яка прймає масив чисел,
// та сортує його від більшого до меньшого, або навпаки в
// залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
console.log('створити функцію sortNums(direction), яка прймає масив чисел,\n' +
    '// та сортує його від більшого до меньшого, або навпаки в\n' +
    '// залежності від значення аргументу direction.')

let sortNums = (array, direction) => {
    if (direction === 'ascending') return array.sort((a, b) => a-b)
    if (direction === 'descending') return array.sort((a, b) => a+b)
}
console.log(resultArray, 'descending')

// - є масив
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
console.log('відсортувати масив за спаданням за monthDuration')

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

console.log('відсортувати його за спаданням за monthDuration')
let sortOfDurations = coursesAndDurationArray
    .sort((a, b) => a.monthDuration - b.monthDuration)
console.log(sortOfDurations)

console.log('відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців')
let sortOfMonthDurations = coursesAndDurationArray.filter(value => value.monthDuration>5)
console.log(sortOfMonthDurations)

