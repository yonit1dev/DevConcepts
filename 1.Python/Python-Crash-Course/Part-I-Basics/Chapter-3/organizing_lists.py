# Organizing lists in an ordered manner

# Sorting with sort() method - permanently
cars = ['bmw', 'audi', 'toyota', 'subaru']
cars.sort() # Sorted alphabetically
print(cars)

cars.sort(reverse=True) # Sorts in reverse manner
print(cars)

# Sorting with sorted() function - temporary
cars = ['bmw', 'audi', 'toyota', 'subaru']
print("Here is the original list:")
print(cars)

print("\nHere is the sorted list:")
print(sorted(cars))

print("\nHere is the original list again:")
print(cars)

# Reverse the order with reverse() method
cars.reverse()
print(cars)

# Length of list using len() method
print(len(cars))