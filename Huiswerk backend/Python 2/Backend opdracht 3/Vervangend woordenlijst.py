Woordenlijst = ["appel", "banaan", "kiwi", "watermeloen"]
print(f"Oorspronkelijke lijst: {Woordenlijst}")

for i in range(len(Woordenlijst)):
    if len(Woordenlijst[i]) > 5:
        Woordenlijst[i] = "lang"

print(f"Aangepaste lijst: {Woordenlijst}")
