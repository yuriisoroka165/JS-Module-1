// 9. В переменной min лежит число от 0 до 59.
// Определите в какую четверть часа попадает
// это число(в первую, вторую, третью или четвертую).

let min = 31;

if (min >= 0 && min <= 15) {
    console.log('0-15');
} else if (min > 15 && min <= 30) {
    console.log('15-30');
} else if (min > 30 && min <= 45) {
    console.log('30-45');
} else if (min > 45 && min <= 60) {
    console.log('45-60');
}