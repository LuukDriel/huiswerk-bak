def Begroeting():
    naam = input("Hallo, welkom bij mijn chatbot. Wat is jouw naam \n")
    print(f"Leuk je te ontmoeten {naam}! wat wil je doen? \n")


def Rekenmachine():

    getal1 = int(input("voer een getal in \n"))
    getal2 = int(input("voer een getal 2 in \n"))

    operatie = input("wat voor operatie wil je uitvoeren? \n + - * of / \n")

    # Plus
    if operatie == "+":
        Antwoord = getal1 + getal2
        print(f"de som van {getal1} en {getal2} = {Antwoord}\n")
    elif operatie == "-":
        # Min
        Antwoord = getal1 - getal2
        print(f"het verschil van {getal1} en {getal2} = {Antwoord}\n")
    elif operatie == "*":
        # Keer
        Antwoord = getal1 * getal2
        print(f"de product van {getal1} en {getal2} = {Antwoord}\n")
    elif operatie == "/":
        # Gedeeld door
        Antwoord = getal1 / getal2
        print(f"de quotiënt van {getal1} en {getal2} = {Antwoord}\n")
    else:
        # Start opnieuw
        print("kies een geledige operatie")
        Rekenmachine()


def Info_invoeren():
    global De_lijst
    temp_lijst = []
    Persoon_naam = input("Voer je naam in\n")
    temp_lijst.append(Persoon_naam)
    leeftijd = input("Voer je leeftijd in\n")
    temp_lijst.append(leeftijd)
    geboorte = input("voer je geboorte datum in\n")
    temp_lijst.append(geboorte)

    De_lijst = temp_lijst


def Info_kijken():
    try:
        nummer = 1
        for info in De_lijst:
            print(f"Persoonlijke Informatie {nummer}\n")
            nummer = nummer + 1
            print(info + "\n")
    except:
        print("Er is niks om te zien :(\n")
    Chatbot()

    print("\n")    


def Chatbot():

    functie = input("1. Begroeting \n2. Rekenkundige bewerkingen \n3. Persoonelijke informatie invoeren \n4. Informatie bekijken \n5. Afsluiten \nKies een optie (1-5) \n")
    
    if functie == "1":
        Begroeting()
        Chatbot()
    elif functie == "2":
        Rekenmachine()
        Chatbot()
    elif functie == "3":
        Info_invoeren()
        Chatbot()
    elif functie == "4":
        Info_kijken()
        Chatbot()
    elif functie == "5":
        exit
    else:
        print("Kies een geldige keuze\n")
        Chatbot()


Begroeting()

Chatbot()
