# Do not modify these lines
__winc_id__ = '71dd124b4a6e4d268f5973db521394ee'
__human_name__ = 'strings'

# Add your code after this line
player_0 = 'Ruud Gullit'
player_1 = 'Marco van Basten'
goal_0 = 32
goal_1 = 54
scorers = player_0 + ' ' + str(goal_0) + ', ' + player_1 + ' ' + str(goal_1)
report = player_0 + ' scored in the ' + str(goal_0) + 'nd minute' + '\n' + player_1 + ' scored in the ' + str(goal_1) + 'th minute'
player = 'Gerald Vanenburg'
first_name = player[:6]
last_name_len = len(player) - player.find('V')
name_short = player[:1] + '. ' + player[7:16]
chant = ((first_name + '! ') * len(first_name))[:-1]
good_chant = chant[-1] != ' '



