def Bereken_oppervlakte(lengte, breedte):
    oppervlakte = lengte * breedte
    return oppervlakte

lengte = int(input("voer lengte in\n"))
breedte = int(input("voer breedte in\n"))

print(f"de oppervlakte is {Bereken_oppervlakte(lengte, breedte)}")