"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
{
    // oop-> inheritence
    class Parent {
        constructor(name, age, addess) {
            this.name = name;
            this.age = age;
            this.addess = addess;
        }
        getSleep(numberOfHour) {
            console.log(`Mr ${this.name} everyday sleep ${numberOfHour} hour`);
        }
    }
    class Student extends Parent {
        constructor(name, age, address) {
            super(name, age, address);
        }
    }
    class Teacher extends Parent {
        constructor(name, age, address, designation) {
            super(name, age, address);
            this.designation = designation;
        }
        takeClass(numberOfClass) {
            console.log(`Mr. ${this.name} take class ${numberOfClass} perday.`);
        }
    }
    const mySelf = new Student("Masud Rana", 29, "Dhaka");
    // mySelf.getSleep(8);
    const myTeacher = new Teacher("Jankar Mahabub", 35, "UK", "professor");
    myTeacher.takeClass(2);
    // 
}
