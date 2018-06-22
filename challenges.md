<<<<<<< HEAD
*Happy Friday daily_programmer*

Given two sets of favorite musical artists, return the artists that overlap and thier total score, with a match multiplier. if both sets have the genre in the same position, that is a match. All genres will always have 3 artists. All sets have 4 genres.

Multiplier pop genre (4x) _Pop and Pop top row_  
taylor swift 4 (2, 2), lorde 2 (1, 1)    
pop genre total 6  
pop genre match with multiplier 24  
rock multiplier none _not in same row_  
rock genre total (0, 2)  
rock genre match with multiplier 2  

```
returnOverlap(
  [
    {
        "pop": ["taylor swift, lorde, micheal jackson"],
        "rock": ["tom waits, guns and roses, bruce springsteen"],
        "rap": ["tupac shakur, biggie smalls, eminem"],
        "rnb": ["d'angelo, marvin gaye, ashford and simpson"]
    },
    {
        "pop": ["taylor swift, lorde, maddona"],
        "rnb": ["otis redding, marvin gaye, al green"],
        "rap": ["tupac shakur, biggie smalls, eminem"],
        "rock": ["bruce springsteen, foo fighters, nirvana"]
    }
]
);

=> Output
pop = 24, rock = 2 ...
```

*Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.*
*if you have a question about someones solution please use a thread under their posted link.*

*Happy Thursday daily_programmer*

Today and tomorrow are a two part set.

Given two sets of favorite musical artists, return the artists that overlap and thier total indexed score. We're going to expand this problem a bit tomorrow.

```
returnOverlap(
  ['taylor swift', 'tom waits', 'regina spektor', 'public enemy', 'claude debussy']
  ['tupac shakur', 'taylor swift', 'sergei rachmaninoff', 'tom waits', 'super unison']
);
// scores
// taylor swift (0, 1), 
// tom waits (1, 3)

=> taylor swift (1), tom waits (4)
```

*Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.*
*if you have a question about someones solution please use a thread under their posted link.*

*Happy Tuesday daily_programmer*

Given 2 states, a prev and current. Take the diff of them, and then get only the left hand diff.

```
prev = {
	a: 3,
	b: 4,
	c: {
		d:[1,2,3]
		e:5
	}
};

cur = {
	a: 6,
	b: 4,
	c: {
		d:[1,5,3]
		e:5
	}
};

leftHandDiff = {
	a: 3,
	c: {
		d:[1,2,3]
	}
};
```

*Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.*
*if you have a question about someones solution please use a thread under their posted link.*


