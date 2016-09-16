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
	this.checkMoveForSolution = function(piece, square){
		for (key in this.solution[this.moveCounter]){
			if (square == this.solution[this.moveCounter][key].newSquare && piece == key){
				this.moveCounter += 1;
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
		this.pieceLocations[newSquare] = this.pieceLocations[oldSquare];
		this.pieceLocations[oldSquare] = null;
		this.pieceLocations[newSquare].square = newSquare;
		if(Object.keys(this.solution).length > 0){
			this.checkMoveForSolution(this.pieceLocations[newSquare].name,newSquare);
		}
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

var board1 = new Board();
board1.createBoardLayout(puzzle1);
board1.squareSelected = 'square_b7'
board1.targetSquare = 'square_e7'
board1.movePiece(board1.squareSelected,board1.targetSquare);
board1.clearBoard();
board1.createBoardLayout(puzzle2);
board1.squareSelected = 'square_a1'
board1.targetSquare = 'square_a7'
board1.movePiece(board1.squareSelected,board1.targetSquare);
board1.squareSelected = 'square_a7'
board1.targetSquare = 'square_a8'
board1.movePiece(board1.squareSelected,board1.targetSquare);
