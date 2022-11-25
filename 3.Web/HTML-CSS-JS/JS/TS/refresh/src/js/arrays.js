"use strict";
const activeUsers = [];
activeUsers.push("admin");
const enabledAcc = [];
enabledAcc.push(false);
!enabledAcc[0]
    ? console.log(activeUsers[0] + " user is not active!")
    : console.log(activeUsers[0] + " user is active!");
const ageList = [45, 56, 13];
ageList[0] = 99;
ageList[1] = "hello"; // error
const allUsers = [];
const adminUser = {
    id: +(Math.random() * 10).toFixed(1),
    username: "adminUser",
};
allUsers.push(adminUser);
