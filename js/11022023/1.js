//1. Напишите две функции
// letMeSeeYourName(callback) - спрашивает имя пользователя
//через prompt и вызывает callback функцию
//greet(name) - коллбек принимающий имя и логирующий в консоль
//строку "Привет <name>"
//Реализуй проверку, что prompt не пустой
//

function letMeSeeYourName(callback) {
    const getName = prompt("Please enter username: ");
    if (getName) {
        callback(getName);
    }
}

function greet(name) {
    console.log(`Hello, ${name}!`);
}

letMeSeeYourName(greet);