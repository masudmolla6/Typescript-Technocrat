{
    //
    // type asseriton
    const kgToGram = (value) => {
        if (typeof value === "string") {
            const convertingValue = parseFloat(value) * 1000;
            return convertingValue;
        }
        else if (typeof value === "number") {
            return value * 1000;
        }
    };
    const result1 = kgToGram("110");
    const result2 = kgToGram(20);
    try {
        throw new Error("Something went wrong!");
    }
    catch (error) {
        console.log(error.message);
    }
}
export {};
