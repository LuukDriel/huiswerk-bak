import math


def Rekenmachine():
    operatie = int(input("Kies een operatie\n1 = vierkantwortel\n2 = Macht\n"))
    # Vierkantswortel uitrekenen
    if operatie == 1:
        Getal1 = int(input("Voer een getal in\n"))
        Resultaat = math.sqrt(Getal1)
        print(f"De vierkantswortel van {Getal1} = {Resultaat}")
    # Macht uitrekenen
    elif operatie == 2:
        Getal1 = int(input("Voer een getal in\n"))
        Macht = int(input("Welke macht wil je uitrekenen\n"))
        Resultaat = math.pow(Getal1, Macht)
        print(f"{Getal1} tot de macht {Macht} = {Resultaat}")
    # Opnieuw als fout
    else:
        print("Kies een geldige operatie\n")
        Rekenmachine()


Rekenmachine()
