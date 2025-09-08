"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
{
    const add = (param1, param2) => {
        if (typeof param1 === "number" && typeof param2 === "number") {
            return param1 + param2;
        }
        else {
            return param1.toString() + param2.toString();
        }
    };
    const result1 = add(2, 3);
    const result2 = add("10", 3);
    const getUser = (user) => {
        if ("role" in user) {
            console.log(`My Name is ${user.name} and my role is ${user.role}`);
        }
        else {
            console.log("I am a normal user");
        }
    };
    const normalUser = {
        name: "Masud Rana",
    };
    const adminUser = {
        name: "Masud Rana",
        role: "admin"
    };
    getUser(normalUser);
    // 
}
