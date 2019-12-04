var document = document;

/* Player is initiated gobaled as all function use player and modify it. */
var player = {handState: null, wins: 0, games: 0};
var com = {handState: null};

// Document elements
var imageArray = ["images/foot.jpg", "images/cockroach.png", "images/nuke.jpg", "images/fist.jpg", "images/fistm.jpg"];
var playerimg = document.getElementById("playerimg");
var comimg = document.getElementById("comimg");
var panel = document.getElementById("panel");
var before = document.getElementById("containerbefore");
var next = document.getElementById("container");
var startbtn1div = document.getElementById("startbutton1");
var startbtn2div = document.getElementById("startbuttons2");
var gamebtns = document.getElementById("gameButtons");

// Buttons
var footbtn = document.getElementById("footbtn");
var cockroachbtn = document.getElementById("cockroachbtn");
var nukebtn = document.getElementById("nukebtn");
var startbtn = document.getElementById("start");
var b2Startbtn = document.getElementById("backbtn");
var resetbtn = document.getElementById("resetbtn");
var newGamebtn = document.getElementById("newGamebtn");
var conbtn = document.getElementById("continue");


function play(state) {
    /* Arrays handStateArray and imageArray are used to take the handState 
    number and make it back into the relevent string. Makes the game logic 
    simpler to code (player number vs computer number instead of word 
    comparison) */
    
    "use strict";
    var handStateArray = ["foot", "cockroach", "nuke"];
    
    // A single delay for the whole play function
    setTimeout(function () {
        com.handState = Math.floor(Math.random() * 3);
    // player win, if the player number is 1 below or 2 above, player wins.
    // I did this logic in reverse, just to manipulate the player answer not
    // not the computer's.
        if ((state + 1 === com.handState) || (state - 2 === com.handState)) {
            playerimg.src = imageArray[state];
            comimg.src = imageArray[com.handState];
            player.wins += 1;
            player.games += 1;
            panel.innerHTML = "You chose " + handStateArray[state] + " and your opponent chose " + handStateArray[com.handState] + "!<br>You Win!<br>You have won " + player.wins + " times out of " + player.games + " games!";
    
    // draw, if the two choices are the same.
        } else if (player.handState === com.handState) {
            playerimg.src = imageArray[state];
            comimg.src = imageArray[com.handState];
            player.games += 1;
            panel.innerHTML = "You chose " + handStateArray[state] + " and your opponent chose " + handStateArray[com.handState] + "!<br>You Win!<br>You have won " + player.wins + " times out of " + player.games + " games!";
    
        // player lose, if all conditions fail.
        } else {
            playerimg.src = imageArray[state];
            comimg.src = imageArray[com.handState];
            player.games += 1;
            panel.innerHTML = "You chose " + handStateArray[state] + " and your opponent chose " + handStateArray[com.handState] + "!<br>You Win!<br>You have won " + player.wins + " times out of " + player.games + " games!";
        }
        gamebtns.style.display = "inline";
    }, 200);
}

// Event functions that give player.handstate values
function foot() {
    "use strict";
    player.handState = 0;
    play(player.handState);
}

function cockroach() {
    "use strict";
    player.handState = 1;
    play(player.handState);
}

function nuke() {
    "use strict";
    player.handState = 2;
    play(player.handState);
}

// Start and back functions that switch displays
function start() {
    "use strict";
    before.style.display = "none";
    next.style.display = "block";
}

function back() {
    "use strict";
    before.style.display = "block";
    next.style.display = "none";
    startbtn1div.style.display = "none";
    startbtn2div.style.display = "block";
}

// resets game state
function resetScore() {
    "use strict";
    player.handState = null;
    player.games = 0;
    player.wins = 0;
    com.handState = null;
    panel.innerHTML = "";
    playerimg.src = imageArray[3];
    comimg.src = imageArray[4];
    gamebtns.style.display = "none";
}

// New game from the 'menu' screen
function newGame() {
    "use strict";
    resetScore();
    start();
}

//button events
conbtn.addEventListener("click", start, false);
resetbtn.addEventListener("click", resetScore, false);
newGamebtn.addEventListener("click", newGame, false);
startbtn.addEventListener("click", start, false);
footbtn.addEventListener("click", foot, false);
cockroachbtn.addEventListener("click", cockroach, false);
nukebtn.addEventListener("click", nuke, false);
b2Startbtn.addEventListener("click", back, false);