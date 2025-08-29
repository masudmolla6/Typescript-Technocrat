{
  // Destructuring

  //   1-Object Destructuring
  const myInfo = {
    id: 67,
    name: {
      firstName: "Masud",
      lastName: "Rana",
    },
    dept: "CSE",
  };

  const {
    id,
    name: { firstName },
  } = myInfo;

//   Array Destructuring;

const numbers:number[]=[1,2,34,5,7];

const [,a,...rest]=numbers;
console.log(rest);



}
