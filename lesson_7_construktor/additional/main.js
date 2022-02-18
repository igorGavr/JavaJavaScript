// - Створити клас або функцію конструктор, за допомоги якої можна створювати
// об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для
// властивостей внутрішніх об'єктів

let  sdf = {
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
}

class User {
    constructor(id, name, username, email, address, phone, website, company) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.address = address;
        this.phone = phone;
        this.website = website;
        this.company = company;
    }
}
class Address {
    constructor(street, suite, city, zipcode, geo) {
        this.street = street;
        this.suite = suite;
        this.city = city;
        this.zipcode = zipcode;
        this.geo = geo;
    }
}
class Geo {
    constructor(lat, lng) {
        this.lat = lat;
        this.lng = lng;
    }
}
class Company {
    constructor(name, catchPhrase, bs) {
        this.name = name;
        this.catchPhrase = catchPhrase;
        this.bs = bs;
    }
}
let user1Geo = new Geo(23, 233)
let user1Address = new Address('Bakery', 2323, 'New-York',
    121212, user1Geo)
let user1Company = new Company('Pivo International', 'Drink or die', 'fogi')
let userA = new User(0, 'Gans', 'Vasya', 'adfs@df.com',
   user1Address, 3802323232, 'www.alko-tur.com',user1Company)

console.log(userA)

let userB = new User(1, 'Oleh', 'Mitla', 'knock@heaven.door',
    new Address('doood', 23, 'Denver', 121212,
        new Geo(232, 323)),380232323, 'www.oops@rock.com',
    new Company('music for morons', 'Your ears are my waste basket', 'jimi'))

console.log(userB)
// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения,
//         которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью
//     комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},

class Tags {
    constructor(titleOfTag, action, attrs) {
        this.titleOfTag = titleOfTag;
        this.action = action
        this.attrs = attrs;
    }
}
class Attrs {
    constructor(titleOfAttrs, actionOfAttrs) {
        this.titleOfAttrs = titleOfAttrs;
        this.actionOfAttrs = actionOfAttrs;
    }
}
let a = new Tags('a', 'предназначен для создания ссылок', [new Attrs('accesskey', 'Активация ссылки с помощью комбинации клавиш'),
        new Attrs('coords', 'Устанавливает координаты активной области.')
    ])
let div = new Tags('div', 'предназначен для выделения фрагмента документа с целью изменения вида содержимого', [new Attrs('align', 'Задает выравнивание содержимого тега'),
        new Attrs('title', 'Добавляет всплывающую подсказку к содержимому..')
    ])
let h1 = new Tags('h1', 'заголовок первого уровня', [new Attrs('align', 'Определяет выравнивание заголовка')])
let span = new Tags('span', 'предназначен для определения строчных элементов документа', [new Attrs('accesskey', 'Активация ссылки с помощью комбинации клавиш'),
        new Attrs('title', 'Добавляет всплывающую подсказку к содержимому..')
    ])
let input = new Tags('input', 'позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем', [new Attrs('accesskey', 'Активация ссылки с помощью комбинации клавиш'), new Attrs('align', 'Определяет выравнивание заголовка')])
let form = new Tags('form', 'устанавливает форму на веб-странице', [new Attrs('name', 'Имя формы'), new Attrs('method', 'Метод протокола HTTP.')])
let option = new Tags('option', ' определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.', [new Attrs('label', 'Указание метки пункта списка'), new Attrs('value', 'Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов')])
let select = new Tags('select', ' позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором', [new Attrs('autofocus', 'Устанавливает, что список получает фокус после загрузки страницы'), new Attrs('form', 'Связывает список с формой')])
console.log(a, div, h1, span, input, form, option, select)


console.log('===========================')

let quantityOfCards = 0

