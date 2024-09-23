import turtle

# Setup
scherm = turtle.Screen()
scherm.title("turtle")
schildpad = turtle.Turtle()

# Kleuren
schildpad.fillcolor("yellow")
schildpad.pencolor("green")

# Rechthoek
for _ in range(2):
    schildpad.begin_fill()
    schildpad.forward(100)
    schildpad.right(90)
    schildpad.forward(150)
    schildpad.right(90)
    schildpad.end_fill()

# Kleuren
schildpad.fillcolor("blue")
schildpad.pencolor("red")

# Cirkel
schildpad.penup()
schildpad.goto(50, 0)
schildpad.pendown()
schildpad.begin_fill()
schildpad.circle(75)
schildpad.end_fill()

turtle.mainloop()
