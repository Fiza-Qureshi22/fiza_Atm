#! /usr/bin/env node
import inquirer from 'inquirer';
// Assume user entered PIN
const userEnteredPIN = '1234';
// Assume correct PIN stored in database or in your application
const correctPIN = '1234';
// Compare entered PIN with correct PIN
if (userEnteredPIN === correctPIN) {
    console.log('PIN verified. User authenticated.');
}
else {
    console.log('Incorrect PIN. User authentication failed.');
}
const accountBalances = {
    '123456': 5000,
    '789012': 10000,
    '456324': 50000,
    // Add more account numbers and balances as needed
};
async function main() {
    console.log("Welcome to ATM CLI!");
    // User se account number aur PIN input lena
    const userInput = await inquirer.prompt([
        {
            type: 'input',
            name: 'accountNumber',
            message: 'Enter your account number:',
        },
        {
            type: 'password',
            name: 'pin',
            message: 'Enter your PIN:',
            mask: '*',
        },
    ]);
    const accountNumber = userInput.accountNumber;
    const anotherAccountNumber = userInput.accountNumber;
    // Check if account number exists
    if (accountBalances.hasOwnProperty(accountNumber)) {
        // Account exists
        const pin = userInput.pin;
        // Check if PIN is correct
        if (pin === '1234') { // Replace '1234' with actual PIN validation logic
            // User authenticated, show account balance
            console.log(`Account Balance for Account Number ${accountNumber}: $${accountBalances[accountNumber]}`);
            // Ask user for further action
            const action = await inquirer.prompt({
                type: 'list',
                name: 'action',
                message: 'What would you like to do?',
                choices: ['Withdraw Cash', 'Deposit Cash', 'Exit']
            });
            // Perform selected action
            switch (action.action) {
                case 'Withdraw Cash':
                    withdrawCash(accountNumber);
                    break;
                case 'Deposit Cash':
                    depositCash(accountNumber);
                    break;
                case 'Exit':
                    console.log('Thank you for using ATM CLI. Goodbye!');
                    break;
            }
        }
        else {
            console.log('Incorrect PIN. Please try again.');
        }
    }
    else {
        console.log('Account not found. Please enter a valid account number.');
    }
}
// Function to withdraw cash
function withdrawCash(accountNumber) {
    // Implement withdrawal logic here
    console.log(`Withdraw cash functionality for account ${accountNumber} will be implemented here.`);
}
// Function to deposit cash
function depositCash(accountNumber) {
    // Implement deposit logic here
    console.log(`Deposit cash functionality for account ${accountNumber} will be implemented here.`);
}
main(); // main ka means y hy k agar wo jitna delay karyga utna hamen time lagyga ...
