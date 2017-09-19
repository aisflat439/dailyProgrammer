'use strict';

function getMeetingTime() {
  let schedule = [],
      listOutput = '',
      times = [];

      // TODO: Modify Employee to take preferences
      // addCoworkersHours('Todd', '9-5', [11, 4, 12]);
      // addCoworkersHours('Jane', '9-5', [9, 11, 2]);
      // addCoworkersHours('Susan', '10-5',[10, 3, 12]);
      // addCoworkersHours('Frank', '11-5');

  let e = new Employee('Todd', '3-5');
  schedule.push(e);
  e = new Employee('Jane', '1-4');
  schedule.push(e);
  e = new Employee('Susan', '11-4');
  schedule.push(e);
  e = new Employee('Frank', '9-5');
  schedule.push(e);

  schedule.forEach((employee) => {
    listOutput += `${employee.name} is in from ${employee.hours}\n`;
    times = times.concat(employee.availableHours);
  });

  return `${listOutput}The meeting should be scheduled from ${createMeetingTimeString(getMostFrequentOccurenceInArray(times))}`;
}

function Employee(name, time) {
  // TODO: Maybe take Employee and give them 3 favs.
  this.name = name;
  this.time = time;

  this.hours = splitHours(this.time)
  this.availableHours = getAvailableHours(this.time);

  function splitHours(hours){
    let shift = hours.split('-');

    if (shift[0] - shift[1] > 0) {
      shift = shift[0] + 'am-' + shift[1] +'pm';
    } else {
      shift = shift.join('-');
      shift += 'pm';
    }
    return shift;
  }

  function getAvailableHours(hours) {
    let allHours = [],
        shift = hours.split('-'),
        startTime = parseInt(shift.shift()),
        finishTime = parseInt(shift.pop());

    if (finishTime - startTime < 0) {
      finishTime += 12;
    } else {
      startTime += 12;
      finishTime += 12;
    }

    for (let i = startTime; i <= finishTime; i++) {
      allHours.push(parseInt(i) );
    }

    return allHours;
  }
}

function getAvailableHours(hours) {
  let allHours = [],
      shift = hours.split('-'),
      startTime = parseInt(shift.shift()),
      finishTime = parseInt(shift.pop());

  if (finishTime - startTime < 0) {
    finishTime += 12;
  } else {
    startTime += 12;
    finishTime += 12;
  }

  for (let i = startTime; i <= finishTime; i++) {
    allHours.push(parseInt(i) );
  }

  return allHours;
}

function getMostFrequentOccurenceInArray(arr) {
  let count = {},
      compare = -1,
      top;

  for (var i = 0; i < arr.length; i++) {
    let currentHour = arr[i];

    if (count[currentHour] === undefined) {
      count[currentHour] = 1;
    } else {
      count[currentHour] = count[currentHour] + 1;
    }

    if (count[currentHour] > compare) {
      compare = count[currentHour];
      top = arr[i];
    }
  }

  return top
}

function createMeetingTimeString(startTime) {
  let endTime;

  if (startTime < 11) {
    endTime = startTime + 1;
    startTime += 'am';
    endTime += 'am';
  } else if (startTime === 11){
    endTime = startTime + 1;
    startTime += 'am';
    endTime += 'pm';
  } else {
    startTime -= 12;
    endTime = startTime + 1;
    startTime += 'pm';
    endTime += 'pm';
  }

  return startTime + ' - ' + endTime;
}

//Takes One Array of preferences
function getRankedMeetingTimes([11, 3, 5]) {
  // return a hash of times, with points
  // so 1st place is 5 points,
  // second is 3
  // third is 1
  // no points for any item in arry past 3
  //  this should return
  // {

  // 11:5
  // 3:3
  // 5:1

  // }
}

console.log(getMeetingTime());
