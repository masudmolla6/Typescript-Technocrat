{
  //
  // Gatter & Satter
  class BankAccount {
    public readonly id: number;
    public name: string;
    // private _balance:number; //(private propery user er khatre covenseion holo _ (underscore use kora))
    protected _balance: number;

    constructor(id: number, name: string, _balance: number) {
      this.id = id;
      this.name = name;
      this._balance = _balance;
    }

    // satter
    set addAmount(amout:number){
        this._balance=this._balance+amout;
    }

    // function/method

    // public addAmount(amout: number) {
    //   this._balance = this._balance + amout;
    // }


    // gatter
    get getBalance(){
        return this._balance;
    }

    // function/method

    // public getBalance() {
    //   return this._balance;
    // }
  }

  const goridManuserAccount = new BankAccount(456, "Masud", 456);

//   goridManuserAccount.addAmount(500);

  goridManuserAccount.addAmount=1200;

//   const myBalance = goridManuserAccount.getBalance();
const myBalance=goridManuserAccount.getBalance;
  console.log(myBalance);

  //
}
