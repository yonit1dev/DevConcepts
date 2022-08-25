# Exercises on Chapter 9

# Exercise 9-1: Restaurant

class Restaurant():
    """A Class modeling restaurant"""

    def __init__(self, name, cuisine_type) -> None:
        self.name = name.title()
        self.cuisine_type = cuisine_type.title()

    def describe_restaurant(self):
        """Describes the restaurant"""
        
        print("This restaurant is called " + self.name)
        print("The cuisine type at " + self.name.title() + " is " + self.cuisine_type)
    
    def open_restaurant(self):
        """Tells whether the restaurant is open or not"""

        print(self.name + " is currently open.")

ecstasy = Restaurant("ecstasy food hub", "ethiopian")

print(ecstasy.name)
print(ecstasy.cuisine_type)
ecstasy.describe_restaurant()
ecstasy.open_restaurant()

# Exercise 9-2: Three Restaurants

chanoly = Restaurant("chanoly noodles", "chineese")
wow = Restaurant("wow burger", "american")
patali = Restaurant("patali's pita", "indian")

chanoly.describe_restaurant()
wow.describe_restaurant()
patali.describe_restaurant()

# Exercise 9-3: Users

class User():
    """A class to model a user"""

    def __init__(self, first_name, last_name, age, address, gender) -> None:
        self.first_name = first_name.title()
        self.last_name = last_name.title()
        self.age = age
        self.address = address.title()
        self.gender = gender.title()[0]

    def describe_user(self):
        print("\nYour information is as follows: ")
        print("Full name: " + self.first_name + " " + self.last_name)
        print("Your address: " + self.address)
        print("Your age and gender, respectively: " + str(self.age) + " " + self.gender)

    def greet_user(self):
        print("\nGood Afternoon, " + self.first_name + " " + self.last_name + ".")

my = User("john", "doe", 25, "unknown", "male")
my.describe_user()
my.greet_user()