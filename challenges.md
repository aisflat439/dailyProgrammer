*Happy Tuesday daily_programmer*

Note: By all means use a library for any daily_programmer task, this is encouraged.

JSON has 6 types, `string` `number` `object` `array` `boolean` and `null`. Please write a program that takes a JSON string and outputs which types it contains.

```
{
  "name": "Devin",
  "age": 38,
  "hasPets": true  
}

=> This JSON object has strings, numbers, and booleans

{
  "name": "Devin",
  "age": 38,
  "hasPets": true,  
  "petNames": [
    "Joey",
    "Tuna",
    "Seven"
  ]
}

=> This JSON object has strings, numbers, booleans, and arrays
```

Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.

*if you have a question about someones solution please use a thread under their posted link

*Happy Wednesday daily_programmer*

This is part three of a multi part challenge.

In our game battleship we will have to play an opponent. Please write a function that creates an opponents board with ships of the following types:

```
# Class of ship Size
1 Carrier          5
2 Battleship       4
2 Cruiser          3
2 Destroyer        2
```

The more random the opponent board the better. Valid moves are within the borders and spaces cannot be occupied by two ships at once.

```
createOpponentBoard()
printOpponentBoard()

   1   2   3   4   5   6   7   8   9  10
a  o   u   u   u   u   u   o   o   u   u
b  o   u   u   u   u   u   u   u   u   o
c  o   u   o   o   o   o   o   u   u   o
e  o   u   u   u   u   u   u   u   u   u
f  u   u   u   u   u   u   u   u   u   u
g  u   u   u   o   u   u   u   u   u   u
h  u   u   u   o   u   o   o   o   o   u
i  u   u   u   o   u   u   u   u   u   u
j  o   o   o   u   u   u   u   u   u   u

```

Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.

*if you have a question about someones solution please use a thread under their posted link

*Happy Tuesday daily_programmer*

This is part two of a multi part challenge.

In the game battleship you have to place your boats in valid locations on the board. Please write a function that returns invalid placement if a the location is off the board and shows on the board as `o` for occupied.

```
placeBoat(5, g, 8, right)
=> invalid placement
placeBoat(5, c, 3, right)
placeBoat(3, g, 4, down)
printBoard()

   1   2   3   4   5   6   7   8   9  10
a  u   u   u   u   u   u   u   u   u   u
b  u   u   u   u   u   u   u   u   u   u
c  u   u   o   o   o   o   o   u   u   u
d  u   u   u   u   u   u   u   u   u   u
e  u   u   u   u   u   u   u   u   u   u
f  u   u   u   u   u   u   u   u   u   u
g  u   u   u   o   u   u   u   u   u   u
h  u   u   u   o   u   u   u   u   u   u
i  u   u   u   o   u   u   u   u   u   u
j  u   u   u   u   u   u   u   u   u   u

```

Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.

*if you have a question about someones solution please use a thread under their posted link

*Happy Monday daily_programmer*

This is part one of a multi part challenge.

Write a program that prints a board (matrix). The board should have column numbers and rows letters. Spaces should be represented by a `u`

```
printBoard()

   1   2   3   4   5   6   7   8   9  10
a  u   u   u   u   u   u   u   u   u   u
b  u   u   u   u   u   u   u   u   u   u
c  u   u   u   u   u   u   u   u   u   u
d  u   u   u   u   u   u   u   u   u   u
e  u   u   u   u   u   u   u   u   u   u
f  u   u   u   u   u   u   u   u   u   u
g  u   u   u   u   u   u   u   u   u   u
h  u   u   u   u   u   u   u   u   u   u
i  u   u   u   u   u   u   u   u   u   u
j  u   u   u   u   u   u   u   u   u   u

```

Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.

*if you have a question about someones solution please use a thread under their posted link

**Happy Friday daily_programmer*



For those interested, the mystery of where I posted yesterdays daily_programmer challenge has been solved. It's in a DM to the person who suggested recipe week!

Today you must write a program that allows our Pantry to make a substitution when available. In the pseudo code example the recipe blueberryPancakes has a substitution hash available. If blueberries are out, it can sub in strawberries. When getIngredients(overnightOats) is called, strawberries are returned.

```
pantry = new Pantry;
addNewRecipe(blueberryPancakes, {blueberries : strawberries});
getIngredients(overnightOats);
=> Flour, blueberries, eggs, milk, baking soda, sugar
addNewRecipe(overnightOats);
pantry.remove(blueberries, 2);
getIngredients(overnightOats);
=> Oats, strawberries, almond milk, pecans
pantry.getShoppingList();
=> Blueberries
```

Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.

