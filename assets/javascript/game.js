/*
// Created: July 4, 2017 5:55 AM
// Author: Jonathan Gryn
// Revisions: Jon (7/4/17) - Added JS
//            Jon (7/5/17) - Trying to figure out why the characters aren't working
*/

// ----- Global Variables ----- //

// Has the user selected their character
var characterSelected = false;

// Has the user selected the defender
var defenderSelected = false;

// Variable to store the user's chosen character
var character = {};

// Variable to store the chosen enemy
var defender = {};

// Number of enemies defeated
var enemiesDefeated = 0;

// Boolean to indicate whether or not the game is over
gameOver = false;

// ----- Character Objects ----- //

var obiWanKenobi = {
  name: "Obi-Wan Kenobi",
  health: 120,
  baseAttack: 8,
  attack: 8
};

var lukeSkywalker = {
  name: "Luke Skywalker",
  health: 100,
  baseAttack: 5,
  attack: 5
};

var darthSidious = {
  name: "Darth Sidious",
  health: 150,
  baseAttack: 20,
  attack: 20
};

var darthMaul = {
  name: "Darth Maul",
  health: 180,
  baseAttack: 25,
  attack: 25
};

// ----- Helper Functions ----- //

// This function will initialize the character value from the global object variables defined above
function initializeCharacter(chosenCharacter) {
  character.name = chosenCharacter.name;
  character.health = chosenCharacter.health;
  character.baseAttack = chosenCharacter.baseAttack;
  character.attack = chosenCharacter.attack;
}

// This function will initialize the enemy's value from the global object variables defined above
function initializeDefender(chosenDefender) {
  defender.name = chosenDefender.name;
  defender.health = chosenDefender.health;
  defender.baseAttack = chosenDefender.baseAttack;
  defender.attack = chosenDefender.attack;
}

// This function will move the remaining characters to the enemies section
function moveToEnemies() {
  $(".available-character").removeClass("available-character").addClass("enemy-character");
  $("#enemies-available").append($(".enemy-character"));
}

// This function will reset the state of the game
function resetGame() {
  // Reset all the health values to the original
  $("#obi-wan-kenobi-character").children(".health").html(obiWanKenobi.health);
  $("#luke-skywalker-character").children(".health").html(lukeSkywalker.health);
  $("#darth-sidious-character").children(".health").html(darthSidious.health);
  $("#darth-maul-character").children(".health").html(darthMaul.health);

  $(".character-image").removeClass("chosen-character enemy-character defender-character").addClass("available-character");
  var available = $(".available-character").show();
  $("#characters-available").html(available);

  $("#game-message").empty();
  $("#restart").hide();

  characterSelected = false;
  defenderSelected = false;
  enemiesDefeated = 0;
  gameOver = false;

  character = {};
  defender = {};
}

// ----- Main Routine ----- //

