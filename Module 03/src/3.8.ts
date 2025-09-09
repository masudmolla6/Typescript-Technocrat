{
  //  Polymorphism(bohurop);

  class Person{
    getSleep(){
        console.log("I am sleeping 8 Hour");
    }
  }

  class Student extends Person {
    getSleep() {
      console.log("I am sleeping 7 Hour");
    }
  }
  
  class Developer extends Person {
    getSleep() {
      console.log("I am sleeping 6 Hour");
    }
  }

  const getSleepinghour=(params:Person)=>{
    params.getSleep();
  }

  const person=new Person();
  const student=new Student();
  const developer=new Developer();

  // getSleepinghour(person);
  // getSleepinghour(student);
  // getSleepinghour(developer);


  class Shape{
    getArea():number{
      return 0;
    }
  }
  
  //circle-->pi*r*r
  class Circle extends Shape{
    public radius:number;
    constructor(radius:number){
      super();
      this.radius=radius;
    }

    getArea():number{
      return Math.PI*this.radius*this.radius;
    }
  }

  // rectangle-->height*width

    class Rectangle extends Shape {
      public height: number;
      public width: number;
      constructor(height: number, width: number) {
        super();
        this.height=height;
        this.width=width;
      }

      getArea(): number {
        return Math.PI * this.height * this.width;
      }
    }

    const getShape=(params:Shape)=>{
      console.log(params.getArea());
    }

    const shape1=new Shape();
    const shape2=new Circle(32);
    const shape3=new Rectangle(32, 45);

    getShape(shape1);
    getShape(shape2);
    getShape(shape3);

    // const resultCircle=circle.getArea();
    // const resultRectangle=rectangle.getArea();

    // console.log(resultCircle);
    // console.log(resultRectangle);



  //
}