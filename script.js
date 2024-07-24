// complete this js code
class Person{
	constructor(name,age){
		this._name = name;
		this._age = age;
	}

	greet(){
		console.log("Hello, my name is " + this._name + ", I am" + this._age + "years old.")
	}
}

class Employee extends Person{
	constructor(name,age,jobTittle){
		super(name,age);
		this._jobTittle = jobTittle;
	}

	jobGreet(){
		console.log('Hello, my name is ' + this._name + ", I am " + this._age + " years old, and my job tittle is " + this._jobTittle);
	}
}

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
