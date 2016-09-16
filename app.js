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
	this.elementInDOM;
}

function placePiecesInInitialPosition(){
	placePiece("whiteRook", "square_a1", false);
	placePiece("whiteKnight", "square_b1", false);
	placePiece("whiteBishop", "square_c1", false);
	placePiece("whiteQueen", "square_d1", false);
	placePiece("whiteKing", "square_e1", false);
	placePiece("whiteBishop", "square_f1", false);
	placePiece("whiteKnight", "square_g1", false);
	placePiece("whiteRook", "square_h1", false);
	placePiece("whitePawn", "square_a2", false);
	placePiece("whitePawn", "square_b2", false);
	placePiece("whitePawn", "square_c2", false);
	placePiece("whitePawn", "square_d2", false);
	placePiece("whitePawn", "square_e2", false);
	placePiece("whitePawn", "square_f2", false);
	placePiece("whitePawn", "square_g2", false);
	placePiece("whitePawn", "square_h2", false);
	placePiece("blackRook", "square_a8", false);
	placePiece("blackKnight", "square_b8", false);
	placePiece("blackBishop", "square_c8", false);
	placePiece("blackQueen", "square_d8", false);
	placePiece("blackKing", "square_e8", false);
	placePiece("blackBishop", "square_f8", false);
	placePiece("blackKnight", "square_g8", false);
	placePiece("blackRook", "square_h8", false);
	placePiece("blackPawn", "square_a7", false);
	placePiece("blackPawn", "square_b7", false);
	placePiece("blackPawn", "square_c7", false);
	placePiece("blackPawn", "square_d7", false);
	placePiece("blackPawn", "square_e7", false);
	placePiece("blackPawn", "square_f7", false);
	placePiece("blackPawn", "square_g7", false);
	placePiece("blackPawn", "square_h7", false);
}

function placePiece(pieceType, newChessSquare, origChessSquare){
	//function creates a piece element and appends it to the DOM 
	//AND appends it to the boardObject element

	//add piece to the boardObject element
	boardObject[newChessSquare] = pieceType;
	if (origChessSquare){
		boardObject[origChessSquare] = null;
	}

	//if it's a new piece, create element and add it to the DOM
	if(!origChessSquare){
		var newChessSquare = document.getElementById(newChessSquare);
		var newChessPiece = document.createElement('div');
		var chessTextContent = convertPieceToUnicode(pieceType);
		newChessPiece.textContent = chessTextContent;
		//capture other piece if it exists on the same square
		if(newChessSquare.childNodes[0]){
			newChessSquare.removeChild(newChessSquare.childNodes[0]);
		}
		newChessPiece.setAttribute("class",pieceType + " piece " + pieceType.substring(0,5));
		newChessPiece.setAttribute("draggable","true");
		newChessPiece.setAttribute("ondragstart","dragstart_handler(event)");
		newChessPiece.setAttribute("ondragend","dragend_handler(event)");
		newChessSquare.appendChild(newChessPiece);
	}
	//if it's an existing piece, grab the element and move it within the DOM
	else{
		var chessPieceToMove = document.getElementById(origChessSquare).childNodes[0];
		var newChessSquare = document.getElementById(newChessSquare);
		//capture other piece if it exists on the same square
		if(newChessSquare.childNodes[0]){
			newChessSquare.removeChild(newChessSquare.childNodes[0]);
		}
		newChessSquare.appendChild(chessPieceToMove);
	}
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
  var origSquare = ev.dataTransfer.getData("text");
  var piece = boardObject[origSquare];
  var newSquare;
  if(ev.target.getAttribute("id")){
  	newSquare = ev.target.getAttribute("id");
  }
  else
  {
  	newSquare = ev.target.parentNode.getAttribute("id");
  }
  placePiece(piece, newSquare, origSquare);
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
	placePiecesInInitialPosition();
}

initiateBoard();
