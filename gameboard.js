
let randomColor = function (colors) {
	let keys = Object.keys(colors);
	return colors[keys[keys.length * Math.random() << 0]];
}

function Gameboard(){
	this.name = "Gameboard";
	this.COLORS = {
		RED: "#FF0000",
		GREEN: "#00FF00",
		BLUE: "#0000FF",
		PURPLE: "#FF00FF",
		YELLOW: "#FFFF00",
		WHITE: "#FFFFFF"
	};
	/*
	 * Row example:
	 * - guess: [RED, GREEN, BLUE, WHITE]
	 * - pegs: [RED, WHITE]
	*/
	this.rows = [{guess: [], pegs: []}];
	this.gameKey = Array.apply(null, Array(4)).map(() => { return randomColor(this.COLORS)});
}

Gameboard.prototype.draw = function () {
	var c = document.getElementById("game");
	var ctx = c.getContext("2d");
	clearGameboard(ctx);

	for(var rowIndex = 0; rowIndex < this.rows.length; rowIndex++) {
		//Iterate through guesses
		for(var i = 0; i < this.rows[rowIndex].guess.length; i++) {
			//Get guess color
			ctx.fillStyle=this.rows[rowIndex].guess[i];
			//Rectangle shape
			ctx.fillRect(i*50 + 8, rowIndex*30 + 18, 34, 14);
			//Draws a circle if preferred
			// ctx.strokeStyle = "#333333";
			// ctx.beginPath();
			// ctx.arc((this.coord.x*50+25),(this.coord.y*30+15),10,0,2*Math.PI);
			// ctx.stroke();
		}
		//Iterate through pegs
		for(var i = 0; i < this.rows[rowIndex].pegs.length; i++) {
			//TODO, sorta the same thing, but with the pegs
		}
	}
	console.log("Board is drawn");
	console.log(this.rows);
	console.log(this.gameKey);
}

Gameboard.prototype.getLatestRow = function() {
	return this.rows[this.rows.length - 1];
}

Gameboard.prototype.addGuess = function(colorIndex) {
	let keys = Object.keys(this.COLORS);
	this.rows[this.rows.length - 1].guess.push(this.COLORS[keys[colorIndex]]);
}

Gameboard.prototype.calculatePegs = function () {
	//TODO
	//do what the mastermind game does, look at the latest guesses and place red and white pegs accordingly
	return [this.COLORS.WHITE, this.COLORS.RED];
}

Gameboard.prototype.advanceRows = function () {
	this.rows[this.rows.length - 1].pegs = this.calculatePegs();
	this.rows.push({guess: [], pegs: []});
}

Gameboard.prototype.hasWon = function () {
	//TODO
	//Does latest row match gameKey???
	return false;
}

Gameboard.prototype.drawWinScreen = function () {
	var c = document.getElementById("game");
	var ctx = c.getContext("2d");
	clearGameboard(ctx);
	drawKeys(ctx);
	ctx.fillStyle="#FFFFFF";
	ctx.font = "80px Arial";
	ctx.strokeText("YOU WON!", 20, 300); 
}

Gameboard.prototype.drawTextScreen = function (textToDraw) {
	var c = document.getElementById("game");
	var ctx = c.getContext("2d");
	clearGameboard(ctx);
	ctx.fillStyle="#FFFFFF";
	ctx.font = "40px Arial";
	ctx.strokeText(textToDraw, 20, 150);
	ctx.font = "25px Arial";
	ctx.strokeText("Space to continue", 40, 200);
}

function clearGameboard(ctx) {
	//Clear and fill with black
	ctx.clearRect(0,0,500,350);
	ctx.fillStyle="#000000";
	ctx.fillRect(0,0,500,350);
}
