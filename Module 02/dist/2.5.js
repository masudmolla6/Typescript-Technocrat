{
    // generic function
    const createArray = (params) => {
        return [params];
    };
    const createArrayWithGeneric = (params) => {
        return [params];
    };
    const result1 = createArray("Bangladesh");
    const result2 = createArrayWithGeneric("Bangladesh");
    const resGenericObject = createArrayWithGeneric({
        id: 23,
        name: "Masud Rana",
    });
    const createArrayWithTuple = (param1, param2) => {
        return [param1, param2];
    };
    // const result10=createArrayWithTuple<string, number>("Bangladesh, 23);
    const resGeneric12 = createArrayWithTuple("Masud Rana", { name: "Masud Rana" });
    const addToStudent = (student) => {
        const course = "Next Lavel Web Development";
        return Object.assign(Object.assign({}, student), { course });
    };
    const addStudent = addToStudent({
        name: "Masud Rana",
        email: "masud@gmail.com"
    });
    // 
}
export {};
