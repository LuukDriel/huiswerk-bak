import datetime


def log_bijwerken():
    Bestand = "Logbestand.txt"
    Tijd_nu = datetime.datetime.now()
    with open(Bestand, "a") as log:
        log.write(f"{Tijd_nu} - programma is uitgevoerd\n")
    print(f"Log bijgewerkt op {Tijd_nu}")


log_bijwerken()
