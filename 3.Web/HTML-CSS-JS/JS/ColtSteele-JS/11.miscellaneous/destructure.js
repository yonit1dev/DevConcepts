const raceResults = [
  "Feyisa Lelisa",
  "Eliud Kipchoge",
  "Galen Rupp",
  "Ghirmay Gebreselassie",
];

const [gold, silver, bronze] = raceResults;

console.log(gold);
console.log(silver);
console.log(bronze);

const [first, , third] = raceResults;
console.log(third);

const [winner, ...otherRunners] = raceResults;
console.log(otherRunners);

const runner = {
  firstName: "Feyisa",
  lastName: "Lelisa",
  country: "Ethiopia",
  position: 1,
  time: "2hrs 04min 45secs",
};

const printRunner = function ({ firstName, lastName, country }) {
  console.log(`${firstName} - ${lastName}, from ${country}.`);
};

printRunner(runner);

const { firstName, lastName, country, ...other } = runner;
console.log(firstName, lastName, country, other);

const results = [
  {
    first: "Feyisa",
    last: "Lelisa",
    country: "Ethiopia",
  },
  {
    first: "Eliud",
    last: "Kipchoge",
    country: "Kenya",
  },
  {
    first: "Galen",
    last: "Rupp",
    country: "USA",
  },
];

const [, { country: rival }] = results;
console.log(rival);
