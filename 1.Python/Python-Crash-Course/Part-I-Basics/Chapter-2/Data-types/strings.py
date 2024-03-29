# Strings - anything with a single or double quote around it is a string

from numpy import full


name = "ada lovelace"
print(name.title()) # The method title displays each word in titlecase (capitalizes the first letter).

print("\n")

name = "Ada Lovelace"
print(name.upper()) # Capitalizes all letters
print(name.lower()) # Lowercase of all letters

print("\n")

# Concatenation of strings
first_name = "ada"
last_name = "lovelace"
full_name = first_name + " " + last_name
print(full_name)

message = "Hello, " + full_name.title() + "!"
print(message)

print("\n")

# Whitespace - tabs, spaces and newlines/endline

print("\tPython") # Tab
print("Languages:\nPython\nC\nJavaScript") # Newline character

# Stripping Whitespace
favorite_language = 'python '
print(favorite_language)
print(favorite_language.rstrip()) # Strip the whitespace on the right of the string temporarily
favorite_language=  ' python'
print(favorite_language)
print(favorite_language.lstrip()) # Strip the whitespace on the left of the string temporarily
