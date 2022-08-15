# Exercises on Chapter 6

# Exercise 6-1: Person
person = {'first_name' : 'Yonathan', 'last_name' : 'Anosie', 'age' : 21, 'city' : 'Addis Ababa',}

for key in person.keys():
    print(person[key])  # A more cleaner and robust line than printing each key alone

print("")

# Exercise 6-2: Favorite Numbers
favorite_numbers = {'Person 1' : 4, 'Person 2' : 6, 'Person 3' : 12, 'Person 4' : 7, 'Person 5' : 99,}

for person in favorite_numbers.keys():
    print(str(person).title() + "'s favorite number is " + str(favorite_numbers[person]))

print("")

# Exercise 6-3: Glossary
glossary = {
    'variables' : 'placeholders to store information / data in a program.',
    'lists' : 'a type of datastructures used to store information in an unordered (or ordered) sequence.',
    'conditionals' : 'statements used to check for a condition in a program.',
    'loops' : 'statements used to iterate over a piece of code for a number of times.',
    'integers' : 'data-type in python used to represent numbers.',
}

for data in glossary.keys():
    print( "\n" + data.title() + " : " + glossary[data])

# Exercise 6-4: Glossary 2
# Cleaning up the code from the above exercise, which is already done.
print("")

# Exercise 6-5: Rivers
rivers = {'nile' : 'ethiopia', 'amazon' : 'brazil', 'mississippi' : 'america'}
for river in rivers:
    print("The " + river.title() + " runs through " + rivers[river].title() + ".")

for river in rivers.keys():
    print(river.title())
for country in rivers.values():
    print(country.title())

print("")

# Exercise 6-6: Polling