*Happy Monday daily_programmer*
*Special thanks to @nolimits for reviving the challenges*

Write a function `questionMarks` that takes a string and returns true if there are exactly three question marks that between every 2 digits that add up to 10.  

```
true === questionMarks('5???5')
false === questionMarks('5???4')
false === questionMarks('5??5')
true === questionMarks('acc?7??sss?3rr1??????5')
true === questionMarks('acc?7??sss?3rr5???5')
false === questionMarks('acc?7??sss?3rr5???4')
false === questionMarks('ac6?7')
```

*Please DM me or Richie with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.*
*if you have a question about someones solution please use a thread under their posted link.*

*Happy Tuesday daily_programmer*
*Special thanks to @nolimits for reviving the challenges*

Write a function `scaleBalance' that takes two arrays the first being the weight on the right and left side of the scale, the second being the available "weights" you can use to "balance the scales". You may only use *2* "weights" at most to balance the scale. Return the fewest weights that work

```
1 === scaleBalance([0, 1], [1, 5, 9])
2 === scaleBalance([6, 8], [1, 2, 7, 7])
"3, 6" === scaleBalance([13, 4], [1, 2, 3, 6, 14])
"6, 2" === scaleBalance([5, 9], [1, 2, 6, 7])
false === scaleBalance([77, 4], [6, 14])
```

*Please DM me or Richie with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.*
*if you have a question about someones solution please use a thread under their posted link.*

*Happy Thursday daily_programmer*
*Special thanks to @nolimits for reviving the challenges*

Today's challenge should be straightforward for folks new to #daily_programmer. Write a program that takes a string and shifts the letters of that string by the numeric value passed. So `shiftLetters(a, 5)` would return `f`.

*If you're looking to stretch your legs a bit more than this challenge, please solve for `'v' === shiftLetters(a, -5)` as well!

```
'd' === shiftLetters('a', 3)
'jk' === shiftLetters('ab', 9)
'nm' === shiftLetters('az', 13)
'skloob ghy uxohv' === shiftLetters('Philly Dev Rules', 3)
'wopssf klc ybslz' === shiftLetters('Philly Dev Rules', 7)
'hzaddq vwn jmdwk' === shiftLetters('Philly Dev Rules', 18)
```

*Please DM me or Richie with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.*
*if you have a question about someones solution please use a thread under their posted link.*

*Happy Friday daily_programmer*
*Special thanks to @nolimits for reviving the challenges*

Completing yesterdays challenge should be helpful in solving todays. Write a function that lists out all 25 possible solutions to a Cesar Cipher (thats what we made yesterday) and the coresponding shift. 

* For those of you looking to stretch your legs, use (https://raw.githubusercontent.com/dwyl/english-words/master/words_dictionary.json) as a resource of words and put likely solutions first.

```
decodeCipher('lnbja lryqna')
=>
[
  9,    cesar cipher
  22,	prfne pvcure
  24,	npdlc ntaspc
  23,	oqemd oubtqd
  21,	qsgof qwdvsf
  20,	rthpg rxewtg
  18,	tvjri tzgyvi
  19,	suiqh syfxuh
  7,	eguct ekrjgt
  8,	dftbs djqifs
  5,	giwev gmtliv
  17,	uwksj uahzwj
  25,	mockb mszrob
  16,	vxltk vbiaxk
  13,	yaown yeldan
  6,	fhvdu flskhu
  10,	bdrzq bhogdq
  11,	acqyp agnfcp
  3,	ikygx iovnkx
  2,	jlzhy jpwoly
  4,	hjxfw hnumjw
  14,	xznvm xdkczm
  15,	wymul wcjbyl
  1,	kmaiz kqxpmz
  12,	zbpxo zfmebo
] 
```

*Please DM me or Richie with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.*
*if you have a question about someones solution please use a thread under their posted link.*

*Happy Tuesdat daily_programmer*

Write a function that takes a list of strings an prints them, one per line, in a rectangular frame. For example the list `["Hello", "World", "in", "a", "frame"]` gets printed as:

```
*********
* Hello *
* World *
* in    *
* a     *
* frame *
*********
```

*Please DM me or Richie with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.*
*if you have a question about someones solution please use a thread under their posted link.*

*Happy Wednesday daily_programmer*

This challenge is stolen verbatim from `r/dailyprogrammer`.

*Description*  

5 Friends (let's call them a, b, c, d and e) are playing a game and need to keep track of the scores. Each time someone scores a point, the letter of his name is typed in lowercase. If someone loses a point, the letter of his name is typed in uppercase. Give the resulting score from highest to lowest.

*Input Description*  

A series of characters indicating who scored a point. Examples:

```
abcde
dbbaCEDbdAacCEAadcB
```
*Output Description*
The score of every player, sorted from highest to lowest. Examples:

```
a:1, b:1, c:1, d:1, e:1
b:2, d:2, a:1, c:0, e:-2
```

*Challenge Input*
`EbAAdbBEaBaaBBdAccbeebaec`

*Please DM me or Richie with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.*
*if you have a question about someones solution please use a thread under their posted link.*


*Happy Thursday daily_programmer*

Write function that translates a text to Pig Latin and back. English is translated to Pig Latin by taking the first letter of every word, moving it to the end of the word and adding ‘ay’. “The quick brown fox” becomes “Hetay uickqay rownbay oxfay”.


Words that start with a vowel (A, E, I, O, U) simply have "WAY" appended to the end of the word.
Words that start with a consonant have all consonant letters up to the first vowel moved to the end of the word (as opposed to just the first consonant letter), and "AY" is appended.
     ('Y' is counted as a vowel in this context)

```
'excellentway' === translateToPigLatin('excellent')
'ailyday' === translateToPigLatin('daily')
'ogrammerpray' === translateToPigLatin('programmer')
'ethay ickquay ownbray oxfay' === translateToPigLatin('the quick brown fox')
'illyphay evday ailyday ogrammerpray' === translateToPigLatin('philly dev daily programmer')
```

*Please DM me or Richie with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.*
*if you have a question about someones solution please use a thread under their posted link.*

*Happy Thursday daily_programmer*

Write a program that outputs all possibilities to put + or - or nothing between the numbers 1,2,…,9 (in this order) such that the result is 100. For example 1 + 2 + 3 - 4 + 5 + 6 + 78 + 9 = 100.

*Please DM me or Richie with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.*
*if you have a question about someones solution please use a thread under their posted link.*

*Happy Monday daily_programmer*

One classic method for composing secret messages is called a square code.  The spaces are removed from the english text and the characters are written into a square (or rectangle).

The coded message is obtained by reading down the columns going left to right.

`squareCodeMessage("If man was meant to stay on the ground god would have given us roots")`
```
imtgdvs 
fearwer 
mayoogo 
anouuio 
ntnnlvt 
wttddes 
aohghn  
sseoau
```

Write a fucntion that square codes a message, Message length be no longer than 81 characters.  Display the encoded message. 

`squareCodeMessage("haveaniceday")`                                   
```
hae 
and 
via 
ecy
```
`squareCodeMessage("feedthedog")`                                      
```
fto 
ehg 
ee  
dd
```
`squareCodeMessage("chillout")`                                        
```
clu 
hlt 
io
```

*Please DM me or Richie with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.*
*if you have a question about someones solution please use a thread under their posted link.*

*Happy Tuesday daily_programmer*

Write a program to count the occurrences of all letter pairs in a sample of text (http://users.csc.calpoly.edu/~jdalbey/103/Projects/AliceInWonderland.txt). Disregard differences between lower and upper case letters. (Spaces are not considered as letters). Output the 25 most frequent letter pairs, in order by percent of total.

So the text above `th` may represent 2.2% of all letter pairs and `in` may represent 2.14% (I don't know I haven't done it yet)

*Please DM me or Richie with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.*
*if you have a question about someones solution please use a thread under their posted link.*

*Happy Wednesday daily_programmer*

Today's challenge should be pretty beginner friednly. It willbe modified tomorrow with some different test cases tomorrow and Friday. 

Write a function that outputs a diagonal axis for the number passed. If the first arguement is smaller than the second it should ascend, else it should descend.

`diagonalize(0, 5)`
```
     5
    4
   3
  2
 1
