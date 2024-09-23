import datetime

nu = datetime.datetime.now()
vandaag = datetime.datetime.today()
morgen = vandaag + datetime.timedelta(days=1)

print(f"Het is nu {nu}")
print(f"Vandaag is het {vandaag}")
print(f"Morgen is het {morgen}")
