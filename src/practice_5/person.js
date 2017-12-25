module.exports=class Person{
	constructor(name,age){
		this.name=name;
		this.age=age;
	}
introduce(){
		let intro="My name is "+this.name+". I am "+this.age+" years old.";
		return intro;
	}
};




