"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
{
    //
    // Gatter & Satter
    class BankAccount {
        constructor(id, name, _balance) {
            this.id = id;
            this.name = name;
            this._balance = _balance;
        }
        // satter
        set addAmount(amout) {
            this._balance = this._balance + amout;
        }
        // function/method
        // public addAmount(amout: number) {
        //   this._balance = this._balance + amout;
        // }
        // gatter
        get getBalance() {
            return this._balance;
        }
    }
    const goridManuserAccount = new BankAccount(456, "Masud", 456);
    //   goridManuserAccount.addAmount(500);
    goridManuserAccount.addAmount = 1200;
    //   const myBalance = goridManuserAccount.getBalance();
    const myBalance = goridManuserAccount.getBalance;
    console.log(myBalance);
    //
}
