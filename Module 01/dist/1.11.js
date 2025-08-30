var _a, _b;
{
    // ternary operat
    const age = 21;
    // if(age>=18){
    //     console.log("Adult");
    // }
    // else{
    //     console.log("Not Adult");
    // }
    const isAdult = age >= 18 ? "adult" : "not adult";
    // console.log({isAdult});
    // nullish coalescing operator
    // null / undefine --> decision making;
    const isAuthenticated = null;
    const result1 = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : "guest";
    // const isAuthenticated2=undefined;
    // const result2=isAuthenticated2 ?? "not entre"
    const isAuthenticated2 = "";
    const result2 = isAuthenticated2 ? isAuthenticated2 : "not entre";
    console.log({ result2 });
    const myInfo = {
        myName: "Masud Rana",
        id: 67,
        dept: "cse",
        address: {
            presentAddess: "Dakha",
        },
        contact: 1345,
    };
    const parmenetAddress = (_b = (_a = myInfo === null || myInfo === void 0 ? void 0 : myInfo.address) === null || _a === void 0 ? void 0 : _a.parmenetAddress) !== null && _b !== void 0 ? _b : "No ParmenetAddress";
    console.log({ parmenetAddress });
}
export {};
