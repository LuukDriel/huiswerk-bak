def error():
    try:
        getal1 = int(input("Voer een getal in\n"))
        getal2 = int(input("Voer een getal in\n"))
        antwoord = getal1 / getal2
        print(f"{getal1} gedeelt door {getal2} is {antwoord}")
    except ZeroDivisionError:
        print("niet door null delen")
        error()
    else:
        print("bedankt voor het gebruiken")
        exit


error()
