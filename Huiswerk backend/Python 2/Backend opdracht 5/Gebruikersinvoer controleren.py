def invoer():
    getal = 0
    while getal == 0:
        try:
            getal = int(input("Voer een getal in\n"))
            print(f"het getal is {getal}\n")
        except TypeError:
            print("Voer een geldig getal in")
        except ValueError:
            print("Voer een geldig getal in")


invoer()
