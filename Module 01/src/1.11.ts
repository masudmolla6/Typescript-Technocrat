{
    // ternary operat

    const age=21;
    // if(age>=18){
    //     console.log("Adult");
    // }
    // else{
    //     console.log("Not Adult");
    // }

    const isAdult=age>=18 ? "adult":"not adult";

    // console.log({isAdult});


    // nullish coalescing operator
    // null / undefine --> decision making;

    const isAuthenticated=null;

    const result1=isAuthenticated??"guest";


    // const isAuthenticated2=undefined;
    // const result2=isAuthenticated2 ?? "not entre"

    const isAuthenticated2="";
    const result2=isAuthenticated2 ?isAuthenticated2 : "not entre"


    console.log({result2})


    // optional chaining
    
    type Myinfo = {
      myName: string;
      id: number;
      dept: string;
        address:{
            presentAddess:string;
        };
      contact: number;
    };

    const myInfo: Myinfo = {
      myName: "Masud Rana",
      id: 67,
      dept: "cse",
      address:{
        presentAddess:"Dakha",
      },
      contact: 1345,
    };

    const parmenetAddress=myInfo?.address?.parmenetAddress ?? "No ParmenetAddress";
    console.log({parmenetAddress});


}