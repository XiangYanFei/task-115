import Person from "../../src/practice_10/person.js";
module.exports=class Student extends Person{
	constructor(id,name,age,klass){
		super(id,name,age);
		this.klass=klass;
	}
	introduce(){
		if(this.klass.leader!=0){
			let intro=super.introduce()+" I am a Student. I am Leader of Class "+this.klass.number+".";
			return intro;
		}else{
			let intro=super.introduce()+" I am a Student. I am at Class "+this.klass.number+".";
			return intro;
		}
	}
	
};








