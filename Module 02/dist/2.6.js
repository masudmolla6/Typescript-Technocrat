{
    // Constraints
    const addToStudent = (student) => {
        const course = "Next Lavel Web Development";
        return Object.assign(Object.assign({}, student), { course });
    };
    const addStudent1 = addToStudent({
        id: 234,
        name: "Masud Rana",
        email: "md@gmail.com",
    });
    const addStudent2 = addToStudent({
        id: 34,
        name: "karim",
        email: "kr@gmail.com",
        emni: "sfgdfd"
    });
    const addStudent3 = addToStudent({
        id: 23,
        name: "Rana",
        email: "masud@gmail.com",
    });
    // 
}
export {};
