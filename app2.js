//Declare game as the single global variable
var game;

/*
Game object is parent to both the board and the scoreboard.
Game object takes care of listening to the actions of the player and then
manipulating the board and scoreboard.
*/
function Game(){
	this.board = new Board();
	this.scoreBoard = new ScoreBoard();
	//Evaluate to see if the user's move matches the solution code
	this.checkMoveForSolution = function(piece, square){
		for (key in this.board.solution[this.board.moveCounter]){
			if (square == this.board.solution[this.board.moveCounter][key].newSquare && piece == key){
				this.scoreBoard.addScore(true);
			}
			else{
				this.scoreBoard.addScore(false);
			}
		}
	}
	//Move a piece based on the squares that the move the user has chosen
	this.movePiece = function(oldSquare, newSquare){
		//Do nothing if user drops piece on the original square
		if(oldSquare != newSquare ){
			this.movePieceInLocationsObject(oldSquare, newSquare);
			this.movePieceInDOM(oldSquare, newSquare);
			//Append move to the notation object and display
			this.scoreBoard.updateNotation({
				moveCounter: this.board.moveCounter,
				piece: this.board.pieceLocations[newSquare].name,
				oldSquare: oldSquare,
				newSquare: newSquare,
				color: this.board.pieceLocations[newSquare].color
			});
			this.scoreBoard.displayNotation(this.board.moveCounter);
			//increase move counter and reset selections
			this.board.moveCounter += 1;
		}
		this.board.squareSelected = "";
		this.board.targetSquare = "";
	}

	this.movePieceInLocationsObject = function (oldSquare, newSquare){
		this.board.pieceLocations[newSquare] = this.board.pieceLocations[oldSquare];
		this.board.pieceLocations[oldSquare] = null;
		this.board.pieceLocations[newSquare].square = newSquare;
		if(Object.keys(this.board.solution).length > 0){
			this.checkMoveForSolution(this.board.pieceLocations[newSquare].name,newSquare);
		}
	}
	//append piece to the DOM, remove a piece that's already there
	this.movePieceInDOM = function(oldSquare, newSquare){
		if($("#" + newSquare).children()[0]){
			$("#" + newSquare).children()[0].remove();
			$("#" + newSquare).append($("#" + oldSquare).children()[0]);
		}
		else{
			$("#" + newSquare).append($("#" + oldSquare).children()[0]);
		}
	}

	//Loads next puzzle on button click in the screen
	this.loadNextPuzzle = function(){
		this.board.clearBoard();
		this.scoreBoard.resetNotation();
		if(puzzlesArray.length > 0){
			currentPuzzle = puzzlesArray.pop();
			this.board.createBoardLayout(currentPuzzle);
		}
		else{
			this.displayFinalResult();
		}
	}

	//Resets the game after user is done
	this.resetGame = function(){
		this.board.clearBoard();
		this.scoreBoard.resetScoreBoard();
		this.board.createBoardLayout(startingPosition);
		puzzlesArray = [puzzle1,puzzle2,puzzle3];
		$('.board').hide();
		$('.scoreBoard').hide();
		$('.result').hide();
		$('.instructions').show();
	}

	this.resetPuzzle = function(){
		this.board.clearBoard(true);
		this.scoreBoard.resetNotation();
		this.board.createBoardLayout(this.board.currentPuzzle);
	}

	//Displays final result for the game
	this.displayFinalResult = function(){
		$('.board').hide();
		$('.scoreBoard').hide();
		$('.result').show();
		$('.instructions').hide();
	}

	this.startGame = function(){
		$('.board').show();
		$('.scoreBoard').show();
		$('.result').hide();
		$('.instructions').hide();
	}
}