I had to do a fun task today that may qualify daily programmer.
Given 2 states, a prev and current.
Take the diff of them,
and then get only the left hand diff. (edi

prev = {
	a: 3,
	b: 4,
	c: {
		d:[1,2,3]
		e:5
	}
};

cur = {
	a: 6,
	b: 4,
	c: {
		d:[1,5,3]
		e:5
	}
};

leftHandDiff = {
	a: 3,
	c: {
		d:[1,2,3]
	}
};


*Happy Monday daily_programmer*

The pancake sorting algorithm is uses a single method, which takes an array, and an index, and reverses the order of the elements up until that index

Write an implementation of the pancake sorting algorithm (aka the prefix sorting algorithm) that returns the states after each flip.

```
pancakeSort([2,4,3,1]) =>
[4,2,3,1]
[3,2,4,1]
[2,3,4,1]
[4,3,2,1]
[1,2,3,4]
```

*Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.*
*if you have a question about someones solution please use a thread under their posted link.*

*Happy Monday daily_programmer*

The pancake sorting algorithm is uses a single method, which takes an array, and an index, and reverses the order of the elements up until that index

Write an implementation of the pancake sorting algorithm (aka the prefix sorting algorithm) that returns the states after each flip.

```
pancakeSort([2,4,3,1]) =>
[4,2,3,1]
[3,2,4,1]
[2,3,4,1]
[4,3,2,1]
[1,2,3,4]
```

*Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.*
*if you have a question about someones solution please use a thread under their posted link.*

*Happy Friday daily_programmer*

Write a program to test if string input is can be constructed by taking a substring of itself appended together.

```
abab => 
true // the substring is ab and it can be found twice
yxy =>
false // yxyx !== yxy && xyxy !== yxy
abcabcabcabc => 
true // substring abc 4 times and abcabc 2 times
```

*Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.*
*if you have a question about someones solution please use a thread under their posted link.*

=======
<<<<<<< HEAD
*Happy Mondayx daily_programmer*

iOS 11 has a bug that makes the result of 1+2+3 to be 24. This is related to the animation speed, but anyway:

The task is to make 1 + 2 + 3 == 24. But only that. So you should provide a function that correctly sums most sequences but returns 24 when the arguments are 1, 2 and 3 in any order.

```
1 2 => 3
3 4 => 7
1 2 3 4 5 6 7 8 9 => 45
3 2 1 => 24
2 1 3 => 24
1 1 => 2
1 2 3 => 24
40 2 => 42
1 2 2 4 => 9
1 2 3 4 1 2 3 => 16
1 => 1
1 23 => 24
0 1 2 => 3
3 2 3 => 8
=======
>>>>>>> d5e55963a1377ab858ec86d2df6b112b33b69b44
*Happy Monday daily_programmer*

Write a function that reverses words in place

`reverseWords("I don't know about you, but I'm feeling 22")`

`22 feeling i'm but ,you about know don't I`

```
"oh yeah! I want to bask in your golden light"
=> "light golden your in bask to want I !yeah oh"
"baby you got me checkin in my rearview mirror"
=> "mirror rearview my in checkin me got you baby"
"Our days and nights are perfumed with obsession"
=> "obsession with perfumed are nights and days our"
```

*Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.*
*if you have a question about someones solution please use a thread under their posted link.*

*Happy Wednesday daily_programmer*

Write a function that converts a string into a zigzag

`convertZigZag("dailyprogrammer)`

```
d y g m
alpogamr
i r r e
```

*Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.*
*if you have a question about someones solution please use a thread under their posted link.*

*Happy Wednesday daily_programmer*

Special thanks to Tom for submitting this challenge. 

Given a list of space separated words and a number indicating words per line, try to line up words by matching letters.

`spaceByLetter("some body once told me the world was gonna roll me", 3)` => 

```
some body once
told        me the
world             was gonna
roll                       me

some-body-once
told--------me-the
world-------------was-gonna
roll-----------------------me
```

*Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.*
*if you have a question about someones solution please use a thread under their posted link.*

*Happy Tuesday daily_programmer*

Please write a function that returns the product of all the other numbers in the array.

`findAllOtherProducts([1,7,3,4])` => 

`[7 * 3 * 4,  1 * 3 * 4,  1 * 7 * 4,  1 * 7 * 3]` =>

`[84, 12, 28, 21]`

*Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.*
*if you have a question about someones solution please use a thread under their posted link.*

*Happy Monday daily_programmer*

Please write a program that outputs 1 - 777 but replacing every value that contains a 7 or is evenly divisible by 7.

```
*parens added for clarity*

1 2 3 4 5 6 ( ) 8 9 10 11 12 13 ( ) 15 16 ( ) 18 ...
```

*Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.*
*if you have a question about someones solution please use a thread under their posted link.*

*Happy Friday daily_programmer*

Different sort problem not using the drop sort. Sorry to those looking forward to it.

`[10, 2, 3, 4, 7]` can be sorted by rotating the array in one direction. 

```
[10, 2, 3, 4, 7]
[7, 10, 2, 3, 4]
[4, 7, 10, 2, 3]
[3, 4, 7, 10, 2]
[2, 3, 4, 7, 10]
```
Write a program that sorts an array this way, or outputs false.

```
[3, 2, 1] => false
[4, 1, 2, 3] => [1, 2, 3, 4]
[5, 3, 9, 2, 6, 7] => false
[75, 230, 30, 42, 50] => [30, 42, 50, 75, 230]
```

*Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.*
*if you have a question about someones solution please use a thread under their posted link.*

*Happy Thursday daily_programmer*

Write a program sorts an array by dropping the previously sorted value.

`[1, 2, 5, 4, 3, 7]` =>

`[1, 2, 5, 7], [4], [3]`
 

```
 10, 13, 17, 21 =>
10, 13, 17, 21
10, 10, 10, 9, 10 =>
[10, 10, 10, 10], 9
```

*Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.*
*if you have a question about someones solution please use a thread under their posted link.*

*Happy Wednesday daily_programmer*

Write a program sorts an array by subtracting -1 from the elements that preceed it until it's smaller than the element that proceeds it.

`10 5 7 6 1` =>

`4 5 7 6 1` => index[0] is smaller than 5 now

`2 3 5 6 1` => index[0] is smaller than index[1] smaller than index[2]...

Finally we get to `-4 -3 -1 0 1`

```
 3 2 1 =>
-1 0 1
1 1 1 1 1 1 1 1 1 =>
-7 -6 -5 -4 -3 -2 -1 0 1 
5 7 11 6 16 2 9 16 6 16 => 
-27 -25 -21 -20 -10 -9 -2 5 6 16
```

*Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.*
*if you have a question about someones solution please use a thread under their posted link.*

*Happy Tuesday daily_programmer*

Write a program that collapses an input string

```
dailyprogrammer
phillydev
fun
```
becomes

```
dai
philyprog
funllydevrammer
```

*Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.*
*if you have a question about someones solution please use a thread under their posted link.*

*Happy Monday daily_programmer*

Write a program that outputs `Hello World!`

```
should not use any character more than twice (alphanumeric, symbol, whitespace...anything)
=> `print(  )' has an r and console.log(  ) has 3 o's`
should not use any external resources
should not use any user input
should not output anything else
```

*Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.*
*if you have a question about someones solution please use a thread under their posted link.*

*Happy Friday daily_programmer*

Write a program that takes an array and adds one, adds zero, subtracts one, and adds zero to an array, until the array is adjusted

`adjustEachItem([3, 0, 4, 1, -1])` becomes

`[4, 0, 3, 1, 0]`

```
[1] => 
[2]
[0, 0, 0, 0, 0] =>
[1, 0, -1, 0, 1]
[-4, 3, 0, 1, 7, 9, 8, -2, 11, -88] =>
[-3, 3, -1, 1, 8, 9, 7, -2, 12, -88]
```

*Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.*
*if you have a question about someones solution please use a thread under their posted link.*

*Happy Thursday daily_programmer*

Write a program that takes an array of integers or chars and sorts the `ints` in ascending order and the `chars` in decending order but keeps the corresponding items in the same position within the array.

`acdcSort([a, 3, b, 2, c, 1])` becomes

`[c, 1, b, 2, a, 3]`

```
[ 3, 2, 1] 
=> [ 1, 2, 3 ]
[ 'a', 'b', 'c' ] 
=> [ 'c', 'b', 'a' ]
[5, 'a', 'x', 3, 6, 'b']
=> [3, 'x', 'b', 5, 6, 'a']
```

*Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.*
*if you have a question about someones solution please use a thread under their posted link.*

*Happy Wednesday daily_programmer*

Write a program that sums an array in a circular shift.

`circularShift([2, 4, 6, -2], 3)` becomes

`=> [ [-2 + 2 + 4], [2 + 4 + 6], [4 + 6 + -2], [6 + -2 + 2] ]` and then

`=> [4, 12, 8, 6]`

```
circularShift([1, 2], 5 )
=> [7, 8]
circularShift([-5, 4, 0, 1, 0, -10, -4], 4 )
=> [-19, -15, -5, 0, 5, -9, -13]
circularShift([2], 7  )
=> [14]
```

*Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.*
*if you have a question about someones solution please use a thread under their posted link.*

*Happy Tuesday daily_programmer*

Write a program that zips two arrays taking the higher number, if the numbers are equal, add them.

`zipSum([1, 2.4, 3], [7, 2.4, 3])` becomes

`=> [[1, 7], [2.4, 2.4], [1, 3]]` and then

`=> [7, 4.8, 3]`

```
zipSum([1, 2, 3], [1, 3, 2])
=> [2, 3, 3]
zipSum([1,2,3,4,5,5,7,8,9,10], [10,9,8,7,6,5,4,3,2,1])
=> [10, 9, 8, 7, 6, 10, 7, 8, 9, 10]
zipSum([], [])
=> []
```

*Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.*
*if you have a question about someones solution please use a thread under their posted link.*

*Happy Monday daily_programmer*

Write a program that rechunks an array in sets of the value passed, sums the sets, and returns one array.

`rechunk([1, 2], 3)`

`=> [[1, 0, 0], [2, 0, 0], [0, 0, 0]]`

`=> [1, 2, 0]`

```
rechunk([1], 3)
=> [1, 0, 0]
rechunck([-7,4,-12,1,5,-3,12,0,14,-2], 4)
=> [12,-1,0,1]
rechunk([1,2,3,4,5,6,7,8,9], 3)
=> [12,15,18]
>>>>>>> 8ccdc06fdce46aff92ce7dd66db6d30bcf0949b0
```

*Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.*
*if you have a question about someones solution please use a thread under their posted link.*

*Happy Friday daily_programmer*

Write a program that takes a string and outputs a the zero based index of that string.

`getZeroBasedIndex('phillydev')`

```
d 6
e 72
i 2
l 3 4
p 0
v 5 
y 8
```

*Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.*
*if you have a question about someones solution please use a thread under their posted link.*

*Happy Thursday daily_programmer*

Write a program that takes a string and outputs a skyline version of that string.

`createSkyline('a man, a plan, a canal, panama')`

```
a
a
a
a
a
a
a  n
a  n
a mnp
acmnp
```

*Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.*
*if you have a question about someones solution please use a thread under their posted link.*

*Happy Wednesday daily_programmer*

Write a program that divides a string into [n] number of parts leaving a remainder outside of of the returned array.

```
divideString('phillydev', 3)
=> "phi", "lly", "dev"
divideString('phillydev', 2)
=> ["ph", "il", "ly", "de"], "v"
```

*Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.*
*if you have a question about someones solution please use a thread under their posted link.*

*Happy Tuesday daily_programmer*

We've written palindrome testers before. But there are some non-obvious palindrome situations, like...

```
isPalindrome('()()')
=> false
```

That is symetric. Please write a function that tests if a string is symetrical. 

```
isSymetrical('()()')
=> true
isSymetrical('()()()')
=> true
isSymetrical('[A + A]')
=> true
isSymetrical('WOW ! WOW')
=> true
isSymetrical('())(')
=> false
isSymetrical('((B))')
=> false
isSymetrical('11')
=> false
```

Note: These characters are individually symetrical
`!"'+*-.:=AHIMOTUVWXY^_ovwx|`
Note: These characters are pair symetrical
`()<>[]{}qpbd/\`

*Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.*
*if you have a question about someones solution please use a thread under their posted link.*

*Happy Monday daily_programmer*

Write a program that removes spaces from a string one by one, outputting the results. For the example the `.` represents a space.

```
removeOneSpaceAtATime('......phillydev....')
.....phillydev....
.....phillydev...
....phillydev...
....phillydev..
...phillydev..
...philldev.
..phillydev.
..phillydev
.phillydev
phillydev
```

*Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.*
*if you have a question about someones solution please use a thread under their posted link.*

*Happy Thursday daily_programmer*

The following is an insignifigant array. All it's corresponding absolute differences are <=1.

```
[1, 2, 3, 4, 3, 4, 5, 5, 5, 4]
   [1, 1, 1, 1, 1, 1, 0, 0, 1]
```

Please write a program that tests signifigance, as it relates to arrays.

```
[1, 2, 3, 4, 5, 6, 7, 8, 9, 8] -> true
[3, 3, 3, 3, 3, 3, 3]          -> true
[3, 4, 4, 4, 3, 3, 3, 4, 4, 4] -> true
[1, 3, 5, 7, 9, 7, 5, 3, 1]    -> false
[1, 1, 1, 2, 3, 4, 5, 6, 19]   -> false
```

*Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.*
*if you have a question about someones solution please use a thread under their posted link.*

*Happy Wednesday daily_programmer*

Today's problem is part of a 3 day set. 

Please write a function that returns the output of an number integer in binary, prints the longest non zero streak, and prints the location where the streak is.

```
getValueInBinary(142)
=> 10001110
=> longest streak is "111" (a streak of three ones)
=> location is 2^1
getValueInBinary(48)
=> 110000
=> Longest streak is "11" (a streak of two ones)
=> location is 2^4
getValueInBinary(750)
=> 1011101110
// note no need to print that there are two streaks
=> Longest streak is "111" (a streak of three ones)
=> locations are 2^1, 2^5
```

*Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.*
*if you have a question about someones solution please use a thread under their posted link.*

*Happy Monday daily_programmer*

Today's problem is part of a 3 day set. 

Please write a function that returns the output of an number integer in binary.

```
getValueInBinary(142)
=> 10001110
getValueInBinary(48)
=> 110000
getValueInBinary(750)
=> 1011101110
```

*Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.*
*if you have a question about someones solution please use a thread under their posted link.*

*Happy Friday daily_programmer*

*2 Challenges today*

A) Standard Challenge:

Please print the following text:

```
zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
zyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyz
zyxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxyz
zyxwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwxyz
zyxwvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvwxyz
zyxwvuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuvwxyz
zyxwvutttttttttttttttttttttttttttttttttttttttuvwxyz
zyxwvytssssssssssssssssssssssssssssssssssssstuvwxyz
zyxwvytsrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrstuvwxyz
zyxwvytsrqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqrstuvwxyz
zyxwvytsrqpppppppppppppppppppppppppppppppqrstuvwxyz
zyxwvytsrqpooooooooooooooooooooooooooooooqrstuvwxyz
zyxwvytsrqponnnnnnnnnnnnnnnnnnnnnnnnnnnooqrstuvwxyz
zyxwvytsrqponmmmmmmmmmmmmmmmmmmmmmmmmmnooqrstuvwxyz
zyxwvytsrqponmlllllllllllllllllllllllmnooqrstuvwxyz
zyxwvytsrqponmlkkkkkkkkkkkkkkkkkkkkklmnooqrstuvwxyz
zyxwvytsrqponmlkjjjjjjjjjjjjjjjjjjjklmnooqrstuvwxyz
zyxwvytsrqponmlkjiiiiiiiiiiiiiiiiijklmnooqrstuvwxyz
zyxwvytsrqponmlkjihhhhhhhhhhhhhhhijklmnooqrstuvwxyz
zyxwvytsrqponmlkjihggggggggggggghijklmnooqrstuvwxyz
zyxwvytsrqponmlkjihgfffffffffffghijklmnooqrstuvwxyz
zyxwvytsrqponmlkjihgfeeeeeeeeefghijklmnooqrstuvwxyz
zyxwvytsrqponmlkjihgfedddddddefghijklmnooqrstuvwxyz
zyxwvytsrqponmlkjihgfedcccccdefghijklmnooqrstuvwxyz
zyxwvytsrqponmlkjihgfedcbbbcdefghijklmnooqrstuvwxyz
zyxwvytsrqponmlkjihgfedcbabcdefghijklmnooqrstuvwxyz
```

B) Fun Challenge:

Please take any of the letter printing challenges from this week and solve in as many lines of code as possible while still solving the problem in a programatic way.
*restrictions* 
You can't just print lines. 
Don't create wholy unnecesary functions. 
A programmer working on this project should be able to understand and maintain your solution.

*Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.*
*if you have a question about someones solution please use a thread under their posted link.*

*Happy Thursday daily_programmer*

Please print the following text:

```
bcdefghijklmnopqrstuvwxyzazyxwvutsrqponmlkjihgfedcb
cdefghijklmnopqrstuvwxyzabazyxwvutsrqponmlkjihgfedc
defghijklmnopqrstuvwxyzabcbazyxwvutsrqponmlkjihgfed
efghijklmnopqrstuvwxyzabcdcbazyxwvutsrqponmlkjihgfe
fghijklmnopqrstuvwxyzabcdedcbazyxwvutsrqponmlkjihgf
ghijklmnopqrstuvwxyzabcdefedcbazyxwvutsrqponmlkjihg
hijklmnopqrstuvwxyzabcdefgfedcbazyxwvutsrqponmlkjih
ijklmnopqrstuvwxyzabcdefghgfedcbazyxwvutsrqponmlkji
jklmnopqrstuvwxyzabcdefghihgfedcbazyxwvutsrqponmlkj
klmnopqrstuvwxyzabcdefghijihgfedcbazyxwvutsrqponmlk
lmnopqrstuvwxyzabcdefghijkjihgfedcbazyxwvutsrqponml
mnopqrstuvwxyzabcdefghijklkjihgfedcbazyxwvutsrqponm
nopqrstuvwxyzabcdefghijklmlkjihgfedcbazyxwvutsrqpon
opqrstuvwxyzabcdefghijklmnmlkjihgfedcbazyxwvutsrqpo
pqrstuvwxyzabcdefghijklmnonmlkjihgfedcbazyxwvutsrqp
qrstuvwxyzabcdefghijklmnoponmlkjihgfedcbazyxwvutsrq
rstuvwxyzabcdefghijklmnopqponmlkjihgfedcbazyxwvutsr
stuvwxyzabcdefghijklmnopqrqponmlkjihgfedcbazyxwvuts
tuvwxyzabcdefghijklmnopqrsrqponmlkjihgfedcbazyxwvut
uvwxyzabcdefghijklmnopqrstsrqponmlkjihgfedcbazyxwvu
vwxyzabcdefghijklmnopqrstutsrqponmlkjihgfedcbazyxwv
wxyzabcdefghijklmnopqrstuvutsrqponmlkjihgfedcbazyxw
xyzabcdefghijklmnopqrstuvwvutsrqponmlkjihgfedcbazyx
yzabcdefghijklmnopqrstuvwxwvutsrqponmlkjihgfedcbazy
zabcdefghijklmnopqrstuvwxyxwvutsrqponmlkjihgfedcbaz
abcdefghijklmnopqrstuvwxyzyxwvutsrqponmlkjihgfedcba
bcdefghijklmnopqrstuvwxyzazyxwvutsrqponmlkjihgfedcb
abcdefghijklmnopqrstuvwxyzyxwvutsrqponmlkjihgfedcba
zabcdefghijklmnopqrstuvwxyxwvutsrqponmlkjihgfedcbaz
yzabcdefghijklmnopqrstuvwxwvutsrqponmlkjihgfedcbazy
xyzabcdefghijklmnopqrstuvwvutsrqponmlkjihgfedcbazyx
wxyzabcdefghijklmnopqrstuvutsrqponmlkjihgfedcbazyxw
vwxyzabcdefghijklmnopqrstutsrqponmlkjihgfedcbazyxwv
uvwxyzabcdefghijklmnopqrstsrqponmlkjihgfedcbazyxwvu
tuvwxyzabcdefghijklmnopqrsrqponmlkjihgfedcbazyxwvut
stuvwxyzabcdefghijklmnopqrqponmlkjihgfedcbazyxwvuts
rstuvwxyzabcdefghijklmnopqponmlkjihgfedcbazyxwvutsr
qrstuvwxyzabcdefghijklmnoponmlkjihgfedcbazyxwvutsrq
pqrstuvwxyzabcdefghijklmnonmlkjihgfedcbazyxwvutsrqp
opqrstuvwxyzabcdefghijklmnmlkjihgfedcbazyxwvutsrqpo
nopqrstuvwxyzabcdefghijklmlkjihgfedcbazyxwvutsrqpon
mnopqrstuvwxyzabcdefghijklkjihgfedcbazyxwvutsrqponm
lmnopqrstuvwxyzabcdefghijkjihgfedcbazyxwvutsrqponml
klmnopqrstuvwxyzabcdefghijihgfedcbazyxwvutsrqponmlk
jklmnopqrstuvwxyzabcdefghihgfedcbazyxwvutsrqponmlkj
ijklmnopqrstuvwxyzabcdefghgfedcbazyxwvutsrqponmlkji
hijklmnopqrstuvwxyzabcdefgfedcbazyxwvutsrqponmlkjih
ghijklmnopqrstuvwxyzabcdefedcbazyxwvutsrqponmlkjihg
fghijklmnopqrstuvwxyzabcdedcbazyxwvutsrqponmlkjihgf
efghijklmnopqrstuvwxyzabcdcbazyxwvutsrqponmlkjihgfe
defghijklmnopqrstuvwxyzabcbazyxwvutsrqponmlkjihgfed
cdefghijklmnopqrstuvwxyzabazyxwvutsrqponmlkjihgfedc
bcdefghijklmnopqrstuvwxyzazyxwvutsrqponmlkjihgfedcb
```

*Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.*
*if you have a question about someones solution please use a thread under their posted link.*

*Happy Wednesday daily_programmer*

Please print the following text:

```
A
BCD
EFGHI
JKLMNOP
QRSTUVWXY
ZABCDEFGHIJ
KLMNOPQRSTUVW
XYZABCDEFGHIJKL
MNOPQRSTUVWXYZABC
DEFGHIJKLMNOPQRSTUV
WXYZABCDEFGHIJKLMNOPQ
RSTUVWXYZABCDEFGHIJKLMN
OPQRSTUVWXYZABCDEFGHIJKLM
NOPQRSTUVWXYZABCDEFGHIJKLMN
OPQRSTUVWXYZABCDEFGHIJKLMNOPQ
RSTUVWXYZABCDEFGHIJKLMNOPQRSTUV
WXYZABCDEFGHIJKLMNOPQRSTUVWXYZABC
DEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKL
MNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVW
XYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJ
KLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXY
ZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOP
QRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHI
JKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCD
EFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZA
BCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ
```

*Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.*
*if you have a question about someones solution please use a thread under their posted link.*

*Happy Tuesday daily_programmer*

Please print the following text:

```
A
ABA
ABCBA
ABCDCBA
ABCDEDCBA
ABCDEFEDCBA
ABCDEFGFEDCBA
ABCDEFGHGFEDCBA
ABCDEFGHIHGFEDCBA
ABCDEFGHIJIHGFEDCBA
ABCDEFGHIJKJIHGFEDCBA
ABCDEFGHIJKLKJIHGFEDCBA
ABCDEFGHIJKLMLKJIHGFEDCBA
ABCDEFGHIJKLMNMLKJIHGFEDCBA
ABCDEFGHIJKLMNONMLKJIHGFEDCBA
ABCDEFGHIJKLMNOPONMLKJIHGFEDCBA
ABCDEFGHIJKLMNOPQPONMLKJIHGFEDCBA
ABCDEFGHIJKLMNOPQRQPONMLKJIHGFEDCBA
ABCDEFGHIJKLMNOPQRSRQPONMLKJIHGFEDCBA
ABCDEFGHIJKLMNOPQRSTSRQPONMLKJIHGFEDCBA
ABCDEFGHIJKLMNOPQRSTUTSRQPONMLKJIHGFEDCBA
ABCDEFGHIJKLMNOPQRSTUVUTSRQPONMLKJIHGFEDCBA
ABCDEFGHIJKLMNOPQRSTUVWVUTSRQPONMLKJIHGFEDCBA
ABCDEFGHIJKLMNOPQRSTUVWXWVUTSRQPONMLKJIHGFEDCBA
ABCDEFGHIJKLMNOPQRSTUVWXYXWVUTSRQPONMLKJIHGFEDCBA
ABCDEFGHIJKLMNOPQRSTUVWXYZYXWVUTSRQPONMLKJIHGFEDCBA
ABCDEFGHIJKLMNOPQRSTUVWXYXWVUTSRQPONMLKJIHGFEDCBA
ABCDEFGHIJKLMNOPQRSTUVWXWVUTSRQPONMLKJIHGFEDCBA
ABCDEFGHIJKLMNOPQRSTUVWVUTSRQPONMLKJIHGFEDCBA
ABCDEFGHIJKLMNOPQRSTUVUTSRQPONMLKJIHGFEDCBA
ABCDEFGHIJKLMNOPQRSTUTSRQPONMLKJIHGFEDCBA
ABCDEFGHIJKLMNOPQRSTSRQPONMLKJIHGFEDCBA
ABCDEFGHIJKLMNOPQRSRQPONMLKJIHGFEDCBA
ABCDEFGHIJKLMNOPQRQPONMLKJIHGFEDCBA
ABCDEFGHIJKLMNOPQPONMLKJIHGFEDCBA
ABCDEFGHIJKLMNOPONMLKJIHGFEDCBA
ABCDEFGHIJKLMNONMLKJIHGFEDCBA
ABCDEFGHIJKLMNMLKJIHGFEDCBA
ABCDEFGHIJKLMLKJIHGFEDCBA
ABCDEFGHIJKLKJIHGFEDCBA
ABCDEFGHIJKJIHGFEDCBA
ABCDEFGHIJIHGFEDCBA
ABCDEFGHIHGFEDCBA
ABCDEFGHGFEDCBA
ABCDEFGFEDCBA
ABCDEFEDCBA
ABCDEDCBA
ABCDCBA
ABCBA
ABA
A
```

*Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.*
*if you have a question about someones solution please use a thread under their posted link.*

*Happy Monday daily_programmer*

Write a program that tests if a word is a `strong` word or not. A `strong` word is defined as a word where every consonant is followed by a vowel. Strong words can however start with a vowel.

```
academy    
-> true
you        
-> true
mouse      
-> true
acorn      
-> false
nut        
-> false
```

*Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.*
*if you have a question about someones solution please use a thread under their posted link.*

*Happy Thursday daily_programmer*

Given an array of positive integers, output an array of the distinct prime factors of these integers. In other words, for each integer in the input in order, get its prime factors, sort them, and append any primes not already in the output to the output.

```
[1,2,3,4,5,6,7,8,9,10] 
-> [2,3,5,7]
[10,9,8,7,6,5,4,3,2,1] 
-> [2,5,3,7]
[100,99,98,1,2,3,4,5] 
-> [2,5,3,11,7]
[6,7,6,7,6,7,6,5] 
-> [2,3,7,5]
[8] 
-> [2]
```

*Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.*
*if you have a question about someones solution please use a thread under their posted link.*

*Happy Tuesday daily_programmer*

Write a program that tests if a word is in alphabetical order.

```
almost
=> almost is in alphabetical order
cereal
=> cereal is not in alphabetical order
```

Bonus: Note if the word is in reverse order
Here are some test cases
```
fiddle
=> fiddle is not in alphabetical order
begins
=> begins is in alphabetical order
chimps
=> chimps is in alphabetical order
wronged
=> wronged is in reverse alphabetical order
```

*Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.*

*if you have a question about someones solution please use a thread under their posted link.*

*Happy Wednesday daily_programmer*

Reverse Polish Notation is when a different way to write math expressions where the operators, follow the operands. For example instead of `1 + 0` you'd get `1 0 +`.

Write a program that takes in Reverse Polish Notation and outputs the solution

```
+ - addition
- - subtraction
*, x - multiplication
/ - division (floating point, e.g. 3/2=1.5, not 3/2=1)
// - integer division (e.g. 3/2=1)
% - modulus, or "remainder" division (e.g. 14%3=2 and 21%7=0)
^ - power
! - factorial (unary operator)
```

```
solveRPN(3,11,5,+,-)
-> -13
solveRPN(0.5,1,2,!,*,2,1,^,+,10,+,*)
=> 7
solveRPN(1,2,3,4,!,+,-,/,100,*)
```

Here is some info on Reverse Polish Notation https://en.wikipedia.org/wiki/Reverse_Polish_notation

Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.


*if you have a question about someones solution please use a thread under their posted link.*

*Happy Wednesday daily_programmer*

Reverse Polish Notation is when a different way to write math expressions where the operators, follow the operands. For example instead of `1 + 0` you'd get `1 0 +`.

Write a program that outputs the following in Reverse Polish Notation
```
rpnConverter("20-18");
=> 20 18 -
rpnConverter(" 10 * 6 x 10 / 100");
=> 10 6 x 10 * 100 /
rpnConverter(" 5000         /  ((1+1) / 2) * 1000");
=> 5000 1 1 + 2 / / 1000 *
rpnConverter("(1 + 7 x 7 / 5 - 3  ");
-> Mismatched parentheses
```

Here is some info on Reverse Polish Notation https://en.wikipedia.org/wiki/Reverse_Polish_notation

Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.


*if you have a question about someones solution please use a thread under their posted link.*

*Happy Tuesday daily_programmer*

In Chess, a knight can only move 2 squares then one square. To move a knight at position (0, 0) to position (0, 1) you have to move (2, 1), (-1, 2), (-1, -2).

Write a program that takes a target location (0, 1) and outputs the number of moves to get there. Assume the knight always starts at (0, 0) and the board is unlimited in size.

```
moveKnightToLocation(3, 7)
=> 4
```

Here is some info on chess movement https://en.wikipedia.org/wiki/Chess#Movement

Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.


*if you have a question about someones solution please use a thread under their posted link.*

*Happy Monday daily_programmer*

A Latin square is an n × n array filled with n different symbols, each occurring exactly once in each row and exactly once in each column. Here are 3 Latin squares:
```
1

1 2
2 1

1 2 3
3 1 2
2 3 1
```

Write a program that tests if the inputs are Latin squares, it takes a `length and values`

```
isLatinSquare(5, [1,2,3,4,5,5,1,2,3,4,4,5,1,2,3,3,4,5,1,2,2,3,4,5,1])
=> true
isLatinSquare(4, [1,2,3,4,1,3,2,4,2,3,4,1,4,3,2,1])
=> false
```

Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.


*if you have a question about someones solution please use a thread under their posted link.*

*Happy Friday daily_programmer*

Please write a function that takes a string and returns only the alliterative substring portions of the string. If the substring contains one of the words below, they're not counted against alliteration, nor are they returned.

`findAlliteration('Bugs Bunny likes to dance the slow and simple shuffle')` would return `Bugs Bunny` and `slow simple shuffle`
```
I
a
about
an
and
are
as
at
be
by
com
for
from
how
in
is
it
of
on
or
that
the
this
to
was
what
when
where
who
will
with
the
```

Here are some sample phrases.
```
For the sky and the sea, and the sea and the sky
Three grey geese in a green field grazing, Grey were the geese and green was the grazing.
But a better butter makes a batter better.
```


Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.


*if you have a question about someones solution please use a thread under their posted link. I could absolutely use some challenge problems if you have some.*

*Happy Thursday daily_programmer*

You will be given two string inputs. Your task is to return if they are, or are not anagrams. Additionally, please post any of your favorite anagrams because anagrams are often worthy of a smile.

```
testIfAnagram('PhillyDev', 'Veld Hi Ply');
=> PhillyDev and Veld Hi Ply are anagrams
testIfAnagram('DailyProgrammer', 'Darmak and Jalad at tanagra');
=> Daily Programmer and Darmak and Jalad at tanagra are not anagrams
```

Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.

*if you have a question about someones solution please use a thread under their posted link. I could absolutely use some challenge problems if you have some.*


*Happy Wednesday daily_programmer*

You need to find the area that two rectangles overlap. The section you need to output the area of would be the blue lined section here: http://i.imgur.com/brZjYe5.png
If the two rectangles do not overlap, the resultant area should be 0.
Input

There will be two lines of input. On each line are the x and y positions (separated by a comma) of each opposing corner (each corner co-ordinate separated by a space). The co-ordinates can have decimals, and can be negative.
Output

The area of the overlapping section of the two rectangles, including any decimal part.

```
0,0 2,2
1,1 3,3
=> 1.0

-3.5,4 1,1
1,3.5 -2.5,-1
=> 8.75

-4,4 -0.5,2
0.5,1 3.5,3
=> 0.0
```

Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.

*if you have a question about someones solution please use a thread under their posted link. I could absolutely use some challenge problems if you have some.*

*Happy Friday daily_programmer*

Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of n^3, the cube above will have volume of (n-1)^3 and so on until the top which will have a volume of 1^3.

You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?

The parameter of the function findNb will be an integer m and you have to return the integer n such as n^3 + (n-1)^3 + ... + 1^3 = m if such a n exists or -1 if there is no such n.
Examples:

```
findNb(1071225)
--> 45
findNb(91716553919377)
--> -1
```

Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.

*if you have a question about someones solution please use a thread under their posted link. I could absolutely use some challenge problems if you have some.*

*Happy Friday daily_programmer*

Write a program that finds the highest number that is less than or equal to the square root of the given number and precision. `findNearestNum(prescision, valueToBeChecked)` so `findNearestNum(0, 5)` would return *2*.

_For those interested in not using MyLangsMathLib.sqrt() here's an article. https://medium.com/i-math/how-to-find-square-roots-by-hand-f3f7cadf94bb_

```      
0 7720.17
=> 87
1 7720.17
=> 87.8
2 7720.17
=> 87.86
```

Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.

*if you have a question about someones solution please use a thread under their posted link. I could absolutely use some challenge problems if you have some.*

*Happy Thursday daily_programmer*

Write a program that finds the nearest prime numbers. So `findNearestPrime(6)` should return 5 and 7. If you pass `findNearestPrime(11)` it should return `prime`.

```      
222
=> 211 223
345
=> 337 347
853
=> prime
```

Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.

*if you have a question about someones solution please use a thread under their posted link. I could absolutely use some challenge problems if you have some.*

*Happy Wednesday daily_programmer*

Modify your program so that if you pass a word like `staples` it prints a triange, otherwise it prints a box.

```      
printWord('staples')

            s
          e t
        l   a
      p     p  
    a       l   
  t         e
s t a p l e s

printWord('phillyDev')

p h i l l y d e v
h               e
i               d
l               y
l               l
y               l
d               i
e               h
v e d y l l i h p
```

Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.

*if you have a question about someones solution please use a thread under their posted link. I could absolutely use some challenge problems if you have some.*

*Happy Tuesday daily_programmer*

Write a function that outputs a boxed version of the word takes a length and width parameter. `printBoxes(philly, 2, 2)`

```
p h i l l y l l i h p
h         l         h
i         l         i
l         i         l
l         h         l
y l l i h p h i l l y
l         h         l
l         i         l
i         l         i
h         l         l
p h i l l y l l i h p
```

Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.

*if you have a question about someones solution please use a thread under their posted link. I could absolutely use some challenge problems if you have some.*

*Happy Monday daily_programmer*

Write a function that outputs a boxed version of the word. The direction doesn't matter, and ideally, since I know what is tomorrows challenge is, it shouldn't matter.

```
p h i l l y d e v
h               e
i               d
l               y
l               l
y               l
d               i
e               h
v e d y l l i h p
```
also a great solution:
```
v e d y l l i h p
e               h
d               i
y               l
l               l
l               y
i               d
h               e
p h i l l y d e v
```

Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.

*if you have a question about someones solution please use a thread under their posted link. I could absolutely use some challenge problems if you have some.*

*Happy Friday daily_programmer*

_The quick brown fox jumps over the lazy dog_ is a pangram, meaning it has one of each of the letters of the alphabet (English). Write a function that takes an unknown number of arguments, tests if they're pangrams and outputs `true` or `false ` for each.

```
testForPangram("The quick brown fox jumps over the lazy dog", "Pack my box with five dozen liquor jugs", "Saxophones quickly blew over my jazzy hair")
=>  true
    true
    false
```

*Stretch challenge*
Add an output that outputs the letter or letters that occur in highest frequency.
```
testForPangram("The quick brown fox jumps over the lazy dog")
=>  true, o:4
```

Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.

*if you have a question about someones solution please use a thread under their posted link. I could absolutely use some challenge problems if you have some.*

*Happy Thursday daily_programmer*

The input is a single number: the number at which the game starts. Write a program that plays the Threes game, and outputs a valid sequence of steps you need to take to get to 1. Each step should be output as the number you start at, followed by either -1 or 1 (if you are adding/subtracting 1 before dividing), or 0 (if you are just dividing). The last line should simply be 1.

```
100
=> 100 -1
=> 33 0
=> 11 1
=> 4 -1
=> 1
```

Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.

*if you have a question about someones solution please use a thread under their posted link. I could absolutely use some challenge problems if you have some.*

*Happy Tuesday daily_programmer*

`(((3)))` is an expression with too many parentheses.
The rule for "too many parentheses" around part of an expression is that if removing matching parentheses around a section of text still leaves that section enclosed by parentheses, then those parentheses should be removed as extraneous.
`(3)` is the proper stripping of extra parentheses in above example.

`((a((bc)(de)))f)` does not have any extra parentheses. Removing any matching set of parentheses does not leave a "single" parenthesesed group that was previously enclosed by the parentheses in question.

Your task is to remove the extra parentheses on the following sets and return the new set.

```
ab((c))
=> ab(c)

((a((bc)(de)))f)  
=> ((a((bc)(de)))f)  

(((zbcd)(((e)fg))))
=> ((zbcd)((e)fg))
```

Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.

*if you have a question about someones solution please use a thread under their posted link. I could absolutely use some challenge problems if you have some.*


*Happy Tuesday daily_programmer*

Take an integer use those digits to find the next largest number they can make when reshuffled.

For example `findNextLargest(1729)` would return `1792`

```
1234
=> 1243
1243
=> 1324
234765
=> 235467
19000
=> 90001
```

Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.

*if you have a question about someones solution please use a thread under their posted link*

*Happy Monday daily_programmer*

Take a list of integers and concatenate them to produce the largest and smallest integer they can produce.

For example `findMinMax(17 9)` would return `917 179`

```
79 82 34 83 69
=> 3469798283 8382796934
420 34 19 71 341
=> 193413442071 714203434119
17 32 91 7 46
=> 173246791 917463217
```

Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.

*if you have a question about someones solution please use a thread under their posted link*


*Happy Friday daily_programmer*

Our last problem this week is a JSON Validity tester. Write a function that tests if our JSON is valid.
Note: By all means use a library for any daily_programmer task, this is encouraged.

JSON has 6 types, `string` `number` `object` `array` `boolean` and `null`. Please write a program that takes a JSON string and outputs which types it contains.

```
{
  "name": "Devin",
  "age": 38,
<<<<<<< HEAD
  "hasPets": true,  
  "petNames": [
    "Joey",
    "Tuna",
    "Seven"
  ],
  "favorites" : {
    "colors": null,
    "musicians": [
      "Bad Religion",
      "Taylor Swift"
    ]
  }
}

VALID
```

```
=======
  "hasPets": true  
}

=> This JSON object has strings, numbers, and booleans

>>>>>>> ec1f95974c6b3c1b306dba59ba011ee31c38fa2d
{
  "name": "Devin",
  "age": 38,
  "hasPets": true,  
  "petNames": [
    "Joey",
    "Tuna",
    "Seven"
<<<<<<< HEAD
  ,
  "favorites" : {
    "colors": null,
    "musicians": [
      "Bad Religion",
      "Taylor Swift"
    ]
  }
}

INVALID
=======
  ]
}

