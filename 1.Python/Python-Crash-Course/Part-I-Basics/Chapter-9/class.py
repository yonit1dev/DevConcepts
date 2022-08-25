# All about OOP in Python, beginning with classes

class Dog():
    """A simple attempt to model a dog"""

    def __init__(self, name, age):
        """Initialize name and age attributes"""
        self.name = name
        self.age = age
    
    def sit(self):
        """Simulate a dog sitting"""
        print(self.name.title() + " is now sitting.")
    
    def roll_over(self):
        """Simulate rolling over of a dog"""
        print(self.name.title() + " rolled over!")

my_dog = Dog("willie", 6)
print("My dog's name is " + my_dog.name.title())
print("My dog's age is " + str(my_dog.age))

my_dog.sit()
my_dog.roll_over()