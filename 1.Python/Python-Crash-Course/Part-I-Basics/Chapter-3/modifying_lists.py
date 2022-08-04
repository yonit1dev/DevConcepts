# Modification of lists : adding or removing elements.

motorcycles = ['honda', 'yamaha', 'suzuki']
print(motorcycles)

motorcycles[0] = 'ducati' # Replacing honda with ducati
print(motorcycles)

# Appending elements to end of list
motorcycles.append('honda')
print(motorcycles)

# Inserting elements to any position
motorcycles.insert(1, 'harley') # Inserting 'harley' to second position
print(motorcycles)

# Removing elements from lists
del motorcycles[0] # Deleting first element
print(motorcycles)

popped_motorcycle = motorcycles.pop() # Pop is used to remove an element but make use of the removed element
print(popped_motorcycle)
print(motorcycles)

motorcycles.remove('harley')
print(motorcycles)
