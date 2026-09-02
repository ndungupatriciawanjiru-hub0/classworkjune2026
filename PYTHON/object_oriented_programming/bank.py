"""
Abstractions.
Bank Class→
deposits, withdral,
show account.
getter and setter. →
→ easy to scale function <understing>

  → Login account
  → Create account
  —→ Deposit
  ——→ Withdrawal
  ———→ account balance

"""
class BankAccount:

    def __init__(self,name,balance,account_no):
        self.name=name
        self.balance=balance
        self.account_no=account_no

    #latter change gee
    def get_balance(self):
        return self.balance

    #setter
    def deposit(self,amount):
        if amount <= 0:
            print("Deposit amount must be greater than zero")
        else:
            self.balance=self.balance+amount
            print(f"Deposited {amount}. New balance is {self.balance}")

    def withdrawal(self,amount):
        if amount <= 0:
            print("Withdrawal amount must be greater than zero")
        elif amount > self.balance:
            print("Insufficient funds")
        else:
            self.balance=self.balance-amount
            print(f"Withdrew {amount}. New balance is {self.balance}")

    def show_account_details(self):
        print(f"Owner {self.name}")
        print(f"Balance {self.balance}")
        print(f"Account No {self.account_no}")


john=BankAccount(name="John Mwangi",balance=0,account_no="223344223")

john.show_account_details()

john.deposit(1000)
john.withdrawal(300)
print(f"Current balance via get_balance: {john.get_balance()}")

john.show_account_details()