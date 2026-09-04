"""
Abstractions.
Bank Class→
deposits, withdral,
show account.
getter and setter. →
→ easy to scale function <understing>

 → Login account
 → Create account
 ⟶ Deposit
 ⟶ Withdrawal
 ⟶ account balance

"""

"""
Static <it doues not change>.<class properties> properties. <Belong to the class>
Static Method<>.Class method. <Function belongs to the class>

Why would you want to use a class property.<>
"""
class BankAccount:
    clients=0 #static
    bank_name="Post Bank" #static property

    def __init__(self,name,balance,account_no):
        self.name=name
        self._balance=balance
        self.account_no=account_no

    #data i read
    @property
    def balance(self):
        print("somebody tried to read patricia's balance")
        return self._balance

    #to control updated
    @balance.setter
    def balance(self,value):
        if not isinstance(value,(int,float)):
            print("Ensure you pass a number for new balance")
            return
        if value<0:
            print("Ensure new balance must not be less than 0")
            return
        self._balance=value

    def deposit(self):
        pass

    def withdrawal(self):
        pass

    def show_account_details(self):
        print(f"Owner {self.name}")
        print(f"Balance {self.balance}")
        print(f"Account No {self.account_no}")


patricia=BankAccount(name="Patricia",balance=0,account_no="223344223")
# simona=BankAccount(name="Simona",balance=0,account_no="223344223")

# print("Patricia blance ",patricia.balance)
print("Bank Name",BankAccount.bank_name)#Class property
print(patricia.account_no)#patricia
print("Clients",BankAccount.clients)#Class property