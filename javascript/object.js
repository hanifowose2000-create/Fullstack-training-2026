// objects - identified with curly braces
const visitedPlaces = ["abuja", "kwara", "lagos", "ogun"];

const car = {
  brand: "Toyota",
  model: "Corolla",
  color: "blue",
  getCarInfo() {
    return `${this.brand} ${this.model}`;
  },
  mileage: 2000,
  isNew : false,
  price: 300000,
  placesVisited: visitedPlaces
};

car.ownershipNumbers = 4;
car.engine = "4 cylinders";
car.fuelType = "fuel";

// delete car.model;
// delete car.brand;

// array.unshift()

//console.log(car, car.getCarInfo());

// console.log(`I drive a ${car.brand} ${car.model}, its color is ${car.color}, places visited are ${car.placesVisited} and it was valued at ${car.price}`);

// example 2
//  const animal = {
//  type: "dog",
//  name: "romeo",
//  breed: "eskimo",
//  color: "white",
//  height: "12cm"
// }

// add new properties to an object
// animal.hasClothes = false;
// animal.newThing = "something shaaaa"

// console.log(animal);

// dog, cow, lion, monkey

// array of objects
const animals = [
  {
    type: "dog",
    name: "romeo",
    breed: "eskimo",
    color: 'white',
    height: 12
  },{
    type: "cattle",
    name: "boooo",
    breed: "semmental cattle",
    color: 'brown',
    height: 70
  },{
    type: "lion",
    name: "simba jr",
    breed: "Northern lion",
    color: 'light-brown',
    height: 45
  }
]

// animals.filter(a => console.log(a.height >50) )
// animals.map((a) => console.log(a.type, a.breed));

// const dontDoThis = 1,2,4, 55, ...someNumbers]

const newAnimals = [...animals, {
  type: "something",
  name: "no ideas",
  breed: "whyyy",
  color: "white??",
  height: 2
}]

console.log(newAnimals);