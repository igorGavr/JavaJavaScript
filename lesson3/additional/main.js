/*
Використовуючи данні з масиву, за допомоги document.write та циклу
побудувати структуру по шаблону template1.1
*/
console.log('/*\n' +
    'Використовуючи данні з масиву, за допомоги document.write та циклу\n' +
    'побудувати структуру по шаблону template1.1\n' +
    '*/')
document.write(`<div class="main_wrap">`)


let listOfItems = ['html', 'css', 'javascript', 'mysql',
                   'mongodb', 'react', 'angular', 'node.js'];
console.log(listOfItems)
document.write('<ul>')
for (let i = 0; i<listOfItems.length; i++){
    document.write(`<li>item of array ${listOfItems[i]}</li>`)
}
document.write('</ul>')


/*
Використовуючи данні з масиву, за допомоги document.write та циклу
побудувати структуру по шаблону template2.1 & template2.2.
Зробити адекватну стилізацію.
Великими літерами прописанні властивості об'єкту які потрібно
 впровадити в шаблон.
Шаблон застосувати до кожного об'єкта в масиві
*/
console.log('/*\n' +
    'Використовуючи данні з масиву, за допомоги document.write та циклу\n' +
    'побудувати структуру по шаблону template2.1 & template2.2.\n' +
    'Зробити адекватну стилізацію.\n' +
    'Великими літерами прописанні властивості об\'єкту які потрібно\n' +
    ' впровадити в шаблон.\n' +
    'Шаблон застосувати до кожного об\'єкта в масиві\n' +
    '*/')
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер.  Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];
console.log(simpsons)
document.write(`<div class="main">`)
for (let i = 0; i < simpsons.length; i++) {
    // let simpson = simpsons[i];
    document.write(`<div class="target">
                            <h2>
                                ${simpsons[i].name}                  <------  
                                ${simpsons[i].surname} . Age is - 
                                ${simpsons[i].age} 
                            </h2>
                            ${simpsons[i].info}
                            <div class="foto">
                                <img src="${simpsons[i].photo}" alt="foto here">
                            </div>
                        
                    </div>`)
}
document.write(`</div>`)

/*
    Використовуючи данні з масиву, за допомоги document.write та циклу
    побудувати структуру по шаблону template3.1 Зробити адекватну стилізацію
    Великими літерами прописанні властивості об'єкту які потрібно впровадити
     в шаблон
        */
console.log('/*\n' +
    '    Використовуючи данні з масиву, за допомоги document.write та циклу\n' +
    '    побудувати структуру по шаблону template3.1 Зробити адекватну стилізацію\n' +
    '    Великими літерами прописанні властивості об\'єкту які потрібно впровадити\n' +
    '     в шаблон\n' +
    '        */')
let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];
console.log(products)
document.write(`<div>`)
for (let product of products) {
    document.write(`<div class="product-card">
                        <h3 class="product-title"> 
                                      ${product.title}
                            . Price - ${product.price}
                        </h3>
                        <img class="product-image" src="${product.image}" alt="" >
                    </div>`)
}
document.write(`</div>`)

/*За допомогою циклу вивести всю інформацію про пости використовуючи шаблон Template 1.1.
* ЗА допомоги стилів побудувати структуру "сітки" по 5 об'єктів в лінію
* */
console.log('/*За допомогою циклу вивести всю інформацію про пости використовуючи шаблон Template 1.1.\n' +
    '* ЗА допомоги стилів побудувати структуру "сітки" по 5 об\'єктів в лінію\n' +
    '* */')
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
console.log(coursesArray)
document.write(`<div class="main2">`)
for (const coursesArrayElement of coursesArray) {
    document.write(`<div class="wrap">
                        <div class="post-card">
                            <h3>Курс - ${coursesArrayElement.title} , 
                            </h3>
                        буде тривати - 
                                ${coursesArrayElement.monthDuration} , загальним обсягом - 
                                ${coursesArrayElement.hourDuration} годин! Алілуя!!!
                        </div>
                        <p>В курс входять такі модулі: 
                            ${coursesArrayElement.modules}
                        </p>

                   </div>`)
}
document.write(`</div>`)
document.write(`</div>`)

