


document.write('<ul>')
for (let i = 0; i<10; i++){
    document.write(`<li>item ${i}</li>`)
}
document.write('</ul>')


let menu = ['about', 'main', 'contacts', 'team']
document.write('<ul>')
for (let i = 0; i<menu.length; i++){
    document.write(`<li>${menu[i]}</li>`)
}
document.write('</ul>')

let products = [
    {
        title: 'item',
        price: '3',
        image: "./img/row3.png"
    },
    {
        title: 'item',
        price: '23',
        image: "./img/row3.png"
    },
    {
        title: 'item',
        price: '23',
        image: "./img/row3.png"
    }
]

document.write('<ul>')
for (let i = 0; i < products.length; i++) {
    const product = products[i];
    document.write(`<li class="target">
                        ${product.title} 
                        ${product.price}
                        <img src="${product.image}"></li>`)

}
document.write('</ul>')



document.write('<ul>')
for (const product of products) {
    if (product.price > 20) {
        document.write(`<li class="target">${product.title} ${product.price} <img src="${product.image}"></li>`)

    }
}
document.write('</ul>')



document.write('<ul>')
let i = 0
while (i < products.length) {
    let product = products[i]
    document.write(`<li class="target">${product.title} ${product.price} <img src="${product.image}"></li>`)

    i++
}

document.write('</ul>')



do {
    console.log('do some')
}while (false)



let user = {name:'bob', age: 12, status:true}
for (const userKey in user) {
    console.log(userKey, user[userKey])
}





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

for (const user_item of users) {
    document.write(`<ul>`)
    for (const userItemKey in user_item) {
        if (userItemKey !=='status') {
            document.write(`<li>${userItemKey} - ${user_item[userItemKey]}</li>`)
        }
    }
    document.write(`</ul>`)
}




