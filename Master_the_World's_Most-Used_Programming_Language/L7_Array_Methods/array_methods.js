// МЕТОДИ ІТЕРАТОРІВ ДЛЯ МАСИВІВ

// forEach()
let data = [1, 2, 3, 4, 5], sum = 0;
data.forEach(value => {sum += value;});
console.log(sum)     //15

data.forEach(function (v, i, a) {a[i]=v+1});
console.log(data)    //[2, 3, 4, 5, 6]

// map()
const kvArray = [{ key: 1, value: 10 },
    { key: 2, value: 20 },
    { key: 3, value: 30 }];

const reformattedArray = kvArray.map(({ key, value}) => ({ [key]: value }));
console.log(reformattedArray)   // reformattedArray is now [{1: 10}, {2: 20}, {3: 30}],

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
let map = users.map((user, index) => {
    user.id = index
    return user
})
console.log(map)

let newUsers = users.map((user) => {
    return {
        name: user.name,
        age: user.age
    }
})
console.log(newUsers)
