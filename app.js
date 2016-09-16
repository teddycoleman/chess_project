console.log('linked');

var board = document.getElementById('board');
var boardObject = {};
var capturedPieces = {};
var whiteToMove = true;

function createBoard(){
	for(i = 0; i < 8; i++){
		var newChessRow = document.createElement("div")
		newChessRow.setAttribute("class","row");
		newChessRow.setAttribute("id","row" + (i+1));
		for(j = 0; j < 8; j++){	
			//create chess square div element
			var newChessSquare = document.createElement("div");
			if(i % 2 == 0){
				j % 2 == 0 ? newChessSquare.setAttribute("class","square dark_square") : newChessSquare.setAttribute("class","square light_square");
			}
			else{
				j % 2 == 0 ? newChessSquare.setAttribute("class","square light_square") : newChessSquare.setAttribute("class","square dark_square");
			}
			//assign row to id
			var squareLetter = String.fromCharCode(97 + j);
			//assign column to id
			var squareNumber = i + 1;
			newChessSquare.setAttribute("id","square_" + squareLetter + squareNumber);
			//add listeners for drag/drop
			newChessSquare.setAttribute("ondrop","drop_handler(event)");
			newChessSquare.setAttribute("ondragover","dragover_handler(event)");
			newChessRow.appendChild(newChessSquare);
		}
		board.insertBefore(newChessRow, board.firstChild);
	}
}

function Piece(type, color, square){
	this.type = type;
	this.color = color;
	this.square = square;
	this.pieceAlive = true;
	this.elementInDOM = document.createElement('div');
	this.elementInDOM.textContent = convertPieceToUnicode(this.color + this.type.charAt(0).toUpperCase() + this.type.slice(1));
	this.elementInDOM.setAttribute("draggable","true");
	this.elementInDOM.setAttribute("class",type + " piece " + color);
	this.elementInDOM.setAttribute("ondragstart","dragstart_handler(event)");
	this.elementInDOM.setAttribute("ondragend","dragend_handler(event)");
}

Piece.prototype.movePiece = function(newSquare){
	boardObject[this.square] = null;
	boardObject[newSquare] = this;
	this.newSquareElement = document.getElementById(newSquare);
	if (this.newSquareElement.childNodes[0]){
		this.newSquareElement.childNodes[0].pieceAlive = false;
		this.newSquareElement.removeChild(this.newSquareElement.childNodes[0]);
	}
	this.newSquareElement.appendChild(this.elementInDOM);
	this.square = newSquare;
}

