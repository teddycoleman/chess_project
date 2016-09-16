function Game(){
	this.board = new Board();
	this.scoreBoard = new scoreBoard();

	this.checkMoveForSolution = function(piece, square){
		for (key in this.board.solution[this.board.moveCounter]){
			if (square == this.board.solution[this.board.moveCounter][key].newSquare && piece == key){
				this.board.moveCounter += 1;
				console.log('thats the correct move');
				return true;
			}
			else{
				console.log('thats wrong!');
				return false;
			}
		}
	}
	this.movePiece = function(oldSquare, newSquare){
		this.board.pieceLocations[newSquare] = this.board.pieceLocations[oldSquare];
		this.board.pieceLocations[oldSquare] = null;
		this.board.pieceLocations[newSquare].square = newSquare;
		if(Object.keys(this.board.solution).length > 0){
			this.checkMoveForSolution(this.board.pieceLocations[newSquare].name,newSquare);
		}
		this.board.squareSelected = "";
		this.board.targetSquare = "";
	}	
}

function Board(){
	this.pieceLocations = {};
	this.solution = {};
	this.moveCounter = 1;
	this.squareSelected = "";
	this.targetSquare = "";
	this.createBoardLayout = function(layout){
		for (keys in layout.initialSetup){
			var piece = new Piece(layout.initialSetup[keys].type,layout.initialSetup[keys].color,layout.initialSetup[keys].square, keys);
			this.pieceLocations[layout.initialSetup[keys].square] = piece;
		}
		this.solution = layout.sequenceOfMoves;
	}
	this.clearBoard = function(){
		this.pieceLocations = {};
		this.solution = {};
		this.moveCounter = 1;
		this.squareSelected = "";
		this.targetSquare = "";
	}
}

function Piece(type, color, square, name){
	this.type = type;
	this.color = color;
	this.square = square;
	this.name = name;
}

function scoreBoard(){
	this.score = 0; 
	this.notation = {};
	this.displayNotation = function(){
		//TO DO when implementing front end
	}
	this.displayScore = function(){
		//TO DO when implenenting front end
	}
	this.resetNotation = function(){
		this.notation = {};
	}
	this.updateNotation = function(moveCounter, move){
		this.notation[moveCounter] = move;
	}
	this.addScore = function(){
		this.score += 1; 
	}
	this.resetScore = function(){
		this.score = 0; 
	}
}


var game = new Game();
game.board.createBoardLayout(puzzle1);
game.board.squareSelected = 'square_b7'
game.board.targetSquare = 'square_e7'
game.movePiece(game.board.squareSelected,game.board.targetSquare);
game.board.clearBoard();
game.board.createBoardLayout(puzzle2);
game.board.squareSelected = 'square_a1'
game.board.targetSquare = 'square_a7'
game.movePiece(game.board.squareSelected,game.board.targetSquare);
game.board.squareSelected = 'square_a7'
game.board.targetSquare = 'square_a8'
game.movePiece(game.board.squareSelected,game.board.targetSquare);

