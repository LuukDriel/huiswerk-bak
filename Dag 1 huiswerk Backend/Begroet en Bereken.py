#Function
def berekenLeeftijd():
    if (Leeftijd.isdigit()):
        #rekenen
        Leeftijd_na_10_jaar = int(Leeftijd) + 10
        print(Leeftijd_na_10_jaar)
    else:
        #restart vraag
        berekenLeeftijd()
    

#vragen insialiseren van variabelen (input)
naam = input("wat is je naam? ")
Leeftijd = input("wat is je leeftijd? ")

#voert functie uit
berekenLeeftijd()

Leeftijd = "51"

berekenLeeftijd()