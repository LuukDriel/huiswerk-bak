def Rekenmachine(keuze, a, b):
    #Plus
    if keuze == "+":
        Antwoord = a + b
        print(f"de som van {a} en {b} = {Antwoord}")
    elif keuze == "-":
        #Min
        Antwoord = a - b
        print(f"het verschil van {a} en {b} = {Antwoord}")
    elif keuze == "*":
        #Keer
        Antwoord = a * b
        print(f"de product van {a} en {b} = {Antwoord}")
    elif keuze == "/":
        #Gedeeld door
        Antwoord = a / b
        print(f"de quotiënt van {a} en {b} = {Antwoord}")
    else:
        #Start opnieuw
        print("kies een geledige operatie")


a = int(input("Voer getal 1 in\n"))
b = int(input("Voer getal 2 in\n"))
keuze = input("Kies een opperatie:\n+ - * /\n")

Rekenmachine(keuze, a, b)