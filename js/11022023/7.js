//3. Напиши класс User
//со свойствами login email
//Объяви приватные свойства #login #email,
//доступ к которым сделай через геттер и сеттер

class User {
    #login;
    #email;

    constructor(login, email) {
        this.#login = login;
        this.#email = email;
    }

    get login() {
        return this.#login;
    }

    set login(login) {
        this.#login = login;
    }

    get email() {
        return this.#email;
    }

    set email(email) {
        this.#email = email;
    }
}

const newUser = new User('yurii', 'yurisoroka165@gmail.com');

console.log(newUser.login);
console.log(newUser.email);
console.log('\n');
newUser.login = 'the_targa';

console.log(newUser.login);
console.log(newUser.email);
console.log('\n');
newUser.email = 'Yurii.Soroka@ukrpol.ua';

console.log(newUser.login);
console.log(newUser.email);