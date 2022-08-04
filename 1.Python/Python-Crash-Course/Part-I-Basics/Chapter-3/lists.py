# Lists - First data strucutes to be introduced. Anything withing a square bracket is considered a list.

bicycles = ['trek', 'cannondale', 'redline', 'specialized']
print(bicycles)

# Accessing individual items in a list using indexing
print(bicycles[0].title()) # first element of list
print(bicycles[1].upper()) # second element of list
print(bicycles[-1].title()) # last element of list

message = "My first bicycle was a " + bicycles[0].title() + "." # Usage of list items
print(message) 