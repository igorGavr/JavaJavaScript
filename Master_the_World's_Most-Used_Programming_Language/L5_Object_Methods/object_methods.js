// toString()
console.log({s: 23}.toString())  // [Object Object]
console.log({s: 23}.toLocaleString())  // [Object Object]
let point = {
    x: 1000,
    y: 2000,
    toString: function () {return `(${this.x}, ${this.y})`},
    // якщо останю стрічку закоментувати то вивід буде [Object Object]
    toLocaleString: function () {
        return `(${this.x.toLocaleString()}, ${this.y.toLocaleString()})`
    }
};
console.log(point.toString())   // => (1000, 2000)
console.log(point.toLocaleString())  // => (1 000, 2 000) добавилися проміжки тисяч
console.log(String(point))      // => (1000, 2000)


const d = new Date();
let text = d.toLocaleString();
console.log(d.toString())
console.log(text)    // 23.07.2022, 10:31:16

let date = new Date(Date.UTC(2012, 11, 12, 3, 0, 0));
// toLocaleString() without arguments depends on the
// implementation, the default locale, and the default time zone
console.log(date.toLocaleString());
// → "12/11/2012, 7:00:00 PM" if run in en-US locale with time zone America/Los_Angeles
console.log(date.toLocaleString('ar-EG'));  // → "٢٠‏/١٢‏/٢٠١٢ ٥:٠٠:٠٠ ص"

// valueof()
console.log(+new Date())  // same as (new Date()).getTime()
console.log(d.valueOf())  // same as d.getTime()

// toJSON()
console.log(d.toJSON())
let jsonDate = (new Date()).toJSON();
let backToDate = new Date(jsonDate);
console.log('Сериализованный объект даты: ' + jsonDate);
console.log(backToDate, ' backToDate')

// Скорочення запису
let x = 1, y = 2;
let o = {x, y};
console.log(o.x + o.y)

const property_name = 'p1';
function computePropertyName() {
    return 'p'+2;
}
let p = {
    [property_name]: 1,           // p1: 1,
    [computePropertyName()]: 2    // p2: 2
};
console.log(p.p1 +p.p2);       // 3;

// Символи в якості назв полів
const extension = Symbol('my extension symbol');
let pole = {
    res() {return this.another*2},
    another: 10,
    [extension]: {}   // в цьому обєкті зберігаються дані розширення
};
pole[extension].x = 1;
console.log(pole[extension])   // {x: 1}
console.log(pole.another)      // 10
console.log(pole.res())       // 20

// ...spread operator
let pop = Object.create({x: 2});
let fif = {...pop};
console.log(fif.x)   // СПРЕД оператор розширює лише власні властивості обєкта

const METHOD_NAME = 'no';
const symbol = Symbol('символ в якості назви метода');
let weirdMethods = {
    'method with spaces' (x) {return x+1;},
    [METHOD_NAME](x) {return x+2;},
    [symbol](x) {return x+3;}
};
console.log(weirdMethods['method with spaces'](10))  // 11
console.log(weirdMethods[METHOD_NAME](10))           // 12
console.log(weirdMethods[symbol](10))                   // 13

// Методи отримання та установки властивостів
let pip = {
    x: 1,
    y: 1,
    // r - властивість з методами доступу, які допускають читання та запис,
    // з методами отримання та установки.
    get r() {return this.x+this.y;},
    set r(newValue) {
        this.x *= newValue;
        this.y *= newValue;
    },
    // theta - властивість з методами доступу, які допускають лише читання
    // і мають лише метод отримання.
    get theta() {
        return Math.atan2(this.y, this.x);
    }
}
console.log(pip.r)   // => 2;
pip.r = 3;   // сетаємо newValue
console.log(pip.r)   // => 6;

let qw = Object.create(pip)  // новий обєкт який наслідує методи отримання і установки
console.log(qw.r)   // => 6;

// JavaScript Object.defineProperty()
const student = {
    firstName: 'Monica'
}
// getting property
Object.defineProperty(student, "getName", {
    get : function () {
        return this.firstName;
    }
});
// setting property
Object.defineProperty(student, "changeName", {
    set : function (value) {
        this.firstName = value;
    }
});
console.log(student.firstName); // Monica
// changing the property value
student.changeName = 'Sarah';
console.log(student.firstName); // Sarah

const random = {
    get octet() {return Math.floor(Math.random()*256);},
    get uint16() {return Math.floor(Math.random()*6);},
    get int16() {return Math.floor(Math.random()*12)-6;}
}
console.log(random.octet)
console.log(random.uint16)
console.log(random.int16)
