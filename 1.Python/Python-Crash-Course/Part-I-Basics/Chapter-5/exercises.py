# Exercises in Chapter - 5

# Exercise 5-1: Conditional tests - only for 4 tests done
destinations = ['Istanbul', 'Dubai', 'Bali']
print("Is Addis Ababa in destinations? I predict False.")
print('Hawassa' in destinations)

print("Is Hawassa in destinations? I predict False.")
print('Addis Ababa' in destinations)

print("Is Istanbul in destinations? I predict True.")
print('Istanbul' in destinations)

print("Is Bali in destinations? I predict True.")
print('Bali' in destinations)

# Exercise 5-2: More Conditional tests - Building upon the above exercise.

# Exercise 5-3: Alien Colors #1
alien_color = 'yellow'
if alien_color == 'green':
    print("You've earned 5 points.")

alien_color = 'green'
if alien_color == 'green':
    print("Success!")
else:
    print("")

# Exercise 5-4: Alien Colors #2
alien_color = 'black'
if alien_color == 'green':
    print("You've earned 5 points.")
else:
    print("You've earned 10 points.")

# Exercise 5-5: Alien Colors #3
alien_color = 'red'
if alien_color == 'green':
    print("You've earned 5 points.")
elif alien_color == 'yellow':
    print("You've earned 10 points.")
elif alien_color == 'red':
    print("You've earned 15 points.")

# Exercise 5-6: Stages of Life
age = 21
if age < 2:
    print("You're a baby:)")
elif age >= 2 and age < 4:
    print("You're a toddler:)")
elif age >= 4 and age < 13:
    print("You're a kid:)")
elif age >= 13 and age < 20:
    print("You're a teenager:)")
elif age >= 20 and age < 65:
    print("You're a adult:)")
elif age >= 65:
    print("You're a elder:)")

# Exercise 5-7: Favorite fruits
favorite_fruits = ['apple', 'banana', 'orange', 'pineapple', 'strawberry']

if 'apple' in favorite_fruits:
    print("You love apples.")
if 'orange' in favorite_fruits:
    print("You love oranges.")
if 'grapes' in favorite_fruits:
    print("You love grapes.")
if 'blueberry' in favorite_fruits:
    print("You love blueberry.")
if 'pineapple' in favorite_fruits:
    print("You love pineapple.")



