let person = {
    city: 'Msk'
};

let stud = Object.create(person);

stud.city = 'Spb';

console.log(person);
console.log(stud);