=> This JSON object has strings, numbers, booleans, and arrays
>>>>>>> ec1f95974c6b3c1b306dba59ba011ee31c38fa2d
```

Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.

<<<<<<< HEAD
*if you have a question about someones solution please use a thread under their posted link*

*Happy Thursday daily_programmer*

Our next few problems will be about JSON.

Please write a function that outputs the path to the JSON value `daily_programmer`:

```
{"name": "William Shakespeare", "wife": {"birthYear": 1555, "deathYear":
"Fun fact, she's a vampire", "name": "Anne Hathaway", "dead": false},
"favoriteWebsites": ["dailysonneter", "daily_programmer",
"vine (he's way into 6-second cat videos)"], "dead": true, "birthYear": 1564,
"facebookProfile": null, "selectedWorks": [{"written": 1606, "name":
"The Tragedy of Macbeth", "isItAwesome": true}, {"written": 1608, "name":
"Coriolanus", "isItAwesome": "It's alright, but kinda fascist-y"}], "deathYear":
 1616}

 => favoriteWebsites -> 1
```

```{"dlpgcack": false, "indwqahe": null, "caki": {"vvczskh": null, "tczqyzn":
false, "qymizftua": "jfx", "cyd": {"qembsejm": [null, "daily_programmer", null],
"qtcgujuki": 79, "ptlwe": "lrvogzcpw", "jivdwnqi": null, "nzjlfax": "xaiuf",
"cqajfbn": true}, "kbttv": "dapsvkdnxm", "gcfv": 43.25503357696589}, "cfqnknrm":
null, "dtqx": "psuyc", "zkhreog": [null, {"txrhgu": false, "qkhe": false,
"oqlzgmtmx": "xndcy", "khuwjmktox": 48, "yoe": true, "xode": "hzxfgvw",
"cgsciipn": 20.075297532268902}, "hducqtvon", false, [null, 76.8463226047357,
"qctvnvo", null], [null, {"nlp": false, "xebvtnvwbb": null, "uhfikxc": null,
"eekejwjbe": false, "jmrkaqky": null, "oeyystp": false}, [null, 10, "nyzfhaps",
71, null], 40, null, 13.737832677566875], [true, 80, 20, {"weynlgnfro":
40.25989193717965, "ggsirrt": 17, "ztvbcpsba": 12, "mljfh": false, "lihndukg":
"bzebyljg", "pllpche": null}, null, [true, false, 52.532666161803895, "mkmqrhg",
 "kgdqstfn", null, "szse"], null, {"qkhfufrgac": "vpmiicarn", "hguztz":
 "ocbmzpzon", "wprnlua": null}], {"drnj": [null, false], "jkjzvjuiw": false,
 "oupsmgjd": false, "kcwjy": null}]}

 => caki -> cyd -> qembsejm -> 1
