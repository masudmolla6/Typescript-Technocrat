{
    // Generic

    // Array Type Generic

    type GenericArray<T> = Array<T>;

    // const rollNumber:number[]=[2,4,7,9,1];
    const rollNumber:GenericArray<number>=[2,4,7,9,1];

    // const mentors:string[] =["Masud", "Rana", "Karim", "Rahim"];
    const mentors:GenericArray<string> =["Masud", "Rana", "Karim", "Rahim"];

    // const boolArray:boolean[]=[true, false, true];
    const boolArray:GenericArray<boolean>=[true, false, true];


    // Generic Array of object

    const users:GenericArray<{name:string, age:number}>=[
        {
            name:"masud rana",
            age:27,
        },
        {
            name:"masud rana",
            age:27,
        }
    ]

    // Generic Tuple
    type GenericTuple<x,y>=[x,y];
    const userId:GenericTuple<number,{name:string, email:string}>=[
        5645634,
        {
            name:"Masud Rana",
            email:"ar@gmail.com",
        }
    ]




    // 
}