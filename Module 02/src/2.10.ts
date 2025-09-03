{
    // Mapped Type

    const arrayOfNumbers:number[]=[1,2,3,4];

    const arrayOfString=arrayOfNumbers.map((num)=>{
        return num;
    })

    // console.log(arrayOfString);

    type AreaNumber={
        height:number;
        width:number;
    }

    type Height=AreaNumber["height"];

    // type AreaString={
    //     [key in keyof AreaNumber]:string;
    // }
    
    type AreaString<T>={
        [key in keyof T]:T[key];
    }

    const area1:AreaString<{height:string; width:number}>={
        height:"100",
        width:50,
    }


    // 
}