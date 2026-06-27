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

console.log(car, car.getCarInfo());

// console.log(`I drive a ${car.brand} ${car.model}, its color is ${car.color}, places visited are ${car.placesVisited} and it was valued at ${car.price}`);