```

Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.

*if you have a question about someones solution please use a thread under their posted link*

*Happy Monday daily_programmer*

Our next few problems will be about JSON.

JSON isn't always the easiest to read.

```
{ "name": "Devin", "age": 38, "hasPets": true, "petNames": [ "Joey","Tuna","Seven" ], "favorites" : { "colors": null, "musicians": [ "Bad Religion", "Taylor Swift"] }}
```

Please write a function that takes a JSON Object and prints it in a more human readable way.

```
{
  "name": "Devin",
  "age": 38,
  "hasPets": true,  
  "petNames": [
    "Joey",
    "Tuna",
    "Seven"
  ],
  "favorites" : {
    "colors": null,
    "musicians": [
      "Bad Religion",
      "Taylor Swift"
    ]
  }
}
```

Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.

*if you have a question about someones solution please use a thread under their posted link*

*Happy Monday daily_programmer*

Our next few problems will be about JSON.

The following data is being represented as XML. Please output it as JSON.

```
<particpants>
    <particpant>
        <firstName>Michael</firstName> <lastName>Flynn</lastName>
    </particpant>
    <particpant>
        <firstName>Mika</firstName> <lastName>Lucchini</lastName>
    </particpant>
    <particpant>
        <firstName>Ryan</firstName> <lastName>McDevitt</lastName>
    </particpant>
