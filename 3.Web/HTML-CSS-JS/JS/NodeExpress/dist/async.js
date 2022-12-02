"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
(0, fs_1.readFile)("./dist/first.txt", "utf-8", (err, result) => {
    if (err) {
        console.log(err.message);
        return;
    }
    const first = result;
    (0, fs_1.writeFile)("./dist/output.txt", `Here is the result: ${first}`, (err) => {
        if (err) {
            console.log(err.message);
            return;
        }
    });
});
