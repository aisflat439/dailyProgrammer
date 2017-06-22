*Happy Thursday Daily Programmer*

_Todays problem builds on this weeks problems, please modify someone else's solution or build your own_

Your boss thinks this works great so far! But he realized that Jane didn't really need to be at the meeting, her attendance was more _nice to have_. Rewrite your program so that any employee whose less vital (Still important but lower weight) is weighted less.

Sample input
```
addCoworkersHours('Todd', '9-5', [11, 12, 4]);
addCoworkersHours('Jane', '9-5', [11, 9, 2], false);
addCoworkersHours('Susan', '10-5', [10, 12, 3]);
addCoworkersHours('Frank', '11-5', [1, 11, 12]);
getMeetingTime();
```
output
```
The meeting should be scheduled from 12-1pm.
```

Sample input
```
addCoworkersHours('Todd', '9-5', [11, 12, 4]);
addCoworkersHours('Jane', '9-5', [11, 9, 2], false);
addCoworkersHours('Susan', '10-5', [10, 4, 12]);
addCoworkersHours('Frank', '11-5', [1, 11, 12]);
getMeetingTime();
```
output
```
The meeting should be scheduled from 11-12pm.
```

Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.

*if you have a question about someones solution please use a thread under their posted link*

*Happy Wednesday Daily Programmer*

_Todays problem builds on yesterdays and Mondays, please modify someone else's solution or build your own_

Your company is thrilled with how you created a list. Now they people to be able to rank their best meeting times, and your program will find the time that disappoints the fewest people. Members can input times they prefer, in order of preference for 1hr meetings.

Sample input
```
addCoworkersHours('Todd', '9-5', [11, 4, 12]);
addCoworkersHours('Jane', '9-5', [9, 11, 2]);
addCoworkersHours('Susan', '10-5',[10, 3, 12]);
addCoworkersHours('Frank', '11-5');
getMeetingTime();
```
output
```
The meeting should be scheduled from 11-12.
```

Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.

*if you have a question about someones solution please use a thread under their posted link*

*Happy Tuesday Daily Programmer*

_Todays problem builds on yesterdays, please modify someone else's solution or build your own_

Your company is thrilled with how you created a list. Now they want your program to output ideal times (or time) for a one hour meeting.

Sample input
```
addCoworkersHours('Todd', '3-5');
addCoworkersHours('Jane', '1-4');
addCoworkersHours('Susan', '11-4');
addCoworkersHours('Frank', '9-5');
getMeetingTime();
```
output
```
The meeting should be scheduled from 3-4pm
```

Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.

*if you have a question about someones solution please use a thread under their posted link*

*Happy Monday Daily Programmer*

Your company needs to know who is free and in the office tomorrow (The office is open from 9-5). Write a program that takes a names, and hours that person is free and prints them all out at the end for a quick glance at everyones schedule.

Sample input
```
addCoworkersHours('Todd', '3-5');
addCoworkersHours('Jane', '1-4');
addCoworkersHours('Susan', '11-4');
addCoworkersHours('Frank', '9-5');
```
output
```
Todd is in from 3-5pm.
Jane is in from 1-4pm.
Susan is in from 11am-4pm.
Frank is in from 9am-5pm.
```

Please DM me with ideas for future problems or future themed weeks. When you have completed it post a link to your solution.

*if you have a question about someones solution please use a thread under their posted link*
