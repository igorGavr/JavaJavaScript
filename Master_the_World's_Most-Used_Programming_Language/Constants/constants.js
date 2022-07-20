// Деструктуризація
let [q, w] = [1, 2];    // теж саме що і let q=1, w=2
[q, w] = [q+1, w+1];    // q=q+1; w=w+1
[q, w] = [w, q]         // значення міняються місцями
console.log([q, w])     // 3, 2
let [t, y] = [1]        // t=1, y=undefined
let [u, i] = [1, 2, 3]  // u=1, i=2
let [ , o, , p] = [1, 2, 3, 4]  // o=2, p=4
////////////////////

let a = {e: 1, r: 2};
for (const [name, value] of Object.entries(a)) {
    console.log(name, value)
}

// REST
let [d, ...fa] = [1, 2, 3]    // fa== [2, 3]
let [first, ...rest] = 'hello'  // rest == ['e','l','l','o']

let rgb = {r: 0, g: 2, b: 3};
let {r, g, b} = rgb;            // r=0, g=2, b=3

const {sin, cos, tan} = Math;   // const sin = Math.sin ....
const { cos: cosine, tang: tangent} = Math;
console.log(cos(30))

let points = { p1: [1, 2], p2: [3, 4]};
let {p1: [x1, y1], p2: [x2, y2]} = points;
console.log(x1)  // 1

/////////////////////////
// ЕЛВІС
let aa;
let index = 0;
try {
    aa[index++];    // генерується TypeError
}catch (e) {
    console.log(index)  // => 1 інкрементація відбувається перед генерацією TypeError
}
console.log(aa?.[index++])  // => undefined тому що змінна аа не визначенна
console.log(index)          // => 1 змінна не інкрементувалася через коротке замикання
// console.log(aa[index++]); !TypeError

function log() {
    console.log('hello it is LOG')
}
function square(x, log) {
    log?.(x);
    return x*x;
}
console.log(square(2, log())) // => 4

let f = null, x = 0;
try {
    f(x++);             // генерується TypeError
}catch (e) {
    console.log(x);     // => 1 інкрементація відбувається перед генерацією TypeError
}
console.log(f?.(x++));  // => undefined f рівна null але помилка не генерується
console.log(x)          // => 1 змінна не інкрементувалася через коротке замикання

// о.ш() // Обыкновенный доступ к свойству, обыкновенный вызов
// о?.ш() // Условный доступ к свойству, обыкновенный вызов
// о.ш?. () // Обыкновенный доступ к свойству, условный вызов

// Операція +
console.log(1+'ds')         // => '1ds'
console.log(1+{})           // => '1[object Object]'
console.log(1+undefined)    // => Nan

console.log(1+2+'a')        // => '3a'
console.log(1+(2+'a'))      // => '12a'

//Подобно ++ возвращаемое значение операции — зависит от ее позиции относительно операнда.
// Когда она используется перед операндом, то декрементирует и возвращает
// декрементированное значение, а когда после операнда, то декрементирует
// операнд, но возвращает значение до декрементирования
let id=1, j1= ++id;
console.log(id, j1)        // => 2, 2
let n = 1, m = n++;
console.log(n, m)       // =>  2, 1

console.log(null==undefined)  // true

// Операція in
//let points = { p1: [1, 2], p2: [3, 4]};
console.log('p1' in points)                 // => true

let data = [1, 2, 3];
console.log('0' in data)        // => true

///////////////////////////////////
// Логічні вирази
// && ЛОГІЧНЕ І
let and1 = {x: 1};
let and2 = null;
console.log(and1 && and1.x)     // => 1 Таким образом, когда значение слева истинное,
// оПерация && вычисляется и возвращает значение справа
console.log(and2 && and2.x)     // => null , повертається ліве (не істинне) значення , а праве не обраховується
// and2.x обчислюється тільки тоді коли лівий операнд істиний
//console.log(and2.x)     // TypeError

// Коротке замикання
if (a===b) stop();  // визвати stop() тільки якщо а===b
(a === b) && stop();  // еквівалент

console.log((1,5 - 1)* 2)  // => 8  OMG

