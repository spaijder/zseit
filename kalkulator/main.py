import math
import time
import itertools
import threading
import os
import sys

clear = lambda: os.system('cls')
clear()

print("Witaj w kalkulatorze!")

done = False
#animacja
def animate():
    for c in itertools.cycle(['|', '/', '-', '\\']):
        if done:
            break
        sys.stdout.write('\rładowanie ' + c)
        sys.stdout.flush()
        time.sleep(0.1)

t = threading.Thread(target=animate)
t.start()

#czas czekania
time.sleep(3)
done = True


# def animatetwo():
#     for c in itertools.cycle(['|', '/', '-', '\\']):
#         if done:
#             breakff
#         sys.stdout.write('\r' + c)
#         sys.stdout.flush()
#         time.sleep(0.1)

# t = threading.Thread(target=animate)
# t.start()

# #czas czekania
# time.sleep(2)

def add(x, y):
    return x + y

def subtract(x, y):
    return x - y

def multiply(x, y):
    return x * y

def divide(x, y):
    return x / y

def power(x, y):
    return x ** y

def sqrt(x):
    return math.sqrt(x)

while True:
    print("\n\n\nWybierz operację:")
    print("1. Dodawanie")
    print("2. Odejmowanie")
    print("3. Mnożenie")
    print("4. Dzielenie")
    print("5. Potęgowanie")
    print("6. Pierwiastkowanie")
    print("7. Obliczanie niewiadomej x")
    print("8. Sinus")
    print("9. Cosinus")
    print("10. Tangens")
    print("\n11. Wyjście")

    choice = input("Wybierz operację (1-11): ")

    if choice in ('1', '2', '3', '4', '5'):
        num1 = float(input("Podaj pierwszą liczbę: "))
        num2 = float(input("Podaj drugą liczbę: "))

        if choice == '1':
            print('\n\n\n')
            print(num1, "+", num2, "=", add(num1, num2))
            time.sleep(3)

        elif choice == '2':
            print('\n\n\n')
            print(num1, "-", num2, "=", subtract(num1, num2))
            time.sleep(3)

        elif choice == '3':
            print('\n\n\n')
            print(num1, "*", num2, "=", multiply(num1, num2))
            time.sleep(3)

        elif choice == '4':
            print('\n\n\n')
            print(num1, "/", num2, "=", divide(num1, num2))
            time.sleep(3)

        elif choice == '5':
            print('\n\n\n')
            print(num1, "**", num2, "=", power(num1, num2))
            time.sleep(3)

    elif choice == '6':
        print('\n\n\n')
        num = float(input("Podaj liczbę: "))
        print("sqrt(", num, ") =", sqrt(num))
        time.sleep(3)

    elif choice == '7':
        print("Równanie liniowe ma postać ax + b = c")
        a = float(input("Podaj wartość a: "))
        b = float(input("Podaj wartość b: "))
        c = float(input("Podaj wartość c: "))
        x = (c - b) / a
        print("x = ", x)
        time.sleep(3)

    elif choice in ('8', '9', '10'):
        num = float(input("Podaj kąt w stopniach: "))
        num = math.radians(num)

        if choice == '8':
            print("sin(", num, ") =", math.sin(num))
            time.sleep(3)

        elif choice == '9':
            print("cos(", num, ") =", math.cos(num))
            time.sleep(3)

        elif choice == '10':
            print("tan(", num, ") =", math.tan(num))
            time.sleep(3)

    elif choice == '11':
        print("\nDo widzenia!")
        break

    else:
        print("Nieprawidłowy wybór.")