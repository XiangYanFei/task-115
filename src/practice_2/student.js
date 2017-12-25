import Person from "../../src/practice_2/person.js";
module.exports=class Student extends Person{
	constructor(name,age,klass){
		super();
		this.name=name;
		this.age=age;
		this.klass=klass;
	}
	introduce(){
		let intro="I am a Student. I am at Class "+this.klass+".";
		return intro;
	}
};