// Run Javascript when the HTML has finished loading
$(document).ready(function() {

  // Hide the "Restart" button on document load
  $("#restart").hide();

  // Determine which character the user has clicked
  $("#obi-wan-kenobi-character").on("click", function () {
    console.log("Obi-Wan Kenobi is selected");

    // User is choosing the character
    if(characterSelected == false) {
      $("#game-message").empty();

      // Set the user's character
      initializeCharacter(obiWanKenobi);
      characterSelected = true;

      // Display the chosen character
      $("#obi-wan-kenobi-character").removeClass("available-character").addClass("chosen-character");
      $("#chosen-character").append(this);

      // Move the remaining characters to the enemies section
      moveToEnemies();
    } else if ((characterSelected == true) && (defenderSelected == false)) {
      // User is choosing the defender
      if($("#obi-wan-kenobi-character").hasClass("enemy-character")) {
        $("#game-message").empty();

        // Set the user's enemy
        initializeDefender(obiWanKenobi);
        defenderSelected = true;

        // Add the character to the defender section
        $("#obi-wan-kenobi-character").removeClass("enemy-character").addClass("defender-character");
        $("#defender-section").append(this);
      }
    }
  });

  $("#luke-skywalker-character").on("click", function () {
    console.log("Luke Skywalker is selected");

    // User is choosing the character
    if(characterSelected == false) {
      $("#game-message").empty();

      // Set the user's character
      initializeCharacter(lukeSkywalker);
      characterSelected = true;

      // Display the chosen character
      $("#luke-skywalker-character").removeClass("available-character").addClass("chosen-character");
      $("#chosen-character").append(this);

      // Move the remaining characters to the enemies section
      moveToEnemies();
    } else if ((characterSelected == true) && (defenderSelected == false)) {
      // User is choosing the defender
      if($("#luke-skywalker-character").hasClass("enemy-character")) {
        $("#game-message").empty();

        // Set the user's enemy
        initializeDefender(lukeSkywalker);
        defenderSelected = true;

        // Add the character to the defender section 
        $("#luke-skywalker-character").removeClass("enemy-character").addClass("defender-character");
        $("#defender-section").append(this);
      }
    }
  });

  $("#darth-sidious-character").on("click", function () {
    console.log("Darth Sidious is selected");

    // User is choosing the character
    if(characterSelected == false) {
      $("#game-message").empty();

      // Set the user's character
      initializeCharacter(darthSidious);
      characterSelected = true;

      // Display the chosen character
      $("#darth-sidious-character").removeClass("available-character").addClass("chosen-character");
      $("#chosen-character").append(this);

      // Move the remaining characters to the enemies section
      moveToEnemies();
    } else if ((characterSelected == true) && (defenderSelected == false)) {
      // User is choosing the defender
      if($("#darth-sidious-character").hasClass("enemy-character")) {
        $("#game-message").empty();

        // Set the user's enemy
        initializeDefender(darthSidious);
        defenderSelected = true;

        // Add the character to the defender section 
        $("#darth-sidious-character").removeClass("enemy-character").addClass("defender-character");
        $("#defender-section").append(this);
      }
    }
  });

  $("#darth-maul-character").on("click", function () {
    console.log("Darth Maul is selected");

    // User is choosing the character
    if(characterSelected == false) {
      $("#game-message").empty();

      // Set the user's character
      initializeCharacter(darthMaul);
      characterSelected = true;

      // Display the chosen character
      $("#darth-maul-character").removeClass("available-character").addClass("chosen-character");
      $("#chosen-character").append(this);

      // Move the remaining characters to the enemies section
      moveToEnemies();
    } else if ((characterSelected == true) && (defenderSelected == false)) {
      // User is choosing the defender
      if($("#darth-maul-character").hasClass("enemy-character")) {
        $("#game-message").empty();

        // Set the user's enemy
        initializeDefender(darthMaul);
        defenderSelected = true;

        // Add the character to the defender section 
        $("#darth-maul-character").removeClass("enemy-character").addClass("defender-character");
        $("#defender-section").append(this);
      }
    }
  });

  $("#attack").on("click", function() {
    console.log("Attack selected");

    console.log("character = " + JSON.stringify(character));
    console.log("defender = " + JSON.stringify(defender));

    // User is ready to attack the defender
    if (characterSelected && defenderSelected && !gameOver) {
      // User attacks the defender and decreases the defender's health points
      defender.health = defender.health - character.attack;
      $(".defender-character").children(".health").html(defender.health);
      $("#game-message").html("<p>You attacked " + defender.name + " for " + character.attack + " damage.<p>");

      // User's attack power increases
      character.attack = character.attack + character.baseAttack;

      // If defender is still alive, they counter attack the user
      if (defender.health > 0) {
        character.health = character.health - defender.baseAttack;
        $(".chosen-character").children(".health").html(character.health);

        // Check if the user survives the attack
        if (character.health > 0) {
          $("#game-message").append("<p>" + defender.name + " attacked you back for " + defender.baseAttack + " damage.</p>");
        } else {
          gameOver = true;
          $("#game-message").html("<p>You were defeated... womp womp...</p><p>Play again?</p>");
          $("#restart").show();
        }
      } else {
        // Defender is defeated
        enemiesDefeated++;
        defenderSelected = false;
        $("#game-message").html("<p>You have defeated " + defender.name + ". Choose another enemy.</p>");
        $(".defender-character").hide();

        // Check if the user has won the game
        if (enemiesDefeated === 3) {
          gameOver = true;
          $("#game-message").html("<p>You have won the game!!!</p><p>Play again?</p>");
          $("#restart").show();
        }
      }
    } else if (!characterSelected && !gameOver) {
      $("#game-message").html("<p>You must first select your game character.</p>");
    } else if (!defenderSelected && !gameOver) {
      $("#game-message").html("<p>You must choose an enemy to fight.</p>");
    }

    console.log("character = " + JSON.stringify(character));
    console.log("defender = " + JSON.stringify(defender));
  });

  $("#restart").on("click", function() {
    console.log("Restart selected");

    resetGame();
  });

}); // Main routine

//Overall game is stored in object
// Game play object houses all function and additional variables of the game
// function reset () {
//   window.gameObj = {

