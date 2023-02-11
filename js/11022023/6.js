//6. Напишите функцию each(array, callback), которая
//первым параметром принимает массив, а вторым - функцию,
//которая применится к каждому элементу массива.
//Функция each должна вернуть новый массив, элементами
//которого будут результаты вызова callback
//callback функци должна умножать элементы на 2

const numbers = [3, 5, 6, 34, 8, 83, 12, 34];

function each(array, callback) {
    return array.map(callback);
}

function multiply(element) {
    return element * 2;
}

console.log(each(numbers, multiply));