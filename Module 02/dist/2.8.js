var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
    const createPromise = () => {
        return new Promise((resolve, reject) => {
            const data = { something: "Something" };
            if (data) {
                resolve(data);
            }
            else {
                reject("Failed To Load Data");
            }
        });
    };
    const showData = () => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield createPromise();
        return data;
        // console.log(data);
    });
    const getTodo = () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield fetch("https://jsonplaceholder.typicode.com/todos/1");
        const data = yield response.json();
        console.log(data);
        return data;
    });
    getTodo();
    //
}
export {};
