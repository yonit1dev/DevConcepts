# Manipulating / Playing with dictionaries

# Looping through a dictionary's items
user_0 = {
    'username' : 'efermi',
    'first' : 'enrico',
    'last' : 'fermi',
}

for key, value in user_0.items():
    print("\nKey: " + key)
    print("Value: " + value)

# Looping through a dictionaries keys
favorite_languages = {'jen' : 'python', 'sarah' : 'c', 'edward' : 'ruby', 'phil' : 'python'}

# The following for loops provide the same output. Looping through a dictionary's key is the default behavior.
for name in favorite_languages.keys():
    print(name.title())

for name in favorite_languages:
    print(name.title())

# Looping through a dictionary's values.
for language in favorite_languages.values():
    print(language.title())
# A better way to do the above would be:
for language in set(favorite_languages.values()):
    print(language.title()) # A set maintains uniqueness.
