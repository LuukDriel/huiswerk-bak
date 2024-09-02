getal1 = input("voer een getal in \n")
getal2 = input("voer een getal 2 in \n")

getal1 = int(getal1)
getal2 = int(getal2)

def Rekenmachine():

    operatie = input ("wat voor operatie wil je uitvoeren? \n + - * of / \n")

    #Plus
    if operatie == "+":
        print(getal1 + getal2)
    elif operatie == "-":
        #Min
        print(getal1 - getal2)
    elif operatie == "*":
        #Keer
        print(getal1 * getal2)
    elif operatie == "/":
        #Gedeeld door4
        print(getal1 / getal2)
    else:
        print("kies een gelidige operatie")
        Rekenmachine()

Rekenmachine()