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

    set login(newLogin) {
        this.#login = newLogin;
    }

    get email() {
        return this.#email;
    }

    set email(newEmail) {
        this.#email = newEmail;
    }
}

const newUser = new User('the_targa', 'yurisoroka165@gmail.com');

console.log(newUser.login);
console.log(newUser.email);

console.log('\n');
newUser.login = 'soroka';

console.log(newUser.login);
console.log(newUser.email);

console.log('\n');
newUser.email = 'Yurii.Soroka@ukrpol.ua';

console.log(newUser.login);
console.log(newUser.email);