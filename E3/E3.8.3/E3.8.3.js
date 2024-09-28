/*
Напишите функцию, которая принимает два натуральных числа x и n и возвращает x в степени n.
Иначе говоря, умножает x на себя n раз и возвращает результат.
Используйте Arrow Function синтаксис.
Протестируйте функцию на любых значениях и выведите результат в консоль.
*/


const powerFunc = (x, n) => {
    if (typeof(x) != "number") {
        return "Invalid type of parameter base";
    };

    if (typeof(n) != "number") {
        return "Invalid type of parameter power";
    };

    return x ** n;
};

console.log(powerFunc(2, 4));
console.log(powerFunc("4", 4));
console.log(powerFunc(2, "3"));
console.log(powerFunc(4, 0.5));
console.log(powerFunc(0.5, 3));
console.log(powerFunc(2, -2));
console.log(powerFunc(0, 1));
console.log(powerFunc(4, 0));
console.log(powerFunc(0, 0));
console.log(powerFunc(0, -1));
console.log(powerFunc(NaN, NaN));
console.log(powerFunc(-4, 0,5));
console.log(powerFunc(-16, -0,5));
