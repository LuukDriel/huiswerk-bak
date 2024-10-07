woorden_lijst = [["boom", "kat"], ["hond", "olifant", "rat"], ["tafel", "pen"]]
nieuw_lijst = []
for sublijst in woorden_lijst:
    for woord in sublijst:
        if len(woord) <= 4:
            nieuw_lijst.append(woord)

print(nieuw_lijst)
