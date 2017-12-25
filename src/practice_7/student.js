import Person from "../../src/practice_7/person.js";
module.exports=class Student extends Person{
	constructor(name,age,klass){
		super(name,age);
		this.klass=klass;
	}
	introduce(){
		let intro=super.introduce()+" I am a Student. I am at Class "+this.klass.number+".";
		return intro;
	}
};





