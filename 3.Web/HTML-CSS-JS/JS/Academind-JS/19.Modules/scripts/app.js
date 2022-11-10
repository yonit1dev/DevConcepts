import User from "./models/user.js";
import { doSomething as func } from "./models/user.js";

const firstUser = new User("Yonathan", "Tessema", 22);

func("yonathan");

console.log(firstUser.fullName);
