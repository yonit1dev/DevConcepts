# Exercises in Chapter - 4

# Exercise 4-1: Pizzas
pizzas = ["cheese", "pepperoni", "chicken"]

for pizza in pizzas:
    print("I like " + pizza + " pizza.")

print("I really love pizza.")

print("\n")

# Exercise 4-2: Animals
animals = ["puppy", "cat", "cub"]

for animal in animals:
    print("A " + animal + " would make a great pet.")

print("Any of theses animals are great pets.")

print("\n")

# Exercise 4-3: Counting to Twenty
for number in range(1, 21):
    print(number)

# Exercise 4-4: One Million
# Commented out in case it takes long. Uncomment to run.
# numbers = list(range(1, 1000001))
# for number in numbers:
#     print(number)

# Exercise 4-5: Summing a Million
millions = list(range(1,10000001))
print(min(millions))
print(max(millions))
print(sum(millions))

# Exercise 4-6: Odd Numbers
odd_numbers = list(range(1, 21, 2))
for number in odd_numbers:
    print(number)

# Exercise 4-7: Threes
multiple_three = list(range(3, 31, 3))
for number in multiple_three:
    print(number)

# Exercise 4-8: Cubes
# Refer below for a complete and clean solution

# Exercise 4-9: Cube Comprehension
cubes = [value**3 for value in range(1, 11)]
for cube in cubes:
    print(cube)

