import turtle

# Setup
scherm = turtle.Screen()
scherm.title("turtle")
schildpad = turtle.Turtle()

for _ in range(4):
    schildpad.forward(100)
    schildpad.right(90)

# Cirkel
schildpad.circle(100)

turtle.mainloop()
