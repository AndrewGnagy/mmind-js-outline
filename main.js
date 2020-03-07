let gameboard = {};

function startGame(){
	inputEngine.registerEvents();
	gameboard = new Gameboard();
	gameboard.draw();
}

function action(){
	console.log("ACTION!")
	if(gameboard.hasWon()){
		gameboard.drawWinScreen();
		return;
	} else if (gameboard.getLatestRow().guess.length < 4) {
		//Do nothing?
	} else {
		gameboard.advanceRows();
	}
	gameboard.draw();
}

$(function() {
	startGame();
});
