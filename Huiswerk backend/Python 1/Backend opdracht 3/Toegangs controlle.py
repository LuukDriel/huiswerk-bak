def Toegangscontrol():
    wachtwoord = input("voer je wachtwoord in \n")
    if wachtwoord == goede_wachtwoord:
        print("toegang verleend")
    else:
        print("wachtwoord is niet goed \n probeer opnieuw")
        Toegangscontrol()

#vraag naar wachtwoord

goede_wachtwoord = "kaasbroodje"

Toegangscontrol()