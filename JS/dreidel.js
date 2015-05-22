//init game logic variables
var numPlayers = 0;
var numAi = 0;
var player1 = {};
var player2 = {};
var com1 = {};
var com2 = {};
var com3 = {};
var currentScreen = "splashscreen";

function goToScreen(screenId, originalScreen) {
	$("#splashscreen").hide();
	$("#game").hide();
	$("#options").hide();
	$("#about").hide();
	$("#customize").hide();
	document.getElementById("players").style.opacity = "0";
	console.log(screenId);
	document.getElementById(screenId).style.opacity = "100";
	$(originalScreen).hide();
	currentScreen = screenId;
}

function beginGame1p() {
	numPlayers = 1;
	goToScreen("players", "#splashscreen");
}

function beginGame2p() {
	numPlayers = 2;
	goToCustomize();
}

//loads game screens based on numPlayers
function displayCustomize() {
	if (numPlayers === 2) {
		//react accordingly to second player choices
		//(will do this later)
	}
}

