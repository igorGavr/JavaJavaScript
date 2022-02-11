let str1 = 'okten hello  '
console.log(str1)
let concat = str1.concat('!!!')
console.log(concat)
console.log(str1)      // отримуємо нову стрінгу і стару

let trim = str1.trim()   // обрізає пробіли
console.log(trim)

let email = 'asd@ads.com'
let endsWith = email.endsWith('.com')  // startsWith('_')
console.log(endsWith)

// email.charAt(3)  повертає символ
// email.indexOf('@')  повертає індекс

let replace = str1.replace('o', '!')
console.log(str1)

let slice = str1.slice(0, 3)
console.log(slice)

let split = str1.split('e')
console.log(split)

let subst = str1.substr(0, 3)
console.log(subst)

let anyString = 'Mozilla';
let anyString4 = anyString.substring(anyString.length - 4);
console.log(anyString4);

let numbers = [12, 1, 2, 3]
console.log(Array.isArray(numbers))
let unshift = numbers.unshift('@')

let pop = numbers.pop()
console.log(pop)

let shift = numbers.shift()
console.log(shift)

let slice2 = numbers.slice(1, 4)
console.log(slice2)

let splice = numbers.splice(1, 2, '23', true, false)
console.log(splice)

console.log(numbers)
numbers.forEach(function (value) {
    console.log(value)
})

numbers.filter((item, index) => {
    console.log(index, item )
})

console.log(numbers)
let filterArray = numbers.filter((item, index) => {
    return item % 2 === 0
    // if (item % 2 === 0) {
    //     return true
    // } else {
    //     return false
    // }
})
console.log(filterArray)

let map = numbers.map(value => {
    return value +''
})
console.log(map)