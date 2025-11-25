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

// ==============================
const accounts = [];
const accountForm = document.querySelector('#accountForm');
const customerName = document.querySelector('#customerName');
const balance = document.querySelector('#balance');

accountForm.addEventListener('submit', (e)=>{
    e.preventDefault();
   
    const account = new bankAccount(customerName.value, +balance.value);
    accounts.push(account);
    console.log(accounts);

})

const depositForm = document.querySelector('#depositForm');
const accountNumber = document.querySelector('#accountNumber');
const amount = document.querySelector('#amount');
depositForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const account = accounts.find(acc => acc.accountNumber === +accountNumber.value);
    if(account){
        account.deposit(+amount.value);
        console.log(account);
    }else{
        console.log("Account not found");
    }
})