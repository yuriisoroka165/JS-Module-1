const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    this.potions.forEach((item, index) => {
        if (item.name === newPotion.name) {
            return `Error! Potion ${item.name} is already in your inventory!`;
        }
        qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqccs
    }),
      
    this.potions.push(newPotion);
  },
  removePotion(potionName) {
    this.potions.forEach((item, index) => {
        if (item.name === potionName) {
            this.potions.splice(item, 1);
        }
    })
  },
  updatePotionName(oldName, newName) {
    const potionIndex = this.potions.indexOf(oldName);

    if (potionIndex === -1) {
      return `Potion ${oldName} is not in inventory!`;
    }

    this.potions.splice(potionIndex, 1, newName);
  },
  // Change code above this line
};

function forPrint(arr) {
    for (let item of arr) {
        console.log(item);
    }
    console.log('//////////////////');
}

forPrint(atTheOldToad.getPotions()); //[ { name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 } ]
atTheOldToad.addPotion({ name: "Invisibility", price: 620 }); // в масиві potions останнім елементом буде цей об'єкт
atTheOldToad.addPotion({ name: "Power potion", price: 270 }); // в масиві potions останнім елементом буде цей об'єкт
// console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 })); // в масиві potions останнім елементом буде цей об'єкт
forPrint(atTheOldToad.getPotions());
console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 })); // в масиві potions останнім елементом буде цей об'єкт
forPrint(atTheOldToad.getPotions());
// Якщо зілля, що додається, вже є в масиві potions, метод addPotion повертає рядок з текстом з вихідного коду
// Якщо зілля, що додається, вже є в масиві potions, метод addPotion не додає в нього переданий об'єкт
// console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 })); //, масив potions не змінюється
// console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 240 })); //, массив potions не змінюється
// console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 })); //, повертає рядок "Error! Potion Dragon breath is already in your inventory!"
// console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 240 })); //, повертає рядок "Error! Potion Stone skin is already in your inventory!"
// console.log(atTheOldToad.removePotion("Dragon breath")); //, у властивості potions буде масив [ { name: "Speed potion", price: 460 }, { name: "Stone skin", price: 520 } ]
// console.log(atTheOldToad.removePotion("Speed potion")); //, у властивості potions буде масив [ { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 }]
// forPrint(atTheOldToad.getPotions());
// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth")); //, у властивості potions буде масив [{ name: "Speed potion", price: 460 }, { name: "Polymorth", price: 780 }, { name: "Stone skin", price: 520 } ]
// console.log(atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion")); //, у властивості potions буде масив [{ name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Invulnerability potion", price: 520 } ]
