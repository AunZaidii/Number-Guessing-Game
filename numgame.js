const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function numgame() {
    var num1 = Math.floor(Math.random() * 100) + 1; // Generate a random number between 1 and 100
    var flag = false;

    function askNumber() {
        rl.question("Enter a number between 1 and 100: ", (num) => {
            num = parseInt(num);
            if (num > num1) {
                console.log("Enter a number lesser");
                askNumber(); // Recursive call to ask for input again
            } else if (num < num1) {
                console.log("Enter a number greater");
                askNumber(); // Recursive call to ask for input again
            } else {
                console.log('You have guessed correctly');
                flag = true;
                rl.close();
            }
        });
    }

    askNumber(); // Start asking for the number
}

numgame();
