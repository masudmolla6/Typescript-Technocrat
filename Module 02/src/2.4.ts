{
    // Generic Interface
    interface Developer<T, X=undefined>{
        name:string;
        computer:{
            brand:string;
            model:string;
            releaseYear:number;
        },
        smartWatch:T;
        bike?:X;
    }

    interface SmartWatch{
        brand:string;
        model:string;
        display:string;
        heartTrack?:boolean;
        sleepTrack?:boolean;
    }

    type Bike={
        brand:string;
        engineCapacity:string;
    };

    const poorDeveloper:Developer<SmartWatch, Bike>={
        name:"Masud Rana",
        computer:{
            brand:"Walton",
            model:"A9",
            releaseYear:2019,
        },
        smartWatch:{
            brand:"apple",
            model:"34sd",
            display:"Gray",
            sleepTrack:true,
        }
    }


    const richDeveloper:Developer<SmartWatch, Bike>={
        name:"Karim KHan",
        computer:{
            brand:"lenovo",
            model:"A9",
            releaseYear:2025,
        },
        smartWatch:{
            brand:"apple",
            model:"34sd",
            display:"Gray",
            heartTrack:true,
        },
        bike:{
            brand:"Yamaha",
            engineCapacity:"300cc",
        },
    }




    // 
}