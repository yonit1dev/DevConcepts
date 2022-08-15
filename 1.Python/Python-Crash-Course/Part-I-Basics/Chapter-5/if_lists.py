# If statements with lists

# Checking for special values in lists
requested_toppings = ['mushrooms', 'green pepper', 'extra cheese']

for requested_topping in requested_toppings:
    if requested_topping == 'green pepper':
        print("Sorry, we're out of green pepper!")
    else:
        print("Adding " + requested_topping + ".")

print("\nFinished making your pizza!")

# Checking for empty lists
requested_toppings = []
if requested_toppings:
    for requested_topping in requested_toppings:
        print("Adding " + requested_topping + ".")
else:
    print("\nAre you sure you want a plain pizza?")

# Multiple lists with conditionals
available_toppings = ['mushrooms', 'olives', 'green pepper', 'pepperoni', 'pineapple', 'extra cheese']

requested_toppings = ['mushrooms', 'french fries', 'extra cheese']

for requested_topping in requested_toppings:
    if requested_topping in available_toppings:
        print("Adding " + requested_topping + ".")
    else:
        print("Sorry we don't have " + str(requested_topping))
print("Finished making your pizza!")