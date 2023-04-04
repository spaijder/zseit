class Cabrio:
    def __init__(self, name, brand):
        self.__name = name
        self.__brand = brand
        self.__moving = False
        self.__roof_open = False
        
    def get_name(self):
        return self.__name
        
    def get_brand(self):
        return self.__brand
        
    def is_moving(self):
        return self.__moving
        
    def is_roof_open(self):
        return self.__roof_open
        
    def start_driving(self):
        self.__moving = True
        
    def stop_driving(self):
        self.__moving = False
        
    def open_roof(self):
        if self.__moving:
            print("Error: Cannot open roof while driving")
        else:
            self.__roof_open = True
        
    def close_roof(self):
        if self.__moving:
            print("Error: Cannot close roof while driving")
        else:
            self.__roof_open = False

# Creating object which represents car type Cabrio
car = Cabrio("911", "Porsche")

# Display car info
print("Model samochodu:", car.get_name())
print("Marka samochodu:", car.get_brand())

# Checking current state of the car
print("Czy samochód porusza się?", car.is_moving())
print("Czy dach samochodu jest otwarty?", car.is_roof_open())

# Starting ride and trying to close the roof while driving
car.start_driving()
car.open_roof()
print("Czy dach samochodu jest otwarty?", car.is_roof_open())

# Stop the car and open the roof
car.stop_driving()
car.open_roof()
print("Czy dach samochodu jest otwarty?", car.is_roof_open())

# Starting ride and trying to close the roof while driving
car.start_driving()
car.close_roof()
print("Czy dach samochodu jest otwarty?", car.is_roof_open())

# Stop the car and close the roof
car.stop_driving()
car.close_roof()
print("Czy dach samochodu jest otwarty?", car.is_roof_open())
