


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