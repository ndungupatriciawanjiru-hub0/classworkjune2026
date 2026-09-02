"""
Object oriented programming.
<JS ,Python ,C++ ,JAVA , etc>
——————————————————
Concept in programming to make
work easy. by using principles.
1.Encapsulation
   -keeping data and methods<functions> inside a class
   while restricting direct access to internal data.
2.Abstraction
   -Hiding uncessary complexity or implrtation of details.
3.Inheritance
   -one class to reuse or extend propertie
    and methods of another class
4.Polymorphisim
   -appering in different forms. Method can
   have different behaviours.
—————————————————————
JS and python are object oriented.
→ number.toString() ,string.toLowerCase()
"""

"""
→ Class →
 -blueprint for an object.◇

→ Class could an architectural drawing of a house.
   object → implentaiton of the drawing.
"""
#is to have the name Capitalized
#fields <properties>
class House:
    bedrooms=3
    bathrooms=2
    floors =1
    area=120
    owner=""
    location=""
    architect="MAURICE"

    #js constructor
    def __init__(self,owner,location):
        print("Class house created. initializer called")
        self.owner=owner
        self.location=location

    def config(self,owner,location):
        print("Config method has run")
        self.owner=owner
        self.location=location

    def print_self(self):
        #this <the object itself>: self<object>
        print(self)
        print(self.__dict__) #dictionary <print all properties>


#When access object properties use dot notation
#Bracket notation is for dictionary

#→ method . config →
#→ print self
#Instance class- > create an object from a class
patricia_house=House(owner="Patricia",location="Ngoingwa")
# patricia_house.__init__()
# patricia_house.owner="Patricia"
# patricia_house.location="Ngoingwa"
#patricia_house.config(owner="Patricia",location="Ngoingwa")
print(f"Patricias House Owner {patricia_house.owner}")
print(f"Patricias Location {patricia_house.location}")
print(f"Patricias House Bedrooms {patricia_house.bedrooms}")
print(f"Patricias House Bedrooms {patricia_house.bathrooms}")
print(f"Patricias House Bedrooms {patricia_house.floors}")
print(f"Patricias House Bedrooms {patricia_house.area}")
print(f"Patricias House Designer {patricia_house.architect}")
print(f"Printing patricias house")
patricia_house.print_self()
print("End of print patricias")


simona_house=House(owner="Simona",location="Membley")#__init__ ()
# simona_house.owner="Simona"
# simona_house.location="Membley"
#simona_house.config(owner="Simona",location="Membley")
print(f"Simonas House Owner {simona_house.owner}")
print(f"Simonas Location {simona_house.location}")
print(f"Simonas House Bedrooms {simona_house.bedrooms}")
print(f"Simonas House Bathroom {simona_house.bathrooms}")
print(f"Simonas House Floors {simona_house.floors}")
print(f"Simonas House area {simona_house.area}")
print(f"Simonas House Designer{simona_house.architect}")
print(f"Printing simonas house")
simona_house.print_self()
print("End of print simonas")