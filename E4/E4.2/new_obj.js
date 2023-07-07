/*
Создайте пустой объект.
Добавьте несколько свойств со значениями разных типов.
Добавьте метод.
Удалите одно из созданных свойств.
*/


let myNewObj = {};

myNewObj.fieldOne = 'ok';
myNewObj.fieldTwo = 18;
myNewObj.fieldThree = true;

myNewObj.switchFieldThree = function() {
    if (this.fieldThree == true) {
        this.fieldThree = false
    } else {
        this.fieldThree = true
    };
    console.log(this.fieldThree);
};

delete myNewObj.fieldOne;

console.log(myNewObj);
console.log('fieldOne' in myNewObj);

myNewObj.switchFieldThree();
myNewObj.switchFieldThree();
