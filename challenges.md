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
