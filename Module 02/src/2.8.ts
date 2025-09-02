{
  // Asynchronous typescript

//   simulate
                    // ---string---
//   const createPromise=():Promise<string>=>{
//       return new Promise<string>((resolve, reject)=>{
//         const data:string="Something";
//         if(data){
//             resolve(data);
//         }
//         else{
//             reject("Failed To Load Data");
//         }

//     })
//   }

//   const showData=async():Promise<string>=>{
//     const data:string=await createPromise();
//     return data;
//     // console.log(data);
//   }


                // ---boolean---
//   const createPromise = (): Promise<boolean> => {
//     return new Promise<boolean>((resolve, reject) => {
//       const data: boolean = true;
//       if (data) {
//         resolve(data);
//       } else {
//         reject("Failed To Load Data");
//       }
//     });
//   };

//   const showData = async (): Promise<boolean> => {
//     const data: boolean = await createPromise();
//     return data;
//     // console.log(data);
//   };



            // ---object---
    
    
  const createPromise = (): Promise<{ something: string }> => {
    return new Promise<{ something: string }>((resolve, reject) => {
      const data: { something: string } = { something: "Something" };
      if (data) {
        resolve(data);
      } else {
        reject("Failed To Load Data");
      }
    });
  };

  const showData = async (): Promise<{ something: string }> => {
    const data: { something: string } = await createPromise();
    return data;
    // console.log(data);
  };

  // showData();

type ToDo = { userId: number; id: number; title: string; completed:boolean };

  const getTodo=async():Promise<ToDo> =>{
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data=await response.json();
    console.log(data);
    return data;
  }

  getTodo();

  //
}