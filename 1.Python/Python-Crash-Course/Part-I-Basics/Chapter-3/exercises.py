# Exercises in Chapter - 3 - Lists

# Exercise 3-1: names
names = ["Bethi", "Paul", "Beki", "Saron"]
print(names[0])
print(names[1])
print(names[2])
print(names[3])

# Exercise 3-2: greetings
print("Hello " + names[0] + ", you are my friend.")
print("Hello " + names[1] + ", you are my friend.")
print("Hello " + names[2] + ", you are my friend.")
print("Hello " + names[3] + ", you are my friend.")

# Exercise 3-3: you own list
favorite_cars = ["BMW - M5", "Mercedes C Class", "Hyundai Tucson"]
print("I would like to drive a " + favorite_cars[1] + " one day.")
print("I would like my daily driver to be a " + favorite_cars[2] + ".")
print("I would like my personal car to be a " + favorite_cars[0] + ".")

# Exercise 3-4: guest list
guests = ["Mom", "Dad", "Saron", "Paul"]

print("I would like to invite you to dinner, " + guests[0])
print("I would like to invite you to dinner, " + guests[1])
print("I would like to invite you to dinner, " + guests[2])
print("I would like to invite you to dinner, " + guests[3])

# Exercise 3-5: changing guest list
print(guests[3] + " can't make it to the dinner.")
guests[3] = "Beki"

print("I would like to invite you to dinner, " + guests[0])
print("I would like to invite you to dinner, " + guests[1])
print("I would like to invite you to dinner, " + guests[2])
print("I would like to invite you to dinner, " + guests[3])

# Exercise 3-6: more guests
print("A new bigger table has been found for the dinner.")

guests.insert(0, "Mary")
guests.insert(2, "Bethi")
guests.append("John")

print("I would like to invite you to dinner, " + guests[0])
print("I would like to invite you to dinner, " + guests[1])
print("I would like to invite you to dinner, " + guests[2])
print("I would like to invite you to dinner, " + guests[3])
print("I would like to invite you to dinner, " + guests[4])
print("I would like to invite you to dinner, " + guests[5])
print("I would like to invite you to dinner, " + guests[6])

# Exercise 3-7: shrinking guest list
print("Unfortunately, I can only invite two people.")
print("Sorry " + guests.pop() + ", can't invite you to the dinner.")
print("Sorry " + guests.pop() + ", can't invite you to the dinner.")
print("Sorry " + guests.pop() + ", can't invite you to the dinner.")
print("Sorry " + guests.pop() + ", can't invite you to the dinner.")
print("Sorry " + guests.pop() + ", can't invite you to the dinner.")

print("I would like to invite you to dinner, " + guests[0])
print("I would like to invite you to dinner, " + guests[1])

del guests[0]
del guests[0]

print(guests)

# Exercise 3-8: seeing the world
bucket_places = ["Istanbul", "Paris", "Seychelles", "Coastal-Islands", "Brazil"]

print(bucket_places)
print(sorted(bucket_places))
print(bucket_places)

print(sorted(bucket_places, reverse=True))
print(bucket_places)

bucket_places.reverse()
print(bucket_places)

bucket_places.reverse()
print(bucket_places)

bucket_places.sort()
print(bucket_places)

bucket_places.sort(reverse=True)
print(bucket_places)

# Exercise 3-9: dinner guests
guests = ["Mom", "Dad", "Saron", "Paul"]
print(len(guests))

# Exercise 3-10: every function - Tedious! A combination of all of the above exercises
