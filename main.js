const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const beverages = {
  '1': { name: 'Coke', price: 1100 },
  '2': { name: 'Water', price: 600 },
  '3': { name: 'Coffee', price: 700 }
};

const validCashDenominations = [100, 500, 1000, 5000, 10000];

let balance = 0;

function displayVendingMachineMenu() {
  console.log('\n=== Vending Machine Menu ===');
  for (let key in beverages) {
    console.log(`${key}. ${beverages[key].name} - ${beverages[key].price} won`);
  }
  console.log('4. Payment');
  console.log('5. Exit');
}

function insertCash() {
  rl.question('Please insert cash (100, 500, 1000, 5000, 10000 won): ', (amount) => {
    amount = parseInt(amount);
    if (validCashDenominations.includes(amount)) {
      balance += amount;
      console.log(`Current Balance: ${balance} won`);
      displayVendingMachineMenu();
      processUserInput();
    } else {
      console.log('Invalid cash amount.');
      insertCash();
    }
  });
}

function selectBeverage() {
  rl.question('Select a beverage (enter number): ', (choice) => {
    if (beverages[choice]) {
      if (balance >= beverages[choice].price) {
        balance -= beverages[choice].price;
        console.log(`Purchased ${beverages[choice].name}. Remaining balance: ${balance} won`);
      } else {
        console.log('Insufficient balance.');
      }
    } else {
      console.log('Invalid selection.');
    }
    displayVendingMachineMenu();
    processUserInput();
  });
}

function processCardPayment() {
  rl.question('Select a beverage to purchase (enter number): ', (choice) => {
    if (beverages[choice]) {
        // 10% chance of insufficient balance
        if (Math.random() < 0.1) {
          console.log(`Card payment failed: Insufficient balance for ${beverages[choice].name}.`);
        } else {
          console.log(`Purchased ${beverages[choice].name} by card successfully.`);
        }
    } else {
        console.log('Invalid selection.');
    }
    displayVendingMachineMenu();
    processUserInput();
  });
}

function processUserInput() {
  rl.question('Please select: ', (choice) => {
    switch(choice) {
      case '1':
      case '2':
      case '3':
        selectBeverage();
        break;
      case '4':
        rl.question('Select payment method (1: Cash, 2: Card): ', (paymentMethod) => {
          if (paymentMethod === '1') {
            insertCash();
          } else if (paymentMethod === '2') {
            processCardPayment();
          } else {
            console.log('Invalid selection.');
            displayVendingMachineMenu();
            processUserInput();
          }
        });
        break;
      case '5':
        console.log(`Exiting program. Change returned: ${balance} won`);
        rl.close();
        break;
      default:
        console.log('Invalid selection.');
        displayVendingMachineMenu();
        processUserInput();
    }
  });
}

console.log('Starting Vending Machine Program.');
displayVendingMachineMenu();
processUserInput();