*if you have a question about someones solution please use a thread under their posted link*

*Happy Wednesday Daily Programmer*

You must write code that verifies the awarded points for a fictional sport are valid. This sport is a simplification of American Football scoring rules. This means that the score values must be any logical combination of the following four rewards:

-6 points for a "touch-down"
-3 points for a "field-goal"
-1 point for an "extra-point"; can only be rewarded after a touch-down. Mutually-exclusive with "two-point conversion"
-2 points for a "two-point conversion"; can only be rewarded after a touch-down. Mutually-exclusive with "extra-point"
-*this game version doesn't have a safety*

A valid score could be 7, which can come from a single "touch-down" and then an "extra-point". Another example could be 6, from either a single "touch-down" or two "field-goals". 4 is not a valid score, since it cannot be formed by any well-combined rewards.

Please validate the following scores:
-35
-2
-11
-13


Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.

*if you have a question about someones solution please use a thread under their posted link*

*Happy Wednesday Daily Programmer*

Write a program that takes an array of strings and outputs them rows with `x` as a fill letter. If the string ends with `x` like `fox` the next fill letter should become `z`.

```
outputArray(cow, fox, hound, fish)
```

```
cowxx
foxzx
hound
fishx
```

Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.

*if you have a question about someones solution please use a thread under their posted link*

*Happy Tuesday Daily Programmer*

A file I/O Question today.

Write a program that validates phone numbers fit one of the following two formats.

```
(xxx) xxx-xxxx
xxx-xxx-xxxx
```

This file () should return:

```
987-123-4567
(123) 456-7890
```

Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.

*if you have a question about someones solution please use a thread under their posted link*

*Happy Monday Daily Programmer*

An I/O Question that basically builds on Friday's problem.

Write a program that allows a user to guess a name. It should return, `The name is too short`, `The name is too long`, `correct length, you have [amount of correct letters] correct letters`, or `correct`.

```
output: Please guess a name:
input: Fred
output: The name is too long:
input: Bob
output: correct length, you have 1 correct letters:
input: Tom
output: Correct!
```

Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.

*if you have a question about someones solution please use a thread under their posted link*

*Happy Friday Daily Programmer*

An I/O Question for this morning and one of the first programs I ever wrote.

Write a program that allows a user to guess the number. It should return, `higher`, `lower` or `correct`.

```
output: Please guess a number:
input: 4
output: higher, please guess a number:
input: 6
output: lower, please guess a number:
input: 5
output: Correct!
```

Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.

*if you have a question about someones solution please use a thread under their posted link*

*Happy Friday Daily Programmer*

This problem is great for new daily_programmer members and daily_programmer vets alike!

Detect if the input is all caps.

```
checkCapital('PHILLYDEV') => TRUE
checkCapital('FRI!') => TRUE
checkCapital('The Weekend') => FALSE
checkCapital('DailyProgrammer') => FALSE
```

Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.

*if you have a question about someones solution please use a thread under their posted link*

*Happy Thursday Daily Programmer*

Today is an algorithm problem. Given a number set, return all distinct versions of that set, without duplicates. Here's an example:

```
numberSet = [1, 2, 3]

return values = [
  [1],
  [2],
  [3],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
]
```

Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution. I'll be away from May 30 - June 8th. Is anyone interested in pinch hitting?

*if you have a question about someones solution please use a thread under their posted link*

*Happy Wednesday Daily Programmer*

IO problems continue... Today our challenge is to match Presidents initials with an Atomic Elements SI - Symbol. If the President has a middle initial, if can be ignored. So Harry S Truman's initials would be `HT` and there wouldn't be an initials set that works. Rutherford Hayes would be a match because he's Rhodium, Calvin Coolidge would also be a match because he's Carbon Carbon.

Here is a link to the presidents birthdays. https://github.com/aisflat439/dailyProgrammer/blob/master/data/presidents.csv and here is a link to the elements. https://github.com/aisflat439/dailyProgrammer/blob/master/data/elements.csv


Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution. I'll be away from May 30 - June 8th. Is anyone interested in pinch hitting?

*if you have a question about someones solution please use a thread under their posted link*

*Happy Tuesday Daily Programmer*

IO problems continue... Today our challenge is to find out the atomic weight of the following elements.

H20 - Wudder

CH4 - Methane gas

NH3 - Ammonia

