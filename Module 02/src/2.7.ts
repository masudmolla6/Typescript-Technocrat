{
    // Generic Constraints with keyof operator
    type Vehicle={
        bike:string;
        car:string;
        ship:string;
    }

    type Owner="bike"|"car"|"ship"; //maOwner

    type Owner2=keyof Vehicle;

    const Person:Owner="bike";

    const Person2:Owner2="car";


    const getPropertyValue=<X, Y extends keyof X>(obj:X, key:Y)=>{
        return obj[key]
    }

    const user={
        name:"Masud",
        age:23,
        address:"Dhaka",
    }

    const result1=getPropertyValue(user,"age");






    // 
}