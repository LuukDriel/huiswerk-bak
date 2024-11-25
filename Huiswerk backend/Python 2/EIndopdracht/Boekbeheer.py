def boek_toevoegen():
    global boeken_lijst
    temp_lijst = []  # Lijst waar alle boeken tijdelijk worden opgeslagen.
    while True:
        Naam_boek = input("Naam boek (of typ stop om te stoppen): ")
        if Naam_boek == "stop":
            break  # Stopt de functie
        Naam_auteur = input("Naam auteur: ")
        Jaar_boek = input("Jaar boek: ")

        # Voegt het boek toe als nieuwe rij.
        temp_lijst.append([Naam_boek, Naam_auteur, Jaar_boek])
    boeken_lijst = temp_lijst


def boek_zoeken():
    Naam = input("Zoek een boek(of laat leeg om alle boeken te zien: ")
    if Naam == "":
        try:
            print("\nToegevoegde boeken:")
            for boek in boeken_lijst:
                print(f"Naam: {boek[0]}, Auteur: {boek[1]}, Jaar: {boek[2]}")
        except NameError:
            print("Nog geen boeken toegevoegd")
            boek_beheer()
    else:
        try:
            print(boeken_lijst.index([0]))
        except TypeError:
            print("Geen boek gevonden.")
            boek_zoeken()
        except NameError:
            print("Nog geen boeken toegevoegd")
            boek_beheer()


def boek_beheer():

    # Vraagt welke functie die moet doen.
    opties = """Wat wilt u doen?
    1. Boek toevoegen
    2. Boek zoeken
    3. Boek verwijderen
    4. Toon alle boeken
    5. Opslaan naar bestand
    6. Inladen van bestand
    7. Statistieken
    8. Eenvoudige unit test
    9. Afsluiten"""
    functie = int(input(f"{opties}\nKies een optie: "))

    # Roept de gekozen functie aan.
    if functie == 1:
        boek_toevoegen()
        boek_beheer()
    elif functie == 2:
        boek_zoeken()
        boek_beheer()
    elif functie == 3:
        boek_verwijderen()
        boek_beheer()
    elif functie == 4:
        alle_boeken()
        boek_beheer
    elif functie == 5:
        opslaan_bestand()
        boek_beheer()
    elif functie == 6:
        inladen_bestand()
        boek_beheer()
    elif functie == 7:
        statistieken()
        boek_beheer()
    elif functie == 8:
        unit_test()
        boek_beheer()
    elif functie == 9:
        exit
    else:
        print("Kies een geldige functie")
        boek_beheer()


boek_beheer()
