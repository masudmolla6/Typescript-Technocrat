{
    // conditional type
    type a1=number;
    type b1=undefined;

    type x=a1 extends null ? true : false; //conditional type

    type y=a1 extends null ? true : b1 extends undefined ? undefined : false; //conditional type


    type Sheikh={
        bike:string;
        car:string;
        ship:string;

    }

    type CheckedVehicle<T>=T extends keyof Sheikh ? true : false;

    type HasCar=CheckedVehicle<"car">





    // 
}