</particpants>
```

```
{"particpants":[
    { "firstName":"Michael", "lastName":"Flynn" },
    { "firstName":"Mika", "lastName":"Lucchini" },
    { "firstName":"Ryan", "lastName":"McDevitt" }
]}
```

Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.

*if you have a question about someones solution please use a thread under their posted link*

*Happy Friday daily_programmer*

This is part five of a multi part challenge. If you've made it this far great! If you're joining late, feel free to modify someone else's code.

Please modify your code to make an alert when a ship has been sunk. *Note I used b for clarity*

```
   1   2   3   4   5   6   7   8   9  10
a  u   u   u   u   u   u   u   u   u   u
b  u   e   u   u   u   e   u   u   u   u
c  u   u   u   u   u   u   u   h   u   u
e  u   u   e   u   u   u   u   u   u   u
f  u   u   u   u   u   u   u   u   u   u
g  u   u   u   u   u   u   u   u   u   u
h  u   u   u   e   u   b   b   b   b   u
i  u   u   u   u   u   u   u   u   u   u
j  u   u   u   u   u   u   u   u   u   u

----- You've sunk my Battleship --------
```

Extra credit: Build it as a turn based game.

Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.

*if you have a question about someones solution please use a thread under their posted link*

*Happy Thursday daily_programmer*

This is part four of a multi part challenge.

Battleship is turn based. Please write a function that creates an `both yours and an opponents` board, the more random the board the better, with ships of the following types:

```
# Class of ship Size
1 Carrier          5
2 Battleship       4
2 Cruiser          3
2 Destroyer        2
```

Then allows playerOne and playerTwo to have guess spaces, marking them either `e` or `h`

Your game should have functions similar in use case as these:
createPlayerBoard('playerOne')
createPlayerBoard('playerTwo')
printMyBoard()
printOppenentBoard() // opponents board should not show where the ship is but should show past guesses.

```
createPlayerBoard('playerOne')
createPlayerBoard('playerTwo')
printMyBoard()
printOppenentBoard()
guessLocation('4', 'h')

   1   2   3   4   5   6   7   8   9  10
