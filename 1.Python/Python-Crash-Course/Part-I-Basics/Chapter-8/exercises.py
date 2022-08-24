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
