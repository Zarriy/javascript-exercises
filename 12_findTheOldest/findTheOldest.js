const findTheOldest = function (people) {
  const thisYear = new Date().getFullYear();
  const arrange = people
    .map((person) => {
      person.age = person.yearOfDeath
        ? person.yearOfDeath - person.yearOfBirth
        : thisYear - person.yearOfBirth;
      return person;
    })
    .sort((a, b) => b.age - a.age);
  return arrange[0];
};
// Do not edit below this line
module.exports = findTheOldest;
