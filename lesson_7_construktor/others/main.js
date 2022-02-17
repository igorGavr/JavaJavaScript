let user = {}
user.name = 'vasya'
user['age'] = 32
console.log(user)

delete user.age
console.log(user)


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

    constructor(username, age, status, language, school, auto) {
        this.username = username;
        this.age = age;
        this.status = status;
        this.language = language;
        this.school = school;
        this.auto = auto;
    }
    greeting() {
        return 'hello my name is - '+this.username
    }
}

let user4 = new SuperUser('Gans', 45,
                          'kosmos', 'elvish', 2, NaN )
console.log(user4)



class AnyAlkoBot extends SuperUser{
    statusID
    constructor(username, age, status, language, school, auto, statusID) {
        super(username, age, status, language, school, auto);
        this.statusID = statusID;
    }
    order(runner, place, whatToBring, money) {
        return `hey ${runner} , 
        go to ${place} and 
        bring me ${whatToBring} , 
        can you lend me ${money} )))`
    }
}

let user5 = new AnyAlkoBot('Dyadya Vania', 56, 'kabluk',
                            'mut', 3, 'BMW')
console.log(user5)
console.log(user5.greeting(),user5.order('Мутант Вусатий', 'Китайця',
    'Нанашку', 140))

let user6 = new AnyAlkoBot('djeki chan', 23, 'rab',
    'ua', 1, 'jiga', 'nelegal')



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

let mers = new Cars2('mers', false, 0, 2.5)
console.log(mers)
console.log(new Cars2().engine.isTurnOn)