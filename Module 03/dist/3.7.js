"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
{
    // Static in opp
    class Counter {
        static increment() {
            return (Counter.count = Counter.count + 1);
        }
        static dcrement() {
            return (Counter.count = Counter.count - 1);
        }
    }
    Counter.count = 0;
    //   const instance1 = new Counter(); //different memory.
    //   console.log(instance1.increment());
    //   console.log(instance1.increment());
    //   console.log(instance1.increment());
    //   const instance2 = new Counter(); //different menory.
    //   console.log(instance2.increment());
    //   console.log(instance2.increment());
    //   const instance3=new Counter();
    //   console.log(instance3.dcrement());
    console.log(Counter.increment());
    console.log(Counter.increment());
    console.log(Counter.increment());
    console.log(Counter.dcrement());
}
