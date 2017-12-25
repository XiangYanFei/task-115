import Person from "../../src/practice_6/person.js";
module.exports=class Teacher extends Person{
	constructor(name,age,klass){
		super(name,age);
		this.klass=klass;
	}
	introduce(){
		if(this.klass){
			let intro=super.introduce()+" I am a Teacher. I teach Class "+this.klass+".";
			return intro;	
		}
		else{
			let intro=super.introduce()+" I am a Teacher. I teach No Class.";
			return intro;	
		}
	}
};




