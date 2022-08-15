# Dictionary - A datastructure that stores data in key-value pairs. It is a collection of key-value pairs. Declared using curly braces. They are dynaminc datastrucutes.

alien_0 = {'color' : 'green', 'points' : 5}
print(alien_0['color'])
print(alien_0['points'])

# Adding key-value pairs.
alien_0['x_position'] = 0
alien_0['y_position'] = 25

# Removing key-value pairs.
del alien_0['points']

print(alien_0)

# Empty dictionary
alien_1 = {}
alien_1['color'] = 'red'
alien_1['points'] = 4

print(alien_1)

# Modifying entries
print("Alien_0 is " + alien_0['color'].lower())
alien_0['color'] = 'yellow'
print("Alien_0 is now " + alien_0['color'].lower())

alien_0 = {'x_position' : 0, 'y_position' : 25, 'speed' : 'medium'}
print("Original x-position: " + str(alien_0['x_position']))

if alien_0['speed'] == 'slow':
    alien_0['x_position'] += 1
elif alien_0['speed'] == 'medium':
    alien_0['x_position'] += 2
else:
    alien_0['x_position'] += 3

print("New x-position: " + str(alien_0['x_position']))