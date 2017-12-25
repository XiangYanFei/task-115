import Person from "../../src/practice_9/person.js";
module.exports=class Teacher extends Person{
	constructor(id,name,age,klass){
		super(id,name,age);
		this.klass=klass;
	}
	introduce(){
		if(this.klass){
			let intro=super.introduce()+" I am a Teacher. I teach Class "+this.klass.number+".";
			return intro;	
		}
		else{
			let intro=super.introduce()+" I am a Teacher. I teach No Class.";
			return intro;	
		}
	}
	introduceWith(stu){
		if(this.klass.number===stu.klass.number){
			return super.introduce()+" I am a Teacher. I teach "+stu.name+".";
		}else{
			return super.introduce()+" I am a Teacher. I don't teach "+stu.name+".";
		}
	}
};







