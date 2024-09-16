import math


def bereken_faculteit():
    # vraagt getal
    getal1 = int(input("Voer een getal in\n"))
    # bereken het faculteit
    resultaat = math.factorial(getal1)
    # print het getal uit
    print(f"de faculteit van {getal1} is {resultaat}")


def string_omzetten():
    # vraagt om zin
    string = input("typ een zin\n")
    # zet alles naar hoofdletters
    x = string.upper()
    # print de zin in hoofdletter uit
    print(x)


# voert functies uit
string_omzetten()
bereken_faculteit()
