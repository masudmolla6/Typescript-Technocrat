{
    // 
    // Access Modifier
    class BankAccount{
        public readonly id:number;
        public name:string;
        // private _balance:number; //(private propery user er khatre covenseion holo _ (underscore use kora))
        protected _balance:number;

        constructor(id:number, name:string, _balance:number){
            this.id=id;
            this.name=name;
            this._balance=_balance;
        }

        public addAmount(amout:number){
            this._balance=this._balance+amout;
        }

        public getBalance(){
            console.log(this._balance);
        }

    }

    class StudentAccount extends BankAccount {
      constructor(id: number, name: string, _balance: number) {
        super(id,name,_balance);
      }
      test(){
        this.
      }
    }

    const goridManuserAccount=new BankAccount(456,"Masud", 456, );
    goridManuserAccount.addAmount(500);
    goridManuserAccount.addAmount(504500);






    // 
}