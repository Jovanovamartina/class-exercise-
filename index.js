console.log("connected");

class Person{
    constructor(firstName,lastName,age){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
    }
    getFullName(){
        console.log(`the full name is ${this.firstName} ${this.lastName}`)
    }
};
let studentClass= new Person("martina","jovanova",26)
console.log(studentClass);
studentClass.getFullName();

class Student extends Person{
    constructor(firstName,lastName,age,academyName,studentId){
        super(firstName,lastName,age)
        this.academyName=academyName;
        this.studentId=studentId;
    }
    study(){
        console.log(`student ${this.firstName} is studing in the ${this.academyName} academy`);

    }
}
let studentInfo=new Student("martina","jovanova",26,"sedc",12345)
console.log(studentInfo);
studentInfo.study();

//part 2

class DesignStudent extends Student{
    constructor(firstName, lastName, age,academyName ,studentId, isStudentOfTheMonth){
        super(firstName, lastName, age, academyName, studentId);
        this.isStudentOfTheMonth = isStudentOfTheMonth;
    }
    attendAdobeExam(){ console.log(`The student ${this.firstName} is attending an Adobe Exam`) };
};
 
class CodeStudent extends Student{
    constructor(firstName, lastName, age, academyName,studentId, hasIndividualProject, hasGroupProject){
        super(firstName, lastName, age, academyName, studentId);
        this.hasIndividualProject = hasIndividualProject;
        this.hasGroupProject = hasGroupProject;
    }
    doProject(type){
        if(type === "individual"){
            this.hasGroupProject = false;
            this.hasIndividualProject = true;
        }else if(type === "group"){
            this.hasGroupProject = true;
            this.hasIndividualProject = false;
        }
    };
};
 
class NetworkStudent extends Student{
    constructor(firstName, lastName, age, academyName,studentId, academyPart){
        super(firstName, lastName, age, academyName, studentId)
        this.academyPart = academyPart;
    };
    attendCiscoExam(){console.log(`The student ${this.firstName} is doing a cisco exam`)};
};
 
let student_1 = new DesignStudent("sofia", "elenova", 30, 123, true);
console.log(student_1);
student_1.attendAdobeExam();
let student_2 = new CodeStudent("simona", "martinova", 28, 321, false, true);
console.log(student_2);
student_2.doProject();
let student_3 = new NetworkStudent("monika", "dimova", 22, 222, 3);
console.log(student_3);
student_3.attendCiscoExam();
