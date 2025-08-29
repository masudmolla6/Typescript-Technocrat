                        // Function
                    // -----------------
// 1-Normal Function
// 2-Arrow Function

// Normal Function


function add(num1:number, num2:number):number{
    return num1+num2;
}

add(10, 20);

// Arrow Function

const add2=(num1:number, num2:number)=>num1+num2;

add2(20, 30);


// object->function->method

const poorUser={
    myName:"Masud",
    balance:0,
    addBalance(balance:number):string{
        return `My New Balance is : ${this.balance+balance}`;
    }
}


const arr:number[]=[1,2,3,4,5];

const newArray:number[]=arr.map((element:number):number=>{
    return element*element;
})
