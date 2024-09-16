def Leeftijdchecker():
    if leeftijd < int(18):
        print("je bent minder jarig")
    elif leeftijd >= int(18) and leeftijd < int(65):
        print("je bent volwassen")
    else:
        print("je bent senior")

leeftijd = int(input("hoe oud ben je? \n"))

Leeftijdchecker()