"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
{
    // real implementation
    class Car1 {
        startEngine() {
            console.log("I am starting Engine");
        }
        stopEngine() {
            console.log("I am stoping Engine");
        }
        move() {
            console.log("I am moving engine");
        }
        test() {
            console.log("I am just testing");
        }
    }
    const toyota = new Car1();
    // toyota.startEngine();
    // 2.abstrac
    // idea
    class Car2 {
        test() {
            console.log("I am just testing");
        }
    }
    // Real implementation
    class Toyota extends Car2 {
        startEngine() {
            console.log("I am starting Engine");
        }
        stopEngine() {
            console.log("I am stoping Engine");
        }
        move() {
            console.log("I am moving engine");
        }
        test() {
            console.log("I am just testing");
        }
    }
    const hondaCar = new Toyota();
    // hondaCar.stopEngine();
    // 
}
