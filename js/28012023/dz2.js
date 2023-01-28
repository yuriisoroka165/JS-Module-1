//2. У нас есть объект, в котором хранятся зарплаты нашей команды
//Напишите код для суммирования всех зарплат и
//сохраните его результат в переменной sum.
//Если объект salaries пуст, то результат должен быть 0

const salaries = {
  Mango: 100,
  Poly: 160,
  Ajax: 1470,
};

let sum = 0;

if (salaries !== {}) {
    for (const key of Object.keys(salaries)) {
        sum += salaries[key];
    }
}

console.log(sum);