let usersList = [
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        address: {
            street: 'Kulas Light',
            suite: 'Apt. 556',
            city: 'Gwenborough',
            zipcode: '92998-3874',
            geo: {
                lat: '-37.3159',
                lng: '81.1496'
            }
        },
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
        company: {
            name: 'Romaguera-Crona',
            catchPhrase: 'Multi-layered client-server neural-net',
            bs: 'harness real-time e-markets'
        }
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        address: {
            street: 'Victor Plains',
            suite: 'Suite 879',
            city: 'Wisokyburgh',
            zipcode: '90566-7771',
            geo: {
                lat: '-43.9509',
                lng: '-34.4618'
            }
        },
        phone: '010-692-6593 x09125',
        website: 'anastasia.net',
        company: {
            name: 'Deckow-Crist',
            catchPhrase: 'Proactive didactic contingency',
            bs: 'synergize scalable supply-chains'
        }
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        address: {
            street: 'Douglas Extension',
            suite: 'Suite 847',
            city: 'McKenziehaven',
            zipcode: '59590-4157',
            geo: {
                lat: '-68.6102',
                lng: '-47.0653'
            }
        },
        phone: '1-463-123-4447',
        website: 'ramiro.info',
        company: {
            name: 'Romaguera-Jacobson',
            catchPhrase: 'Face to face bifurcated interface',
            bs: 'e-enable strategic applications'
        }
    },
    {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        address: {
            street: 'Hoeger Mall',
            suite: 'Apt. 692',
            city: 'South Elvis',
            zipcode: '53919-4257',
            geo: {
                lat: '29.4572',
                lng: '-164.2990'
            }
        },
        phone: '493-170-9623 x156',
        website: 'kale.biz',
        company: {
            name: 'Robel-Corkery',
            catchPhrase: 'Multi-tiered zero tolerance productivity',
            bs: 'transition cutting-edge web services'
        }
    },
    {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        address: {
            street: 'Skiles Walks',
            suite: 'Suite 351',
            city: 'Roscoeview',
            zipcode: '33263',
            geo: {
                lat: '-31.8129',
                lng: '62.5342'
            }
        },
        phone: '(254)954-1289',
        website: 'demarco.info',
        company: {
            name: 'Keebler LLC',
            catchPhrase: 'User-centric fault-tolerant solution',
            bs: 'revolutionize end-to-end systems'
        }
    },
    {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        address: {
            street: 'Norberto Crossing',
            suite: 'Apt. 950',
            city: 'South Christy',
            zipcode: '23505-1337',
            geo: {
                lat: '-71.4197',
                lng: '71.7478'
            }
        },
        phone: '1-477-935-8478 x6430',
        website: 'ola.org',
        company: {
            name: 'Considine-Lockman',
            catchPhrase: 'Synchronised bottom-line interface',
            bs: 'e-enable innovative applications'
        }
    },
    {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        address: {
            street: 'Rex Trail',
            suite: 'Suite 280',
            city: 'Howemouth',
            zipcode: '58804-1099',
            geo: {
                lat: '24.8918',
                lng: '21.8984'
            }
        },
        phone: '210.067.6132',
        website: 'elvis.io',
        company: {
            name: 'Johns Group',
            catchPhrase: 'Configurable multimedia task-force',
            bs: 'generate enterprise e-tailers'
        }
    },
    {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        address: {
            street: 'Ellsworth Summit',
            suite: 'Suite 729',
            city: 'Aliyaview',
            zipcode: '45169',
            geo: {
                lat: '-14.3990',
                lng: '-120.7677'
            }
        },
        phone: '586.493.6943 x140',
        website: 'jacynthe.com',
        company: {
            name: 'Abernathy Group',
            catchPhrase: 'Implemented secondary concept',
            bs: 'e-enable extensible e-tailers'
        }
    },
    {
        id: 9,
        name: 'Glenna Reichert',
        username: 'Delphine',
        email: 'Chaim_McDermott@dana.io',
        address: {
            street: 'Dayna Park',
            suite: 'Suite 449',
            city: 'Bartholomebury',
            zipcode: '76495-3109',
            geo: {
                lat: '24.6463',
                lng: '-168.8889'
            }
        },
        phone: '(775)976-6794 x41206',
        website: 'conrad.com',
        company: {
            name: 'Yost and Sons',
            catchPhrase: 'Switchable contextually-based project',
            bs: 'aggregate real-time technologies'
        }
    },
    {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        address: {
            street: 'Kattie Turnpike',
            suite: 'Suite 198',
            city: 'Lebsackbury',
            zipcode: '31428-2261',
            geo: {
                lat: '-38.2386',
                lng: '57.2232'
            }
        },
        phone: '024-648-3804',
        website: 'ambrose.net',
        company: {
            name: 'Hoeger LLC',
            catchPhrase: 'Centralized empowering task-force',
            bs: 'target end-to-end models'
        }
    }
];
console.log(usersList)
document.write(`<div class="wrap_user_list" >`)
for (const usersListElement of usersList) {
    document.write(`<div class="users-box">
                        <div class="user-block">
                            <h2>${usersListElement.id} - ${usersListElement.name} - ${usersListElement.username} </h2>
                            <h3>${usersListElement.email} - ${usersListElement.phone}</h3>
                            <div class="address-block">
                                <p>City - ${usersListElement.address.city}</p>
                                <p> Street - ${usersListElement.address.street}</p>
                                <p> Suite - ${usersListElement.address.suite}</p>
                                <p>Zip code - ${usersListElement.address.zipcode}</p>
                            </div>
                        </div>
                    </div>`)
}
document.write(`</div>`)


// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
//     b. заповнити його 50 непарними числами за допомоги циклу.
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732
// (Google: Generate random number JS)
console.log('\n' +
    '// 1. Створити пустий масив та :\n' +
    '//     a. заповнити його 50 парними числами за допомоги циклу.\n' +
    '//     b. заповнити його 50 непарними числами за допомоги циклу.\n' +
    '//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)\n' +
    '// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732\n' +
    '// (Google: Generate random number JS)')