function userCard(number) {  // Створити функцію «userCard» яка приймає число(будь-яке число)

    let objCard = {
        balance: 100,
        transactionLimit: 100,
        historyLogs: [],
        get key() {
            if (number === undefined) {
                number = ++quantityOfCards
            }
            if (number >= 1 && number <= 5) {
                return number
            } else {
                console.error(`Параметр key має бути числом в діапазоні[1; 3]`)
                return -1
            }
        }
    }
    return {
        getCardOptions: function () { // Дана функція повертає об’єкт котрий містить інформацію про карту
            return Object.create(    // создаём новый объект, чей прототип
                {},              // является новым пустым объектом
                {         // и добавляем свойства из нашей карты
                    balance: {value: objCard.balance,},
                    transactionLimit: {value: objCard.transactionLimit,},
                    historyLogs: {value: objCard.historyLogs},
                    key: {value: objCard.key}
                })
        },
        putCredits: function (balance) {  //функція отримує певну кількість грошей і заповнює баланс карти
            objCard.balance += balance

            objCard.historyLogs.push({
                operationType: 'Received credits',
                credits: balance,
                operationTime: timeOfOperation()
            })
        },
        takeCredits: function (quantity) {   //функція  віднімає  кошти з баланса карти
            if (quantity <= objCard.transactionLimit && quantity <= objCard.balance) {
                objCard.balance -= quantity

                objCard.historyLogs.push({
                    operationType: 'Withdrawal of credits',
                    credits: quantity,
                    operationTime: timeOfOperation()
                })
            } else {
                console.error('Сума, яку Ви бажаєте взяти, перевищує ліміт транзакцій та залишок коштів на карті')
            }
        },
        setTransactionLimit: function (limit) {  // функція приймає як аргумент число і встановлює його
            objCard.transactionLimit = limit    //як ліміт транзакцій на картці

            objCard.historyLogs.push({
                operationType: 'Transaction limit change',
                credits: limit,
                operationTime: timeOfOperation()
            })
        },
        transferCredits: function (credit, recipientCard) {  //я функція отримує два аргументи - кількість

            let tax = credit * 0.005      //кредитів, які потрібно передати,та карту одержувача

            if (credit + tax > objCard.transactionLimit) {
                console.error(`Ви не можете перерахувати кошти через недостатній ліміт ${objCard.transactionLimit}`)
            } else if (credit + tax > objCard.balance) {
                console.error(`У вас недостатньо коштів (${objCard.balance} `)
            } else {
                this.takeCredits(credit + tax)  // знімаємо кошти з карти відправника
                recipientCard.putCredits(credit)      // передаємо кошти на карту отримувача
            }
        }
    }
}

class UserAccount {
    constructor(name) {
        this.name = name
        this.cards = []  // Масив не має бути довшим ніж 3

        quantityOfCards = 0
    }

    addCard() {
        if (this.cards.length < 3) {
            let card = userCard()   // створюємо нову карту
            this.cards.push(card)  // додаємо карту до масиву карт
        } else {
            console.error(`Користувач повинен мати <= 3 карти!`)
        }
    }

    getCardByKey(key) {
        if (key > 5) {
            console.error('Число  має бути в діапазоні від 1 до 3')
            return {}
        }
        if (this.cards.find(item => item.getCardOptions().key === key)) {   // шукаємо карту в масиві карт за ключем
            return userCard(key)
        } else {
            console.error('Карти з таким ідентифікатором не існує!')
            return {}
        }
    }
}

let user = new UserAccount('Bob')
let user2 = new UserAccount('Gans')
console.log(user)
console.log(user2)
user.addCard()     // створюємо карту1 для user
user.addCard()     // створюємо карту2 для user
user.addCard()     //  cтворюємо карту3 для user

user2.addCard()     // створюємо карту1 для user2
user2.addCard()

console.log(user.cards)   // масив карт  користувача user
console.log(user2.cards)  // масив карт  користувача user2

let card1User = user.getCardByKey(1)  //
console.log(card1User.getCardOptions())  //{balance: 100, transactionLimit: 100, historyLogs: Array(0), key: 1}
let card2User = user.getCardByKey(2)
console.log(card2User.getCardOptions())  // {balance: 100, transactionLimit: 100, historyLogs: Array(0), key: 2}
let card3User = user.getCardByKey(3)
console.log(card3User.getCardOptions())  // {balance: 100, transactionLimit: 100, historyLogs: Array(0), key: 3}

let card1user2 = user2.getCardByKey(4)
console.log(card1user2.getCardOptions())  // {balance: 100, transactionLimit: 100, historyLogs: Array(0), key: 3}
let card2user2 = user2.getCardByKey(5)
console.log(card2user2.getCardOptions())  // {balance: 100, transactionLimit: 100, historyLogs: Array(0), key: 5}

card1User.putCredits(155)

console.log(card1User.getCardOptions()) // {balance: 255, transactionLimit: 100, historyLogs: Array(1), key: 1}
                                       // баланс зріс на 155

card1User.setTransactionLimit(300)
console.log(card1User.getCardOptions())  // {balance: 255, transactionLimit: 300, historyLogs: Array(2), key: 1}
                                        // кредитний ліміт зріс до 300

card1User.transferCredits(230, card1user2)  // перерахували 230 на карту card1user2
console.log(card1user2.getCardOptions())    //{balance: 330, transactionLimit: 100, historyLogs: Array(1), key: 3}
                                           // баланс зріс з 100  до 330
console.log(card1User.getCardOptions())   // {balance: 23.849999999999994, transactionLimit: 300, historyLogs: Array(3), key: 1}

card1user2.takeCredits(100)               // зняли з карти card1user2 100
console.log(card1user2.getCardOptions())  // {balance: 230, transactionLimit: 100, historyLogs: Array(2), key: 3}

function timeOfOperation() {
    let date = new Date().getDate()
    let month = new Date().getMonth() + 1
    let hour = new Date().getHours()
    let minute = new Date().getMinutes()
    let second = new Date().getSeconds()
    return `${date}/${month}/${new Date().getFullYear()}, ${hour}:${minute}:${second}`
}

