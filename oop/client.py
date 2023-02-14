class Client:
    def __init__(self, clientID, clientType, clientName):
        self.clientID = clientID
        self.clientType = clientType
        self.clientName = clientName
    
    def getClientID(self):
        return self.clientID
    
    def getClientType(self):
        return self.clientType
    
    def getClientName(self):
        return self.clientName

class CorporateClient(Client):
    def __init__(self, clientID, clientName, businessName, businessAddress):
        super().__init__(clientID, "Corporate", clientName)
        self.businessName = businessName
        self.businessAddress = businessAddress
    
    def getBusinessName(self):
        return self.businessName
    
    def getBusinessAddress(self):
        return self.businessAddress
