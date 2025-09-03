{
    // utility Types

    // Pick 

    type Person={
        name:string;
        age:number;
        email?:string;
        contactNo:number;
    }

    type NameAge=Pick<Person, "name" | "age">;

    // Omit 
    type ContactInfo=Omit<Person, "name" | "age">;

    // Required

    type PersoRequired=Required<Person>;

    // Partial

    type PersonPartial=Partial<Person>;

    // Readonly
    type PersonReadOnly=Readonly<Person>;

    const readOnlyPerson:Person={
        name:"Masud Rana",
        age:26,
        email:"mr@gmail.com",
        contactNo:56345,
    }

    readOnlyPerson.name="Masu";

    // Record Type

    type RecordType=Record<string, string>;
    const obj1:RecordType={
        a:"sdf",
        b:"sdfdf",
        c:"dfrdf",
        d:"rer",
    }

    const emptyObj:Record<string, unknown>={};


    // 
}