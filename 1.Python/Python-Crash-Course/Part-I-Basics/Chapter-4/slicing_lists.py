# Slicing / Working with part of a list

players = ['charles', 'martina', 'michael', 'florence', 'eli']

print(players[0:]) # Starting from the first element to the end
print(players[0:3]) # First three elements
print(players[:3]) # First three elements

# Copying a list
my_foods = ['pizza', 'falafel', 'carrot-cake']
friend_foods = my_foods[:] # Creates a separate new list and copies
other_foods = my_foods # Points the list contained in my_foods

print(my_foods)
print(friend_foods)
print(other_foods)

my_foods.append('burger')
print(my_foods)
print(friend_foods)