/* 
Board object contains all the squares and also contains the locations of 
all the pieces.  Can be cleared and used to set up new positions. 
*/
function Board(){
	this.pieceLocations = {};
	this.currentPuzzle = {};
	this.solution = {};
	this.moveCounter = 1;
	this.whiteToMove = true;
	this.squareSelected = "";
	this.targetSquare = "";
	this.drawSquares = function() {
		for(i = 0; i < 8; i++){
			var newChessRow = $("<div class='row'></div>") ;
			for(j = 0; j < 8; j++){	
				//create chess square div element
				var newChessSquare = $("<div class='square' ></div>");
				//assign row to id
				var squareLetter = String.fromCharCode(97 + j);
				//assign column to id
				var squareNumber = i + 1;
				//add id to the square
				$(newChessSquare).attr("id","square_" + squareLetter + squareNumber);
				// //add listeners for drag/drop
				$(newChessSquare).attr("ondrop","dropHandler(event)");
				$(newChessSquare).attr("ondragover","dragoverHandler(event)");
				$(newChessRow).append(newChessSquare);
			}
			$('.board').prepend(newChessRow);
		}
	}
	this.createBoardLayout = function(layout){
		this.currentPuzzle = layout;
		for (keys in layout.initialSetup){
			//Create piece and add it to the pieceLocations object
			var pieceName = layout.initialSetup[keys].color + layout.initialSetup[keys].type.charAt(0).toUpperCase() + layout.initialSetup[keys].type.slice(1);
			var piece = new Piece(layout.initialSetup[keys].type,layout.initialSetup[keys].color,layout.initialSetup[keys].square, pieceName);
			this.pieceLocations[layout.initialSetup[keys].square] = piece;
			//Create DOM element and add it to the parent square
			var pieceElement = $('<img src=' +piece.getImgForElement(piece.name)+' class="piece">'); 
			$(pieceElement).attr("draggable","true");
			$(pieceElement).attr("ondragstart","dragstartHandler(event)");
			$(pieceElement).attr("ondragend","dragendHandler(event)");
			var parent = $('#' + piece.square);
			$('#' + piece.square).append(pieceElement);
		}
		this.solution = layout.sequenceOfMoves;
		this.whiteToMove = layout.whiteToMove;
	}
	this.clearBoard = function(eraseCurrentPuzzleSwitch){
		this.eraseCurrentPuzzleSwitch = eraseCurrentPuzzleSwitch || false;
		if(eraseCurrentPuzzleSwitch){
			this.resetCurrentPuzzle = {};
		}
		this.pieceLocations = {};
		this.solution = {};
		this.moveCounter = 1;
		this.squareSelected = "";
		this.targetSquare = "";
		$(".piece").remove();
	}
}

//Piece object can be created and placed on the board
function Piece(type, color, square, name){
	this.type = type;
	this.color = color;
	this.square = square;
	this.name = name;

	this.getImgForElement =  function(pieceType){
		switch(pieceType) {
	    case "whiteKing":
	        return "img/Chess_klt60.png";
	        break;
	    case "whiteQueen":
	        return "img/Chess_qlt60.png";
	        break;
	    case "whiteRook":
	        return "img/Chess_rlt60.png";
	        break;
	    case "whiteBishop":
	        return "img/Chess_blt60.png";
	        break;
	    case "whiteKnight":
	        return "img/Chess_nlt60.png";
	        break;
	    case "whitePawn":
	        return "img/Chess_plt60.png";
	        break;
	    case "blackKing":
	        return "img/Chess_kdt60.png";
	        break;
	    case "blackQueen":
	        return "img/Chess_qdt60.png";
	        break;
	    case "blackRook":
	        return "img/Chess_rdt60.png";
	        break;
	    case "blackBishop":
	        return "img/Chess_bdt60.png";
	        break;
	    case "blackKnight":
	        return "img/Chess_ndt60.png";
	        break;
	    case "blackPawn":
	        return "img/Chess_pdt60.png";
	        break;
	    default:
	        console.log('error - could not convert piece');
		}
	}
}

