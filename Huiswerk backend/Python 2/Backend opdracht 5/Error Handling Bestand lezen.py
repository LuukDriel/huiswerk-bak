def bestand():
    try:
        bestand = open("gegevens.txt", "r")
        inhoud = bestand.read()
    except FileNotFoundError:
        print("bestand bestaat niet")
        exit
    else:
        print(inhoud)
    finally:
        exit


bestand()
