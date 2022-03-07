function userCreator(name, age) {
    let obj = {name: name, age: age}
    return {  // manipulator
        getName: function () {
            return obj.name
        },
        getAge: function () {
            return obj.age
        },
        setAge:function (age) {
            if (age < 0 || age < obj.age ) {
                alert('atatata')
            } else {
                obj.age = age
            }
        }
    }
}

let manipulator = userCreator('fargo', 25)
console.log(manipulator)
console.log(manipulator.getName())
console.log(manipulator.getAge())
manipulator.setAge(26)
console.log(manipulator.getAge())


let user0 = {}
user0.name = 'vasya'
user0['age'] = 32
console.log(user0)

delete user0.age
console.log(user0)


let person  = {
    personName : 'vasya',
    surname : 'pupkin',
    detFullName: function () {
        return this.personName+ ' '+this.surname
    },
    wife: {
        name: 'anna',
        greeting: function (msg) {
            console.log(`${msg} my name is ${this.name}`)
        }
    }
}
console.log(person.detFullName())
person.wife.greeting('hello)')


function User(username, age, skills) {
    this.username = username
    this.age = age
    this.greeting = function (msg) {
        return `${msg} my name is ${this.username}`
    }
    this.skills = skills
}

let user1 = new User('Jeck', 34, ['js', 'java', 'html'])

let user2 = new User('Piter', 12, ['вмію пасти корів)'])

console.log(user1);
console.log(user2);
console.log(user1.greeting('lol'))
console.log(user2.skills)
console.log(user1.skills.splice(0, 1))


class User2 {
    constructor(username, age) {
        this.username = username
        this.age = age
    }
    greeting() {
        return 'hello my name is - '+this.username
    }
}

let user3 = new User2('Kutasik', 21)
console.log(user3)
console.log(user3.greeting())


class SuperUser {
    username
    age
    status
    language
    school
    auto

    constructor(username, age, status, language, school, v) {
        this.username = username;
        this.age = age;
        this.status = status;
        this.language = language;
        this.school = school;
        this.auto = {
            engine: v,
            horsesPower:122
        }
    }
    greeting() {
        return 'hello my name is - '+this.username
    }
}

let user4 = new SuperUser('Mark', 233, true, ['ukr', 'ing'], 2, 2.4 )
console.log(user4)

class Person extends SuperUser{
    statusKabluk

    constructor(username, age, status, language, school, v, statusKabluk) {
        super(username, age, status, language, school, v);
        this.statusKabluk = statusKabluk;
    }
    order(runner, place, whatToBring, money) {
        return `hey ${runner} , 
    go to ${place} and 
bring me ${whatToBring} , 
        can you lend me ${money} )))`
    }
}
let person1 = new Person('DamDam', 1222, true, NaN, NaN, 2.2, false)
console.log(person1)
console.log(person1.order('Cack Noris', 'Chinese', 'Vodka', 120))

class AlkoBot extends Person{
    alko

    constructor(username, age, status, language, school, v, statusKabluk, alko) {
        super(username, age, status, language, school, v, statusKabluk);
        this.alko = alko;
    }
}
let alkoLover = new AlkoBot('', 23, true, '', '', NaN, true, 'Pivo')
console.log(alkoLover)





function Car(name) {
    this.name = name
    this.isTurnOn = false
    this.speed = 0
    this.engine = {
        engineCapacity : 1.6,
        horsesPower: 120,
        isTurnOn: false
    }
}

Car.prototype.start = function () {
    this.isTurnOn = true
    this.speed = 10
    this.engine.isTurnOn = true
    console.log(`${this.name} - ${this.speed}`)
}
Car.prototype.speed = 10

let reno = new Car('reno', )
console.log(reno.speed)
reno.start()
console.log(reno.speed)


