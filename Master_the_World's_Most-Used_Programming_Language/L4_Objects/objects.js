let book = {
    name: 'JS',
    for: 'all',
    author: {
        surname: 'Serhio'
    }
}
console.log(book.for)

// Создание объектов с помощью операции new
let q = new Object();
let w = new Array();
let e = new Date();
let r = new Map();

let t = Object.create(Object.prototype);
console.log(t);
console.log(q);

book['name']  // асоціативний масив

let customer = {
    address0: 'bali',
    address1: 'bali1',
    address2: 'bali2',
    address3: 'bali3',
}
let addr = '';
for (let i = 0; i < 4; i++) {
    addr += customer[`address${i}`] + '\n';
}
console.log(addr)

// Наслідування
let unitcircle = {r:1};     // обєкт від якого буде робитися наслідування
let c = Object.create(unitcircle);  // с наслідує властивість r;
console.log(c.r)   // => 1;
c.x = 1; c.y = 1;  // с визначає власні властивості
c.r = 2;           // с перевизначає свою вспадковану властивість
console.log(unitcircle.r)  // => 1 прототип не змінився

surname = book && book.author && book.author.surname;
console.log(surname) // => Serhio

//console.log(book?.auth.name)  // =>  виникає помилка TypeError
console.log(book?.auth?.name)  // => undefined помилки не виникає

console.log('name' in book)   // true
console.log(book.hasOwnProperty('name'))   // true
console.log(book.name !== undefined)     // true

// цікавий випадок коли властивість === undefined
let f = {x: undefined, z: 0};
console.log(f.x !== undefined)  // false властивість існує, але рівне undefined
console.log(f.y !== undefined)  // false властивість не існує
console.log(f.z !== undefined)  // true

// Перечислення властивостей
let g = Object.create(f)
console.log(g.z)                // => 0
g.p = 1;
console.log(Object.keys(g))     // => ['p'] повертає лише власні властивості обєкта
console.log(Object.getOwnPropertyNames('foo'))   // ['0', '1', '2', 'length']

let my_obj = Object.create({}, {
    getFoo: {
        value: function () {return this.foo;},
        enumerable: false
    }
})
my_obj.foo = 1;
console.log(my_obj)     // {foo: 1, getFoo: ƒ}
console.log(Object.getOwnPropertyNames(my_obj))    // ['getFoo', 'foo']

//Метод Object.getOwnPropertySymbols() возвращает массив всех
// символьных свойств, найденных непосредственно на переданном объекте.

// Reflect.ownKeys()
const object1 = {
    property1: 42,
    property2: 13
};
const array1 = [];
console.log(Reflect.ownKeys(object1));
// expected output: Array ["property1", "property2"]
console.log(Reflect.ownKeys(array1));
// expected output: Array ["length"]