//   	// Initializing the attack button to false will set it to true later on
//   	attackOccurred: false,
//   	winOccurred: false,
//   	lossOccurred: false,
//   	wounded: false,
//   	gameOver: false,
//   	jediMaster: false,
//   	characterArrayList: [

//   	// 1. An array or object of possible characters properties would include
//   	// Name, Picture, Health Points, Attack Power and Counter Attack Power

//   	{
//   	  name: 'Luke Skywalker',
//   	  visual: 'assets/images/luke.jpg',
//   	  healthPoints: 160,
//   	  attackPower: 10,
//   	  counterAttackPower: 20,
//   	},
//   	{
//   	  name: 'Yoda',
//   	  visual: 'assets/images/yoda.jpg',
//   	  healthPoints: 130,
//   	  attackPower: 15,
//   	  counterAttackPower: 30,
//   	},
//   	{
//   	  name: 'Less Ray',
//   	  visual: 'assets/images/lessray.jpg',
//   	  healthPoints: 180,
//   	  attackPower: 7,
//   	  counterAttackPower: 15,
//   	},
//   	{
//   	  name: 'Darth Vader',
//   	  visual: 'assets/images/darth.jpg',
//   	  healthPoints: 180,
//   	  attackPower: 15,
//   	  counterAttackPower: 25,
//   	},
//   	{
//   	  name: 'Kylo Wren',
//   	  visual: 'assets/images/kylowren.jpg',
//   	  healthPoints: 110,
//   	  attackPower: 12,
//   	  counterAttackPower: 20,
//   	},
//   	{
//   	  name: 'Darth Maul',
//   	  visual: 'assets/images/darthmaul.jpg',
//   	  healthPoints: 100,
//   	  attackPower: 12,
//   	  counterAttackPower: 24,
//   	}

//   	// {
//   	//   name: 'Obi-Wan Kanobi',
//   	//   visual: 'assets/images/obiwan.jpg',
//   	//   healthPoints: 120,
//   	//   attackPower: 10,
//   	//   counterAttackPower: 24,
//   	// },
//   	// {
//   	//   name: 
//   	//   visual: 'assets/images/bobafett.jpg',
//   	//   healthPoints: 90,
//   	//   attackPower: 25,
//   	//   counterAttackPower: 26,
//   	// }
//   	],

//   	  // Initializes game start true
//   	  gameStart: true,

//   	  // Initializes your character to nothing
//   	  yourCharacter: null,

//   	  // Initializes enemy selection to nothing
//   	  currentEnemy: null,

//   	  // Initializes your blank array of previously fought enemies but might remove all together
//   	  previouslyFought: [],

//   	  // Sets current attack power to null
//   	  yourCurrentAttackPower: null,
//   	  winOccurred: false,

//   	  // Creates an array of battle sounds
//   	  battleSoundsArray: ['assets/audio/saberclash.mp3', 'assets/audio/saberclash1.mp3', 'assets/audio/saberclash2.mp3', 'assets/audio/saberclash3.mp3', 'assets/audio/saberclash4.mp3', 'assets/audio/saberclash5.mp3', 'assets/audio/saberclash6.mp3', 'assets/audio/spin1.mp3', 'assets/audio/spin2.mp3', 'assets/audio/spin3.mp3', 'assets/audio/spin4.mp3', 'assets/audio/spin5.mp3', 'assets/audio/spin6.mp3', 'assets/audio/swing1.mp3', 'assets/audio/swing2.mp3', ],
//   	  characterSelectSounds: 'assets/audio/saberon.mp3',

//   	  // Picks at random battle sound when the attack button is pressed
//   	  battleSoundPick: function() {
//   	  	return this.battleSoundsArray[Math.floor(Math.Random() * this.battleSoundsArray.length)];
//   	  },
//   }
// };

// // STAGE 1: Initial Setup/Display
// $(document).ready(function() {
//   reset();

//   // Gets the link for the theme song to be play in the background
//   var audioElement = document.createElement('audio');
//   audioElement.autoplay = true;
//   audioElement.loop = true;
//   audioElement.setAttribute('src', 'assets/audio/starwars.m4a');

//   // Displays the modal
//   $('#myModal').modal('show');

//   function render() {

//     // Setting variables set to id tags with HTML elements for easy reference later
//     // Using the $ before variables indicates that they are jQuery objects, it doesn't affect performance of the variables
//     var $charList = $('#characterList');
//     var $enemyList = $('#enemyList');
//     var $yourCharacter = $('#yourCharacter');
//     var $attackText = $('#attackText');
//     var $yourEnemy = $('#yourEnemy');
//     var $winText = $('#attackText');
//     var $lossText = $('#attackText');
//     // var $wounded = $('#attackText');
//     var $gameOver = $('#gameOver');
//     var $jediText = $('#attackText');

