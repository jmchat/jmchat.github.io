# Do not modify these lines
__winc_id__ = '7b9401ad7f544be2a23321292dd61cb6'
__human_name__ = 'arguments'

# Add your code after this line

# Oefening 1: Groetjes
def greet(name, greeting=['Hello, <name>!']):
    if '<name>' in greeting:
        greeting = greeting.replace('<name>', name)
        greeting = (f'{greeting}')
    else:
        greeting = (f'Hello, {name}!')
    return greeting

# Oefening 2: Kracht
def force(mass, body='earth'):
    planet = {
        'sun': 274.0,
        'jupiter': 24.9,
        'neptune': 11.2, 
        'saturn': 10.4, 
        'earth': 9.8,
        'uranus': 8.9, 
        'venus': 8.9, 
        'mars': 3.7,
        'mercury': 3.7,
        'moon': 1.6, 
        'pluto': 0.6
            }
    force_response = mass * planet[body]
    return force_response

# Oefening 3: Zwaartekracht
def pull(m1, m2 , d):
    G = 6.674  * (10 ** -11)
    F = G * ((m1 * m2) / d ** 2)
    return F
