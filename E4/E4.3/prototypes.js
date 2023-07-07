/*
Задание 1:
Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль
все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.
*/


function getObjectOwnProperties(object) {
    for (let prop in object) {
        if (object.hasOwnProperty(prop)) {
            console.log(`${prop} = ${object[prop]}`)
        }
    }
};

let newObj = {
    a: 1,
    b: 2,
    c: 3,
};

let newChildObj = Object.create(newObj);
newChildObj.d = 4;
newChildObj.e = 5;

getObjectOwnProperties(newObj);
console.log('-----')
getObjectOwnProperties(newChildObj);


/*
Задание 2:
Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет
есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.
*/


function hasThisNameProperty(str, obj) {
    for (let pr in obj) {
        return (pr == str)? true : false
    }
};

console.log('-----')
console.log(hasThisNameProperty('a', newObj));
console.log(hasThisNameProperty('f', newObj));
console.log(hasThisNameProperty('d', newChildObj));
console.log(hasThisNameProperty('a', newChildObj));
console.log(hasThisNameProperty('q', newChildObj));


/*
Задание 3:
Написать функцию, которая создает пустой объект, но без прототипа.
*/


function createEmptyObj() {
    return Object.create(null)
};

console.log(createEmptyObj());
console.log(createEmptyObj());
