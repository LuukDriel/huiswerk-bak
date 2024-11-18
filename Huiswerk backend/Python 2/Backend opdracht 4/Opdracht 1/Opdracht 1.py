def Teller():
    with open("voorbeeld.txt", "r") as bestand:
        inhoud = bestand.read()
        woorden = inhoud.split()
        print(woorden)
        return len(woorden)


aantal_woorden = Teller()
print(aantal_woorden)
