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
let user1 = new User(0, 'Gans', 'Vasya', 'adfs@df.com',
   user1Address, 3802323232, 'www.alko-tur.com',user1Company)

console.log(user1)

let user2 = new User(1, 'Oleh', 'Mitla', 'knock@heaven.door',
    new Address('doood', 23, 'Denver', 121212,
        new Geo(232, 323)),380232323, 'www.oops@rock.com',
    new Company('music for morons', 'Your ears are my waste basket', 'jimi'))

console.log(user2)
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

let number = Math.floor(Math.random()*(4-1)+1)
console.log(number)




class UserCard {
    constructor(balance, transactionLimit, historyLogs, key) {
        this.balance = 100;
        this.transactionLimit = 100;
        this.historyLogs = historyLogs;
        this.key = number;
    }
    putCredits(quantity) {
        this.balance += quantity
        console.log(this.balance)
        console.log(quantity)
    }
    takeCredits(quantity) {
        if (this.balance > quantity) {
            this.balance -= quantity
        } else {
            console.error('you dont have money')
        }
    }
    setTransactionLimit(quantity) {
        this.transactionLimit = quantity
    }
    transferCredits(quantityOfCredits, user2) {
        let tax = quantityOfCredits*0.005
        if (tax+quantityOfCredits>this.balance) {
            console.error('you dont have enough money')
        } else {
            user2.balance+=quantityOfCredits
            this.balance-=(quantityOfCredits+tax)
            this.historyLogs.operationType = 'Withdrawal of credits'
            this.historyLogs.credits = quantityOfCredits
            this.operationTime = '03/32/32'
        }
    }
}

class UserAccount {
    name
    cards

    constructor(name, cards) {
        this.name = name;
        this.cards = cards;
    }
    addCard() {

    }
}

function userCard(number) {
    return new UserCard(23, 23, null, 1)
}

