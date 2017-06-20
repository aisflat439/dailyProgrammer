'use strict';

function getMeetingTime() {
  let schedule = [],
      listOutput = '';

  let e = new Employee('Todd', '3-5');
  schedule.push(e);
  e = new Employee('Jane', '1-4');
  schedule.push(e);
  e = new Employee('Susan', '11-4');
  schedule.push(e);
  e = new Employee('Frank', '9-5');
  schedule.push(e);

  schedule.forEach((employee) => {
    // listOutput += `${employee.name} is in from ${employee.hours}\n`;
    console.log(employee.availableHours);
  });

  return listOutput;
}

function Employee(name, time) {
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

console.log(getMeetingTime());


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
