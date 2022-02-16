// - Напишите функцию cutString(str, n), которая делит строку
// на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

let cutString = (str, n) => {
    let array = []
    while (str.length>0) {
        let subStr = str.substr(0, n)
        array.push(subStr)
        str = str.slice(n)
    }
    return array
}
console.log(cutString('Напишите функцию cutString(str, n), которая делит строку', 4))
// - Створити функцію-валідатор для адрес електронної пошти.
// Перевірка повинна включати в себе :данні до знака равлика(@),
// наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ
// далі після равлика, функція не чутлива до регістру
// (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
//
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні
// вирази одразу "ні". Своїм мозком подумайте над протоколом,
// з регулярками будете потім бавитись.

let validatorForEmail = (str) => {
    if (str.endsWith('.com') &&
        str.includes('@') &&
        (((str.indexOf('.') - str.indexOf('@')) - 1 ) >= 2) &&
        str.slice(0, str.indexOf('@'))) {
        str = (str.slice(0, str.indexOf('@')) +
               str.slice(str.indexOf('@'), str.length+1))
            .toLowerCase()
        return str
    } return console.log('misspelled email')
}
// при неправильному вводі функція повертає undefined .
// Це норм ? Можна обійтися без цього?
console.log(validatorForEmail('someemail@gmail.com'))
console.log(validatorForEmail('someeMAIL@gmail.com'))
console.log(validatorForEmail('someeMAIL@i.ua'))
console.log(validatorForEmail('some.email@gmail.com'))

// відсортувати масив в спадаючому порядку за кількістю елементів в полі modules
console.log('відсортувати масив в спадаючому порядку за кількістю елементів в полі modules')

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb',
            'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

let sortCoursesByQuantityOfModules = coursesArray.sort((current, next) => {
    return next.modules.length - current.modules.length
})

console.log(sortCoursesByQuantityOfModules)

//console.log('Відсортувати масив в зростаючому порядку за monthDuration')
// let sortCoursesByMonthDurations = coursesArray.sort((current, next) => {
//     return current.monthDuration - next.monthDuration
// })
//
// console.log(sortCoursesByMonthDurations)



// - Напишіть функцію count(str, stringsearch), яка повертає кількість
// символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5
console.log('Напишіть функцію count(str, stringsearch), яка повертає кількість\n' +
    '// символів stringsearch у рядку str.')

let count = (str, symbol) => {
    console.log(str.split(symbol).length - 1)
    return str.split(symbol).length - 1
}

count('Астрономия это наука о небесных объектах', 'о')

// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str,
// залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
console.log(' Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str,\n' +
    '// залишивши у ній n слів.')

let cutString2 = (str, n) => {
    console.log(str.split(' ', n).join(' '))
    return str.split(' ', n).join(' ')
}

cutString2("Сила тяжести приложена к центру масс тела", 5)


console.log(typeof "Сила тяжести приложена к центру масс тела".split(' ', 5).join(' '))