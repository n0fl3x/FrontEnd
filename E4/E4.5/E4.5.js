/*
Переписать консольное приложение из предыдущего юнита на классы.

Имена классов, свойств и методов должны быть информативными;
Соблюдать best practices;
Использовать синтаксис ES6.
*/


class ElectroTool {
    constructor(name, brand, isOn, power) {
        this.name = name;
        this.brand = brand;
        this.isOn = isOn || false;
        this.power = power;
    }

    changeStatus() {
        if (this.isOn == true) {
            this.isOn = false;
            console.log(`${this.name} turned off.`);
        } else {
            this.isOn = true;
            console.log(`${this.name} turned on.`);
        }
    }

    showPower() {
        console.log(`${this.name} by ${this.brand} consume ${this.power} watts per hour.`)
    }
};

console.log(ElectroTool);
console.log('----------');

let windBlower = new ElectroTool('MyCooler', 'HiSense', true, 600);
console.log(windBlower);
windBlower.showPower();
windBlower.changeStatus();
windBlower.changeStatus();
console.log('----------');


//
class CleaningTool extends ElectroTool {
    constructor(name, brand, isOn, power, washing) {
        super(name, brand, isOn, power);
        this.washing = washing || false;
    }

    cleanSomething() {
        if (this.washing == true) {
            console.log(`${this.name} by ${this.brand} wash something.`)
        } else {
            console.log(`${this.name} by ${this.brand} dry clean something.`)
        }
    }
};

console.log(CleaningTool);
console.log('----------');

let dishWasher = new CleaningTool('MyDishWasher', 'Leran', false, 1450, true);
console.log(dishWasher);
dishWasher.changeStatus();
dishWasher.showPower();
dishWasher.cleanSomething();
dishWasher.changeStatus();
console.log('----------');

let vacuumCleaner = new CleaningTool('MyCleaner', 'Xiaomi', true, 150, false);
console.log(vacuumCleaner);
vacuumCleaner.showPower();
vacuumCleaner.cleanSomething();
vacuumCleaner.changeStatus();
console.log('----------');


//
class ComfortTool extends ElectroTool {
    constructor(name, brand, isOn, power, doWhat) {
        super(name, brand, isOn, power);
        this.doWhat = doWhat;
    }

    makeComfort() {
        console.log(`${this.name} by ${this.brand} currently ${this.doWhat}.`)
    }
};

console.log(ComfortTool);
console.log('----------');

let airHumidifier = new ComfortTool('MyHumidifier', 'Bosh', false, 120, 'humidify air');
console.log(airHumidifier);
airHumidifier.changeStatus();
airHumidifier.showPower();
airHumidifier.makeComfort();
console.log('----------');

let breezer = new ComfortTool('Breezer', 'Aki', true, 80, 'blow and clean air');
console.log(breezer);
breezer.showPower();
breezer.makeComfort();
breezer.changeStatus();
console.log('----------');


//
toolsArr = [
    windBlower,
    dishWasher,
    vacuumCleaner,
    airHumidifier,
    breezer,
];

function powerCalculate(tools) {
    let totalPower = 0;
    for (let item of tools) {
        if (item.isOn == true) {
            totalPower += item.power
        }
    };
    return 'Total power of currently turned on tools = ' + totalPower + ' watts per hour.';
};

console.log(powerCalculate(toolsArr));