function createIntialPieces(){
	var whiteRook1 = new Piece("rook","white","square_a1");
	whiteRook1.movePiece('square_a1');
	var whiteRook2 = new Piece("rook","white","square_h1");
	whiteRook2.movePiece('square_h1');
	var whiteKnight1 = new Piece("knight","white","square_b1");
	whiteKnight1.movePiece('square_b1');
	var whiteKnight2 = new Piece("knight","white","square_g1");
	whiteKnight2.movePiece('square_g1');
	var whiteBishop1 = new Piece("bishop","white","square_c1");
	whiteBishop1.movePiece('square_c1');
	var whiteBishop2 = new Piece("bishop","white","square_f1");
	whiteBishop2.movePiece('square_f1');
	var whiteKing = new Piece("king","white","square_e1");
	whiteKing.movePiece('square_e1');
	var whiteQueen1 = new Piece("queen","white","square_d1");
	whiteQueen1.movePiece('square_d1');
	var whitePawn1 = new Piece("pawn","white","square_a2");
	whitePawn1.movePiece('square_a2');
	var whitePawn2 = new Piece("pawn","white","square_b2");
	whitePawn2.movePiece('square_b2');
	var whitePawn3 = new Piece("pawn","white","square_c2");
	whitePawn3.movePiece('square_c2');
	var whitePawn4 = new Piece("pawn","white","square_d2");
	whitePawn4.movePiece('square_d2');
	var whitePawn5 = new Piece("pawn","white","square_e2");
	whitePawn5.movePiece('square_e2');
	var whitePawn6 = new Piece("pawn","white","square_f2");
	whitePawn6.movePiece('square_f2');
	var whitePawn7 = new Piece("pawn","white","square_g2");
	whitePawn7.movePiece('square_g2');
	var whitePawn8 = new Piece("pawn","white","square_h2");
	whitePawn8.movePiece('square_h2');
	var blackRook1 = new Piece("rook","black","square_a8");
	blackRook1.movePiece('square_a8');
	var blackRook2 = new Piece("rook","black","square_h8");
	blackRook2.movePiece('square_h8');
	var blackKnight1 = new Piece("knight","black","square_b8");
	blackKnight1.movePiece('square_b8');
	var blackKnight2 = new Piece("knight","black","square_g8");
	blackKnight2.movePiece('square_g8');
	var blackBishop1 = new Piece("bishop","black","square_c8");
	blackBishop1.movePiece('square_c8');
	var blackBishop2 = new Piece("bishop","black","square_f8");
	blackBishop2.movePiece('square_f8');
	var blackKing = new Piece("king","black","square_e8");
	blackKing.movePiece('square_e8');
	var blackQueen1 = new Piece("queen","black","square_d8");
	blackQueen1.movePiece('square_d8');
	var blackPawn1 = new Piece("pawn","black","square_a7");
	blackPawn1.movePiece('square_a7');
	var blackPawn2 = new Piece("pawn","black","square_b7");
	blackPawn2.movePiece('square_b7');
	var blackPawn3 = new Piece("pawn","black","square_c7");
	blackPawn3.movePiece('square_c7');
	var blackPawn4 = new Piece("pawn","black","square_d7");
	blackPawn4.movePiece('square_d7');
	var blackPawn5 = new Piece("pawn","black","square_e7");
	blackPawn5.movePiece('square_e7');
	var blackPawn6 = new Piece("pawn","black","square_f7");
	blackPawn6.movePiece('square_f7');
	var blackPawn7 = new Piece("pawn","black","square_g7");
	blackPawn7.movePiece('square_g7');
	var blackPawn8 = new Piece("pawn","black","square_h7");
	// boardObject[blackPawn8.square] = blackPawn8;
	blackPawn8.movePiece('square_h7');	
}

function convertPieceToUnicode(pieceType){
	switch(pieceType) {
    case "whiteKing":
        return "\u2654";
        break;
    case "whiteQueen":
        return "\u2655";
        break;
    case "whiteRook":
        return "\u2656";
        break;
    case "whiteBishop":
        return "\u2657";
        break;
    case "whiteKnight":
        return "\u2658";
        break;
    case "whitePawn":
        return "\u2659";
        break;
    case "blackKing":
        return "\u265A";
        break;
    case "blackQueen":
        return "\u265B";
        break;
    case "blackRook":
        return "\u265C";
        break;
    case "blackBishop":
        return "\u265D";
        break;
    case "blackKnight":
        return "\u265E";
        break;
    case "blackPawn":
        return "\u265F";
        break;
    default:
        console.log('error - could not convert piece');
	}
}

function dragstart_handler(ev) {
 ev.dataTransfer.setData("text", ev.target.parentNode.getAttribute("id"));
 ev.effectAllowed = "move";
}

function dragover_handler(ev) {
 ev.preventDefault();
}

function drop_handler(ev) {
  ev.preventDefault();
  console.log("Drop");
  var piece = boardObject[ev.dataTransfer.getData("text")];
  var newSquare;
  if(ev.target.getAttribute("id")){
  	newSquare = ev.target.getAttribute("id");
  }
  else
  {
  	newSquare = ev.target.parentNode.getAttribute("id");
  }
  piece.movePiece(newSquare);
}

function dragend_handler(ev) {
  console.log("dragEnd");
  // Remove all of the drag data
  ev.dataTransfer.clearData();
}

function checkLegalMove(element){
	//TO DO : IMPLEMENT TO CHECK IF MOVE IS LEGAL
}

function initiateBoard(){
	createBoard();
	// placePiecesInInitialPosition();
	createIntialPieces();
}

initiateBoard();
