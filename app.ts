#! /usr/bin/env node

import inquirer from "inquirer";

let convertions = {
"PKR": { 
  "TRY": 0.12,
  "QAR": 0.013, 
  "PKR": 1,
},

"TRY": {
  "QAR": 0.11,
  "PKR": 8.68,
  "TRY":  1,
},

"QAR": {
  "PKR": 76.39,
  "TRY": 8.81,
  "QAR": 1,
}

};

// let currencies = {PKR: 280, QAR: 3.64, TRY: 32.07, SAR: 3.75, USD: 1};


let convert :{from: "PKR" | "QAR" | "TRY",
to: "PKR" | "QAR" | "TRY", 
amount: number} = await inquirer.prompt([
  {
    name: "from",
    message: "Enter Currency",
    type: "list",
    choices: ["PKR", "QAR", "TRY"],
  },

  {
    name: "amount",
    message: "Enter amount",
    type: "number",
  },
  
  {
    name: "to",
    message: "Enter Currency",
    type: "list",
    choices: ["PKR", "QAR", "TRY"],
  },
]);




const {from, to, amount} = convert;

if (from && to && amount) {
  let result = convertions[from][to] * amount;
  console.log(`Conversion from ${from} ${amount} to ${to} is ${result}`);
  
} else {
  console.log("Invalid input");
  
}


