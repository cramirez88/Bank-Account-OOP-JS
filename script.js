class BankAccount {
  constructor(balance=0, interestRate){
    this.balance = balance,
    this.interestRate = interestRate
  }
  deposit(amount){
    this.balance += amount
    return this
  }

  withdraw(amount) {
    this.balance -= amount
    return this
      }

  displayAccountInfo() {
    console.log(`Balance: ${this.balance}`)
      }
   yieldInterest(interestRate) {
    if (this.balance > 0) {
      this.balance += (this.balance * interestRate)
      return this
    }
      }
}


class User {
  constructor(name, emailAddress){
    this.name = name,
    this.email = emailAddress,
    this.account = new BankAccount(balance=0, interestRate=0.1)
  }
  makeDeposit(amount){
    this.account.deposit += amount
    return this
  }

  makeWithdrawal(amount){
    this.account.withdraw -= amount
    return this
  }

  displayBalance(){
    console.log(this.name +' has ' + this.account.displayAccountInfo + ' dollars in the bank')
  }
  transferMoney(amount, account){
    this.accountBalance -= amount
    account.accountBalance += amount
  }
}

const Mickey = new BankAccount (balance=90, interestRate=0.1)

// const Minnie = new BankAccount(100, 0.1)
// Mickey.deposit(100).deposit(100).deposit(100).withdraw(10).yieldInterest(0.1).displayAccountInfo()
// Minnie.deposit(1000).deposit(1000).withdraw(100).withdraw(100).withdraw(100).withdraw(100).yieldInterest(0.1).displayAccountInfo()
// console.log(Minnie.balance)
console.log(Mickey.displayAccountInfo())

