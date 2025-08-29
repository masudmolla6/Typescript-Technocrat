// Function
// -----------------
// 1-Normal Function
// 2-Arrow Function
// Normal Function
function add(num1, num2) {
    return num1 + num2;
}
add(10, 20);
// Arrow Function
const add2 = (num1, num2) => num1 + num2;
add2(20, 30);
// object->function->method
const poorUser = {
    myName: "Masud",
    balance: 0,
    addBalance(balance) {
        return `My New Balance is : ${this.balance + balance}`;
    }
};
const arr = [1, 2, 3, 4, 5];
const newArray = arr.map((element) => {
    return element * element;
});
export {};
