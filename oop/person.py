class Person:
    def __init__(self, name, address, phoneNumber):
        self.name = name
        self.address = address
        self.phoneNumber = phoneNumber
    
    def getName(self):
        return self.name
    
    def getAddress(self):
        return self.address
    
    def getPhoneNumber(self):
        return self.phoneNumber


class Customer(Person):
    def __init__(self, customerID, name, address, phoneNumber):
        super().__init__(name, address, phoneNumber)
        self.customerID = customerID
    
    def getCustomerID(self):
        return self.customerID

class Employee(Person):
    def __init__(self, employeeID, name, address, phoneNumber, designation):
        super().__init__(name, address, phoneNumber)
        self.employeeID = employeeID
        self.designation = designation
    
    def getEmployeeID(self):
        return self.employeeID
    
    def getDesignation(self):
        return self.designation