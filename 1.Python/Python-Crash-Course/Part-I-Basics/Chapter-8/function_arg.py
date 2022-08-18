# Arguments, Parameters in Functions

# Positional arguments: each argument must respect the order of the parameters in the initial function definition.
def describe_pet(animal_type, pet_name):
    """Display information about a pet."""
    print("\nI have a " + animal_type + ".")
    print("My " + animal_type + "'s name is " + pet_name.title() + ".")

describe_pet("hamster", 'harry')

# Keyword arguments: name-value pair for a function's parameters. Order doesn't matter.
describe_pet(pet_name='harry', animal_type='hamster')

# Default values
def describe_pet2(pet_name, animal_type = 'dog'):
    """Display information about a pet."""
    print("\nI have a " + animal_type + ".")
    print("My " + animal_type + "'s name is " + pet_name.title() + ".")

describe_pet2("willie") # Ommited the animal_type, hence it outputs dog automatically.


