import random

def choose_difficulty():
    while True:
        print("Wybierz poziom trudności:")
        print("1 - Łatwy (hasła z kodzie)")
        print("2 - Trudny (hasła z pliku)")
        choice = input("Wybór: ")
        if choice in ['1', '2']:
            return choice
        else:
            print("Nieprawidłowa opcja. Wybierz ponownie.")

def get_word():
    if difficulty == '1':
        words = ['python', 'programowanie', 'komputer', 'algorytm', 'funkcja']
        return random.choice(words)
    elif difficulty == '2':
        with open('hasla.txt', 'r', encoding='utf-8') as f:
            words = f.read().splitlines()
        return random.choice(words)

def play_again():
    while True:
        answer = input("Chcesz zagrać ponownie? (t/n): ")
        if answer.lower() == 't':
            return True
        elif answer.lower() == 'n':
            return False
        else:
            print("Nieprawidłowa opcja. Wybierz ponownie.")

print("Witaj.")
while True:
    difficulty = choose_difficulty()
    word = get_word()
    guessed_letters = set()
    incorrect_guesses = 0
    max_guesses = 8
    print(f"Hasło do zgadnięcia: {'*' * len(word)}")
    while True:
        guess = input("Podaj literę: ").lower()
        if len(guess) != 1 or not guess.isalpha():
            print("To nie jest litera. Spróbuj ponownie.")
            continue
        if guess in guessed_letters:
            print("Ta litera już była. Spróbuj ponownie.")
            continue
        if guess in word:
            guessed_letters.add(guess)
            masked_word = ''.join([letter if letter in guessed_letters else '*' for letter in word])
            print(f"Hasło do zgadnięcia: {masked_word}")
            if '*' not in masked_word:
                print("Wygrałeś!")
                break
        else:
            print("Nie ma takiej litery.")
            incorrect_guesses += 1
            print(f"Pozostało {max_guesses - incorrect_guesses} prób.")
            if incorrect_guesses == max_guesses:
                print(f"Przegrałeś, hasło to: {word}")
                break
    if not play_again():
        break
print("Baj baj") 