#! /usr/bin/env node
import inquirer from "inquirer";
const ramdomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess number between 1-6:",
    }
]);
if (answers.userGuessedNumber === ramdomNumber) {
    console.log("congtratulations! you guessed right number");
}
else {
    console.log("0h you guessed wrong number");
}