Here is a link to the presidents birthdays. https://github.com/aisflat439/dailyProgrammer/blob/master/data/elements.csv

Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution. I'll be away from May 30 - June 8th. Is anyone interested in pinch hitting?

*Happy Wednesday*

In the console, you will be three integers or sets of integers. You will first be  given an integer N. This is the number of following integers that are part of the array. You will then be prompted for an array of integers with only a space as a separator. After the N integers, you will be given an integer C which represents the sum-pair you are attempting to match.

Example
```
INPUT
6
1 -3 4 0 f4 77
5
OUTPUT
1, 4
```

Challenge Set of input
```
14
10 -8 2 1 4 -9 6 1 9 -10 -5 2 3 7
7
```

Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution. If you have problems or ideas, let me know!

*if you have a question about someones solution please use a thread under their posted link*

*Happy Monday Daily Programmer*

IO problems continue this week. Today our challenge is to find out what year had the most presidents alive at the same time.

Here is a link to the presidents birthdays. https://github.com/aisflat439/dailyProgrammer/blob/master/data/presidents.csv

Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution. I'll be away from May 30 - June 8th. Is anyone interested in pinch hitting?

*if you have a question about someones solution please use a thread under their posted link*


*Happy Friday Daily Programmer*

Write a program that will create a template HTML file for you from the console input prompt.

```
"Enter opening paragraph:"
"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
```

output a `index.htlm` file:

```
<!DOCTYPE html>
<html>
    <head>
        <title></title>
    </head>

    <body>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </body>
</html>
```

Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution. I'll be away from May 30 - June 8th. Is anyone interested in pinch hitting?

*if you have a question about someones solution please use a thread under their posted link*

*Happy Thursday Daily Programmer*

Today's problem came about from yesterdays problem. Take an input string, check the string for a Hexadecimal input and output the string with the Hexadecimal input converted to a number.

**Sample Input**
 ```
 Taylor Swift put out the album 7C5 in 7DE
 SHOULD OUTPUT
 Taylor Swift put out the album 1989 in 2014
 ```

**Optional**: Convert each word to the minimum base that they can be described with and append #<base> to the end of it

Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution. I'll be away from May 30 - June 8th. Is anyone interested in pinch hitting?

*if you have a question about someones solution please use a thread under their posted link*

*Happy Tuesday Daily Programmer*

On console input you will be given a string that represents the abbreviated chat message.
Output. Output should consist of the expanded sentence.

Wordlist

```
lol - laugh out loud
dw - don't worry
hf - have fun
gg - good game
brb - be right back
g2g - got to go
wtf - what the fuck
wp - well played
gl - good luck
imo - in my opinion
```
input

```
wtf that was unfair
```

output

```
what the fuck that was unfair
```

```
gl all hf
'good luck all have fun'
imo that was wp. anyway i've g2g
'in my opinion that was well played. anyway i've got to go.
```

Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.

*if you have a question about someones solution please use a thread under their posted link*

*Happy Monday Daily Programmer*

Write a program that takes input text from standard input and outputs the text -- transposed.
Roughly explained, the transpose of a matrix

```
A B C
D E F
```

is given by

```
A D
B E
C F
```

Rows become columns and columns become rows.

```
philly
dev
```

becomes:

```
pd
he
iv
l
l
y
```

Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.

*if you have a question about someones solution please use a thread under their posted link*

*Happy Thursday!*

A Polygon is a geometric two-dimensional figure that has n-sides (line segments) that closes to form a loop. Polygons can be in many different shapes and have many different neat properties, though this challenge is about Regular Polygons. Our goal is to compute the permitter of an n-sided polygon that has equal-length sides given the circumradius. This is the distance between the center of the Polygon to any of its vertices; not to be confused with the apothem!

Input will consist of one line on standard console input. This line will contain first an integer N, then a floating-point number R. They will be space-delimited. The integer N is for the number of sides of the Polygon, which is between 3 to 100, inclusive. R will be the circumradius, which ranges from 0.01 to 100.0, inclusive.


```
5 3.7 => 21.748
100 1.0 => 6.282
```

Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.

*Next week will be IO week. If you have any fun IO related problems or ideas please pass them along so I can plan it this weekend.*

*if you have a question about someones solution please use a thread under their posted link*


*Happy Wednesday!*

Take the following inputs in shorthand range, and translate them to longhand range.
```
1,6,4,9,1,6 => [1, 6, 14, 19, 21, 26]
2,9..9,9 => [2, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 29]
5,7,0,1,9,4 => [5, 7, 10, 11, 19, 24]
```

Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.
=======
>>>>>>> 5edbc05d4a81a8ebb53b70ea42dc9172e20b91ce
*Happy Friday!!!*

