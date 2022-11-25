"use strict";
// Tuples: arrays of fixed length and specific order of types. They're exclusive to typescript; don't exist in js.
// Tuples don't prevent pushing of elements when used with arrays
let stuff;
stuff = [1, "hello"]; //works
stuff = ["hello", 1]; // complains
let response = [200, "OK", "This is the body"];
console.log(response);
// this complains
response[0] = "200";
// this works
response.push("Pushed element");
