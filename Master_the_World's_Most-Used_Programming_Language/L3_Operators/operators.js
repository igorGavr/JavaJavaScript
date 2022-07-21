// SWITCH
function convert(x) {
    switch (typeof x) {
        case 'number':
            return x.toString(16);
        case 'string':
            return '"'+x+'"';
        default:
            return String(x);
    }
}

// Ітерація Обєктів
let o = { x:1, y:2, z:3 };
let res = '';
for (const key of Object.keys(o)) {
    res +=key;
}
console.log(res);       // => x, y, z

let sum = 0;
for (const value of Object.values(o)) {
    sum += value;
}
console.log(sum);       // => 6

console.log(Object.entries(o))
let pairs = '';
for (const [k, v] of Object.entries(o)) {
    pairs += k+v;
}
console.log(pairs);         // => 'x1y2z3'

// Ітерація for/of з стрічками
let frequency = {};
for (const letter of 'mississippi is the biggest river!') {
    if (frequency[letter]) {
        frequency[letter]++;
    }else {
        frequency[letter] =1;
    }
}
console.log(frequency);

// for/of з классами Set i Map
let text = 'Ma na na na Batman#';
let wordSet = new Set(text.split(' '));
console.log(wordSet)
let unique = [];
for (const word of wordSet) {
    unique.push(word);
}
console.log(unique);


let m = new Map([[1, 'one']]);
for (const [k, v] of m) {
    console.log(k, v)
}

// Асинхронная итерация с помощью for/await
async function printStream(stream) {
    for await (let chunk of stream) {
        console.log(chunk)
    }
}
console.log(printStream('abc'))

// for/in для будь-яких обєктів
console.log(o)
for (const oKey in o) {
    console.log(o[oKey])
}

let a = [], ii = 0;
for (a[ii++] in o);
console.log(a)    // => ['x', 'y', 'z']

// Мічений break оператор
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
let summa = 0, success = true;
computeSum: if (matrix) {
    for (let x = 0; x < matrix.length; x++) {
        const row = matrix[x];
        if (!row) break computeSum;
        for (let y = 0; y < row.length; y++) {
            const cell = row[y];
            if (isNaN(cell)) break computeSum;
            summa += cell;
        }
    }
    success = true;
}
console.log(success, summa);

let asd = [1, 2, null, 3, 4];
let i=-1;
while (i < asd.length-1) {
    i++;
    if (asd[i] === 3) continue;         // => 1 0 'while'
    console.log(asd[i],i, 'while')      // => 2 1 'while'
}                                       // => 4 3 'while'

let total = 0;
for (let j = 0; j < asd.length; j++) {
    if (!asd[j]) continue;
    console.log('total- ',total, '  j- ', j, '  asd[j]- ', asd[j])   // 0 2 null
    total+=asd[j];
}
console.log(total)  // => 0
console.log(!1)

for (let j = 0; j < asd.length; j++) {
    const asdElement = asd[j];
    if (asdElement === 2) continue;
    console.log(asdElement)
}

// yield
function* range(from, to) {
    for (let j = from; j < to; j++) {
        yield j;
    }
}

console.log(range(1, 3))
