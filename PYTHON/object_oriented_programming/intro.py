
"""
Object Oriented Programming

<JS, Python, C++, JAVA, etc>

Concept in programming to make
work easy by using principles.

1. Encapsulation
   - Keeping data and methods <functions> inside a class
     while restricting direct access to internal data.

2. Abstraction
   - Hiding unnecessary complexity or implementation details.

3. Inheritance
   - One class can reuse or extend properties
     and methods of another class.

4. Polymorphism
   - Appearing in different forms.
     A method can have different behaviours.
"""


"""
Class
    - Blueprint for an object.

A class could be an architectural drawing of a house.

Object
    - Implementation of the drawing.
"""


# Class names should start with a capital letter
# The class is like a blueprint that we use to create objects
class House:

    # These are properties/attributes of the house
    # They have default values that all houses can use
    bedrooms = 3
    bathrooms = 2
    floors = 1
    area = 120
    owner = ""
    location = ""
    architect = "MAURICE"

    # This method is used to set the owner and location
    # self refers to the particular object we are working with
    def config(self, owner, location):

        # Store the owner inside the current house object
        self.owner = owner

        # Store the location inside the current house object
        self.location = location

    # This method helps us see information about the object
    def print_self(self):

        # Print the object itself
        print(self)

        # __dict__ shows the properties stored in the object
        print(self.__dict__)


# When accessing object properties, use dot notation
# Example: house.owner
# Bracket notation [] is normally used with dictionaries


# ---------------- PATRICIA'S HOUSE ----------------

# Create a new House object from the House class
patricia_house = House()

# Use the config method to give this house an owner and location
patricia_house.config(
    owner="Patricia",
    location="Ngoingwa"
)

# Access the house properties using dot notation
print(f"Patricia's House Owner: {patricia_house.owner}")

print(f"Patricia's House Location: {patricia_house.location}")

print(f"Patricia's House Bedrooms: {patricia_house.bedrooms}")

print(f"Patricia's House Bathrooms: {patricia_house.bathrooms}")

print(f"Patricia's House Floors: {patricia_house.floors}")

print(f"Patricia's House Area: {patricia_house.area}")

print(f"Patricia's House Designer: {patricia_house.architect}")


# Call the method that prints information about the object
print("Printing Patricia's house")

patricia_house.print_self()

print("End of print Patricia's")


# ---------------- SIMONA'S HOUSE ----------------

# Create another House object
# This is a different object from patricia_house
simona_house = House()

# Configure the new house with different information
simona_house.config(
    owner="Simona",
    location="Membley"
)

# Print the properties of Simona's house
print(f"Simona's House Owner: {simona_house.owner}")

print(f"Simona's House Location: {simona_house.location}")

print(f"Simona's House Bedrooms: {simona_house.bedrooms}")

print(f"Simona's House Bathrooms: {simona_house.bathrooms}")

print(f"Simona's House Floors: {simona_house.floors}")

print(f"Simona's House Area: {simona_house.area}")

print(f"Simona's House Designer: {simona_house.architect}")


# Print information about the Simona house object
print("Printing Simona's house")

simona_house.print_self()

print("End of print Simona's")

