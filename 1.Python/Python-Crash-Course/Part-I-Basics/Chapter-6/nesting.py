# Nesting dictionaries, lists, etc...
# TIP : Don't nest too much. If you're nesting too deeply, there probably is a much simpler solution.

# Nesting dictionaries in lists
aliens = []

for alien_number in range(30):
    if alien_number < 10:
        alien = {'color' : 'green', 
        'points' : 5, 
        'speed' : 'slow',}
    elif alien_number < 20:
        alien = {
            'color' : 'yellow', 
            'points' : 7, 
            'speed' : 'medium',}
    else:
        alien = {
            'color' : 'red',
            'points' : 9,
            'speed' : 'fast',
        }
    
    aliens.append(alien)

for number in range(0, 30, 10):
    print(aliens[number])
print('...')

print("Total aliens created : " + str(len(aliens)))

# Nesting a list in a dictionary
pizza = {
    'crust' : 'thick',
    'toppings' : ['mushrooms', 'cheese']
}

print("You've ordered a " + str(pizza['crust']) + " crust pizza with the below toppings: ")
for topping in pizza['toppings']:
    print(topping)

# Nesting a dictionary in a dictionary
users = {
    'aeinstein' : {
        'first' : 'alberts',
        'last' : 'einstein',
        'location' : 'princeton',
    },
    'mcurie' : {
        'first' : 'marie',
        'last' : 'curie',
        'location' : 'paris',
    }
}

for username, user_info in users.items():
    print("\nUsername: " + username)
    
    for k, v in user_info.items():
        print(str(k).title() + " : " + str(v.title()))