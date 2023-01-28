//4. Создайте объект calculator с тремя методами
//read(a, b) - принимает два аргумента и сохраняет их
//как свойства объекта
//sum() возвращает сумму сохраненных значений
//mult() перемножает сохраненные значения и возвращает результат

const calculator = {
    read(a, b) {
        this.first = a;
        this.second = b;
    },

    sum() {
        return this.first + this.second;
    },
    
    mult() {
        return this.first * this.second;
    },
};


calculator.read(2, 9);
console.log(calculator.sum());