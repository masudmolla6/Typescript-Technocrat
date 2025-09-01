{
    // generic function
    const createArray=(params:string):string[]=>{
        return [params];
    }

    const createArrayWithGeneric=<T>(params:T):T[]=>{
        return [params];
    }

    const result1=createArray("Bangladesh");

    const result2=createArrayWithGeneric<string>("Bangladesh");

    interface Student{
        id:number;
        name:string;
    }

    const resGenericObject=createArrayWithGeneric<Student>({
        id:23,
        name:"Masud Rana",
    })




    const createArrayWithTuple=<T,Q>(param1:T, param2:Q):[T, Q]=>{
        return [param1, param2];
    }


    // const result10=createArrayWithTuple<string, number>("Bangladesh, 23);


    const resGeneric12=createArrayWithTuple<string,{name:string}>("Masud Rana", {name:"Masud Rana"});


    const addToStudent=<T>(student:T)=>{
        const course="Next Lavel Web Development";
        return {
            ...student,
            course,
        }
    }

    const addStudent=addToStudent({
        name:"Masud Rana",
        email:"masud@gmail.com"
    })


    // 
}