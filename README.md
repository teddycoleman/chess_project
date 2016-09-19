#Project 1: Chess Puzzle Trainer!

Welcome to my first project! A chess puzzle trainer is something players use to 
improve their chess abilities.  It puts players in key positions from actual games 
and challenges them to find the best move.  Good moves are rewarded and mistakes
are negative.  

To build this, I used html, css, and javascript.  Please note that the code
runs on app2.js - I had originally written app.js but threw out the code in 
order to build a fully object oriented system.

For html there are essentially 4 key elements to the screen: 
1- The board itself with the chess pieces that are moved by dragging/dropping
2- A scoreboard which displays who's move it is, the sequence of moves,
   and has buttons for navigating to subsequent puzzles
3- A results screen showing the final result of the puzzle training
4- An instructions screen to start the game

For css, I used the skeleton framework and tweaked it a bit for what I was
trying to do.  One change that I would make to the code is to template
it properly to fall into columns etc. 

For javascript, there are 4 crucial objects to the page: 
1- A game element which controls the players interaction with the game and 
   navigates between different puzzles and different screen.  This also is the 
   primary object to manipulate the DOM. 
2- A board element that contains all the pieces, the piece locations, and the 
   soution to the current problem.
3- A piece element which is contained within the board.  These store piece type,
   color, square etc and don't have much else. 
4- A scoreboard element which has the user's score and displays the notation for 
   the sequence of moves the user has played.  
Furthermore, I used jquery to manipulate the DOM. 

In terms of loading in the puzzles and the starting position, there's a 
"chessPositionObjects.js" file that contains all of these in an object. 

There are instructions on the main page - enjoy playing!