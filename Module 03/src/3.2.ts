{
    // oop-> inheritence
    class Parent{
        name:string;
        age:number;
        addess:string;

        constructor(name:string, age:number, addess:string){
            this.name=name;
            this.age=age;
            this.addess=addess;
        }

        getSleep(numberOfHour:number){
            console.log(`Mr ${this.name} everyday sleep ${numberOfHour} hour`);
        }
    }

    class Student extends Parent{
        constructor(name:string, age:number, address:string){
            super(name, age, address);
        }
    }
    
    class Teacher extends Parent{
        designation:string;

        constructor(name:string, age:number, address:string, designation:string){
            super(name, age, address);
            this.designation=designation;
        }

        takeClass(numberOfClass:number){
            console.log(`Mr. ${this.name} take class ${numberOfClass} perday.`)
        }
    }

    const mySelf=new Student("Masud Rana", 29, "Dhaka");
    // mySelf.getSleep(8);

    const myTeacher=new Teacher("Jankar Mahabub", 35, "UK", "professor");
    
    myTeacher.takeClass(2);





    // 
}