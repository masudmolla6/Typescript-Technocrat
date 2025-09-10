"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
{
    //
    // Encapsulation in OOP
    class BankAccount {
        // protected _balance: number;
        constructor(id, name, _balance) {
            this.id = id;
            this.name = name;
            this._balance = _balance;
        }
        addAmount(amout) {
            this._balance = this._balance + amout;
        }
        getBalance() {
            return this._balance;
        }
        getHiddenMethod() {
            return this.getBalance();
        }
    }
    class StudentAccount extends BankAccount {
        test() {
            this.
            ;
        }
    }
    const goridManuserAccount = new BankAccount(456, "Masud", 456);
    goridManuserAccount.addAmount(500);
    const myBalance = goridManuserAccount.getBalance();
    console.log(myBalance);
    //
}
