# Looping through a list

# Using a for loop

magicians = ['alice', 'david', 'carolina']

for magician in magicians: # Looping through each entry and printing
    print(magician) # comment out to stop

for magician in magicians:
    print(magician.title() + ", that was a great trick!")
    print("I can't wait to see your next trick, " + magician.title() + ".\n")

print("Thank you everyone. That was a great show!")
