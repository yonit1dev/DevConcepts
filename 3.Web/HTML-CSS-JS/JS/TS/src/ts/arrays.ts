const activeUsers: string[] = [];
activeUsers.push("admin");

const enabledAcc: boolean[] = [];
enabledAcc.push(false);

!enabledAcc[0]
  ? console.log(activeUsers[0] + " user is not active!")
  : console.log(activeUsers[0] + " user is active!");

const ageList: number[] = [45, 56, 13];
ageList[0] = 99;
ageList[1] = "hello"; // error

type User = {
  id: number;
  username: string;
};

const allUsers: Array<User> = [];
const adminUser: User = {
  id: +(Math.random() * 10).toFixed(1),
  username: "adminUser",
};

allUsers.push(adminUser);
