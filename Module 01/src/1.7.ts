{
// spread Operator;
// rest operator;
// Destructuring;


// spread operator
const num1:number[]=[1,2,3,4,5];
const num2:number[]=[34,56,78];

const allNumber:number[]=[
    ...num1,
    ...num2
]

const friends1={name1:"Masud", name2:"Rana"};
const friends2={name3:"karim", nam4:"rahim"};

const allFriends={
    ...friends1,
    ...friends2
};

// Rest Operator
const myFriends=(...friends:string[])=>{
    friends.forEach((friend)=>console.log(friend));
}

myFriends("Masud", "Kraim", "Rahim", "Rahul");
// console.log(myFriends);



}