a  u   u   u   u   u   u   u   u   u   u
b  u   e   u   u   u   e   u   u   u   u
c  u   u   u   u   u   u   u   u   u   u
e  u   u   e   u   u   u   u   u   u   u
f  u   u   u   u   u   u   u   u   u   u
g  u   u   u   u   u   u   u   u   u   u
h  u   u   u   e   u   h   h   u   u   u
=======
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
>>>>>>> ec1f95974c6b3c1b306dba59ba011ee31c38fa2d
i  u   u   u   u   u   u   u   u   u   u
j  u   u   u   u   u   u   u   u   u   u

```

Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.

<<<<<<< HEAD
*if you have a question about someones solution please use a thread under their posted link*


*Happy Friday daily_programmer*

Write a program that condenses a string input whenever possible.

```
input => I heard the pastor sing live verses easily.
output => I heard the pastor sing liverses easily.
```

```
Deep episodes of Deep Space Nine came on the television only after the news.
Deepisodes of Deep Space Nine came on the televisionly after the news.

Digital alarm clocks scare area children.
Digitalarm clockscarea children.
```

Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.

*if you have a question about someones solution please use a thread under their posted link*

*Happy Thursday daily_programmer*

Make a spiral that begins with 1 and starts from the top left, going towards the right, and ends with the square of that number.

```
5