The oblique function slices a matrix (2d array) into diagonals. The de-oblique function takes diagonals of a matrix, and reassembles the original rectangular one.

input
```
0  1  2  3  4  5
6  7  8  9 10 11
12 13 14 15 16 17
18 19 20 21 22 23
24 25 26 27 28 29
30 31 32 33 34 35
```

output
```
0               
1 6             
2 7 12          
3 8 13 18       
4 9 14 19 24    
5 10 15 20 25 30
11 16 21 26 31  
17 22 27 32     
23 28 33        
29 34           
35  
```

Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution. I'm setting up IO week over the weekend. If you have problems or ideas, let me know!
>>>>>>> 51acf9026f1c34f62ca1bfb73953e274f28ab11c

*if you have a question about someones solution please use a thread under their posted link*

*Happy Tuesday!*

Following up on yesterday... Given a sorted list of distinct integers, write a function that returns whether there *any subset combinations* in the list that add up to 0. For example, you would return true if `[-8, 3, 5, 11]` are in the list, because -8 + 3 + 5 = 0. Also return true if 0 appears in the list.

```
[-3, 1, 2] -> TRUE
[-98634, -86888, -48841, -40483, 2612, 9225, 17848, 71967, 84319, 88875] -> TRUE
[-3, 2, 7] -> FALSE
[-83314, -82838, -80120, -63468, -62478, -59378, -56958, -50061, -34791, -32264, -21928, -14988, 23767, 24417, 26403, 26511, 36399, 78055] -> FALSE
```

Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.

*if you have a question about someones solution please use a thread under their posted link*

*Happy Monday!*

Given a sorted list of distinct integers, write a function that returns whether there are two integers in the list that add up to 0. For example, you would return true if both -14435 and 14435 are in the list, because -14435 + 14435 = 0. Also return true if 0 appears in the list.

```
[1, 2, 3] -> false
[-5, -3, -1, 2, 4, 6] -> false
```

Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.

*if you have a question about someones solution please use a thread under their posted link*

*Happy Friday. Cipher week in complete!*

Friday's task is to put it all together. Write a program that takes a keyword and a phrase, it should return the phrase encoded in Keyed Cesars SOS.

I hope you enjoyed Cipher week. It was fun to put together. Please DM me with ideas for future problems or future themed weeks. I'm going to put together an IO week next, should be fun. When you have completed it post a link to your solution.

*if you have a question about someones solution please use a thread under their posted link*

*Happy Thursday, Cipher week is nearly finished!*

