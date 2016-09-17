var puzzle1 = {
	initialSetup: {
		whiteQueen: {type: "queen", square: "square_b7", color: "white"},
		whiteKing: {type: "king", square: "square_e6", color: "white"},
		blackKing: {type: "king", square: "square_e8", color: "black"}
	},
	sequenceOfMoves: {
		1: {
			whiteQueen: {previousSquare: "square_b7", newSquare: "square_e7"}
		}
	},
	whiteToMove: true
};

var puzzle2 = {
	initialSetup: {
		whiteRook: {type: "rook", square: "square_a1", color: "white"},
		whiteKing: {type: "king", square: "square_e6", color: "white"},
		blackKing: {type: "king", square: "square_e8", color: "black"}
	},
	sequenceOfMoves: {
		1: {
			whiteRook: {previousSquare: "square_a1", newSquare: "square_a7"}
		},
		2: {
			whiteRook: {previousSquare: "square_a7", newSquare: "square_a8"}
		}
	},
	whiteToMove: true
};

startingPosition = {
	initialSetup:{
		whiteRook1: {type: "rook", square: "square_a1", color: "white"},
		whiteKnight1: {type: "knight", square: "square_b1", color: "white"},
		whiteBishop1: {type: "bishop", square: "square_c1", color: "white"},
		whiteQueen: {type: "queen", square: "square_d1", color: "white"},
		whiteKing: {type: "king", square: "square_e1", color: "white"},
		whiteBishop2: {type: "bishop", square: "square_f1", color: "white"},
		whiteKnight2: {type: "knight", square: "square_g1", color: "white"},
		whiteRook2: {type: "rook", square: "square_h1", color: "white"},
		whitePawn1: {type: "pawn", square: "square_a2", color: "white"},
		whitePawn2: {type: "pawn", square: "square_b2", color: "white"},
		whitePawn3: {type: "pawn", square: "square_c2", color: "white"},
		whitePawn4: {type: "pawn", square: "square_d2", color: "white"},
		whitePawn5: {type: "pawn", square: "square_e2", color: "white"},
		whitePawn6: {type: "pawn", square: "square_f2", color: "white"},
		whitePawn7: {type: "pawn", square: "square_g2", color: "white"},
		whitePawn8: {type: "pawn", square: "square_h2", color: "white"},
		blackRook1: {type: "rook", square: "square_a8", color: "black"},
		blackKnight1: {type: "knight", square: "square_b8", color: "black"},
		blackBishop1: {type: "bishop", square: "square_c8", color: "black"},
		blackQueen: {type: "queen", square: "square_d8", color: "black"},
		blackKing: {type: "king", square: "square_e8", color: "black"},
		blackBishop2: {type: "bishop", square: "square_f8", color: "black"},
		blackKnight2: {type: "knight", square: "square_g8", color: "black"},
		blackRook2: {type: "rook", square: "square_h8", color: "black"},
		blackPawn1: {type: "pawn", square: "square_a7", color: "black"},
		blackPawn2: {type: "pawn", square: "square_b7", color: "black"},
		blackPawn3: {type: "pawn", square: "square_c7", color: "black"},
		blackPawn4: {type: "pawn", square: "square_d7", color: "black"},
		blackPawn5: {type: "pawn", square: "square_e7", color: "black"},
		blackPawn6: {type: "pawn", square: "square_f7", color: "black"},
		blackPawn7: {type: "pawn", square: "square_g7", color: "black"},
		blackPawn8: {type: "pawn", square: "square_h7", color: "black"}
	},
	sequenceOfMoves: {},
	whiteToMove: true
}