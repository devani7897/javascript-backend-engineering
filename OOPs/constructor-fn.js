function bankAccount(customerName, balance = 0){
    this.customerName = customerName;
    this.balance = balance;
    this.accountNumber = Math.floor(Math.random() * 1000000000);
    this.deposit = function(amount){
        this.balance += amount;
    }
    this.withdraw = (amount)=>{
        if(amount > this.balance){
            console.log("Insufficient Balance");
        }else{
            this.balance -= amount;
        }
    }
}

const anoopAccount = new bankAccount("Anoop Maurya", 5000);
const rahulAccount = new bankAccount("Rahul Sharma");
anoopAccount.deposit(3000);
rahulAccount.deposit(2000);
anoopAccount.withdraw(10000);
console.log(anoopAccount);
console.log(rahulAccount);