// ----->
1   2  3  4 5  // |
16 17 18 19 6  // |
15 24 25 20 7  // |
14 23 22 21 8  // V
13 12 11 10 9  //
// < --------


4

1   2  3  4
12 13 14  5
11 16 15  6
10  9  8  7
```

Bonus points for getting the spacing right.

Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.

*if you have a question about someones solution please use a thread under their posted link*

*Happy Tuesday daily_programmer!*

Today is another familiar problem found in r/dailyprogrammer. In computational complexity theory, the 3SUM problem asks if a given set of n real numbers contains three elements that sum to zero. A naive solution works in O(N2) time, and research efforts have been exploring the lower complexity bound for some time now. You will be given a list of integers, one set per line.

```
9 -6 -5 9 8 3 -4 8 1 7 -4 9 -9 1 9 -9 9 4 -6 -8
```

Your program should emit triplets of numbers that sum to 0. Example:
```
-9 1 8
-8 1 7
-5 -4 9
-5 1 4
-4 1 3
-4 -4 8
```

Here are some challenge inputs and outputs
```
4 5 -1 -2 -7 2 -5 -3 -7 -3 1
-1 -6 -3 -7 5 -8 2 -8 1
-5 -1 -4 2 9 -9 -6 -1 -7

//outputs
-7 2 5
-5 1 4
-3 -2 5
-3 -1 4
-3 1 2

