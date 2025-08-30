{
// union type and intersection type;

    // union type.
type MyInfo={
    name:string;
    email?:string;
    gender:"male"|"female"
    bloodGroup:"O+"|"A+"|"AB+";
}

const myInfo:MyInfo={
    name:"Masud",
    gender:"male",
    bloodGroup:"O+",
}

type FrontendDeveloper="fakibajDeveloper"|"juniorDeveloper";
type FullstackdDeveloper="frontendDeveloper"|"expertDeveloper";

type Developer=FrontendDeveloper | FullstackdDeveloper;

const developer:Developer="frontendDeveloper";

// intersection type.

type MernStack={
    skills:string[];
    designation1:"MernStack";
}

type FullStack={
    skills:string[];
    designation2:"FullStack";
}

type FullSatckDev=MernStack & FullStack;

const fullSatckDev:FullSatckDev={
    skills:["Html", "css"],
    designation1:"MernStack",
    designation2:"FullStack",
}


}