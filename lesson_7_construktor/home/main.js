// - Створити функцію конструктор для об'єктів User з
// полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
console.log('Створити функцію конструктор для об\'єктів User з\n' +
    '// полями id, name, surname , email, phone\n' +
    '// створити пустий масив, наповнити його 10 об\'єктами new User(....)')

function User(id, name, surname, email, phone) {
    this.id = id
    this.name = name
    this.surname = surname
    this.email = email
    this.phone = phone
}
const arrayOfUsers = [
    new User(1, 'Miki', 'McGinas',
        'sdfsd@sd.com', 23232323),
    new User(2, 'Mifd', 'sdinas',
        'sdfsd@sd.com', 23232323),
    new User(3, 'dfki', 'Mcsdnas',
        'sdfsd@sd.com', 23232323),
    new User(5, 'sdki', 'McGinas',
        'sdfsd@sd.com', 23232323),
    new User(4, 'dfki', 'McGinas',
        'sdfsd@sd.com', 23232323),
    new User(6, 'Msdfki', 'sdf',
        'sdfsd@sd.com', 23232323),
    new User(7, 'sdfi', 'McGinas',
        'sdfsd@sd.com', 23232323),
    new User(9, 'sdfi', 'dfnas',
        'sdfsd@sd.com', 23232323),
    new User(8, 'Msdfki', 'McGinas',
        'sdfsd@sd.com', 23232323),
    new User(10, 'Msdi', 'McGinas',
        'sdfsd@sd.com', 23232323)
]
console.log(arrayOfUsers)

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати ,
// залишивши тільки об'єкти з парними id (filter)
console.log('Взяти масив з  User[] з попереднього завдання, та відфільтрувати ,\n' +
    '// залишивши тільки об\'єкти з парними id (filter)')

let filterUser = arrayOfUsers.filter((user) => user.id%2===0)
console.log(filterUser)

// - Взяти масив з  User[] з попереднього завдання, та відсортувати
// // його по id. по зростанню (sort)
console.log('Взяти масив з  User[] з попереднього завдання, та відсортувати\n' +
    '// // його по id. по зростанню (sort)')

let sortUser = arrayOfUsers.sort((a, b) => {
    return a.id - b.id
})
console.log(sortUser)

// - створити класс для об'єктів Client з полями id, name, surname ,
// email, phone, order (поле є масивом зі списком товарів)
console.log('створити класс для об\'єктів Client з полями id, name, surname ,\n' +
    '// email, phone, order (поле є масивом зі списком товарів)')

class Client {
    id
    name
    surname
    email
    phone
    order
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

// створити пустий масив, наповнити його 10 об'єктами Client
console.log('створити пустий масив, наповнити його 10 об\'єктами Client')

const arrayOfClients = [
    new Client(1, 'Miki', 'McGinas',
        'sdfsd@sd.com', 23232323,
        ['banana'] ),
    new Client(2, 'Miki', 'McGinas',
        'sdfsd@sd.com', 23232323,
        ['banana', 'pineaplle', 'salt'] ),
    new Client(3, 'Miki', 'McGinas',
        'sdfsd@sd.com', 23232323,
        ['banana', 'pineaplle', 'salt'] ),
    new Client(4, 'Miki', 'McGinas',
        'sdfsd@sd.com', 23232323,
        ['banana', 'pineaplle', 'salt', 'magasine', 'shop', 'ps3'] ),
    new Client(5, 'Miki', 'McGinas',
        'sdfsd@sd.com', 23232323,
        ['banana', 'pineaplle', 'salt'] ),
    new Client(6, 'Miki', 'McGinas',
        'sdfsd@sd.com', 23232323,
        ['banana','magasine', 'shop', 'ps3', 'pineaplle', 'salt'] ),
    new Client(7, 'Miki', 'McGinas',
        'sdfsd@sd.com', 23232323,
        ['banana', 'pineaplle', 'salt'] ),
    new Client(8, 'Miki', 'McGinas',
        'sdfsd@sd.com', 23232323,
        ['banana',  'salt'] ),
    new Client(9, 'Miki', 'McGinas',
        'sdfsd@sd.com', 23232323,
        ['banana', 'pineaplle', 'salt'] ),
    new Client(10, 'Miki', 'McGinas',
        'sdfsd@sd.com', 23232323,
        [ 'salt'] ),
]
console.log(arrayOfClients)

// - Взяти масив (Client [] з попереднього завдання).Відсортувати
// його по кількості товарів в полі order по зростанню. (sort)
console.log('Взяти масив (Client [] з попереднього завдання).Відсортувати\n' +
    '// його по кількості товарів в полі order по зростанню. (sort)')

let sortClient = arrayOfClients.sort((a, b) => {
    return a.order.length - b.order.length
})
console.log(sortClient)