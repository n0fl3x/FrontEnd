function Car(brand) {
    this.transmission = 'manual',
    this.brand = brand
};

Car.prototype.get0to100 = function(time0to100) {
    console.log(`This car goes from 0 to 100 in ${time0to100} seconds.`)
};

function ManualTransmissionCar(brand, fuel) {
    this.brand = brand,
    this.fuel = fuel
};

ManualTransmissionCar.prototype = new Car();

ManualTransmissionCar.prototype.get0to100 = function(time0to100) {
    console.log(`This cool car goes from 0 to 100 in ${time0to100} seconds.`)
}

let ford = new Car('Ford');
let toyota = new ManualTransmissionCar('Toyota', 'gas');

console.log(ford);
ford.get0to100(5.1);
console.log(toyota);
toyota.get0to100(6.4);
