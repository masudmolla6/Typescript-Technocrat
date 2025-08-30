// nullable type
const searching = (value) => {
    if (value) {
        console.log("Searching");
    }
    else {
        console.log("Not Searching Anything");
    }
};
searching(null);
// unknow type
const getSpeedMeterPerSecound = (value) => {
    if (typeof (value) == "number") {
        const convertedSpeed = (value * 1000) / 3600;
        console.log(convertedSpeed);
    }
    if (typeof value === "string") {
        const [speed, unit] = value.split(" ");
        const numericSpeed = parseFloat(speed); //
        const convertedSpeed = (numericSpeed * 1000) / 3600;
        console.log(convertedSpeed);
    }
    else {
        console.log("Wrong Input");
    }
};
getSpeedMeterPerSecound("120 km-1");
const throwError = (msg) => {
    throw new Error(msg);
};
throwError("I get a error try again later.");
export {};
