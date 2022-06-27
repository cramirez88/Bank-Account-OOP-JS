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

const Mickey = new BankAccount( 0, 0.1)
const Minnie = new BankAccount(100, 0.1)
Mickey.deposit(100).deposit(100).deposit(100).withdraw(10).yieldInterest(0.1).displayAccountInfo()