class Cars2 {
    constructor(name, isTurnOn, speed, engine) {
        this.name = name;
        this.isTurnOn = isTurnOn;
        this.speed = speed;
        this.engine = {
            engineCapacity : 1.6,
            horsesPower: 120,
            isTurnOn: false
        }
    }
    start() {
        this.isTurnOn = true
        this.speed = 10
        this.engine.isTurnOn = true
        console.log(`${this.name} - ${this.speed}`)
    }
}

let mers = new Cars2('mers', false, 0)
console.log(mers)
console.log(new Cars2().engine.isTurnOn)


const person3 = {
    name: 'lona',
    age: 23,
    delayLog: function () {
        setTimeout(() => {
            console.log(this.name + ' ' + this.age)
        }, 500)
    }
}
person3.delayLog()

let str = 'i love me'
console.log(str.padStart(13, 'dupka'))
console.log(str.padEnd(13, '*'))


// rest
function average(a, ...arr) {
    return arr.reduce((acc, i) => acc += i, 0)/arr.length
}

console.log(average(1, 2, 323, 43, 4, 34434, 34))

//spread
const array = [1, 2, 3, 5, 8, 13]
console.log(...array)  // 1, 2, 3...
console.log(Math.max(...array)) // 13

const  fib = [1, ...array]
console.log(fib, array)

// Destructuring
console.log(array)
const [a, b, c, ...d] = array
console.log(a, b, c, d)

// Object
const address = {
    country: 'Rusia',
    city: 'Moskow',
    street: 'Lenina',
    concat: function () {
        return `${this.country} ${this.city} ${this.street}`
    }
}
// const {a2, b2, c2, concat} = address
// console.log(concat.call(address))
// console.log(address.a2)

const {city, ...rest} = address
console.log(city)
console.log(rest)

const newAddress = {...address, street: 'Gogolya', code: 123}
console.log(newAddress)


let counterKey = 0

function userCard(num) {  // Створити функцію «userCard» яка приймає число(будь-яке число)

    let objCard = {
        balance: 100,
        transactionLimit: 100,
        historyLogs: [],
        get key() {
            if (num === undefined) {
                num = ++counterKey
            }
            if (num >= 1 && num <= 3) {
                return num
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
                operationTime: getTime()
            })
        },
        takeCredits: function (quantity) {   //функція  віднімає  кошти з баланса карти
            if (quantity <= objCard.transactionLimit && quantity <= objCard.balance) {
                objCard.balance -= quantity

                objCard.historyLogs.push({
                    operationType: 'Withdrawal of credits',
                    credits: quantity,
                    operationTime: getTime()
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
                operationTime: getTime()
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

        counterKey = 0
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
        if (key > 3) {
            console.error('Число  має бути в діапазоні від 1 до 3')
            return {}
        }
        /*        for (const element of this.cards) {
                    if(element.getCardOptions().key === key){
                        console.log(element.getCardOptions())
                    }
                }*/

        if (this.cards.find(item => item.getCardOptions().key === key)) {   // шукаємо карту в масиві карт за ключем
            return this.cards.find(item => item.getCardOptions().key === key)
            // return this.cards.find(item => item.getCardOptions().key === key).getCardOptions()
        } else {
            console.error('Карти з таким ідентифікатором не існує!')
            return {}
        }
    }
}

let user = new UserAccount('Bob')

user.addCard()
user.addCard()

let card1 = user.getCardByKey(1)
let card2 = user.getCardByKey(2)

card1.putCredits(500)
card1.setTransactionLimit(800)
card1.transferCredits(300, card2)

card2.takeCredits(50)

console.log(card1.getCardOptions())
console.log(card2.getCardOptions())


function getTime() {
    let date = twoDigits(new Date().getDate());
    let month = twoDigits(new Date().getMonth() + 1);
    let hour = twoDigits(new Date().getHours());
    let minute = twoDigits(new Date().getMinutes());
    let second = twoDigits(new Date().getSeconds());

    return `${date}/${month}/${new Date().getFullYear()}, ${hour}:${minute}:${second}`;
}

function twoDigits(num) {
    if (num < 10) {
        return ('0' + num);
    } else {
        return num;
    }
}