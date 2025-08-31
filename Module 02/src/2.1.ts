{
    //
    // type asseriton

    const kgToGram=(value: string | number):string | number| undefined=>{
        if(typeof value === "string"){
            const convertingValue=parseFloat(value)*1000;
            return convertingValue;
        }
        else if(typeof value === "number"){
            return value*1000;
        }
    }

    const result1=kgToGram("110") as string;
    const result2=kgToGram(20) as number;

    type CustomeError={
        message:string;
    }

    try {
        
    } catch (error) {
        console.log((error as CustomeError).message;)
    }




}