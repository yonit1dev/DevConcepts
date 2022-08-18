# Accepting inputs from users and manipulating it.

# Input function
message = input("Tell me, and I'll repeat it to you: ")
print(message)

# Clear prompts
name = input("Enter your name: ")
print("\nHello, " + str(name) + "!")

# Int inputs
height = int(input("How tall are you, in cm? "))

if height >= 75:
    print("\nYou're tall enough for the ride!")
else:
    print("\nYou won't access the ride!")