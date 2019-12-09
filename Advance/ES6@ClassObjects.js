//Class of Object...
class Person{

	constructor(name, age, weight){
		this.name = name;
		this.age = age;
		this.weight = weight;
	}

	getWeight(){
		console.log(`weight is ${this.weight}`);
	}
}


//Objects of Class...
	let adam = new Person('Adam', 20, 89);
	console.log('Name is : ',adam.name);
	console.log('Age is : ',adam.age);
	adam.getWeight();

	let smith = new Person('Smith', 27, 92);
	smith.getWeight();