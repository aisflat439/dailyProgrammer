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
