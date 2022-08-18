# Using loops with list and dictionaries

# Use a while loop to modify contents in a list instead of a for loop

unconfirmed_users = ['alice', 'brian', 'candace']
confirmed_users = []

while unconfirmed_users:
    current_user = unconfirmed_users.pop()

    print("Verifying user: " + current_user.title())

    confirmed_users.append(current_user)

print("\nThe following users have been confirmed: ")
for user in confirmed_users:
    print(user.title())

# Removing several instances from a list
pets = ['dog', 'cat', 'dog', 'goldfish', 'cat', 'rabbit', 'cat']
print(pets)

# Remove cat
while 'cat' in pets:
    pets.remove('cat')

print(pets)