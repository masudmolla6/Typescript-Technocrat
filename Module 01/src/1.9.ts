{
// type alias

type MyName=string;

const myName:MyName="Masud Rana";

type Roll=number;

const roll:Roll=10;

type IsAdmin=boolean;

const isAdmin:IsAdmin=true;

type Myinfo={
    myName:string;
    id:number;
    dept:string;
    contact:number;
}

const myInfo:Myinfo={
    myName:"Masud Rana",
    id:67,
    dept:"cse",
    contact:1345
}

type Add=(num1:number, num2:number)=>number;
const add:Add=(num1, num2)=>num1+num2;


}