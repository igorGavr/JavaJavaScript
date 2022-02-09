
// let foo = function () {
//     console.log('foobar');
// }


let foobar = () => {console.log('foobar');};
console.log(foobar)

let calcl = (a, b) => a + b;
console.log(calcl(10, 20));





(function (msg) {
    console.log(msg);
}('hello'));


function rec(i, limit) {
    i++;
    console.log(i);
    if (i > limit) {
        return;
    }
    rec(i, limit);
}
rec(-1, 9);


function calc(action, a, b) {
    return action(a, b)
}
calc((a, b) => a-b, 2, 1)
console.log(calc((a, b) => a-b, 2, 1))
// let aPlusB = calc(function (a, b) { return a+b}, 2, 2)
// console.log(aPlusB)





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

// let filter = [];
//
// for (const user of users) {
//     if (user.age > 30) {
//         filter.push(user);
//     }
// }
//
// console.log(filter)

let filter = users.filter(function (user) {
    return user.age > 30
});           // як описати це стрілковою фнк?
console.log(filter);

