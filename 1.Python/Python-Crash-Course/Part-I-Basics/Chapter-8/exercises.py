# Exercises on Chapter 8

# Exercise 8-1: Message

def display_message():
    """Displays a generic message."""

    print("I'm learning about functions in python!")


display_message()

# Exercise 8-2: Favorite Book

def favorite_book(title):
    """Prints my favorite book"""

    print("One of my favorite books is " + title.title() + ".")


favorite_book("atomic habits")

# Exercise 8-3: T-Shirt

def make_shirt(size, text):
    """Prints a sentence summarizing the size of the shirt and message to be printed on."""

    print("You've ordered a " + size.upper() +
          " size shirt with text: " + text + " to be printed on it.")


make_shirt('medium', 'I am a programmer!')
make_shirt(text='I am a designer!', size='large')

# Exercise 8-4: Large Shirts

def make_shirt2(text='I love Python.', size='large'):
    """Prints a sentence summarizing the size of the shirt and message to be printed on."""

    print("You've ordered a " + size.upper() +
          " size shirt with text: " + text + " to be printed on it.")


make_shirt2(size='medium')
make_shirt2()
make_shirt2(size='extra-large', text='I am a developer!')

# Exercise 8-5: Cities

def describe_city(city_name, country="Ethiopia"):
    """Prints a sentence."""

    print(city_name.title() + " is in " + country.title())


describe_city(city_name="Addis Ababa")
describe_city(city_name="London", country="Britian")
describe_city(city_name="Dubai", country="UAE")

# Exercise 8-6: City Names

def city_country(city_name, country):
    return (city_name.title() + ", " + country.title())


home_town = city_country("Addis Ababa", "ethiopia")
print(home_town)
abroad_town = city_country("dubai", "united arab emirates")
print(abroad_town)
west_town = city_country("london", "britian")
print(west_town)

# Exercise 8-7: Album

def make_album(artist_name, album_title, number_of_tracks=0):
    music_album = {}

    if number_of_tracks:
        music_album["Artist Name"] = artist_name.title()
        music_album["Album Title"] = album_title.title()
        music_album["Number of Tracks"] = int(number_of_tracks)
    else:
        music_album["Artist Name"] = artist_name.title()
        music_album["Album Title"] = album_title.title()

    return music_album


teddy_afro = make_album(artist_name="Teddy Afro",
                        album_title="Tikur Sew", number_of_tracks=14)
nati_man = make_album("Nati man", "yemejemriyaye")
print(teddy_afro)
print(nati_man)

# Exercise 8-8: User Albums

while True:
    user_artist = input("Enter artist's name: ")
    user_title = input("Enter album title: ")

    user_album = make_album(user_artist, user_title)

    print(user_album)

    user_continue = input("Do you want to contine? (yes / no): ")

    if (user_continue.lower() == "yes"):
        continue
    elif (user_continue.lower() == "no"):
        break

# Exercise 8-9: Magicians

magician_names = ['Houdini', 'The Magician', 'Alex Angel']

def show_magicians(magicians):
    for magician in magicians:
        print(magician.title())

show_magicians(magician_names)

# Exercise 8-10: Great Magicians

def make_great(magicians):
    for i in range(len(magicians)):
        magicians[i] = 'the Great ' + str(magicians[i])

def show_magicians(magicians):
    for magician in magicians:
        print(magician.title())

magician_names = ['Houdini', 'Magician', 'Alex Angel']

make_great(magician_names)

show_magicians(magician_names)

# Exercise 8-11: Unchanged Magicians

def make_great_changed(magicians):
    new_great_magician = []

    for i in range(len(magicians)):
        new_great_magician.append('the Great ' + str(magicians[i]))
    
    return new_great_magician

def show_magicians_vary(magicians):
    for magician in magicians:
        print(magician.title())

magician_names = ['Houdini', 'Magician', 'Alex Angel']
magician_names_great = make_great_changed(magician_names[:])

show_magicians_vary(magician_names)
show_magicians_vary(magician_names_great)

# Exercise 8-12: Sandwiches

def make_sandwiches(*contents):
    print("\nMaking a sandwich with: ")
    for content in contents:
        print("- " + str(content))

make_sandwiches("Cheese", "Meat")
make_sandwiches("Chicken")
make_sandwiches("Mayo", "Ketchup", "Salad")

# Exercise 8-13: User Profile

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

myself = build_profile("yonathan", "anosie", address='addis ababa', age=21, skin_color="dark brown")

print(myself)

# Exercise 8-14: Cars

def car_info(manufacturer, model_name, **info):
    """Creates a dictionary about a car's properties"""
    car = {}
    car['Manufacturer'] = manufacturer.title()
    car['Model'] = model_name


    for key, value in info.items():
        if type(value) == type(""):  
            value = value.title()
        
        car[key] = value

    
    return car

toyota = car_info("toyota", "yaris-compact", year=2010)
subaru = car_info("Subaru", "outback", color="blue", tow_package=True)
hyundai = car_info("hyundai", "tucson", year=2022, color="grey")

print(toyota)
print(subaru)
print(hyundai)

# Other exercises are easy and straightforward