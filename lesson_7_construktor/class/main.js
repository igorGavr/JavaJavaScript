// - Створити функцію конструктор яка дозволяє створювати
// об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна.
// додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю
// ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль
// в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення
// максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення
// newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з
// довільним набором полів, і додає його в поточний об'єкт car

console.log('Створити функцію конструктор яка дозволяє створювати\n' +
    '// об\'єкти car, з властивостями модель, виробник, рік випуску,\n' +
    '// максимальна швидкість, об\'єм двигуна.')

function Auto(model, manufacturer, year, maxspeed, engineCapacity) {
    this.model = model
    this.manufacturer = manufacturer
    this.year = year
    this.maxspeed = maxspeed
    this.engineCapacity = engineCapacity
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`)
    }
    this.info = function () {
        for (const key in this) {
            if (typeof this[key] !== 'function') console.log(`${key} - ${this[key]}`)
        }
    }
    this.newMaxSpeed = function (newSpeed) {
        this.maxspeed = this.maxspeed + newSpeed
    }
    this.changeYear = function (newValue) {
        this.year = newValue;
    }
    this.addDriver = function (driver) {
        this.driver = driver
    }
}
let bike1 = new Auto('kawasaki', 'Japan', 2004, 240, 0.75)
console.log(bike1)
bike1.drive()
bike1.info()
bike1.newMaxSpeed(20)
bike1.drive()
bike1.changeYear(2010)
bike1.info()
bike1.addDriver('Vasil')
console.log(bike1)

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з
// властивостями модель, виробник, рік випуску, максимальна
// швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю
// ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль
// в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення
// максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення
// newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з
// довільним набором полів, і додає його в поточний об'єкт car
console.log('(Те саме, тільки через клас)')

class Cars2 {
    model
    manufacturer
    yearOfManufacturer
    topSpeed
    engineCapacity

    constructor(model, manufacturer, yearOfManufacturer, topSpeed, engineCapacity) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.yearOfManufacturer = yearOfManufacturer;
        this.topSpeed = topSpeed;
        this.engineCapacity = engineCapacity;
    }
    drive() {
        `Go at speed ${this.topSpeed} per hour`
    }
    info() {
        for (const carsKey in this) {
            if (typeof carsKey !== 'function') {
                console.log(`${carsKey} - ${this[carsKey]}`)
            }
        }
    }
    increaseMaxSpeed(newSpeed) {
        this.topSpeed+=newSpeed
        console.log(this.topSpeed, newSpeed)
    }
    changeYear(newValue) {
        this.yearOfManufacturer = newValue
        console.log(this.yearOfManufacturer)
    }
    addDriver(driver) {
        this.driver = driver;
    }
}

let addCar2 = new Cars2('bmw', 'germany',
    2012, 230, 2,3)
console.log(addCar2)
addCar2.drive()
addCar2.info()
addCar2.increaseMaxSpeed(23)
addCar2.drive()
addCar2.changeYear(2010)

addCar2.addDriver('Vasil')


// -створити класс/функцію конструктор попелюшка з полями ім'я,
// вік, розмір ноги. Створити масив з 10 попелюшок.
console.log('створити класс/функцію конструктор попелюшка з полями ім\'я,\n' +
    '// вік, розмір ноги. Створити масив з 10 попелюшок.')

class Cinderella {
    name
    age
    sizeOfFoot

    constructor(name, age, sizeOfFoot) {
        this.name = name;
        this.age = age;
        this.sizeOfFoot = sizeOfFoot;
    }
}

let girls = [
    new Cinderella('ira', 21, 44),
    new Cinderella('lana', 31, 39),
    new Cinderella('mery', 3, 38),
    new Cinderella('fargo', 41, 37),
    new Cinderella('bilbo', 25, 36),
    new Cinderella('netakaya', 21, 35),
    new Cinderella('tasama', 41, 34),
    new Cinderella('tamara', 31, 33),
    new Cinderella('mila', 31, 32),
    new Cinderella('ira2', 23, 31),
]
console.log(girls)

// Сторити об'єкт класу "принц" за допомоги класу який має поля
// ім'я, вік, туфелька яку він знайшов.
console.log('Сторити об\'єкт класу "принц" за допомоги класу який має поля\n' +
    '// ім\'я, вік, туфелька яку він знайшов.')

class Kabluk {
    name
    age
    shoeHeFound

    constructor(name, age, shoeHeFound) {
        this.name = name;
        this.age = age;
        this.shoeHeFound = shoeHeFound;
    }
}

let anotherKabluk = new Kabluk('Denis', 25, 37)
console.log(anotherKabluk)

//    За допомоги циклу знайти яка попелюшка повинна бути з принцом.
console.log('За допомоги циклу знайти яка попелюшка повинна бути з принцом')

let newCuple = (girls, anotherKabluk) => {
    for (const girl of girls) {
        if (anotherKabluk.shoeHeFound === girl.sizeOfFoot) {
            return `Your Cinderella is ${girl.name}
    Please accept my condolences. She is ${girl.age} , KARL! `
        }
    }
}
console.log(newCuple(girls, anotherKabluk))

//    Додатково, знайти необхідну попелюшку за допомоги
//    функції масиву find та відповідного колбеку
console.log('Додатково, знайти необхідну попелюшку за допомоги\n' +
    '//    функції масиву find та відповідного колбеку')

let luckyGirl = girls.find(item => anotherKabluk.shoeHeFound === item.sizeOfFoot)
console.log(luckyGirl)