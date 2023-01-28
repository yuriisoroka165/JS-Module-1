//5.1 Напишите функцию updateObject, которая принимает объект и возвращает
//новый объект без указанных параметров
//Ожидаемый результат ({a: 1, b: 2, c: 3}, 'b', 'a') => {c: 3}


function updateObject(obj, ...args) {
    const newObj = { ...obj };
    for (const key of Object.keys(newObj)) {
        if (args.includes(key)) {
            delete newObj[key];
        }
    }
    return newObj;
}

console.log(updateObject({ a: 1, b: 2, c: 3 }, 'b', 'a'));