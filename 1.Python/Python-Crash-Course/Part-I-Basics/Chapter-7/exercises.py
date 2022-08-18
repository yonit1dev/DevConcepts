# Exercises on Chapter 7

# Exercise 7-1: Rental Car
car_name = input("What car would you like to rent? ")
print("Let me try to find you a " + car_name + ".")

# Exercise 7-2: Restaurant Seating
number_of_seats = int(input("A table for how many people: "))
if number_of_seats <= 8:
    print("You're table is ready!")
else:
    print("You'll have to wait for a while!")

# Exercise 7-3: Multiples of Ten
number = int(input("Please enter a number: "))
if(number >= 10 and number % 10 == 0):
    print(str(number) + " is a multiple of 10.")
else:
    print(str(number) + " is not a multiple of 10.")

# Exercise 7-4: Pizza Toppings
prompt = "Please enter a pizza topping: "
end = "quit"
topping = ""

while (topping != end):
    topping = input(prompt)

    if topping != end:
        print("I'll add " + topping + " to your pizza.")

# Exercise 7-5: Movie Tickets
prompt = "Enter your age.\nEnter quit to exit: "
age = ""

while True:
    age = input(prompt)

    if (age == end):
        break

    if int(age) < 3:
        print("You're ticket is free!")
    elif (int(age) >= 3 and int(age) <= 12):
        print("You're ticket costs $10.")
    elif (int(age) > 12):
        print("You're ticket costs $15.")

# Exercise 7-6: Three Exits
# Done already.

# Exercise 7-7: Infinity
# Done.

# Exercise 7-8: Deli
sandwich_orders = ['cheese', 'steak', 'tuna', 'grilled cheese', 'veggie']
finished_sandwiches = []

while sandwich_orders:
    sandwich = sandwich_orders.pop()

    print("I made your " + sandwich + " sandwich.")

    finished_sandwiches.append(sandwich)

print("A list of all made sandwiches: ")
for sandwich in finished_sandwiches:
    print(sandwich.title() + " sandwich.")

# Exercise 7-9: No Pastrami
sandwich_orders = ['pastrami', 'cheese', 'pastrami', 'steak', 'tuna', 'pastrami', 'grilled cheese', 'veggie', 'pastrami']
finished_sandwiches = []

print("Sorry, the deli has run out of pastrami.")

while sandwich_orders:

    if 'pastrami' in sandwich_orders:
        sandwich_orders.remove('pastrami')

    sandwich = sandwich_orders.pop(0)

    print("I made your " + sandwich + " sandwich.")

    finished_sandwiches.append(sandwich)

print("A list of all made sandwiches: ")
for sandwich in finished_sandwiches:
    print(sandwich.title() + " sandwich.")

# Exercise 7-10: Dream Vacation
name_prompt = "What is your name? "
place_prompt = "If you could visit one place in the world, where would you go? "
continue_prompt = "Would you like to let another person respond? (yes / no) "
poll_results = {}

polling = True

while polling:
    name = input(name_prompt)

    dream_place = input(place_prompt)

    allow = input(continue_prompt)

    poll_results[name] = dream_place

    if allow == "no":
        polling = False

print("\n--- Poll Results ---")
for k, v in poll_results.items():
    print(str(k) + " would like to go to " + str(v))
    