0
```
`+` rendered as a ` ` for clarity
```
+++++5
++++4
+++3
++2
+1
0
```

`diagonalize(3, 8)`
```
     8
    7
   6
  5
 4
3
```

`diagonalize(8, 3)`
```
8
 7
  6
   5
    4
     3
```

*Please DM me or Richie with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.*
*if you have a question about someones solution please use a thread under their posted link.*

*Happy Thursday daily_programmer*

Today's challenge extends yesterdays.

Write a function that outputs a diagonal axis for the number passed. If the first arguement is smaller than the second it should ascend, else it should descend. If there are more arguments, it should continue in this pattern.

`graphifify(0, 5, 0)`
```
     5
    4 4
   3   3
  2     2
 1       1
0         0
```
`+` rendered as a ` ` for clarity
```
+++++5
++++4+4
+++3+++3
++2+++++2
+1+++++++1
0+++++++++0
```

`graphifify(3, 8, 5, 7)`
```
     8
    7 7   7
   6   6 6
  5     5
 4
3
```

*Please DM me or Richie with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.*
*if you have a question about someones solution please use a thread under their posted link.*

*Happy Tuesday daily_programmer*

Given a sequence of increasing numbers, create a function which returns the sequence steps.

```
[1,2,5,7]
=> 1, 3, 2
```
If the sequence repeats it should return one sequence.

```
[1,2,5,7,8,11,13]
=> 1, 3, 2
```

```
[1, 4, 8, 9, 10, 13, 17, 18, 19, 22, 26, 27, 28] 
=> Output: [3,4,1,1]
[6, 11, 13, 18, 20, 25, 27, 32, 34, 39, 41] 
=> Output: [5,2]
[2, 6, 10, 13, 17, 21, 25, 28, 32, 36, 40, 43, 47] 
=> Output: [4,4,3,4]
[5, 6, 7] 
=> Output: [1]
```

*Please DM me or Richie with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.*
*if you have a question about someones solution please use a thread under their posted link.*


*Happy Wednesday daily_programmer*

2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

*Please DM me or Richie with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.*
*if you have a question about someones solution please use a thread under their posted link.*

*Happy Thursday daily_programmer*

I'm kinda on a Project Euler kick right now. Hope you enjoy them.

The sum of the squares of the first ten natural numbers is,
```
1^2 + 2^2 + ... + 10^2 = 385
or 
1*1+2*2+3*3... = 385
```
The square of the sum of the first ten natural numbers is,
```
(1 + 2 + ... + 10)2 = 55^2 = 3025
```
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

*Please DM me or Richie with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.*
*if you have a question about someones solution please use a thread under their posted link.*

*Happy Friday daily_programmer*

Today's challenge has yet to have an answer posted.

The first part of the question has been solved. Please see that question below.

Write a function that outputs a diagonal axis for the number passed. If the first arguement is smaller than the second it should ascend, else it should descend.

`diagonalize(0, 5)`
```
     5
    4
   3
  2
 1