let newList = []
for (let i = 0; i < 100; i++ ) {
    if (i%2===0) {
        newList.push(i)
    }
    if (i%2===1) {
        newList.push(i)
    }
}
let i = 0
while (i!==20) {
    newList.push(Array.from({length: 1}, () => Math.floor(Math.random()*700)));
    i++
}
console.log(newList)
// 2. Вивести за допомогою console.log кожен третій елемен
console.log('// 2. Вивести за допомогою console.log кожен третій елемен')
console.log('кожен третій елемент')
for (let j = 0; j < newList.length; j++) {
    const newListElement = newList[j];
    if (j%3===0) {
        console.log(newListElement)
    }
}
// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним
// // та записати їх в новий масив
console.log('// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.\n' +
    '// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним\n' +
    '// // та записати їх в новий масив')
console.log('кожен третій парний елемент')
let newList2 = []
for (let j = 0; j < newList.length; j++) {
    const newListElement = newList[j];
    if (j%3===0 && newListElement%2===0) {
        console.log(newListElement)
        newList2.push(newListElement)
    }
}
console.log(`newList2 `+newList2)

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
console.log('// 5. Вивести кожен елемент масиву, сусід справа якого є парним\n' +
    '// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56')
console.log('кожен елемент масиву, сусід справа якого є парним')
for (let j = 0; j < newList.length; j++) {
    const newListElement = newList[j];
    if (newList[j+1]%2===0) {
        console.log(newListElement)
    }
}
// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки.
// Обрахувати середній чек.
console.log('// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки.\n' +
    '// Обрахувати середній чек.')
let productPrice =  [100,250,50,168,120,345,188]
let result = 0
for (let j = 0; j < productPrice.length; j++) {
    const productPriceElement = productPrice[j];
    result+=productPriceElement
}
let avarage = result/productPrice.length
console.log('Result - '+result+ ', Avarage Price - '+ avarage)
console.log(productPrice)
// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити
// їх в інший масив.
console.log('// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити\n' +
    '// їх в інший масив.')
let newList3 = []

let i2 = 0
while (i2!==20) {
    newList3.push(Array.from({length: 1}, () => Math.floor(Math.random()*700)));
    i2++
}
console.log('масив з рандомними значеннями')
console.log(newList3)

let newList3multiply = []
for (let j = 0; j < newList3.length; j++) {
    const newList3Element = newList3[j];
    newList3multiply.push(newList3Element*5)
}
console.log('масив з рандомними значеннями, помножити всі його елементи на 5 ')
console.log(newList3multiply)
// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому,
// і якщо елемент є числом - додати його в інший масив.
console.log('// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому,\n' +
    '// і якщо елемент є числом - додати його в інший масив.')
let masiv = ['sdf', 2, 23, 'dff', 'dsfsg', 1, 3, 54]
console.log(masiv)
let masivOfNumber = []
// for (const masivKey in masiv) {
//     if (typeof masivKey === 'number') {
//         // masivOfNumber.push(masivKey)      // тут чомусь знову не працює , не знаходить числа
//         console.log(masivKey)             // напевно треба робити не через forin
//     }
// }

for (const masivElement of masiv) {
    if (typeof masivElement === 'number') {
        console.log(masivElement)
        masivOfNumber.push(masivElement)
    }
}
console.log('Masiv for Numbers')
console.log(masivOfNumber)


console.log('User with Cities\n// - Дано 2 масиви з рівною кількістю об\'єктів.\n' +
    '// Масиви: ')
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];
console.log(usersWithId)
let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
console.log(citiesWithId)
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
console.log('// З\'єднати в один об\'єкт користувача та місто з відповідними "id" та "user_id" .\n' +
    '//     Записати цей об\'єкт в новий масив')
// Example:
// let usersWithCities = [
//     {
//         id: 1, // <===
//         name: 'vasya',
//         age: 31,
//         status: false,
//         address: {
//             user_id: 1, // <===
//             country: 'Ukraine',
//             city: 'Ternopil'
//         },         // TO BE CONTINUED .....
//     }
// ]

let users_with_cities = []
// debugger
for (const usersWithIdKey in usersWithId) {
    for (const citiesWithIdKey in citiesWithId) {
        if(usersWithIdKey.id===citiesWithIdKey.user_id) {

            users_with_cities[0]===citiesWithIdKey

            // users_with_cities.push(usersWithIdKey)
        }
    }
}
console.log(users_with_cities)













//
// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи,
//   значення яких є парними.
//
console.log('/ - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи,\n' +
    '//   значення яких є парними.')
let newList4 = []
let i3 = 0
while (i3!==10) {
    newList4.push(Array.from({length: 1}, () => Math.floor(Math.random()*700)));
    i3++
}
console.log(newList4)
for (let j = 0; j < newList4.length; j++) {
    // const j = newList4[j];    <------ чому , при такому записі , при такій константі (j) не працює код?
    if (newList4[j]%2===0) {
        console.log(newList4[j])
    }
}

//
console.log('// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив.\n' +
    '// За допомогою будь-якого циклу скопіювати значення одного масиву в інший.')
console.log(newList4)
//
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
