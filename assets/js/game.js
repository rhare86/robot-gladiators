var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
<<<<<<< HEAD

// You can also log multiple values at once like this  console.log(playerName,  playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function () {
    // Alert players that they are starting the round
window.alert("Welcome to Robot Gladiators");

//Subtract the value of playerAttack from the value of enemyHealh and use that result to update the value in the enemyHealth variable
enemyHealth = enemyHealth - playerAttack;


//Log a resulting message to the console so we know that it worked. 
console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
)

// Subtract the value of enemyAttack form the value of playerHealth and use that result to update the value in playerHealth varialble
playerHealth = playerHealth - enemyAttack;


// Log a resulting message to the console so we know that it worked. 
console.log(
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
)




};

fight();

=======
var playerMoney = 10;


var enemyNames = ['Roborto', 'Amy Android', 'Robo Trumble'];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);


var fight = function(enemyName) {
    while(playerHealth > 0 && enemyHealth > 0) {
var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

// if player chooses to skip
if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    // if yes (true), leave fight
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        // subtract money from playerMoney for skippihng
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
        break;
    }
}
    enemyHealth = enemyHealth - playerAttack;
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );

    // Check ememy health
if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");

    playerMoney = playerMoney + 20;
    break;
}
else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
}
// Subtract the value of enemyAttack form the value of playerHealth and use that result to update the value in playerHealth varialble
playerHealth = playerHealth - enemyAttack;
// Log a resulting message to the console so we know that it worked. 
console.log(
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
);
// check player's health
if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
    break;
}
else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
}
}
};
// function to start a new game
var startGame = function() {
    // reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
for(var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
        var pickedEnemyName = enemyNames[i];
        enemyHealth = 50;
        fight(pickedEnemyName);
    }
else {
    window.alert("You have lost your robot in battle! Game Over!");
    break;
        }
    }
// fucntion to end the enitre game
var endGame = function() {
    // if player is still alive, player wins!
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    }
    else {
        window.alert("You've lost your robot in battle.");
    }

    window.alert("The game has now ended . Let's see how you did.");
}
endGame();
// ask player if they'd like to play again 
var playAgainConfirm = window.confirm("Would you like to play again?");
    if (playAgainConfirm) {
        //restart the game
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
    startGame();
};

// start the game when the page loads
startGame();
>>>>>>> develop
