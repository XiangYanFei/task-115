module.exports=class Class{
	constructor(number){
		this.number=number;
		this.leader=0;
	}
	getDisplayName(){
		return "Class "+this.number;
	}
	assignLeader(stu){
		if(this.number===stu.klass.number){
				this.leader=stu;
			}
	}
};







