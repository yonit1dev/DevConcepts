# Lists involving numbers

for value in range(1,5):
    print(value)

numbers = list(range(1, 6))

print(numbers)

even_numbers = list(range(2, 11, 2))
odd_numbers = list(range(1, 11, 2))

print(even_numbers)
print(odd_numbers)

print(min(numbers))
print(max(numbers))

# List comprehension
squares = [value**2 for value in range(1, 11)]
print(squares)