0
```
`+` rendered as a ` ` for clarity
```
+++++5
++++4
+++3
++2
+1
0
```

`diagonalize(3, 8)`
```
     8
    7
   6
  5
 4
3
```

`diagonalize(8, 3)`
```
8
 7
  6
   5
    4
     3
```

The second part of the question, write a function that outputs a diagonal axis for the number passed. If the first arguement is smaller than the second it should ascend, else it should descend. If there are more arguments, it should continue in this pattern.

`graphifify(0, 5, 0)`
```
     5
    4 4
   3   3
  2     2
 1       1
0         0
```
`+` rendered as a ` ` for clarity
```
+++++5
++++4+4
+++3+++3
++2+++++2
+1+++++++1
0+++++++++0
```

`graphifify(3, 8, 5, 7)`
```
     8
    7 7   7
   6   6 6
  5     5
 4
3
```

*Please DM me or Richie with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.*
*if you have a question about someones solution please use a thread under their posted link.*


*Happy Monday daily_programmer*

Given two sets of arrays, print the overlap of those arrays.

```
[4,6] === outputOverlap([2,3,4,5,6], [4,6,8,10])
'No overlap' === outputOverlap([2,3,4,5,6], ["dog","cat","person"])
[2,4] === outputOverlap([2,3,4,5,6], [4,86,-08,10,2])
```

*Please DM me or Richie with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.*
*if you have a question about someones solution please use a thread under their posted link.*

*Happy Tuesday daily_programmer*

2, 3, 5, 7, 11, and 13 are prime. 13 is the 6th prime number.

Write a program that finds the 10001st prime number.

*Please DM me or Richie with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.*
*if you have a question about someones solution please use a thread under their posted link.*

*Happy Wednesday daily_programmer*

In the following series, the product of a 4 digit sequence is 5832

`9 * 9 * 8 * 9 = 5832`

```
73167176531330624919225119674426574742355349194934
96983520312774506326239578318016984801869478851843
85861560789112949495459501737958331952853208805511
12540698747158523863050715693290963295227443043557
66896648950445244523161731856403098711121722383113
62229893423380308135336276614282806444486645238749
30358907296290491560440772390713810515859307960866
70172427121883998797908792274921901699720888093776
65727333001053367881220235421809751254540594752243
52584907711670556013604839586446706324415722155397
53697817977846174064955149290862569321978468622482
83972241375657056057490261407972968652414535100474
82166370484403199890008895243450658541227588666881
16427171479924442928230863465674813919123162824586
17866458359124566529476545682848912883142607690042
24219022671055626321111109370544217506941658960408
07198403850962455444362981230987879927244284909188
84580156166097919133875499200524063689912560717606
05886116467109405077541002256983155200055935729725
71636269561882670428252483600823257530420752963450
```


*Please DM me or Richie with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.*
*if you have a question about someones solution please use a thread under their posted link.*



*Happy Wednesday daily_programmer*

Thanks for stepping in with the challenge yesterday Richie. I stole this one for `r/daily_programmer` and have always found this english "rule" annoying.

Background
"I before E except after C" is perhaps the most famous English spelling rule. For the purpose of this challenge, the rule says:

- if "ei" appears in a word, it must immediately follow "c".

- If "ie" appears in a word, it must not immediately follow "c".

A word also follows the rule if neither "ei" nor "ie" appears anywhere in the word. Examples of words that follow this rule are:

```
fiery hierarchy hieroglyphic
ceiling inconceivable receipt
daily programmer one two three
```

There are many exceptions that don't follow this rule, such as:

```
sleigh stein fahrenheit
deifies either nuclei reimburse
ancient juicier societies
```

Challenge
Write a function that tells you whether or not a given word follows the "I before E except after C" rule.

```
check("a") => true
check("zombie") => true
check("transceiver") => true
check("veil") => false
check("icier") => false
```

Weekend Bonus:

How many words in the enable1(https://norvig.com/ngrams/enable1.txt) word list are exceptions to the rule? (The answer is 4 digits long and the digits add up to 18.)

*Please DM me or Richie with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.*
*if you have a question about someones solution please use a thread under their posted link.*