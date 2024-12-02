import os
import unittest
BESTANDSNAAM = "Boekenlijst.txt"


def boek_toevoegen():

    # Voegt boeken toe aan een lijst die wordt opgeslagen in 'Boekenlijst.txt'.
    Boek_lijst = []
    while True:
        naamboek = input("Naam boek (Of laat leeg om te stoppen): ")
        if naamboek == "":
            break
        naamauteur = input("Naam auteur: ")
        jaarboek = input("Jaar: ")
        Boek_lijst.append(f"{naamboek}, {naamauteur}, {jaarboek}\n")

    with open("Boekenlijst.txt", "a") as inhoud:
        inhoud.writelines(Boek_lijst)
    print("Boek(en) toegevoegd aan de lijst.")


def boek_zoeken():

    # Zoekt naar boeken in 'Boekenlijst.txt' op naam of auteur.
    if not os.path.exists("Boekenlijst.txt"):
        print("Het bestand 'Boekenlijst.txt' bestaat niet.")
        return

    with open("Boekenlijst.txt", "r") as info:
        inhoud = info.readlines()

    zoekterm = input("Welk boek wil je zoeken (Naam of auteur): ").lower()
    gevonden_boeken = [boek for boek in inhoud if zoekterm in boek.lower()]

    if gevonden_boeken:
        print("\nGevonden boeken:")
        for i, boek in enumerate(gevonden_boeken, 1):
            print(f"{i}. {boek.strip()}")
    else:
        print("Geen boeken gevonden met die zoekterm.")


def boek_verwijderen():

    # Verwijdert een boek uit 'Boekenlijst.txt'.
    if not os.path.exists("Boekenlijst.txt"):
        print("Het bestand 'Boekenlijst.txt' bestaat niet.")
        return

    with open("Boekenlijst.txt", "r") as info:
        inhoud = info.readlines()

    print("Huidige boeken:")
    for i, boek in enumerate(inhoud, 1):
        print(f"{i}. {boek.strip()}")

    zoekterm = input("Welk boek wil je verwijderen: ").lower()
    boeken_filteren = [boek for boek in inhoud if zoekterm not in boek.lower()]

    if len(boeken_filteren) == len(inhoud):
        print("Geen boek gevonden met die naam.")
    else:
        with open("Boekenlijst.txt", "w") as inhoud:
            inhoud.writelines(boeken_filteren)
        print(f"Boek met zoekterm '{zoekterm}' is verwijderd.")


def boek_alles():

    # Toont alle boeken in 'Boekenlijst.txt'.
    if os.path.exists("Boekenlijst.txt"):
        with open("Boekenlijst.txt", "r") as info:
            print(info.read())
    else:
        print("Het bestand 'Boekenlijst.txt' bestaat niet.")


def lijst_inladen():

    # Laadt een nieuwe lijst en past huidige aan.
    naambestand = input("Voernaam nieuw bestand (zonder extensie): ") + ".txt"
    if not os.path.exists(naambestand):
        print(f"Het bestand '{naambestand}' bestaat niet.")
        return

    with open(naambestand, "r") as info:
        inhoud = info.read()
    with open("Boekenlijst.txt", "w") as Nieuwinhoud:
        Nieuwinhoud.write(inhoud)
    print(f"Bestand '{naambestand}' is ingeladen.")


def statistieken():

    # Toont statistieken over de boekenlijst.
    if not os.path.exists("Boekenlijst.txt"):
        print("Het bestand 'Boekenlijst.txt' bestaat niet.")
        return

    with open("Boekenlijst.txt", "r") as info:
        inhoud = info.readlines()

    totaal_boeken = len(inhoud)
    auteurs = {regel.split(",")[1].strip() for regel in inhoud if "," in regel}
    print(f"Totaal aantal boeken: {totaal_boeken}")
    print(f"Totaal aantal unieke auteurs: {len(auteurs)}")


def unit_test():

    class TestBoekBeheer(unittest.TestCase):
        test_bestand = "TestBoekenlijst.txt"

        def setUp(self):

            with open(self.test_bestand, "w") as bestand:
                bestand.writelines([
                    "Boek1, Auteur1, 2000\n",
                    "Boek2, Auteur2, 2010\n"
                ])

        def tearDown(self):

            if os.path.exists(self.test_bestand):
                os.remove(self.test_bestand)

        def test_boek_toevoegen(self):

            # Wijzig het pad voor de test
            global BESTANDSNAAM
            BESTANDSNAAM = self.test_bestand

            Boek_lijst = ["Boek3, Auteur3, 2022\n"]
            with open(BESTANDSNAAM, "a") as bestand:
                bestand.writelines(Boek_lijst)

            with open(BESTANDSNAAM, "r") as bestand:
                inhoud = bestand.readlines()

            self.assertIn("Boek3, Auteur3, 2022\n", inhoud)

        def test_boek_zoeken(self):

            # Wijzig het pad voor de test
            global BESTANDSNAAM
            BESTANDSNAAM = self.test_bestand

            zoekterm = "Boek1"
            with open(BESTANDSNAAM, "r") as bestand:
                inhoud = bestand.readlines()

            gevonden_boeken = [boek for boek in inhoud if zoekterm.lower()
                               in boek.lower()]
            self.assertGreater(len(gevonden_boeken), 0)
            self.assertIn("Boek1, Auteur1, 2000\n", gevonden_boeken)

        def test_statistieken(self):

            # Wijzig het pad voor de test
            global BESTANDSNAAM
            BESTANDSNAAM = self.test_bestand

            with open(BESTANDSNAAM, "r") as bestand:
                inhoud = bestand.readlines()

            totaal_boeken = len(inhoud)
            auteurs = {regel.split(",")[1].strip() for regel in inhoud
                       if "," in regel}

            self.assertEqual(totaal_boeken, 2)
            self.assertEqual(len(auteurs), 2)

    # Voer de tests uit
    unittest.TextTestRunner().run(
        unittest.defaultTestLoader.loadTestsFromTestCase(TestBoekBeheer))


def boek_beheer():

    # Menu voor de functies.
    opties = """Wat wilt u doen?
    1. Boek toevoegen
    2. Boek zoeken
    3. Boek verwijderen
    4. Toon alle boeken
    5. Inladen van bestand
    6. Statistieken
    7. Unit test
    8. Afsluiten"""
    while True:
        try:
            functie = int(input(f"{opties}\nKies een optie: "))
            if functie == 1:
                boek_toevoegen()
            elif functie == 2:
                boek_zoeken()
            elif functie == 3:
                boek_verwijderen()
            elif functie == 4:
                boek_alles()
            elif functie == 5:
                lijst_inladen()
            elif functie == 6:
                statistieken()
            elif functie == 7:
                unit_test()
            elif functie == 8:
                print("Programma afgesloten.")
                break
            else:
                print("Ongeldige keuze, probeer opnieuw.")
        except ValueError:
            print("Voer een geldig nummer in.")


boek_beheer()