//     // Using underscore.js to create templates that are dynamically updated
//     var $charTemplate = _.template($('#characterTmpl').html());
//     var $attackTemplate = _.template($('#attackTmpl').html());
//     var $winTemplate = _.template($('#winTmpl').html());
//     var $lossTemplate = _.template($('#lossTmpl').html());
//     var $jediTemplate = _.template($('#jediTmpl').html());
//     var $soundTemplate =

//     // Haven't selected Character
//     $charHtml.html("");    
//     $yourCharacter.html("");
//     $yourEnemy.html("");
//     $attackText.html("");
//     $gameOver.html("");

//     // Using a ternary operator to give true or false to the backgorund color choice
//     var listBg = gameObj.yourCharacter ? "bg-black" : "bg-white";

//     // Sets the initial screen with character to select from
//     gameObj.characterArrayList.forEach(function(character, index) {
//       charHtml = charHtml + $charTemplate({index: index, background: listBg, character: character});
//     });
//     if (gameObj.yourCharacter) {
//       $yourCharacter.html($charTemplate({index: 0, background: 'bg-white', character: gameObj.yourCharacter}));

//       // Re-write in jQuery
//       $enemyList.html(charHtml);
//       $charList.html("");

//     } else {
//       $charList.html(charHtml);
//       $enemyList.html("");
//     } if(gameObj.currentEnemy) {
//       $yourEnemy.html($charTemplate({index: 0, background: 'bg-red', character: gameObj.currentEnemy}));
//     } if(gameObj.attackOccurred) {
//       $attackText.html($attackTemplate({gameObj: gameObj}));
//     }

//     // Added
//     if(gameObj.winOccurred) {

//       // Displays the win text
//       $winText.html($winTemplate({lastOpponent: gameObj.lastOpponent}));

//       // Removes the enemy character after you win.
//       $('#yourEnemy').empty(gameObj.currentEnemy);
//     } if(gameObj.lossOccurred) {

//       // Displays loss text
//       $lossText.html($lossTemplate({gameObj: gameObj}));
//     }

//     // This runs when the enemy is wounded (hp less than zero)
//     if (gameObj.wounded) {
//       $('#attackText').html("You are seriously wounded. GAME OVER!");
//     }

//     // This runs if the user losses
//     if (gameObj.gameOver) {

//       // Creates the reset button to start the game over
//       var b = $('<button>');
//       b.addClass('btn-primary waves-effect waves-ligth btn-lg');
//       b.html('Battle Again!');
//       reset();

//       b.click(render);
//       $('#gameOver').append(b);
//     } if(gameObj.jediMaster) {

//     	// Displays final text
//     	$jediText.html($jediTemplate({lastOpponent: gameObj.lastOpponent}));
//     	$('#yourEnemy').empty(gameObj.currentEnemy);

//     	// Creates the reset button to start the game over
//     	var b = $('<button>');
//     	b.addClass('btn-primary waves-effect waves-light btn-lg');
//     	b.html('Battle Again!');
//     	reset();

//     	b.click(render);
//     	$('#gameOver').append(b);
//     }
// }

// // STAGE 2: Selecting your character
//   $('.characterContainer').on('click', /*'.characterContainer',*/ function(e) {

//   	// Pause current audio to allow for battle sounds
//   	audioElement.pause();

//   	  // TO DO: Set the AUDIO to saberon.mp3

//   	// Reference the characterList
//   	var element = $(this);
//   	var charIndex = element.data('character-index');

//   	// Your character was initially set as null so when your character != null this if runs
//   	if(!gameObj.yourCharacter) {

//   		// Pushes your object selection into yourCharacter array
//   		gameObj.yourCharacter = gameObj.characterArrayList.splice(charIndex, 1)[0];

//   		// Setting initial attack power to the value within the master object
//   		gameObj.yourCurrentAttackPower = gameObj.yourCharacter.attackPower;
//   	}

//   	// This renders and updates all of the HTML elements
//   	render();

//   	// Adds a sound to selecting character
//   	var $audioCharacter = document.createElement('audio');
//   	  $audioCharacter.setAttribute('src', gameObj.characherSelectSound);
//   	  $audioCharacter.play();
//   });

