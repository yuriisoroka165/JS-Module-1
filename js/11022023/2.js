//2. Напишите две функции
//makeProduct(name, price, callback) - принимает
//имя и цену товара, а так же callback.
//Функция создает объект товара, добавляя ему уникальный
//идентификатор в свойство id и вызывает callback
//передавая ему созданный объект.
//showProduct(product) - коллбек принимающий объект
//продукта и логирующий его в консоль

function makeProduct(name, price, callback) {
    const newObj = {
        id: Math.random(),
        name,
        price,
    }

    callback(newObj);
}

function showProduct(product) {
    console.log(product);
}

makeProduct('toothpaste', 30, showProduct);