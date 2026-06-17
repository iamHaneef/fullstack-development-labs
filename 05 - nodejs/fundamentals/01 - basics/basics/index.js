console.log("Welcome to Node.js");

/*

const fs = require("fs");
fs.writeFile("new.txt", "New File Created", (err) => {
    if (err) {
        console.log("error");
    }
})

fs.readFile("new.txt", "utf-8", (err, data) => {
    if (err) {
        console.log("error");
    }
    else {
        console.log(data);
    }
})

*/

// const names  = require("sillyname");

// var generate_name = names();
// console.log("My friend name is " + generate_name);

// import names from "sillyname";

// var generate_name = names();
// console.log("My friend name is " + generate_name);

import names  from "superheroes";

var generate_name = names[Math.floor(Math.random() )]
console.log("My friend name is " + generate_name);




