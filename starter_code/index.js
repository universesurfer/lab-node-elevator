const Elevator = require('./elevator.js');
const Person = require('./person.js');


let elevator = new Elevator();
let person1 = new Person("Julia", 2, 7);
let person2 = new Person("Nicholas", 3, 8);
let person3 = new Person("Sabrina", 10, 0);

console.log(elevator);

elevator.update();
elevator.start();
// elevator.stop();
// elevator.floorUp();
elevator.floorUp();


elevator.call(person1);
elevator.call(person2);
elevator.call(person3);
