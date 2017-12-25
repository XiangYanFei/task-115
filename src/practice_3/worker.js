import Person from "../../src/practice_3/person.js";
module.exports=class Woker extends Person{
	constructor(name,age){
		super(name,age);
	}
	introduce(){
		let intro="I am a Worker. I have a job.";
		return intro;
	}
};

