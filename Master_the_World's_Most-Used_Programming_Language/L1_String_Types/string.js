////////////////////////////////////////////////////
console.log('---JavaScript:\n' +
    'The Definitive\n' +
    'Guide\n' +
    'Master the World\'s Most-Used\n' +
    'Programming Language----')

// Логические операции объединяют или инвертируют булевские значения:
let j = 2, f = 3
let and = (j===2) && (f===3); // обидва вирази мають давати true
console.log(and) // => true

let pipe = (j===2) || (f===2); // якщо хоча б один вираз дає false то буде false
console.log(pipe)

let exclamation = !(j<f); // ! инвертирует булевское значение
console.log(exclamation)

//Мы также можем определять наш собственный метод.
let points = [
    {x: 0, y: 0},
    {x: 1, y: 1}
]
points.distance = function () {
    let el1 = this [0];
    let el2 = this [1];
    let t1 = el2.x-el1.x;
    let t2 = el2.y-el1.y;
    return Math.sqrt(t1*t1 + t2*t2)
}
console.log(points.distance());

function factorial(n) {
    let firstEl = 1
    while (n>1) {
        firstEl *= n;
        n--
    }
    return firstEl
}

console.log(factorial(12))


class Point {
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }
    distance() {
        return Math.sqrt(this._x*this._x + this._y*this._y)
    }
}
let point1 = new Point(1, 2)
console.log(point1.distance())
console.log("\u{1F600}")

///////////////////////////////////////////////////
////////////////////////////////////////////////////
/////
////    Типы, значения и переменные
/////
//////////////////////////////////////////////////////
// Типы JavaScript можно разделить на две категории: элементарные типы и
// объектные типы.
//
// элементарные типы - числа, строки текста
// (называемые просто строками) , булевские истинностные значения, null, undefined, Symbol.
//
// Object — это коллекция свойств, где каждое свойство имеет
// имя и значение (либо элементарное значение, либо другой объект)
// Типи ОБЄКТІВ - базовий обєкт, масив, Объект Set, Объект Мар, RegExp, Date, Error, function, class.

points. sort (); // Объектно-ориентированная версия sort(points)
//Обектные типы JavaScript являются изменяемыми, элементарные типы — неизменяемым

// Дата і час
let timeStamp = Date.now();    // Текущее время как отметка времени (число)
let now = new Date();          // Текущее время как объект Date
let ms = now.getTime();       // Преобразовать в миллисекундную отметку времени.
let iso = now.toISOString();  // Преобразовать в строку со стандартным форматом.

console.log(timeStamp);
console.log(now);
console.log(ms);
console.log(iso);

for (let i = 0; i < 112120; i++) {

}
let time2 = Date.now();
console.log(time2);
console.log(time2-timeStamp);

///////////////////////////////////////////////////
//
//    STRING
//
///////////////////////////
console.log('--------------------string-----------------------------')
console.log('\ud83d\uda21')
console.log('sdgsdg\nsdfsdf')
console.log("one\
            long\
            line");
console.log(`sdagsag
sdgfa\tsdg`)

console.log(' oi'==='oi ')  // => false

// Методи стрічок
let s = 'Hello, world';

console.log(s.substring(1, 4))  // => 'ell'
console.log(s.slice(-3))  // => 'rld'
console.log(s.indexOf('o', 6))  // => 8
console.log(s.replace ("llo", "уа")) // => "Heya, world"
console.log('x'.padStart(4, '*#'))
console.log(s.concat('()()()()'))
console.log('<>'.repeat(3))

let errorMessage = `       
\u2718 Test failure -       
${s}`
console.log(errorMessage)

// Вбудована тегова функція String.raw()
console.log(`\n`.length)  //  => 1
console.log(String.raw`\n`.length) // => 2
let text = `Woow ${4 + Math.random()*100}`
console.log(text)  // => Woow 7.503973923249077

const header = 'Чим нафарширувати голову?';
const tags = ['html', 'css', 'JS', 'MySQL', 'MONGO', 'REACT', 'ANGULAR', 'NodeJS'];
let html = `<h2>${header}</h2><ul>`;
for (const tag of tags) {
    html += `<li>${tag}</li>`;
}
html += `</ul>`;
document.writeln(html)


//  Tagged Template Literals
const firstVar = 'Tagged';
const secondVar = 'Template';
function randomFunction(stringArray, ...variables) {
    console.log(stringArray)
    console.log(variables)
    let string = '';
    stringArray.forEach((str, i) => {
        string += `${str}<span contenteditable="true" 
            style="background-color: greenyellow">${variables[i] || ''}
        </span>`
    })
    return string;
}
const coolText = randomFunction`This is ${firstVar} ${secondVar} Literals!`;
console.log(coolText)
document.writeln(coolText)

// RegExp
let text2 = 'test: 1, 2, 34';
let pattern = /\d+/g;                                // регулярка на виявлення цифер
console.log(pattern.test(text2));                    // => true
console.log(text2.search(pattern));                  // => 6
console.log(text2.match(pattern));                   // => ['1', '2', '34']
console.log(text2.replace(pattern, '%')); // => test: %, %, %
console.log(text2.split(/\D+/));              // => ['', '1', '2', '34']

// SYMBOL
let strName = 'string name'
let symName = Symbol('propName')
console.log(typeof symName);
let o = {};
o[strName] = 1;
o[symName] = 2;
console.log(o[strName])
console.log(o[symName])
console.log(o)

let sym = Symbol('sym_x')
console.log(sym.toString());

let ss = Symbol.for('shared')
let tt = Symbol.for('shared')
console.log(ss === tt);   // => true
console.log(ss.toString());
console.log(Symbol.keyFor(tt));


let aa = [1, 2, 3]
let cc = Array.from(aa)
console.log(cc)       // => [1, 2, 3]
console.log(aa === cc)  // => false

function equalArrays(a, b) {
    if (a === b) return 1;
    if (a.length !== b.length) return false;

    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false;
    }
    return 2;
}
console.log(equalArrays(aa, cc));  // => 2

// Преобразования типов

console.log('4'*'4')   // => 16
console.log(1 - 'd'+' obj')   // => NaN obj
console.log(true+1)          // => 2
// console.log(null===undefined) // => false
// console.log(undefined==false) // => false
Number('3')     // => 3
String(false)   // => 'false'
Boolean([])     // => true
console.log((12).toString(2))  // => 1100

let num = 123456.789;
console.log(num.toFixed(0))  // => '123457'
console.log(num.toFixed(2))  // => '123456.79'
console.log(num.toFixed(5))  // => '123456.78900'
console.log(num.toExponential(1))   // => '1.2e+5'
console.log(num.toExponential(4))   // => '1.2346e+5'
console.log(num.toPrecision(3))        // => '1.23e+5'
console.log(num.toPrecision(7))        // => '123456.8'
console.log(num.toPrecision(11))       // => '123456.78900'
console.log(parseInt(' 23.9', 9))             // => 19
console.log(parseInt('zz', 36))             // => 1295

console.log(Number([]))   // => 0
