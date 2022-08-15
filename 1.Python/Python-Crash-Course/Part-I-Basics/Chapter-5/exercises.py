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

print("\n")

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

print("\n")

# Exercise 5-8: Hello Admin
username = ['user1', 'admin', 'user3', 'user4', 'user5']

for user in username:
    if user == 'admin':
        print("Hello " + str(user) + ", would you like a status report?")
    else:
        print("Hello " + user + ".")

print("\n")

# Exercise 5-9: No Users
username = []

if username:
    for user in username:
        if user == 'admin':
            print("Hello " + str(user) + ", would you like a status report?")
        else:
            print("Hello " + user + ".")
else:
    print("We need to find some users!")

# Exercise 5-10: Checking usernames
current_users = ['root_user', 'first_user', 'special_user', 'person_user', 'person_user']

new_users = ['hello_user', 'person_user', 'another_user', 'zero_user', 'first_user']

for new_user in new_users:
    if new_user.lower() in current_users:
        print("Please choose another username.")
    else:
        print("Username available. " + str(new_user))

# Exercise 5-11: Ordinal Numbers
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for number in numbers:
    if number == 1:
        print('1st')
    elif number == 2:
        print('2nd')
    elif number == 3:
        print('3rd')
    else:
        print(str(number) + "th")
