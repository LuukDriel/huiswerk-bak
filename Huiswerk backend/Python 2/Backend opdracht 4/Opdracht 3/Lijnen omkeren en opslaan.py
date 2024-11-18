def Tekst_aanpassen():
    Bestand = "Tekst.txt"
    Bestand_2 = "Nieuw.txt"
    with open(Bestand, "r") as info:
        inhoud = info.readlines()
        omgedraaid_inhoud = inhoud[::-1]
        with open(Bestand_2, "a") as tekst:
            tekst.writelines(omgedraaid_inhoud)
    print("aanpassen gelukt")


Tekst_aanpassen()