/*
Scoreboard object maintains the score of the user's game AND
displays the move history that the user has played out
*/
function ScoreBoard(){
	this.score = {correctPuzzles: 0, badGuesses: 0}; 
	this.notation = {};
	this.displayNotation = function(moveCounter){
		//Handle if it's black's move first
		if(this.notation[moveCounter].color == 'black' && moveCounter == 1){
			$('#notationBody tr:last').after("<tr><td>1</td><td>...</td></tr>");
		}
		//Add a new row and # if it's white's move
		if(this.notation[moveCounter].color == 'white'){
			var moveNumber = Math.floor(moveCounter / 2) + 1;
			$('#notationBody tr:last').after("<tr><td>"+ moveNumber+"</td></tr>");
		}
		var notationElement = this.createNotationElement(moveCounter); 
		$('#notationBody tr:last').append("<td>"+ notationElement +"</td>");
	}
	//Function to handle edge cases in creating notation with pawns and knights
	this.createNotationElement = function(moveCounter){
		var pieceChar;
		if(this.notation[moveCounter].piece.slice(5) == "Pawn"){
			pieceChar = "";
		}
		else if (this.notation[moveCounter].piece.slice(5) == "Knight"){
			pieceChar = "N";
		}
		else{
			pieceChar = this.notation[moveCounter].piece.charAt(5);
		}
		return pieceChar + this.notation[moveCounter].newSquare.slice(-2);
	}
	//Function to display score on the scoreboard
	this.displayScore = function(){
		$('#score').text("Correct Moves : " + this.score.correctPuzzles);
		$('#misses').text("Misses : " + this.score.badGuesses);
		$('#finalScore').text("Correct Moves : " + this.score.correctPuzzles);
		$('#finalMisses').text("Misses : " + this.score.badGuesses);
	}
	this.updateNotation = function(moveObject){
		this.notation[moveObject.moveCounter] = {
			piece: moveObject.piece,
			newSquare: moveObject.newSquare,
			oldSquare: moveObject.oldSquare,
			color: moveObject.color
		};
	}
	this.addScore = function(correctMove){
		if(correctMove){
			this.score.correctPuzzles += 1; 
		}
		else{
			this.score.badGuesses += 1; 
		}
		this.displayScore();
	}
	this.resetNotation = function(){
		this.notation = {};
		$('tbody tr:gt(0)').remove();
	}
	this.resetScore = function(){
		this.score.correctPuzzles = 0; 
		this.score.badGuesses = 0;
		this.displayScore();
	}
	this.resetScoreBoard = function(){
		this.resetNotation();
		this.resetScore();
	}
}

function dragstartHandler(ev) {
	game.board.squareSelected = $(ev.target).parent().attr("id");
	ev.effectAllowed = "move";
}

function dragoverHandler(ev) {
	ev.preventDefault();
}

function dropHandler(ev) {
	ev.preventDefault();
	if($(ev.target).attr("class") == "square"){
		game.board.targetSquare = $(ev.target).attr("id");
	}
	else
	{
		game.board.targetSquare = $(ev.target).parent().attr("id");
	}
	game.movePiece(game.board.squareSelected,game.board.targetSquare);
}

function dragendHandler(ev) {
	//Nothing to do
}

function resetGameHandler(ev){
	game.resetGame();
}

function nextPuzzleHandler(ev){
	game.loadNextPuzzle();
}

function resetPuzzleHandler(ev){
	game.resetPuzzle();
}

function startGameHandler(ev){
	game.startGame();
}

function addEventListeners(){
	$('.resetGame').on("click",resetGameHandler);
	$('#resetPuzzle').on("click",resetPuzzleHandler);
	$('.nextPuzzle').on("click",nextPuzzleHandler);
	$('.startPuzzle').on("click",startGameHandler);
}

function gameInit(){
	game = new Game();
	game.board.drawSquares();
	addEventListeners();
	game.board.createBoardLayout(startingPosition);
	game.resetGame();
}

gameInit();
