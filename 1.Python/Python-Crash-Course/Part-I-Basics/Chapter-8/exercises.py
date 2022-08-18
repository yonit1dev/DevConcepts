# Exercises on Chapter 8

# Exercise 8-1: Message
def display_message():
    """Displays a generic message."""

    print("I'm learning about functions in python!")

display_message()

# # Exercise 8-2: Favorite Book
def favorite_book(title):
    """Prints my favorite book"""

    print("One of my favorite books is " + title.title() + ".")

favorite_book("atomic habits")

# Exercise 8-3: T-Shirt
def make_shirt(size, text):
    """Prints a sentence summarizing the size of the shirt and message to be printed on."""

    print("You've ordered a " + size.upper() + " size shirt with text: " + text + " to be printed on it.")

make_shirt('medium', 'I am a programmer!')
make_shirt(text='I am a designer!', size='large')

# Exercise 8-4: Large Shirts
def make_shirt2(text='I love Python.', size='large'):
    """Prints a sentence summarizing the size of the shirt and message to be printed on."""

    print("You've ordered a " + size.upper() + " size shirt with text: " + text + " to be printed on it.")

make_shirt2(size='medium')
make_shirt2()
make_shirt2(size='extra-large', text='I am a developer!')

# Exercise 8-5: Cities
def describe_city(city_name, country = "Ethiopia"):
    """Prints a sentence."""

    print(city_name.title() + " is in " + country.title())

describe_city(city_name="Addis Ababa")
describe_city(city_name="London", country="Britian")
describe_city(city_name="Dubai", country="UAE")