Some ciphers are just representations of letters. Like (Morse Code)[https://en.wikipedia.org/wiki/Morse_code#Development_and_history]. Our task today is to write a program that takes an phrase input, and outputs the Morse values. You can use `.` and `-` or (Spoken representation)[https://en.wikipedia.org/wiki/Morse_code#Spoken_representation], whichever you like.

Feel free to build a Morse translator if you like and solve the puzzle `-.-- . .- .... / .-- . .-.. .-.. / -.-- --- ..- / -.- -. --- .-- / - .... .- - ... / .--- ..- ... - / .-.. .. -.- . / -.-- --- ..- .-. / --- .--. .. -. .. --- -. / -- .- -.`

Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.

*if you have a question about someones solution please use a thread under their posted link*

*Happy Wednesday, Cipher week continues!*

A Vigenere Cipher continues in the Cesar Cipher theme. It shifts the Cesar cipher each successive letter. Wikipedia(https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher) likely explains it best:
```
Each row starts with a key letter. The remainder of the row holds the letters A to Z (in shifted order). Although there are 26 key rows shown, you will only use as many keys (different alphabets) as there are unique letters in the key string, here just 5 keys, {L, E, M, O, N}. For successive letters of the message, we are going to take successive letters of the key string, and encipher each message letter using its corresponding key row. Choose the next letter of the key, go along that row to find the column heading that matches the message character; the letter at the intersection of [key-row, msg-col] is the enciphered letter.
```
The result is the keyword `dude` yeilds `l'g d phvravel cro'ui d fhfrqvol`, even though *phvravel* and *fhfrqvol* are the same word!

Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.

*if you have a question about someones solution please use a thread under their posted link*

*Happy Tuesday, Cipher week continues!*

*Happy Monday and welcome to Cipher week*

Cesars Cipher was a pretty easy code to break since there were only 26 possible codes. Enter the keyed cipher. It shifts the alphabet with by moving letters to the beginning, based on the word. http://rumkin.com/tools/cipher/caesar-keyed.php

Your program should take a word, and a phrase and return the encrypted text. This phrase was uttered by The Dude in The Big Lebowski `Ghswgrobx xgr’ny fgq p egbtyn.`. You'll be able to see it with the keyword `phillytechweek`.

Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.

*if you have a question about someones solution please use a thread under their posted link*

[Cesars Cipher](https://en.wikipedia.org/wiki/Caesar_cipher) is where you shift the letters of the alphabet, in order to encode a message. For example, `PhillyDev` shifted 5 would yield `UmnqqdIja`. The *P* is shifted 5 letters, to *U*.

Make a function that takes two parameters, the word, and the shift. Your function should return the shifted word. This weeks problems build on each other, so just post your answer to this problem for now, even if you can go further.

Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.

*if you have a question about someones solution please use a thread under their posted link*

*Happy Friday!*

Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

For example,
Given `[100, 4, 200, 1, 3, 2]`,
The longest consecutive elements sequence is `[1, 2, 3, 4]`. Return its length: 4.

Please DM me with ideas for future problems. When you have completed it post a link to your solution.

*FYI: I'm putting together a themed week on Ciphers. If you have any Cipher problems to pass along that would be a great help. If you know its level of difficulty please note that as well.*

*if you have a question about someones solution please use a thread under their posted link*


*Happy Thursday!*

Given an unsorted array return whether an increasing subsequence of length 3 exists or not in the array.

Examples:
Given [1, 2, 3, 4, 5],
return true.

Given [5, 4, 3, 2, 1],
return false.

Please DM me with ideas for future problems. When you have completed it post a link to your solution.

*FYI: I'm putting together a themed week on Ciphers. If you have any Cipher problems to pass along that would be a great help. If you know its level of difficulty please note that as well.*

*if you have a question about someones solution please use a thread under their posted link*

*Happy Wednesday!*

Given two sorted arrays, find their union and intersection.

For example, if the input arrays are:
`arr1[] = {1, 3, 4, 5, 7}`
`arr2[] = {2, 3, 5, 6}`
Then your program should print Union as `{1, 2, 3, 4, 5, 6, 7}` and Intersection as `{3, 5}`.

Please DM me with ideas for future problems. When you have completed it post a link to your solution.

*if you have a question about someones solution please use a thread under their posted link*

*Happy Tuesday!*

Write a function `get_products_of_all_ints_except_at_index()` that takes a list of integers and returns a list of the products.

For example, given:

`[1, 7, 3, 4]`

your function would return:

`[84, 12, 28, 21]`

Please DM me with ideas for future problems. When you have completed it post a link to your solution.

*if you have a question about someones solution please use a thread under their posted link*

*Happy Friday!*

Given a positive integer n, find the least number of perfect square numbers (for example, 1, 4, 9, 16, ...) which sum to n.

For example, given n = 12, return 3 because 12 = 4 + 4 + 4; given n = 13, return 2 because 13 = 4 + 9.

Please DM me with ideas for future problems. When you have completed it post a link to your solution.

*if you have a question about someones solution please use a thread under their posted link*

*Happy Thursday!*

Given a string array words, find the maximum value of length(word[i]) * length(word[j]) where the two words do not share common letters. You may assume that each word will contain only lower case letters. If no such two words exist, return 0.

Example 1:
Given `["abcw", "baz", "foo", "bar", "xtfn", "abcdef"]`
Return 16
The two words can be "abcw", "xtfn".

Example 2:
Given `["a", "ab", "abc", "d", "cd", "bcd", "abcd"]`
Return 4
The two words can be "ab", "cd".

Example 3:
Given `["a", "aa", "aaa", "aaaa"]`
Return 0
No such pair of words.

Please DM me with ideas for future problems. When you have completed it post a link to your solution.

*if you have a question about someones solution please use a thread under their posted link*

*Happy Wednesday!*

The count-and-say sequence is the sequence of integers beginning as follows:
`1, 11, 21, 1211, 111221, ...``

`1` is read off as `"one 1"` or `11`.
`11` is read off as `"two 1s"` or `21`.
`21` is read off as `"one 2, then one 1"` or `1211`.
Given an integer n, generate the nth sequence.

Note: The sequence of integers will be represented as a string.

Please DM me with ideas for future problems. When you have completed it post a link to your solution.

*if you have a question about someones solution please use a thread under their posted link*

*Happy Tuesday! many people jumped ahead and solved for palindromes so....*

Determine whether an integer is a palindrome. Do this without extra space.

Please DM me with ideas for future problems. When you have completed it post a link to your solution.

*if you have a question about someones solution please use a thread under their posted link*

*Happy Monday! I hope you enjoyed tree week, I'm working on a recursion week if you have ideas send em over.*

Given two strings s and t, write a function to determine if t is an anagram of s.

For example,
s = "anagram", t = "nagaram", return true.
s = "rat", t = "car", return false.

Note:
You may assume the string contains only lowercase alphabets.

Please DM me with ideas for future problems. When you have completed it post a link to your solution.

*if you have a question about someones solution please use a thread under their posted link*


*Happy Friday! I hope you enjoyed tree week*

Given a binary tree, return all root-to-leaf paths.

For example, given the following binary tree:

```
   1
 /   \
2     3
 \
  5
```
All root-to-leaf paths are:

["1->2->5", "1->3"]

Please DM me with ideas for future problems. When you have completed it post a link to your solution.

*if you have a question about someones solution please use a thread under their posted link*

*Happy Thursday, and the second to last day of tree week*

Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

Example:
```
Given a binary tree
          1
         / \
        2   3
       / \     
      4   5    
```
Return *3*, which is the length of the path *[4,2,1,3]* or *[5,2,1,3]*.

Please DM me with ideas for future problems. When you have completed it post a link to your solution.

*if you have a question about someones solution please use a thread under their posted link*


*Happy Wednesday!*

Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Please DM me with ideas for future problems. When you have completed it post a link to your solution.

*if you have a question about someones solution please use a thread under their posted link*

*Happy Tuesday!*

Tree week continues!

Given two binary trees, write a function to check if they are equal or not.

Two binary trees are considered equal if they are structurally identical and the nodes have the same value.

Please DM me with ideas for future problems. When you have completed it post a link to your solution.

*if you have a question about someones solution please use a thread under their posted link*

*Happy Friday!*

Yesterday's challenge was pretty difficult. I won't be alone googling Hamming Distance this weekend I suspect. This challenge is a bit more familiar as it's fun with arrays. It's modified from code abbey.

We will be given several lines of text - and for each of them we want to know the number of vowels (i.e. letters a, o, u, i, e). Note: y is regarded as a sometimes vowel so we'll count it as an aside.

```
input = "Pixel"
output = "There are two vowels in 'pixel'."  
input = "Friday daily challenge"
output = "There are seven vowels and two y's in 'Friday daily challenge'."
input = "Analagous"  
output = "there are five vowels in 'Analagous'"  
```

Please DM me with ideas for future problems. When you have completed it post a link to your solution.

*if you have a question about someones solution please use a thread under their posted link*

Happy Thursday!

Given two words, beginWord and endWord, and a wordList of approved words, find the length of the shortest transformation sequence from beginWord to endWord such that:

Only one letter can be changed at a time
Each transformed word must exist in the wordList.
Return the length of the shortest transformation sequence, or 0 if no such transformation sequence exists.

Note: beginWord does not count as a transformed word. You can assume that beginWord and endWord are not empty and are not the same.

Example

For beginWord = "hit", endWord = "cog", and wordList = ["hot", "dot", "dog", "lot", "log", "cog"], the output should be
wordLadder(beginWord, endWord, wordList) = 5.

The shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog" with a length of 5.

Please DM me with ideas for future problems. When you have completed it post a link to your solution.

*if you have a question about someones solution please use a thread under their posted link*

Happy Wednesday daily programmers!

If you did yesterday's problem you'll have a leg up on todays!

We are going to calculate the weighted sum of digits, as earlier, but multiplying each digit by its position (counting from the left, starting from 1). For example, given the value 1776 we calculate such weighted sum of digits (let us call it "wsd") as:

```
wsd(1776) = 1 * 1 + 7 * 2 + 7 * 3 + 6 * 4 = 60
```

Please DM me with ideas for future problems. When you have completed it post a link to your solution. If your idea is complex that means we can break it out into smaller, algorithmic steps. Helping those who've been at it for a while do something a different way and newer folks try new things.

*if you have a question about someones solution please use a thread under their posted link*

Happy Tuesday!
Lots of new folks joined `daily_programmer` in the last few days. That's super. Feel free to send me a DM me a challenge or idea.


As any number greater than 9 is represented by several digits, we can calculate the sum of these digits. For example, for numbers 1492 and 1776 we get:

```
1 + 4 + 9 + 2 = 16
1 + 7 + 7 + 6 = 21
```

In this task you will be given several numbers and asked to calculate their sums of digits.

Many programming languages have built-in functions to convert numbers to strings (from which digits could be extracted), you should totally use this (since your goal is to learn some programming tricks). But it's also helpful to try to implement algorithm with repetitive division by 10 (base of numeral system) and summing up the remainders.

Please DM me with ideas for future problems. When you have completed it post a link to your solution.

*if you have a question about someones solution please use a thread under their posted link*

Happy Monday!

Write a function that transforms a string into title case. This mostly means: capitalizing only every first letter of every word in the string. However, there are some non-obvious exceptions to title case which can't easily be hard-coded. Your function must accept, as a second argument, a set or list of words that should not be capitalized. Furthermore, the first word of every title should always have a capital leter. For example:
```exceptions = ['jumps', 'the', 'over']
titlecase('the quick brown fox jumps over the lazy dog', exceptions)```
This should return:
The Quick Brown Fox jumps over the Lazy Dog
An example from the Wikipedia page:
```exceptions = ['are', 'is', 'in', 'your', 'my']
titlecase('THE vitamins ARE IN my fresh CALIFORNIA raisins', exceptions)```
Returns:
```The Vitamins are in my Fresh California Raisins```

Please DM me with ideas for future problems. When you have completed it post a link to your solution.

*if you have a question about someones solution please use a thread under their posted link*



Happy Friday. Sorry for the delay in posting this! This one is stolen from r/dailyProgrammer as well.

Nearly everyone is familiar with the factorial operator in math. 5! yields 120 because factorial means "multiply successive terms where each are one less than the previous":
```5! -> 5 * 4 * 3 * 2 * 1 -> 120```

Fair enough.
Now let's reverse it. Could you write a function that tells us that "120" is "5!"?
Hint: The strategy is pretty straightforward, just divide the term by successively larger terms until you get to "1" as the resultant:
```120 -> 120/2 -> 60/3 -> 20/4 -> 5/5 -> 1 => 5!```
Sample Input

You'll be given a single integer, one per line. Examples:
```
120
150
120 = 5!
150   NONE```

Challenge Input
```
3628800
479001600
6
18```

Please DM me with ideas for future problems. When you have completed it post a link to your solution.

*if you have a question about someones solution please use a thread under their posted link*

This problem was also send to my DM's. Have you sent me a problem? A sequence of numbers is called a zig-zag sequence if the differences between successive numbers strictly alternate between positive and negative. The first difference (if one exists) may be either positive or negative. A sequence with fewer than two elements is trivially a zig-zag sequence.

For example, 1,7,4,9,2,5 is a zig-zag sequence because the differences (6,-3,5,-7,3) are alternately positive and negative. In contrast, 1,4,7,2,5 and 1,7,4,5,5 are not zig-zag sequences, the first because its first two differences are positive and the second because its last difference is zero.

Given a sequence of integers, sequence, return the length of the longest subsequence of sequence that is a zig-zag sequence. A subsequence is obtained by deleting some number of elements (possibly zero) from the original sequence, leaving the remaining elements in their original order.

Constraints
-    sequence contains between 1 and 50 elements, inclusive.
-    Each element of sequence is between 1 and 1000, inclusive.

Please DM me with ideas for future problems. When you have completed it post a link to your solution.

*if you have a question about someones solution please use a thread under their posted link*


Write a function that counts the number of iterations in Kaprekar's Routine, which is as follows.
Given a 4-digit number that has at least two different digits, take that number's descending digits, and subtract that number's ascending digits. For example, given 6589, you should take 9865 - 5689, which is 4176. Repeat this process with 4176 and you'll get 7641 - 1467, which is 6174.
Once you get to 6174 you'll stay there if you repeat the process. In this case we applied the process 2 times before reaching 6174, so our output for 6589 is 2.
kaprekar(6589) -> 2
kaprekar(5455) -> 5
kaprekar(6174) -> 0
Numbers like 3333 would immediately go to 0 under this routine, but since we require at least two different digits in the input, all numbers will eventually reach 6174, which is known as Kaprekar's Constant.
What is the largest number of iterations for Kaprekar's Routine to reach 6174? That is, what's the largest possible output for your kaprekar function, given a valid input?

Please DM me with ideas for future problems. When you have completed it post a link to your solution.

*if you have a question about someones solution please use a thread under their posted link*



Happy Tuesday! This coding challenge showed up in my DM's! Have you sent me a DM with a coding challenge yet? You totes should.
Coding Test : Hamming Distance
Write a program that can calculate the Hamming distance between two DNA strands.
A mutation is simply a mistake that occurs during the creation or copying of a nucleic acid, in particular DNA. Because nucleic acids are vital to cellular functions, mutations tend to cause a ripple effect throughout the cell. Although mutations are technically mistakes, a very rare mutation may equip the cell with a beneficial attribute. In fact, the macro effects of evolution are attributable by the accumulated result of beneficial microscopic mutations over many generations.
The simplest and most common type of nucleic acid mutation is a point mutation, which replaces one base with another at a single nucleotide.
By counting the number of differences between two homologous DNA strands taken from different genomes with a common ancestor, we get a measure of the minimum number of point mutations that could have occurred on the evolutionary path between the two strands.
This is called the “Hamming Distance”.
    GAGCCTACTAACGGGAT
    CATCGTAATGACGGCCT
    ^ ^ ^  ^ ^    ^^
The Hamming distance between these two DNA strands is 7.

Please DM me with ideas for future problems. When you have completed it post a link to your solution.

*if you have a question about someones solution please use a thread under their posted link*

Happy Monday!

There are N+1 parking spots, numbered from 0 to N. There are N cars numbered from 1 to N parked in various parking spots with one left empty. Reorder the cars so that car #1 is in spot #1, car #2 is in spot #2 and so on. Spot #0 will remain empty. The only allowed operation is to take a car and move it to the free spot.

Please DM me with ideas for future problems. When you have completed it post a link to your solution.

*if you have a question about someones solution please use a thread under their posted link*


Happy Friday. Time for the Friday Challenge! Visit (https://github.com/aisflat439/dailyProgrammer/blob/master/data/realEstate.csv) and grab the CSV and get ready to do some work! You're helping a friend relocate to Sacramento and they want to know which house offers the best price per square foot. *No problem?* Bonus challenge: Write a program that returns the best price per square foot for Northernmost, Southernmost, Easternmost or Westernmost homes.

Please DM me with ideas for future problems. When you have completed it post a link to your solution.

*if you have a question about someones solution please use a thread under their posted link*


The word `chimps` is an example of a word that's in alphabetical order. Write a program that prints out if the word is in alphabetical order. For bonus make it test backwards too!

`[abort, times, alloy, taught, arrow, know, below, onscreen, berry, idea, cello, spoonfeed, asked, deist, worlds, feint, best, floss, suggest, hilly, hippy]`

Please DM me with ideas for future problems. When you have completed it post a link to your solution.

*if you have a question about someones solution please use a thread under their posted link*

Happy Thursday!



Today's daily programmer challenge is to test a magic square. This challenge is stolen verbatim from r/dailyprogrammer. A 3x3 magic square is a 3x3 grid of the numbers 1-9 such that each row, column, and major diagonal adds up to 15. Here's an example:
```
8 1 6
3 5 7
4 9 2
```
When given the inputs arrays, you should get:
[8, 1, 6, 3, 5, 7, 4, 9, 2] => true
[2, 7, 6, 9, 5, 1, 4, 3, 8] => true
[3, 5, 7, 8, 1, 6, 4, 9, 2] => false
[8, 1, 6, 7, 5, 3, 4, 9, 2] => false

Please DM me with ideas for future problems. When you have completed it post a link to your solution.

*if you have a question about someones solution please use a thread under their posted link*

Happy Wednesday!


Today's daily programmer challenge is to print a marathon finishers place in English. Your program should take an non decimal input `getFinishPosition(11)` and return `11th place`, `getFinishPosition(21)` and return `21st place`, `getFinishPosition(4)` and return `4th place`, and `getFinishPosition(33)` and return `33rd place`.
Please DM me with ideas for future problems. When you have completed it post a link to your solution. No need to go over 99 finishers, unless you want to.

*if you have a question about someones solution please use a thread under their posted link*

Happy Tuesday!



Good morning! Today's daily programmer is about arrays and sorting.  This gist of this question came from a friends recent interview. It may be a relatively familiar task. Feel free to write the solution in two different ways to challenge yourself, or use a different language. Please DM me with ideas for future problems. When you have completed it post a link to your solution.

*if you have a question about someones solution please use a thread under their posted link*

Happy Monday!

```
Merge the following two sorted arrays into one sorted array.

arrayOne = [ 2, 9, 22, 97, 167, 204 ]
arrayTwo = [ 3, 7, 10, 22, 98, 188, 203, 205, 209, 215]
```
