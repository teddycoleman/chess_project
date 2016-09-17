var puzzle1 = {
	initialSetup: {
		whiteQueen: {type: "queen", square: "square_h6", color: "white"},
		whiteKing: {type: "king", square: "square_g1", color: "white"},
		whiteRook: {type: "rook", square: "square_e1", color: "white"},
		whiteKnight: {type: "knight", square: "square_e4", color: "white"},
		whitePawn1: {type: "pawn", square: "square_a3", color: "white"},
		whitePawn2: {type: "pawn", square: "square_b2", color: "white"},
		whitePawn3: {type: "pawn", square: "square_d3", color: "white"},
		whitePawn4: {type: "pawn", square: "square_f6", color: "white"},
		whitePawn5: {type: "pawn", square: "square_f2", color: "white"},
		whitePawn6: {type: "pawn", square: "square_g2", color: "white"},
		whitePawn7: {type: "pawn", square: "square_h4", color: "white"},
		blackKing: {type: "king", square: "square_g8", color: "black"},
		blackQueen: {type: "queen", square: "square_f5", color: "black"},
		blackRook: {type: "rook", square: "square_e8", color: "black"},
		blackKnight: {type: "knight", square: "square_e6", color: "black"},
		blackPawn1: {type: "pawn", square: "square_a7", color: "black"},
		blackPawn2: {type: "pawn", square: "square_b6", color: "black"},
		blackPawn3: {type: "pawn", square: "square_c7", color: "black"},
		blackPawn4: {type: "pawn", square: "square_d4", color: "black"},
		blackPawn5: {type: "pawn", square: "square_f7", color: "black"},
		blackPawn6: {type: "pawn", square: "square_g6", color: "black"},
		blackPawn7: {type: "pawn", square: "square_h5", color: "black"}
	},
	sequenceOfMoves: {
		1: {
			whiteKnight: {previousSquare: "square_e4", newSquare: "square_d6"}
		},
		2: {
			blackPawn: {previousSquare: "square_c7", newSquare: "square_d6"}
		},
		3: {
			whiteRook: {previousSquare: "square_e1", newSquare: "square_e6"}
		},
		4: {
			blackQueen: {previousSquare: "square_f5", newSquare: "square_e6"}
		},
		5: {
			whiteQueen: {previousSquare: "square_h6", newSquare: "square_g7"}
		}
	},
	whiteToMove: true
};

var puzzle2 = {
	initialSetup: {
		whiteRook: {type: "rook", square: "square_h1", color: "white"},
		whiteKing: {type: "king", square: "square_c1", color: "white"},
		whiteQueen: {type: "queen", square: "square_d5", color: "white"},
		whiteKnight: {type: "knight", square: "square_d6", color: "white"},
		whiteBishop: {type: "bishop", square: "square_f1", color: "white"},
		whitePawn1: {type: "pawn", square: "square_a2", color: "white"},
		whitePawn2: {type: "pawn", square: "square_b2", color: "white"},
		whitePawn3: {type: "pawn", square: "square_c4", color: "white"},
		whitePawn4: {type: "pawn", square: "square_e5", color: "white"},
		whitePawn5: {type: "pawn", square: "square_f4", color: "white"},
		whitePawn6: {type: "pawn", square: "square_g2", color: "white"},
		whitePawn7: {type: "pawn", square: "square_h2", color: "white"},
		blackKing: {type: "king", square: "square_g8", color: "black"},
		blackQueen: {type: "queen", square: "square_e7", color: "black"},
		blackRook1: {type: "rook", square: "square_d8", color: "black"},
		blackRook2: {type: "rook", square: "square_f8", color: "black"},
		blackBishop: {type: "bishop", square: "square_a4", color: "black"},
		blackPawn1: {type: "pawn", square: "square_a7", color: "black"},
		blackPawn2: {type: "pawn", square: "square_b7", color: "black"},
		blackPawn3: {type: "pawn", square: "square_c5", color: "black"},
		blackPawn4: {type: "pawn", square: "square_f7", color: "black"},
		blackPawn5: {type: "pawn", square: "square_g6", color: "black"},
		blackPawn6: {type: "pawn", square: "square_h7", color: "black"}
	},
	sequenceOfMoves: {
		1: {
			blackRook: {previousSquare: "square_d8", newSquare: "square_d6"}
		},
		2: {
			whiteQueen: {previousSquare: "square_d5", newSquare: "square_d6"}
		},
		3: {
			blackRook: {previousSquare: "square_f8", newSquare: "square_d8"}
		},
		4: {
			whiteQueen: {previousSquare: "square_d6", newSquare: "square_e7"}
		},
		5: {
			blackRook: {previousSquare: "square_d8", newSquare: "square_d1"}
		}
	},
	whiteToMove: false
};

var puzzle3 = {
	initialSetup: {
		whiteRook1: {type: "rook", square: "square_h4", color: "white"},
		whiteRook2: {type: "rook", square: "square_h1", color: "white"},
		whiteKing: {type: "king", square: "square_c1", color: "white"},
		whiteQueen: {type: "queen", square: "square_d4", color: "white"},
		whiteKnight: {type: "knight", square: "square_g3", color: "white"},
		whitePawn1: {type: "pawn", square: "square_a2", color: "white"},
		whitePawn2: {type: "pawn", square: "square_b2", color: "white"},
		whitePawn3: {type: "pawn", square: "square_c2", color: "white"},
		whitePawn4: {type: "pawn", square: "square_d5", color: "white"},
		whitePawn5: {type: "pawn", square: "square_f4", color: "white"},
		whitePawn6: {type: "pawn", square: "square_g5", color: "white"},
		blackKing: {type: "king", square: "square_g8", color: "black"},
		blackQueen: {type: "queen", square: "square_e7", color: "black"},
		blackRook1: {type: "rook", square: "square_a8", color: "black"},
		blackRook2: {type: "rook", square: "square_d8", color: "black"},
		blackKnight: {type: "knight", square: "square_g7", color: "black"},
		blackPawn1: {type: "pawn", square: "square_a7", color: "black"},
		blackPawn2: {type: "pawn", square: "square_b7", color: "black"},
		blackPawn3: {type: "pawn", square: "square_c7", color: "black"},
		blackPawn4: {type: "pawn", square: "square_d6", color: "black"},
		blackPawn5: {type: "pawn", square: "square_f5", color: "black"},
		blackPawn6: {type: "pawn", square: "square_g6", color: "black"}
	},
	sequenceOfMoves: {
		1: {
			whiteRook: {previousSquare: "square_h4", newSquare: "square_h8"}
		},
		2: {
			blackKing: {previousSquare: "square_g8", newSquare: "square_f7"}
		},
		3: {
			whiteQueen: {previousSquare: "square_d4", newSquare: "square_g7"}
		},
		4: {
			blackKing: {previousSquare: "square_f7", newSquare: "square_g7"}
		},
		5: {
			whiteRook: {previousSquare: "square_h1", newSquare: "square_h7"}
		}
	},
	whiteToMove: true
};

var puzzlesArray = [puzzle1,puzzle2,puzzle3];

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