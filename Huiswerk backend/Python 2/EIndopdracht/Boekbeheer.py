def boek_toevoegen():
    while True:
        Boek_lijst = []
        naamboek = input("Naam boek (Of laat leeg om te stoppen): ")
        if naamboek == "":
            break
        else:
            naamauteur = input("Naam auteur: ")
            jaarboek = input("Jaar: ")
        Boek_lijst.append(f"{naamboek}, {naamauteur}, {jaarboek}\n")
        inhoud = open("Boekenlijst.txt", "a")
        inhoud.writelines(Boek_lijst)
        inhoud.close()


def boek_zoeken():
    # leest het bestand
    try:
        with open("Boekenlijst.txt", "r") as info:
            inhoud = info.read()
    except FileNotFoundError:
        print("Het bestand bestaat niet")
        boek_beheer()

    # vraagt welk boek je wilt zoeken
    zoekterm = input("welk boek wil je zoeken(Naam of auteur): ").lower()
    gevonden_boeken = [boek for boek in inhoud if zoekterm in boek.lower()]

    # Laat gevonden boeken zien
    if gevonden_boeken:
        print("\nGevonden boeken:")
        for i, boek in enumerate(gevonden_boeken, 1):
            print(f"{i}. {boek.strip()}")
    else:
        print("Geen boeken gevonden met die zoekterm.")


def boek_verwijderen():
    # Lees de huidige inhoud van het bestand
    try:
        with open("Boekenlijst.txt", "r") as info:
            inhoud = info.readlines()
    except FileNotFoundError:
        print("Het bestand bestaat niet. Voeg eerst boeken toe.")
        boek_beheer()

    # Laat alle boeken zien
    print("Huidige boeken:")
    for i, boek in enumerate(inhoud, 1):
        print(f"{i}. {boek.strip()}")

    # Vraagt welk boek je wilt verwijderen
    zoekterm = input("Welk boek wil je verwijderen: ")

    # Filter de lijst om het boek te verwijderen
    boeken_filteren = [
        boek for boek in inhoud if zoekterm.lower() not in boek.lower()]

    if (inhoud) == (boeken_filteren):
        print("Geen boek gevonden met die naam.")
    else:
        # Schrijf de bijgewerkte lijst terug naar het bestand
        with open("Boekenlijst.txt", "w") as inhoud:
            inhoud.writelines(boeken_filteren)
        print(f"Boek '{zoekterm}' is verwijderd.")


def Boek_alles():
    with open("Boekenlijst.txt", "r") as info:
        try:
            inhoud = info.read()
            print(inhoud)
        except FileExistsError:
            print("Bestand nog niet gemaakt")
        info.close()
    boek_beheer()


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
    try:
        functie = int(input(f"{opties}\nKies een optie: "))
    except ValueError:
        print("Kies een geldige functie")
        boek_beheer

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
        Boek_alles()
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
