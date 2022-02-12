// let str1 = 'okten hello  '
// console.log(str1)
// let concat = str1.concat('!!!')
// console.log(concat)
// console.log(str1)      // отримуємо нову стрінгу і стару
//
// let trim = str1.trim()   // обрізає пробіли
// console.log(trim)
//
// let email = 'asd@ads.com'
// let endsWith = email.endsWith('.com')  // startsWith('_')
// console.log(endsWith)
//
// // email.charAt(3)  повертає символ
// // email.indexOf('@')  повертає індекс
//
// let replace = str1.replace('o', '!')
// console.log(str1)
//
// let slice = str1.slice(0, 3)
// console.log(slice)
//
// let split = str1.split('e')
// console.log(split)
//
// let subst = str1.substr(0, 3)
// console.log(subst)
//
// let anyString = 'Mozilla';
// let anyString4 = anyString.substring(anyString.length - 4);
// console.log(anyString4);
//
// //String.prototype.includes()
// console.log(anyString.includes('ten'));
//
// let phone = '+38 (067) 123-12-12'
// let clearPhone = phone
//     .replaceAll('+38', '')
//     .replaceAll('(', '')
//     .replaceAll(')', '')
//     .replaceAll('-', '')
//     .replaceAll(' ', '');
// console.log(clearPhone);
//
//
// let info = '1_vasya_pupkin_380671231212';
// // let user = {id: 1, name: 'vasya', surname: 'pupkin', tel: '380671231212'};
// let infoSplit = info.split('_'); // [1 vasya pupkin 326987987]
// console.log(infoSplit);
// console.log(infoSplit[0]);
// let user = {
//     id: infoSplit[0],
//     name: infoSplit[1],
//     surname: infoSplit[2],
//     tel: infoSplit[3],
// }
// console.log(user);
//
//
// //////////////////////////////////////////////
// //                 ARRAYS
// //////////////////////////////////////////////
//
//
// let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(numbers2)
// console.log(Array.isArray(numbers2))
// let unshift = numbers2.unshift(6)
// console.log(unshift)
//
// let pop = numbers2.pop()
// console.log(pop)
//
// let shift = numbers2.shift()
// console.log(shift)
//
// console.log(numbers2)
// let slice2 = numbers2.slice(1, 4)
// console.log(slice2)
//
// console.log(numbers2)
// let splice = numbers2.splice(1, 2, '23', true, false)
// console.log(splice)
// console.log(numbers2)
//
// let numbers3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(numbers3)
// numbers3.forEach(function (value) {
//     console.log(value)
// })
//
// numbers3.filter((item, index) => {
//     console.log(index, item )
// })
//
// console.log(numbers3)
// let filterArray = numbers3.filter((item, index) => {
//     return item % 2 === 0
// })
// console.log(filterArray)
//
// console.log(numbers3)
// let map = numbers3.map(value => {
//     return value +''
// })
// console.log(map)


let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
let forEach = users.forEach(value => console.log(value));
