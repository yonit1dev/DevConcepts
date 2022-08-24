# Using variable arguments

# Arbitrary numbers of arguments

def make_pizza(*toppings):
    """Prints the list of toppings requested."""
    print("\nMaking a pizza with the following toppings: ")
    
    for topping in toppings:
        print("- " + topping)

make_pizza('pepperoni', 'cheese')

# Positional with Arbitrary

def make_pizza_size(size, *toppings):
    """Prints the list of toppings requested."""
    print("\nMaking a " + str(size) + " cm pizza with the following toppings: ")
    
    for topping in toppings:
        print("- " + topping)

make_pizza_size(5, 'pepperoni', 'cheese')

# Arbitrary keyword arguments

def build_profile(first, last, **user_info):
    """Create's a dictionary about a user's info"""
    profile = {}
    profile['first_name'] = first.title()
    profile['last_name'] = last.title()

    for key, value in user_info.items():
        if type(value) == type(""):  
            value = value.title()
        
        profile[key] = value

    
    return profile

myself = build_profile("yonathan", "anosie", address='addis ababa', age=21)

print(myself)