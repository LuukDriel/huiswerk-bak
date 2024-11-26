def boek_toevoegen():
    naamboek = input("Naam boek (Of laat leeg om te stoppen: ")
    naamauteur = input("Naam auteur: ")
    jaarboek = input("Jaar: ")
    while True:
        if naamboek == "":
            break
        else:
            naamboek = input("Naam boek (Of laat leeg om te stoppen: ")
            naamauteur = input("Naam auteur: ")
            jaarboek = input("Jaar: ")
    with open("Boekenlijst.txt", "a") as info:
        info.write(naamboek, naamauteur, jaarboek)
        print("Boek opgslagen.")


def boek_zoeken():
    print("niks")


def boek_beheer():

    # Vraagt welke functie die moet doen.
    opties = """Wat wilt u doen?
    1. Boek toevoegen
    2. Boek zoeken
    3. Boek verwijderen
    4. Toon alle boeken
    5. Inladen van bestand
    6. Statistieken
    7. Eenvoudige unit test
    8. Afsluiten"""
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
        boek_beheer()
    elif functie == 5:
        inladen_bestand()
        boek_beheer()
    elif functie == 6:
        statistieken()
        boek_beheer()
    elif functie == 7:
        unit_test()
        boek_beheer()
    elif functie == 8:
        exit
    else:
        print("Kies een geldige functie")
        boek_beheer()


boek_beheer()
