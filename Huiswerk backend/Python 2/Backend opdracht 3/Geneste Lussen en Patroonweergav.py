aantal = int(input("Voer aantal rijen in\n"))

k = 0

for i in range(1, aantal+1):
    for space in range(1, (aantal-i)+1):
        print(end="  ")

    while k!=(2*i-1):
        print("* ", end="")
        k += 1

    k = 0
    print()
