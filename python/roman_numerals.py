# Lazy Way:

def to_roman_lazy(num):
    roman_dict= {
        "M": 1000,
        "D": 500,
        "C": 100,
        "L": 50,
        "X": 10,
        "V": 5,
        "I": 1,
    }
    str=""

    for roman in roman_dict.keys():
        arabic=roman_dict[roman]
        divisible= num/arabic               #divisible is its own variable, so num/arabic are not being reevaluated when num is changing from while loop.
        while divisible>=1:                 #could also get rid of the divisible variable completely and put while num/arabic>1 because this part DOES get revaluated
            str+=roman
            num-=arabic
            divisible= num/arabic
    return str

# print(to_roman_lazy(424))


# Modern Way:

# Lazy Way:

def to_roman(num):
    roman_dict= {
        "M": 1000,
        "CM": 900,
        "D": 500,
        "CD": 400,
        "C": 100,
        "XC": 90,
        "L": 50,
        "XL": 40,
        "X": 10,
        "IX":9,
        "V": 5,
        "IV":4,
        "I": 1,
    }
    str=""

    for roman in roman_dict.keys():
        arabic=roman_dict[roman]
        divisible= num/arabic               #divisible is its own variable, so num/arabic are not being reevaluated when num is changing from while loop.
        while divisible>=1:                 #could also get rid of the divisible variable completely and put while num/arabic>1 because this part DOES get revaluated
            str+=roman
            num-=arabic
            divisible= num/arabic
    return str

# print(to_roman(424))