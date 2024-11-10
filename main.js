import inquirer from "inquirer";
// Initialize user balance and pin code
let myBalance = 10000; // Dollar
let myPin = 2023;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number",
    }
]);
// 20232 === 2023 - false
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!!");
    // console.log(`Current Account Balance is ${myBalance}`)
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please saelect option",
            type: "list",
            choices: ["withdraw", "check balance"]
        }
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number",
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Insufficient Balance");
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`${amountAns.amount} withdraw successfully`);
            console.log(`your remaining balance is: ${myBalance}`);
        }
    }
    // =, -=, =+
    else if (operationAns.operation === "check balance") {
        console.log(`your balance is: ${myBalance}`);
    }
}
else {
    console.log("Incorrect pin number, Try again");
}
