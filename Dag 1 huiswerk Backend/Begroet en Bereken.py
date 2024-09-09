#Function
def berekenLeeftijd():
    if (Leeftijd.isdigit()):
        #rekenen
        Leeftijd_na_10_jaar = int(Leeftijd) + int(som)
        print(f"je leeftijd na {som} jaar is {Leeftijd_na_10_jaar}")
    else:
        #restart vraag
        berekenLeeftijd()
    

#vragen insialiseren van variabelen (input)
naam = input("wat is je naam? \n")
print(f"hallo {naam}")
Leeftijd = input("wat is je leeftijd? \n")
som = input("na hoeveel jaar wil je berekenen \n")

#voert functie uit
berekenLeeftijd()
