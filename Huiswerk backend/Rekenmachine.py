getal1 = input("voer een getal in \n")
getal2 = input("voer een getal 2 in \n")

getal1 = int(getal1)
getal2 = int(getal2)

def Rekenmachine():

    operatie = input ("wat voor operatie wil je uitvoeren? \n + - * of / \n")

    #Plus
    if operatie == "+":
        Antwoord = getal1 + getal2
        print(f"de som van {getal1} en {getal2} = {Antwoord}")
    elif operatie == "-":
        #Min
        Antwoord = getal1 - getal2
        print(f"het verschil van {getal1} en {getal2} = {Antwoord}")
    elif operatie == "*":
        #Keer
        Antwoord = getal1 * getal2
        print(f"de product van {getal1} en {getal2} = {Antwoord}")
    elif operatie == "/":
        #Gedeeld door
        Antwoord = getal1 / getal2
        print(f"de quotiënt van {getal1} en {getal2} = {Antwoord}")
    else:
        print("kies een gelidige operatie")
        Rekenmachine()

Rekenmachine()