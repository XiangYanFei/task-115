import Person from "../../src/practice_10/person.js";
module.exports=class Teacher extends Person{
	constructor(id,name,age,klasses){
		super(id,name,age);
		this.klasses=klasses;
	}
	introduce(){
		if(this.klasses){
			let intro=super.introduce()+" I am a Teacher. I teach Class ";
			for(let i=0;i<this.klasses.length;i++)
				{
					intro+=this.klasses[i].number+", ";
				}
			intro=intro.substring(0,intro.length-2);
			intro+='.';
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








