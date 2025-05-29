// Account->class(accHolderName,initialAmount)
class Account{
    accHolderName;
    initialAmount;

    constructor(accHolderName,initialAmount){
        this.accHolderName=accHolderName
        this.amount=initialAmount
    }
    
    
        deposit(balance){
            
            this.amount+=balance
            console.log(`your new balance is: ${this.amount}`)
        }
            
    withdraw(balance){
        if(this.amount<balance){
            console.log('Insufficient balance')
            return
        }
        this.amount-=balance
        console.log(`your new balance is: ${this.amount}`)

    }
    getBalance(){
        console.log(`Account holder name: ${this.accHolderName},current balance:${this.amount}`);
        return this.amount
    }
}
const account1=new Account('Hari',1000)
account1.getBalance();
account1.deposit(1000)
account1.withdraw(500)