'use strict';

function createSchedule() {
  let schedule = [],
      listOutput = '';
  schedule.push(addCoworkersHours('Todd', '3-5'));
  schedule.push(addCoworkersHours('Jane', '1-4'));
  schedule.push(addCoworkersHours('Susan', '11-4'));
  schedule.push(addCoworkersHours('Frank', '9-5'));

  schedule.forEach((shift) => {
    listOutput += `${shift.name} is in from ${splitHours(shift.hours)}\n`;
  });

  return listOutput;
}

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

function addCoworkersHours(name, hours) {
  let coworker = {};
  coworker.name = name;
  coworker.hours = hours;
  return coworker;
}

console.log(createSchedule());