//   // STAGE 3: Select your enemy
//   $('#enemyList').on('click', '.characterContainer', function(e) {
//   	var element = $(this);
//   	var charIndex = element.data('character-index');

//   	// Current enemy was initially set as null so when your enemy != this if runs
//   	if (!gameObj.currentEnemy) {

//   		// Creates an array that houses the enemy character
//   		gameObj.winOccurred = false;

//   		// Sets the attack button to false ensuring the attack text is not displayed when selecting a new character and only after
//   		// ...click attack
//   		gameObj.attackOccurred = false;
//   	gameObj.currentEnemy = gameObj.characterArrayList.splice(charIndex, 1)[0]
//   	}

//   	// This renders and updates all of the HTML elements
//   	render();

//   	// Adds a sound to selecting character
//   	var $audioCharacter = document.createElement('audio');
//   	  $audioCharacter.setAttribute('src', gameObj.characherSelectSound);
//   	  $audioCharacter.play()
//   });

//   // STAGE 4: GAME PLAY. Click on Attack
//   $('#attackBtn').on('click', function(e) {

//   	// This ensure you cannot click any other characters again
//   	if (!gameObj.yourCharacter || !gameObj.currentEnemy) {
//   	  $('#attackText').html('No enemy here, select an enemy to fight.')
//   	  return;
//   	}

//   	gameObj.attackOccured = true;

//   	// Declaring new variables
//   	var yourCharacter = gameObj.yourCharacter;
//   	var currentEnemy = gameObj.currentEnemy;

//   	// Increment yourAttackPower by yourCharacter.attackPower
//   	gameObj.yourCurrentAttackPower = gameObj.yourCurrentAttackPower + yourCharacter.attackPower;

//   	// Decrease enemy health points by yourAttackPower state
//   	currentEnemy.healthPoints = currentEnemy.healthPoints - gameObj.yourCurrentAttackPower;

//   	// Decrease your health points by enemy's counterAttackPower
//   	yourCharacter.healthPoints = yourCharacter.healthPoints - currentEnemy.counterAttackPower;
//   	console.log ("enemy health points: " + currentEnemy.healthPoints + ' your health: ' + yourCharacter.healthPoints);

//   	var $audioBattle = document.createElement('audio');
//   	  $audioBattle.setAttribute('src', gameObj.battleSoundPick());
//   	  $audioBattle.play();

//   	// Win scenario
//   	// Set win variable and loss in order to consolidate win ifs.
//   	var win = (currentEnemy.healthPoints < 1 && yourCharacter.healthPoints > 1 ||
//   		((yourCharacter.healthPoints < 1 && currentEnemy.healthPoints < 1) &&
//   		(yourCharacter.healthPoints > currentEnemy.healthPoints))
//     ) ? true: false;

//     // First if is only if user has defeated all of the enemies
//     if (win) {
//       console.log('healthPoints of enemy should be equal to/greater than or equal to 0: ' + currentEnemy.healthPoints);
//         if(gameObj.characterArrayList.length > 0) {
//         	console.log(gameObj.characterArrayList.length);
//         	gameObj.winOccurred = true;

//         	// Need to be able to select another enemy
//         	gameObj.lastOpponent = gameObj.currentEnemy;
//         	gameObj.currentEnemy = null;

//         	// Need to figure out how to show another error when your character points are less 0. Show error "you are seriously wounded. GAME OVER"
//         	// if(yourCharacter.healthPoints =< 0) {
//         	//   gameObj.wounded = true;
//         	//   // gameObj.winOccurred = false;
//         	// }

//         }

//         // Scenario when you have defeated all characters
//         else if (gameObj.characterArrayList.length == 0) {
//           console.log('Final Jedi Portion ' + gameObj.characterArrayList.length);
//           gameObj.lastOpponent = gameObj.currentEnemy;
//           gameObj.attackOccurred = false;
//           gameObj.jediMaster = true;

//         }
//      }

//      // Loss Scenario

//      else if(loss) {
//        gameObj.lossOccurred = true;
//        console.log('Entered the loss occurred section');
//        gameObj.attackOccurred = false;
//        gameObj.gameOver = true;
//      }

//      render();

//    });

//   /* render(); */

// });

// 4. add the 'No enemy here' text when attack button is clicked
// 6. figure out how to implement the  'wounded' piece
// -Look at changing the font to more readable
// Add bootstrap class to change the hover state of characters
// makeimg bigger to strecth entire character and make text white

// Improvements to make
// Update the images to not show the background colors and spread across entire div
// change text color to white and bold and then overlay over the image
// change the positioning so that it flows better