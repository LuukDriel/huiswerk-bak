def Getallenchecker():
    if getal1 > getal2:
        print(f"{getal1} is groter dan {getal2}")
    elif getal1 < getal2:
        print(f"{getal1} is kleiner dan {getal2}")
    else:
        print("beide getallen zijn gelijk")

#vragen voor getallen
getal1 = int(input("voer een getal in \n"))
getal2 = int(input("voer een tweede getal in \n"))

#voer uit
Getallenchecker()