-7 2 5
-6 1 5
-3 1 2

-5 -4 9
-1 -1 2
```

Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.

*Happy Thursday daily_programmer!*

Today continues a multi-step daily_programmer, please modify yours or someone else's program to do the following.

Part 2: Ingredients

Create a pantry full of all the ingredients (3 of each seems good). When you use a recipe subtract 1 from all the ingredients. If any ingredients in the are fewer than 2, when you call `pantry.getShoppingList()` it should return a list of what you need.

```
pantry = new Pantry;
addNewRecipe(blueberryPancakes);
getIngredients(overnightOats);
=> Flour, blueberries, eggs, milk, baking soda, sugar
addNewRecipe(overnightOats);
getIngredients(overnightOats);
=> Oats, blueberries, almond milk, pecans
=======
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
>>>>>>> ec1f95974c6b3c1b306dba59ba011ee31c38fa2d
pantry.getShoppingList();
=> Blueberries
```

Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.

<<<<<<< HEAD
*Happy Wednesday daily_programmer!*

Today begins a multi-step daily_programmer.

Part 1: Recipes

Write a program that can take in recipes and return the list of ingredients for the requested recipe:

```
addNewRecipe(sausageAndPeppers);
addNewRecipe(overnightOats);
getIngredients(overnightOats);
=> Oats, blueberries, almond milk, pecans
getIngredients(sausageAndPeppers);
=> Sausage, sweet onions, garlic, olive oil, peppers
```

Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.

*if you have a question about someones solution please use a thread under their posted link*

*Happy Friday daily_programmer!*

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that any solution will do, and you may not use the same element twice.

```
returnNumbers([3, 7, 8, 11], 18)
=> 7, 11
returnNumbers([5, 4, 9, 44], 14)
=> 5, 9
returnNumbers([2, 4, 7, 5], 9)
=> 5, 4
or
=> 2, 7
```

Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.

*if you have a question about someones solution please use a thread under their posted link*

*Happy Thursday daily_programmer!*

This challenge is based off the British tv game show "Countdown". The rules are pretty simple: Given a set of numbers X1-X5, calculate using mathematical operations to solve for Y. You can use addition, subtraction, multiplication, or division. Unlike "real math", the standard order of operations (PEMDAS) is not applied here. Instead, the order is determined left to right.

The user should input any 6 whole numbers and the target number. E.g.

`1 3 7 6 8 3 250`

The output should be the order of numbers and operations that will compute the target number. E.g.

`3+8*7+6*3+1=250`

Note that if follow PEMDAS you get:

`3+8*7+6*3+1 = 78`

But remember our rule - go left to right and operate. So the solution is found by:
`(((((3+8)*7)+6)*3)+1) = 250`

```
25 100 9 7 3 7 881
returns 7 * 3 + 100 * 7 + 25 + 9 = 881

6 75 3 25 50 100 952
returns 100 + 6 * 3 * 75 - 50 / 25 = 952
```
=======
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

>>>>>>> ec1f95974c6b3c1b306dba59ba011ee31c38fa2d

Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.

*if you have a question about someones solution please use a thread under their posted link*

<<<<<<< HEAD
*Happy actually Wednesday this time daily_programmer!*

For this challenge we will be using the tile set from the English edition, which has 100 tiles total. Here's a reference for the distribution and point value of each tile.
Each tile will be represented by the letter that appears on it, with the exception that blank tiles are represented by underscores `_`.

The tiles already in play are inputted as an uppercase string. For example, if 14 tiles have been removed from the bag and are in play, you would be given an input like this:

`AEERTYOXMCNB_S`

You should output the tiles that are left in the bag. The list should be in descending order of the quantity of each tile left in the bag, skipping over amounts that have no tiles.
In cases where more than one letter has the same quantity remaining, output those letters in alphabetical order, with blank tiles at the end.
```
10: E
9: I
8: A
7: O
5: N, R, T
4: D, L, U
3: G, S
2: F, H, P, V, W
1: B, C, J, K, M, Q, Y, Z, _
0: X
```
If more tiles have been removed from the bag than possible, such as 3 Qs, you should give a helpful error message instead of printing the list.

```
PQAREIOURSTHGWIOAE_
LQTOONOEFFJZT
AXHDRUIOR_XHJZUQEE
```
```
10: E
7: A, I
6: N, O
5: T
4: D, L, R
3: S, U
2: B, C, F, G, M, V, Y
1: H, J, K, P, W, X, Z, _
0: Q
```
```
2.
11: E
9: A, I
6: R
5: N, O
4: D, S, T, U
3: G, L
2: B, C, H, M, P, V, W, Y, _
1: K, X
0: F, J, Q, Z
3.
```
```
Invalid input. More X's have been taken from the bag than possible.
```

Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.

*if you have a question about someones solution please use a thread under their posted link*

*Happy Monday daily_programmer*

Given a bowling game as an array of comma delimited throws, calculate total score.

Bowling Scores are given by the following.

If you do not get all of the pins in the frame, you get the number of pins as your score for that frame. If you get all of the pins on your first try (a strike; denoted as "X"), you get 10 + the total of the next 2 *throws*. A Spare (denoted "/") is 10 + the next throw. If Strike or Spare on the last frame, you get another throw, up to 3 total for all strikes.

```
calculateScore(["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "XXX"]) -> 300
calculateScore(["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "XX9"]) -> 299
calculateScore(["9,/", "9,/", "9,/", "9,/", "9,/", "9,/", "9,/", "9,/", "9,/", "9,/,9"]) -> 190
calculateScore(["1,/", "1,/", "1,/", "1,/", "1,/", "1,/", "1,/", "1,/", "1,/", "1,/,1"]) -> 110
calculateScore(["1,/", "1,/", "1,/", "1,/", "1,/", "1,/", "1,/", "1,/", "1,/", "1,/,1"]) -> 110
calculateScore(["X", "9,/", "X", "9,/", "X", "9,/", "X", "9,/", "X", "9,/,X"]) -> 200
calculateScore(["X", "9,/", "X", "9,/", "X", "9,/", "X", "9,/", "X", "9,/,X"]) -> 200
calculateScore(["6,3", "7,2", "8,1", "9,0", "X", "5,4", "6,3", "7,2", "8,1", "9,0"]) -> 100
```

You can find more on scoring and verify more results at http://www.bowlinggenius.com/

Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.

*if you have a question about someones solution please use a thread under their posted link*

*Happy Friday Daily Programmer*

A file I/O Question today.

Write a program that validates phone numbers fit one of the following two formats.

```
(xxx) xxx-xxxx
xxx-xxx-xxxx
```

This file (https://github.com/aisflat439/dailyProgrammer/blob/master/data/phoneNumbers.txt) should return:

```
987-123-4567
(123) 456-7890
=======
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
>>>>>>> ec1f95974c6b3c1b306dba59ba011ee31c38fa2d
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

This file (https://github.com/aisflat439/dailyProgrammer/blob/master/data/phoneNumbers.txt) should return:

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
