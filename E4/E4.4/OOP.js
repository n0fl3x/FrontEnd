/*
Реализовать следующее консольное приложение подобно примеру, который разбирался в видео.
Реализуйте его на прототипах.
Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность. 
Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер).
Выбрав прибор, подумайте, какими свойствами он обладает.

Определить родительскую функцию с методами, которые включают/выключают прибор из розетки.
Создать делегирующую связь [[Prototype]] для двух конкретных приборов.
У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
Создать экземпляры каждого прибора.
Вывести в консоль и посмотреть результаты работы, гордиться собой. :)

Имена функций, свойств и методов должны быть информативными.
Соблюдать best practices:
использование camelCase нотации для переменных и методов, PascalCase для названия функций-конструкторов и классов;
информативные имена (а не a, b);
четкая связь между классом и его экземплярами (класс описывает множество, а экземпляр конкретную реализацию);
использование синтаксиса ES6 (кроме функции-конструкторов) и т. д.
*/


function ElectroTool(power, brand) {
    this.power = power,
    this.brand = brand
};

ElectroTool.prototype.changeStatus = function(isOn) {
    if (isOn == true) {
        isOn = false;
        console.log(`Current status of ${this.brand} is off (${isOn})`);
    } else {
        isOn = true;
        console.log(`Current status of ${this.brand} is on (${isOn})`);
    }
};

//
function KitchenTool(name, power, brand) {
    this.name = name,
    this.power = power,
    this.brand = brand
};

KitchenTool.prototype = new ElectroTool();

KitchenTool.prototype.doSomethingAtKitchen = function(action) {
    console.log(`${action} in the kitchen by ${this.name}.`)
};

//
function HomeTool(name, power, brand) {
    this.name = name,
    this.power = power,
    this.brand = brand
};

HomeTool.prototype = new ElectroTool();

HomeTool.prototype.doSomethingAtHome = function(action) {
    console.log(`${action} at home by ${this.name}.`)
};

//
let lightBulb = new ElectroTool(60, 'Xiaomi');
lightBulb.changeStatus(true);
lightBulb.changeStatus(false);

let coffeeMaschine = new KitchenTool('MyCoffee', 400, 'Delonghi');
coffeeMaschine.doSomethingAtKitchen('Make cofee');
coffeeMaschine.changeStatus(false);

let vacuumCleaner = new HomeTool('MyCleaner', 150, 'Xiaomi');
vacuumCleaner.doSomethingAtHome('Clean floor');
vacuumCleaner.changeStatus(true);

console.log(lightBulb);
console.log(coffeeMaschine);
console.log(vacuumCleaner);
