module.exports=class Class{
	constructor(number){
		this.number=number;
		this.leader=[];
		this.students=[];
		this.teachers=[];
	}
	
	getDisplayName(){
		return "Class "+this.number;
	}
	
	assignLeader(stu){
		if(this.number===stu.klass.number){
				this.leader=stu;
			}
		else{
			console.log("It is not one of us.");
		}
	}
	
	appendMember(stu){
		stu.klass=this;
		this.students=stu;
	}
	
	isIn(teacher,student){  //判断student是否在teacher所教的班级中
		if(teacher.isTeaching(student)){
			let result="I am "+teacher.name+". I know "+student.name+" has joined Class "+student.klass.number+".";
				console.log(result);
		}
	}
	
	isInLeader(teacher,student){//判断student是否在teacher所教的班级中以及是否是班长 
		if(teacher.isTeaching(student)){
			if(student.klass.leader===student){//判断student是否是班长
			console.log("I am "+teacher.name+". I know "+student.name+" become Leader of Class "+student.klass.number+".");
			}
		}
		
	}
	
	registerJoinListener(teacher){
		this.teachers=teacher;
	}
	
	registerAssignLeaderListener(teacher){
		this.teachers=teacher;
	}
};









