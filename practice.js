//This is the practice of JavaScript to swithing NodeJS/ReactJS...
class MyCar{

	constructor(manufacturarName, carModel, carColor, fuel){
		this.manufacturarName = manufacturarName;
		this.carModel = carModel;
		this.carColor = carColor;
		this.fuel = fuel;
	}

	amountOfFuel(user){
		this.fuel = this.fuel - user;
	}

	getFuelAmount(){
		return `${this.fuel} is the amount of fuel!`;
	}

};

//Created an object inner here..
const car = new MyCar('TOYOTA', 'ZRX', 'red', 1200);

console.log('Brand Name :',car.manufacturarName);
console.log('Model :',car.carModel);
console.log('Car Color :',car.carColor);
	car.amountOfFuel(150);
console.log(car.getFuelAmount());	


