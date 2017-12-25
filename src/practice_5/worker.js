import Person from "../../src/practice_4/person.js";
module.exports=class Woker extends Person{
	constructor(name,age){
		super(name,age);
	}
	introduce(){
		let intro=super.introduce()+" I am a Teacher. I have a job.";
		return intro;
	}
};



