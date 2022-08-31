// Assignment on DOM Manipulation

/*
    Selecting in two different ways and changing the background color to black, text color to white.
 */

const queryTask1 = document.querySelector("#task-1");
const getTask1 = document.getElementById("task-1");

getTask1.style.backgroundColor = "black";
getTask1.style.color = "white";

/*
    Changing the document title to "Assignment - Solved!"
 */

const title = document.querySelector("title");
const headTitle = document.head.querySelector("title");

headTitle.textContent = "Assignment - Solved!";
title.textContent = "Assignment - Solved!";

/*
    Select the h1 element in the page and change text to "Assignment - Solved!"
 */

const h1 = document.body.querySelector("h1");
h1.textContent = "Assignment - Solved!";