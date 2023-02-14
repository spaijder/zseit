from bank import Bank
from account import BankAccount
from person import Customer
from person import Employee
from client import CorporateClient



def run():

    bank = Bank("Incognito Bank")
    account = BankAccount("1234567890", 2000)
    customer = Customer("A001", "Ben Frankos", "452 Second St", "123-456-7890")
    employee = Employee("A002", "Walee Wan", "406 First St", "234-567-8901", "Design")
    corporateClient = CorporateClient("AA001", "Ben Inc.", "Ben Inc.", "25 Normal St")
    
    bank.createAccount(account)
    
    account.deposit(500)
    account.withdraw(200)
    
    print("Account balance:", account.checkBalance())
    
    print("Customer Name:", customer.getName())
    print("Customer Address:", customer.getAddress())
    print("Customer Phone:", customer.getPhoneNumber())
    
    print("Employee Name:", employee.getName())
    print("Employee Address:", employee.getAddress())
    print("Employee Phone:", employee.getPhoneNumber())
    print("Employee Designation:", employee.getDesignation())
    
    print("Client ID:", corporateClient.getClientID())
    print("Client Type:", corporateClient.getClientType())
    print("Client Name:", corporateClient.getClientName())
    print("Business Name:", corporateClient.getBusinessName())
    print("Business Address:", corporateClient.getBusinessAddress())

if __name__ == "__main__":
    run()