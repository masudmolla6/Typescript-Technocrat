{
    //  Abstraction --> 1.interface ->2.Abstrac


    // 1.using interface

    //idea
    interface Vehicle1{
        startEngine():void;
        stopEngine():void;
        move():void;
    }

    // real implementation
    class Car1 implements Vehicle1{
        startEngine(): void {
            console.log("I am starting Engine");
        }
        stopEngine(): void {
            console.log("I am stoping Engine");
        }
        move(): void {
            console.log("I am moving engine");
        }
        test(){
            console.log("I am just testing");
        }
    }


    const toyota=new Car1();
    // toyota.startEngine();


    // 2.abstrac

    // idea
    abstract class Car2 {
      abstract startEngine(): void ;
      abstract stopEngine(): void ;
      abstract move(): void ;
      test() {
        console.log("I am just testing");
      }
    }

    // Real implementation
    class Toyota extends Car2 {
      startEngine(): void {
        console.log("I am starting Engine");
      }
      stopEngine(): void {
        console.log("I am stoping Engine");
      }
      move(): void {
        console.log("I am moving engine");
      }
      test() {
        console.log("I am just testing");
      }
    }



    const hondaCar=new Toyota();
    // hondaCar.stopEngine();






    // 
}