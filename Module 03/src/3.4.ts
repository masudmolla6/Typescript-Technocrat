{
  // Instanceof guard
  class Animal {
    name: string;
    species: string;

    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }

    makeSound() {
      console.log("I am MAking Sound");
    }
  }

  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }

    makeBerk() {
      console.log("I am Berking");
    }
  }

  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }

    makeMew() {
      console.log("I am making mew mew");
    }
  }

  // Ar akto Smart Way te handle korar jonno amra function use korte pari
  const isDog = (animal: Animal):animal is Dog=> {
    return animal instanceof Dog;
  };

  const isCat = (animal: Animal):animal is Cat => {
    return animal instanceof Cat;
  };

  const getAnimale = (animale: Animal) => {
    // if (animale instanceof Cat) {
    //   animale.makeMew();
    // } else if (animale instanceof Dog) {
    //   animale.makeBerk();
    // } else {
    //   animale.makeSound();
    // }
    
    if (isCat(animale)) {
      animale.makeMew();
    } else if (isDog(animale)) {
      animale.makeBerk();
    } else {
      animale.makeSound();
    }
  };

  const dog = new Dog("Dog Bhai", "Dog");
  const cat = new Cat("Cat Bhai", "Cat");

  getAnimale(cat);

  //
}