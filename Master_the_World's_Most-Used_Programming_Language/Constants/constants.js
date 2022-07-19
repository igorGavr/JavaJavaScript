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
