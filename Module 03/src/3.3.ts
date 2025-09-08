{
    // type guard
    // Typeof --> type guard.

    type AlphaNumeric=number | string;

    const add=(param1:AlphaNumeric, param2:AlphaNumeric):AlphaNumeric=>{
        if(typeof param1==="number" && typeof param2==="number"){
            return param1+param2;
        }
        else{
            return param1.toString()+param2.toString();
        }
    }

    const result1=add(2, 3);
    const result2=add("10", 3);

    // console.log(result2);

    // type in --> type guard
    type NormalUser={
        name:string;
    }

    type AdminUser={
        name:string;
        role:"admin";
    }

    const getUser=(user:NormalUser | AdminUser)=>{
        if("role" in user){
            console.log(`My Name is ${user.name} and my role is ${user.role}`);
        }
        else{
            console.log("I am a normal user");
        }
    }

    const normalUser:NormalUser={
        name:"Masud Rana",
    }

    const adminUser:AdminUser={
        name:"Masud Rana",
        role:"admin"
    }

    getUser(normalUser);

    // 
}