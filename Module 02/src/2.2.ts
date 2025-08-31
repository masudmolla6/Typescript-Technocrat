{
    // type alias and interface

    type User1={
        name:string;
        age:number;
    }

    interface User2 {
      name: string;
      age: number;
    }

    // type UserWithRole1=User1 & {
    //     role:string;
    // }
    type UserWithRole1=User2 & {
        role:string;
    }

    // interface UserWithRole2 extends User2 {
    //     role:string;
    // }
    interface UserWithRole2 extends User1 {
        role:string;
    }

        const user: UserWithRole2 = {
          name: "Masud Rana",
          age: 27,
          role: "admin",
        };

        // JS-> object=object, array=ojectc, function=object;


        // Array
        type Roll1=number[];
        interface Roll2{
            [index:number]:number;
        }

        const roll:Roll2=[1,2,4,45,5,6];


        // Function
        type Add1=(num1:number, num2:number)=>number;
        interface Add2{
            (num1:number, num2:number):number;
        }

        const add:Add2=(num1, num2)=>num1+num2;




    //
}