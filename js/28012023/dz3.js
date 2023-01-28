//3. Напишите ф-цию calcTotalPrice(stones, stonesName),
//которая принимает массив объектов и
//строку с названием камня.
//Функция считает и возвращает общую стоимость камней
//с именем, ценой и количеством из объекта

const stones = [
  { name: "Изумруд", price: 1300, quantity: 4 },
  { name: "Бриллиант", price: 2700, quantity: 6 },
  { name: "Сапфир", price: 400, quantity: 7 },
  { name: "Щебень", price: 150, quantity: 100 },
];

function calcTotalPrice(obj, stonesName) {
    for (const stone of obj) {
        if (stone.name === stonesName) {
            return stone.price * stone.quantity;
        }
    }
}

console.log(calcTotalPrice(stones, 'Щебень'));