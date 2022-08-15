# Conditional Statements / Tests

cars = ['audi', 'bmw', 'subaru', 'toyota']

for car in cars:
    # Statements in the bracket / written after the if word are called conditional tests. They return a boolean value (true or false.)
    if(car == 'bmw'): 
        print(car.upper())
    else:
        print(car.title())

requested_topping = 'mushrooms'

# Non-equality operator.
if requested_topping != 'anchovies':
    print('Hold the anchovies!')

# Multiple conditions
age_0 = 22
age_1 = 18

print(age_0 >= 21 or age_1 >=21) # Returns true

# List and Conditionals
requested_toppings = ['mushrooms', 'onions', 'pineapple']

print('mushrooms' in requested_toppings) # Returns true
print('pepperoni' in requested_toppings) # Returns false

banned_users = ['andrew', 'carolina', 'david']
user = 'marie'

if user not in banned_users:
    print(user.title() + ", you can post a response.")