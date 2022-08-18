# While loops in python

prompt = "\nTell me something, and I'll repeat it."
prompt += "\nEnter 'quit' to end program: "
message = ""

while message != 'quit':
    message = input(prompt)
    
    if message != 'quit':
        print("\n" + message)

# Using flags to break out of while loops
active = True # The flag variable
while active:
    message = input(prompt)

    if message == 'quit':
        active = False
    else:
        print(message)