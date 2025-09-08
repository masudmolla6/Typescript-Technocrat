"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    // public name:string;
    // public species:string;
    // public sound:string;
    // parameter properties
    constructor(name, species, sound) {
        this.name = name;
        this.species = species;
        this.sound = sound;
        // this.name=name;
        // this.species=species;
        // this.sound=sound;
    }
    makeSound() {
        console.log(`the ${this.species} says ${this.sound}`);
    }
}
const dog = new Animal("German Shepart", "Dog", "Ghew Ghew");
const cat = new Animal("Parsian", "Cat", "Mew Mew");
dog.makeSound();
cat.makeSound();
