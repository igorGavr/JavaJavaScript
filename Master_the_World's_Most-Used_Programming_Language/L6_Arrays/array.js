let digits = [...'12qw'];
console.log(digits)   // ['1', '2', 'q', 'w']

let letters = [...'hello world'];
let uniqueLetters = [...new Set(letters)];
console.log(letters);   //['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']
console.log(uniqueLetters);   // ['h', 'e', 'l', 'o', ' ', 'w', 'r', 'd']

let a = new Array();  // створюємо пустий масив []
let b = new Array(10);  // створюємо масив довжиною 10
let c = new Array(1, 2);
console.log(c);   // [1, 2]
let c2 = new Array('a');
console.log(c2);    // ['a']
let d = Array.of(1);
console.log(d);   // [1]

let copy = Array.from(c);
console.log(copy);   // [1, 2]

console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]

// Читання і запис елементів масиву
let arr = ['world'];
arr[-1.23] = true;
arr['1000'] = 0;
arr[1.00] = 1;
console.log(arr)   // ['world', 1, empty × 998, 0, -1.23: true]
console.log(0 in arr);   // true масив arr має значення 'world' по індексу 0
console.log(arr.length);  // 1001
arr.length = 5;     // корочує масив до розміру 5
console.log(arr);   // ['world', 1, empty × 3, -1.23: true]

// Багатовимірні масиви
// Таблиця множення
let table = new Array(10);
for (let i = 0; i < table.length; i++) {
    table[i] = new Array(10);
}
for (let row = 0; row < table.length; row++) {
    for (let col = 0; col < table.length; col++) {
        table[row][col] = row*col;
    }
}
console.log(table[5][5]);
