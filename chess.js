const canvas = document.getElementById("canvas");
document.querySelector("p").style.marginTop = `${canvas.getBoundingClientRect().top + canvas.height + window.scrollY - 90}px`;
const ctx = canvas.getContext("2d");

//Heroku: https://fun-activities-2-chess.herokuapp.com
//Server: http://127.0.0.1:5500
var socket = io.connect("https://fun-activities-2-chess.herokuapp.com");
var codeText = document.getElementById("codetext");
var gameCode = Math.random().toString(36).substring(7);
var gameInput = document.getElementById("gameinput");
var direction1 = document.getElementById("direction1");
var codeDiv = document.getElementById("codediv");
var whiteBase = document.getElementById("whiteBase");
var blackBase = document.getElementById("blackBase");

setInterval(function() {
codeText.innerHTML = "Code: " + gameCode;
}, 0);

socket.emit("new game", gameCode);


gameInput.addEventListener("keypress", (event) => {
    if (event.key == "Enter") {
        socket.emit("join game", gameInput.value);
    }
});

var blackMove = false;
var whiteMove = false;
var blackSocket = false;
var whiteSocket = false;
var start = document.getElementById("start");
var entertext = document.getElementById("entertext");
var turn = 1;
var tanSquare1 = document.getElementById("tanSquare1");
var tanSquare2 = document.getElementById("tanSquare2");
var tanSquare3 = document.getElementById("tanSquare3");
var tanSquare4 = document.getElementById("tanSquare4");
var tanSquare5 = document.getElementById("tanSquare5");
var tanSquare6 = document.getElementById("tanSquare6");
var tanSquare7 = document.getElementById("tanSquare7");
var tanSquare8 = document.getElementById("tanSquare8");
var tanSquare9 = document.getElementById("tanSquare9");
var tanSquare10 = document.getElementById("tanSquare10");
var tanSquare11 = document.getElementById("tanSquare11");
var tanSquare12 = document.getElementById("tanSquare12");
var tanSquare13 = document.getElementById("tanSquare13");
var tanSquare14 = document.getElementById("tanSquare14");
var tanSquare15 = document.getElementById("tanSquare15");
var tanSquare16 = document.getElementById("tanSquare16");
var tanSquare17 = document.getElementById("tanSquare17");
var tanSquare18 = document.getElementById("tanSquare18");
var tanSquare19 = document.getElementById("tanSquare19");
var tanSquare20 = document.getElementById("tanSquare20");
var tanSquare21 = document.getElementById("tanSquare21");
var tanSquare22 = document.getElementById("tanSquare22");
var tanSquare23 = document.getElementById("tanSquare23");
var tanSquare24 = document.getElementById("tanSquare24");
var tanSquare25 = document.getElementById("tanSquare25");
var tanSquare26 = document.getElementById("tanSquare26");
var tanSquare27 = document.getElementById("tanSquare27");
var tanSquare28 = document.getElementById("tanSquare28");
var tanSquare29 = document.getElementById("tanSquare29");
var tanSquare30 = document.getElementById("tanSquare30");
var tanSquare31 = document.getElementById("tanSquare31");
var tanSquare32 = document.getElementById("tanSquare32");
var brownSquare1 = document.getElementById("brownSquare1");
var brownSquare2 = document.getElementById("brownSquare2");
var brownSquare3 = document.getElementById("brownSquare3");
var brownSquare4 = document.getElementById("brownSquare4");
var brownSquare5 = document.getElementById("brownSquare5");
var brownSquare6 = document.getElementById("brownSquare6");
var brownSquare7 = document.getElementById("brownSquare7");
var brownSquare8 = document.getElementById("brownSquare8");
var brownSquare9 = document.getElementById("brownSquare9");
var brownSquare10 = document.getElementById("brownSquare10");
var brownSquare11 = document.getElementById("brownSquare11");
var brownSquare12 = document.getElementById("brownSquare12");
var brownSquare13 = document.getElementById("brownSquare13");
var brownSquare14 = document.getElementById("brownSquare14");
var brownSquare15 = document.getElementById("brownSquare15");
var brownSquare16 = document.getElementById("brownSquare16");
var brownSquare17 = document.getElementById("brownSquare17");
var brownSquare18 = document.getElementById("brownSquare18");
var brownSquare19 = document.getElementById("brownSquare19");
var brownSquare20 = document.getElementById("brownSquare20");
var brownSquare21 = document.getElementById("brownSquare21");
var brownSquare22 = document.getElementById("brownSquare22");
var brownSquare23 = document.getElementById("brownSquare23");
var brownSquare24 = document.getElementById("brownSquare24");
var brownSquare25 = document.getElementById("brownSquare25");
var brownSquare26 = document.getElementById("brownSquare26");
var brownSquare27 = document.getElementById("brownSquare27");
var brownSquare28 = document.getElementById("brownSquare28");
var brownSquare29 = document.getElementById("brownSquare29");
var brownSquare30 = document.getElementById("brownSquare30");
var brownSquare31 = document.getElementById("brownSquare31");
var brownSquare32 = document.getElementById("brownSquare32");
tanSquare1.style.left = "0px";
tanSquare1.style.top = "0px";
tanSquare2.style.left = `125px`;
tanSquare2.style.top = "0px";
tanSquare3.style.left = `250px`;
tanSquare3.style.top = "0px";
tanSquare4.style.left = `375px`;
tanSquare4.style.top = "0px";
tanSquare5.style.left = `62.5px`;
tanSquare5.style.top = `62.5px`;
tanSquare6.style.left = `187.5px`;
tanSquare6.style.top = `62.5px`;
tanSquare7.style.left = `312.5px`;
tanSquare7.style.top = `62.5px`;
tanSquare8.style.left = `437.5px`;
tanSquare8.style.top = `62.5px`;
tanSquare9.style.left = "0px";
tanSquare9.style.top = `125px`;
tanSquare10.style.left = `125px`;
tanSquare10.style.top = `125px`;
tanSquare11.style.left = `250px`;
tanSquare11.style.top = `125px`;
tanSquare12.style.left = `375px`;
tanSquare12.style.top = `125px`;
tanSquare13.style.left = `62.5px`;
tanSquare13.style.top = `187.5px`;
tanSquare14.style.left = `187.5px`;
tanSquare14.style.top = `187.5px`;
tanSquare15.style.left = `312.5px`;
tanSquare15.style.top = `187.5px`;
tanSquare16.style.left = `437.5px`;
tanSquare16.style.top = `187.5px`;
tanSquare17.style.left = "0px";
tanSquare17.style.top = `250px`;
tanSquare18.style.left = `125px`;
tanSquare18.style.top = `250px`;
tanSquare19.style.left = `250px`;
tanSquare19.style.top = `250px`;
tanSquare20.style.left = `375px`;
tanSquare20.style.top = `250px`;
tanSquare21.style.left = `62.5px`;
tanSquare21.style.top = `312.5px`;
tanSquare22.style.left = `187.5px`;
tanSquare22.style.top = `312.5px`;
tanSquare23.style.left = `312.5px`;
tanSquare23.style.top = `312.5px`;
tanSquare24.style.left = `437.5px`;
tanSquare24.style.top = `312.5px`;
tanSquare25.style.left = "0px";
tanSquare25.style.top = `375px`;
tanSquare26.style.left = `125px`;
tanSquare26.style.top = `375px`;
tanSquare27.style.left = `250px`;
tanSquare27.style.top = `375px`;
tanSquare28.style.left = `375px`;
tanSquare28.style.top = `375px`;
tanSquare29.style.left = `62.5px`;
tanSquare29.style.top = `437.5px`;
tanSquare30.style.left = `187.5px`;
tanSquare30.style.top = `437.5px`;
tanSquare31.style.left = `312.5px`;
tanSquare31.style.top = `437.5px`;
tanSquare32.style.left = `437.5px`;
tanSquare32.style.top = `437.5px`;
brownSquare1.style.left = `62.5px`;
brownSquare1.style.top = "0px";
brownSquare2.style.left = `${62.5 + 125}px`;
brownSquare2.style.top = "0px";
brownSquare3.style.left = `${62.5 + 250}px`;
brownSquare3.style.top = "0px";
brownSquare4.style.left = `${62.5 + 375}px`;
brownSquare4.style.top = "0px";
brownSquare5.style.left = "0px";
brownSquare5.style.top = `62.5px`;
brownSquare6.style.left = `${62.5 + 62.5}px`;
brownSquare6.style.top = `62.5px`;
brownSquare7.style.left = `${62.5 + 187.5}px`;
brownSquare7.style.top = `62.5px`;
brownSquare8.style.left = `${62.5 + 312.5}px`;
brownSquare8.style.top = `62.5px`;
brownSquare9.style.left = `62.5px`;
brownSquare9.style.top = `125px`;
brownSquare10.style.left = `${62.5 + 125}px`;
brownSquare10.style.top = `125px`;
brownSquare11.style.left = `${62.5 + 250}px`;
brownSquare11.style.top = `125px`;
brownSquare12.style.left = `${62.5 + 375}px`;
brownSquare12.style.top = `125px`;
brownSquare13.style.left = "0px";
brownSquare13.style.top = `187.5px`;
brownSquare14.style.left = `${62.5 + 62.5}px`;
brownSquare14.style.top = `187.5px`;
brownSquare15.style.left = `${62.5 + 187.5}px`;
brownSquare15.style.top = `187.5px`;
brownSquare16.style.left = `${62.5 + 312.5}px`;
brownSquare16.style.top = `187.5px`;
brownSquare17.style.left = `62.5px`;
brownSquare17.style.top = `250px`;
brownSquare18.style.left = `${62.5 + 125}px`;
brownSquare18.style.top = `250px`;
brownSquare19.style.left = `${62.5 + 250}px`;
brownSquare19.style.top = `250px`;
brownSquare20.style.left = `${62.5 + 375}px`;
brownSquare20.style.top = `250px`;
brownSquare21.style.left = "0px";
brownSquare21.style.top = `312.5px`;
brownSquare22.style.left = `${62.5 + 62.5}px`;
brownSquare22.style.top = `312.5px`;
brownSquare23.style.left = `${62.5 + 187.5}px`;
brownSquare23.style.top = `312.5px`;
brownSquare24.style.left = `${62.5 + 312.5}px`;
brownSquare24.style.top = `312.5px`;
brownSquare25.style.left = `62.5px`;
brownSquare25.style.top = `375px`;
brownSquare26.style.left = `${62.5 + 125}px`;
brownSquare26.style.top = `375px`;
brownSquare27.style.left = `${62.5 + 250}px`;
brownSquare27.style.top = `375px`;
brownSquare28.style.left = `${62.5 + 375}px`;
brownSquare28.style.top = `375px`;
brownSquare29.style.left = "0px";
brownSquare29.style.top = `437.5px`;
brownSquare30.style.left = `${62.5 + 62.5}px`;
brownSquare30.style.top = `437.5px`;
brownSquare31.style.left = `${62.5 + 187.5}px`;
brownSquare31.style.top = `437.5px`;
brownSquare32.style.left = `${62.5 + 312.5}px`;
brownSquare32.style.top = `437.5px`;

let checkerboard = document.getElementById("checkerboard");
let player1TurnText = document.getElementById("player1TurnText");
let player2TurnText = document.getElementById("player2TurnText");
let moveWhite = false;
if (turn == 2) {
    moveWhite = true;
}
let clickBlack = false;
let clickWhite = false;
let black = true;
let white = true;

var squares = Array.from(checkerboard.children);

//whitePawn1
this.whitePawn1 = document.createElement("img");
this.whitePawn1.id = "whitePawn1";
this.whitePawn1.src = "whitepawn.png";
this.whitePawn1.style.position = "absolute";
this.whitePawn1.style.left = "-10px";
this.whitePawn1.style.top = "-13px";
this.whitePawn1.width = 80;
this.whitePawn1.height = 90;

//whitePawn2
this.whitePawn2 = document.createElement("img");
this.whitePawn2.id = "whitePawn2";
this.whitePawn2.src = "whitepawn.png";
this.whitePawn2.style.position = "absolute";
this.whitePawn2.style.left = "-10px";
this.whitePawn2.style.top = "-13px";
this.whitePawn2.width = 80;
this.whitePawn2.height = 90;

//whitePawn3
this.whitePawn3 = document.createElement("img");
this.whitePawn3.id = "whitePawn3";
this.whitePawn3.src = "whitepawn.png";
this.whitePawn3.style.position = "absolute";
this.whitePawn3.style.left = "-10px";
this.whitePawn3.style.top = "-13px";
this.whitePawn3.width = 80;
this.whitePawn3.height = 90;

//whitePawn4
this.whitePawn4 = document.createElement("img");
this.whitePawn4.id = "whitePawn4";
this.whitePawn4.src = "whitepawn.png";
this.whitePawn4.style.position = "absolute";
this.whitePawn4.style.left = "-10px";
this.whitePawn4.style.top = "-13px";
this.whitePawn4.width = 80;
this.whitePawn4.height = 90;

//whitePawn5
this.whitePawn5 = document.createElement("img");
this.whitePawn5.id = "whitePawn5";
this.whitePawn5.src = "whitepawn.png";
this.whitePawn5.style.position = "absolute";
this.whitePawn5.style.left = "-10px";
this.whitePawn5.style.top = "-13px";
this.whitePawn5.width = 80;
this.whitePawn5.height = 90;

//whitePawn6
this.whitePawn6 = document.createElement("img");
this.whitePawn6.id = "whitePawn6";
this.whitePawn6.src = "whitepawn.png";
this.whitePawn6.style.position = "absolute";
this.whitePawn6.style.left = "-10px";
this.whitePawn6.style.top = "-13px";
this.whitePawn6.width = 80;
this.whitePawn6.height = 90;

//whitePawn7
this.whitePawn7 = document.createElement("img");
this.whitePawn7.id = "whitePawn7";
this.whitePawn7.src = "whitepawn.png";
this.whitePawn7.style.position = "absolute";
this.whitePawn7.style.left = "-10px";
this.whitePawn7.style.top = "-13px";
this.whitePawn7.width = 80;
this.whitePawn7.height = 90;

//whitePawn8
this.whitePawn8 = document.createElement("img");
this.whitePawn8.id = "whitePawn8";
this.whitePawn8.src = "whitepawn.png";
this.whitePawn8.style.position = "absolute";
this.whitePawn8.style.left = "-10px";
this.whitePawn8.style.top = "-13px";
this.whitePawn8.width = 80;
this.whitePawn8.height = 90;

//whiteRook1
this.whiteRook1 = document.createElement("img");
this.whiteRook1.id = "whiteRook1";
this.whiteRook1.src = "whiterook.png";
this.whiteRook1.style.position = "absolute";
this.whiteRook1.style.left = "4px";
this.whiteRook1.width = 50;
this.whiteRook1.height = 60;

//whiteRook2
this.whiteRook2 = document.createElement("img");
this.whiteRook2.id = "whiteRook2";
this.whiteRook2.src = "whiterook.png";
this.whiteRook2.style.position = "absolute";
this.whiteRook2.style.left = "4px";
this.whiteRook2.width = 50;
this.whiteRook2.height = 60;

//whiteKnight1
this.whiteKnight1 = document.createElement("img");
this.whiteKnight1.id = "whiteKnight1";
this.whiteKnight1.src = "whiteknight.png";
this.whiteKnight1.style.position = "absolute";
this.whiteKnight1.style.top = "-4px";
this.whiteKnight1.style.left = "-4px";
this.whiteKnight1.width = 65;
this.whiteKnight1.height = 69;

//whiteKnight2
this.whiteKnight2 = document.createElement("img");
this.whiteKnight2.id = "whiteKnight2";
this.whiteKnight2.src = "whiteknight.png";
this.whiteKnight2.style.position = "absolute";
this.whiteKnight2.style.top = "-4px";
this.whiteKnight2.style.left = "-4px";
this.whiteKnight2.width = 65;
this.whiteKnight2.height = 69;

//whiteBishop1
this.whiteBishop1 = document.createElement("img");
this.whiteBishop1.id = "whiteBishop1";
this.whiteBishop1.src = "whitebishop.png";
this.whiteBishop1.style.position = "absolute";
this.whiteBishop1.style.left = "3px";
this.whiteBishop1.width = 50;
this.whiteBishop1.height = 60;

//whiteBishop2
this.whiteBishop2 = document.createElement("img");
this.whiteBishop2.id = "whiteBishop2";
this.whiteBishop2.src = "whitebishop.png";
this.whiteBishop2.style.position = "absolute";
this.whiteBishop2.style.left = "3px";
this.whiteBishop2.width = 50;
this.whiteBishop2.height = 60;

//whiteKing
this.whiteKing = document.createElement("img");
this.whiteKing.id = "whiteKing";
this.whiteKing.src = "whiteking.png";
this.whiteKing.style.position = "absolute";
this.whiteKing.style.left = "5px";
this.whiteKing.width = 45;
this.whiteKing.height = 60;

//whiteQueen
this.whiteQueen = document.createElement("img");
this.whiteQueen.id = "whiteQueen";
this.whiteQueen.src = "whitequeen.png";
this.whiteQueen.style.position = "absolute";
this.whiteQueen.style.left = "4px";
this.whiteQueen.width = 50;
this.whiteQueen.height = 65;

//blackPawn1
this.blackPawn1 = document.createElement("img");
this.blackPawn1.id = "blackPawn1";
this.blackPawn1.src = "blackpawn.png";
this.blackPawn1.style.position = "absolute";
this.blackPawn1.style.left = "5px";
this.blackPawn1.width = 45;
this.blackPawn1.height = 60;

//blackPawn2
this.blackPawn2 = document.createElement("img");
this.blackPawn2.id = "blackPawn2";
this.blackPawn2.src = "blackpawn.png";
this.blackPawn2.style.position = "absolute";
this.blackPawn2.style.left = "5px";
this.blackPawn2.width = 45;
this.blackPawn2.height = 60;

//blackPawn3
this.blackPawn3 = document.createElement("img");
this.blackPawn3.id = "blackPawn3";
this.blackPawn3.src = "blackpawn.png";
this.blackPawn3.style.position = "absolute";
this.blackPawn3.style.left = "5px";
this.blackPawn3.width = 45;
this.blackPawn3.height = 60;

//blackPawn4
this.blackPawn4 = document.createElement("img");
this.blackPawn4.id = "blackPawn4";
this.blackPawn4.src = "blackpawn.png";
this.blackPawn4.style.position = "absolute";
this.blackPawn4.style.left = "5px";
this.blackPawn4.width = 45;
this.blackPawn4.height = 60;

//blackPawn5
this.blackPawn5 = document.createElement("img");
this.blackPawn5.id = "blackPawn5";
this.blackPawn5.src = "blackpawn.png";
this.blackPawn5.style.position = "absolute";
this.blackPawn5.style.left = "5px";
this.blackPawn5.width = 45;
this.blackPawn5.height = 60;

//blackPawn6
this.blackPawn6 = document.createElement("img");
this.blackPawn6.id = "blackPawn6";
this.blackPawn6.src = "blackpawn.png";
this.blackPawn6.style.position = "absolute";
this.blackPawn6.style.left = "5px";
this.blackPawn6.width = 45;
this.blackPawn6.height = 60;

//blackPawn7
this.blackPawn7 = document.createElement("img");
this.blackPawn7.id = "blackPawn7";
this.blackPawn7.src = "blackpawn.png";
this.blackPawn7.style.position = "absolute";
this.blackPawn7.style.left = "5px";
this.blackPawn7.width = 45;
this.blackPawn7.height = 60;

//blackPawn8
this.blackPawn8 = document.createElement("img");
this.blackPawn8.id = "blackPawn8";
this.blackPawn8.src = "blackpawn.png";
this.blackPawn8.style.position = "absolute";
this.blackPawn8.style.left = "5px";
this.blackPawn8.width = 45;
this.blackPawn8.height = 60;

//blackRook1
this.blackRook1 = document.createElement("img");
this.blackRook1.id = "blackRook1";
this.blackRook1.src = "blackrook.png";
this.blackRook1.style.position = "absolute";
this.blackRook1.style.left = "4px";
this.blackRook1.width = 50;
this.blackRook1.height = 60;

//blackRook2
this.blackRook2 = document.createElement("img");
this.blackRook2.id = "blackRook2";
this.blackRook2.src = "blackrook.png";
this.blackRook2.style.position = "absolute";
this.blackRook2.style.left = "4px";
this.blackRook2.width = 50;
this.blackRook2.height = 60;

//blackKnight1
this.blackKnight1 = document.createElement("img");
this.blackKnight1.id = "blackKnight1";
this.blackKnight1.src = "blackknight.png";
this.blackKnight1.style.position = "absolute";
this.blackKnight1.style.left = "7px";
this.blackKnight1.width = 43;
this.blackKnight1.height = 65;

//blackKnight2
this.blackKnight2 = document.createElement("img");
this.blackKnight2.id = "blackKnight2";
this.blackKnight2.src = "blackknight.png";
this.blackKnight2.style.position = "absolute";
this.blackKnight2.style.left = "7px";
this.blackKnight2.width = 43;
this.blackKnight2.height = 65;

//blackBishop1
this.blackBishop1 = document.createElement("img");
this.blackBishop1.id = "blackBishop1";
this.blackBishop1.src = "blackbishop.png";
this.blackBishop1.style.position = "absolute";
this.blackBishop1.style.left = "4px";
this.blackBishop1.width = 50;
this.blackBishop1.height = 70;

//blackBishop2
this.blackBishop2 = document.createElement("img");
this.blackBishop2.id = "blackBishop2";
this.blackBishop2.src = "blackbishop.png";
this.blackBishop2.style.position = "absolute";
this.blackBishop2.style.left = "4px";
this.blackBishop2.width = 50;
this.blackBishop2.height = 70;

//blackQueen
this.blackQueen = document.createElement("img");
this.blackQueen.id = "blackQueen";
this.blackQueen.src = "blackqueen.png";
this.blackQueen.style.position = "absolute";
this.blackQueen.style.left = "-21px";
this.blackQueen.width = 100;
this.blackQueen.height = 63;

//blackKing
this.blackKing = document.createElement("img");
this.blackKing.id = "blackKing";
this.blackKing.src = "blackking.png";
this.blackKing.style.position = "absolute";
this.blackKing.style.left = "5px";
this.blackKing.width = 50;
this.blackKing.height = 63;

function drawGame() {
    //blackPawn1
    tanSquare25.appendChild(blackPawn1);

    //blackPawn2
    brownSquare25.appendChild(blackPawn2);

    //blackPawn3
    tanSquare26.appendChild(blackPawn3);
    
    //blackPawn4
    brownSquare26.appendChild(blackPawn4);
    
    //blackPawn5
    tanSquare27.appendChild(blackPawn5);
    
    //blackPawn6
    brownSquare27.appendChild(blackPawn6);
    
    //blackPawn7
    tanSquare28.appendChild(blackPawn7);
    
    //blackPawn8
    brownSquare28.appendChild(blackPawn8);

    //blackRook1
    brownSquare29.appendChild(blackRook1);
    
    //blackRook2
    tanSquare32.appendChild(blackRook2);

    //blackKnight1
    tanSquare29.appendChild(blackKnight1);
    
    //blackKnight2
    brownSquare32.appendChild(blackKnight2);
    
    //blackBishop1
    brownSquare30.appendChild(blackBishop1);
    
    //blackBishop2
    tanSquare31.appendChild(blackBishop2);
    
    //blackQueen
    tanSquare30.appendChild(blackQueen);
    
    //blackKing
    brownSquare31.appendChild(blackKing);
}

socket.on("full room", () => {
    return alert("Game is full.");
});

drawGame();

let winner = setInterval(function() {
    if (blackKing.style.position == "unset") {
        clearInterval(winner);
        socket.emit("whiteWinner");
    }
    
    if (whiteKing.style.position == "unset") {
        clearInterval(winner);
        socket.emit("blackWinner");
    }
}, 0);

//whitePawn1
brownSquare5.appendChild(whitePawn1);
    
//whitePawn2
tanSquare5.appendChild(whitePawn2);

//whitePawn3
brownSquare6.appendChild(whitePawn3);

//whitePawn4
tanSquare6.appendChild(whitePawn4);

//whitePawn5
brownSquare7.appendChild(whitePawn5);

//whitePawn6
tanSquare7.appendChild(whitePawn6);

//whitePawn7
brownSquare8.appendChild(whitePawn7);

//whitePawn8
tanSquare8.appendChild(whitePawn8);

//whiteRook1
tanSquare1.appendChild(whiteRook1);

//whiteRook2
brownSquare4.appendChild(whiteRook2);

//whiteKnight1
brownSquare1.appendChild(whiteKnight1);

//whiteKnight2
tanSquare4.appendChild(whiteKnight2);

//whiteBishop1
tanSquare2.appendChild(whiteBishop1);

//whiteBishop2
brownSquare3.appendChild(whiteBishop2);

//whiteKing
brownSquare2.appendChild(whiteKing);

//whiteQueen
tanSquare3.appendChild(whiteQueen);

socket.on("whiteWinnerBoth", () => {
    alert("White wins!");
    document.location.reload();
});

socket.on("blackWinnerBoth", () => {
    alert("Black wins!");
    document.location.reload();
});

socket.on("joined game", (game) => {
    start.style.display = "unset";
    entertext.style.display = "unset";

    gameCode = game.code;

    document.addEventListener("keypress", (event) => {
        if (event.key == "Enter") {
            socket.emit("start game");
        }
    });

    if (game.black == socket.id) {
        white = false;
        blackSocket = true;
        direction1.innerHTML = "YOU'RE THE BLACK.";
    }

    if (game.white == socket.id) {
        black = false;
        whiteSocket = true;
        direction1.innerHTML = "YOU'RE THE WHITE.";
    }

    //whitePawn1
    brownSquare5.appendChild(whitePawn1);
    
    //whitePawn2
    tanSquare5.appendChild(whitePawn2);
    
    //whitePawn3
    brownSquare6.appendChild(whitePawn3);
    
    //whitePawn4
    tanSquare6.appendChild(whitePawn4);
    
    //whitePawn5
    brownSquare7.appendChild(whitePawn5);
    
    //whitePawn6
    tanSquare7.appendChild(whitePawn6);
    
    //whitePawn7
    brownSquare8.appendChild(whitePawn7);
    
    //whitePawn8
    tanSquare8.appendChild(whitePawn8);
    
    //whiteRook1
    tanSquare1.appendChild(whiteRook1);
    
    //whiteRook2
    brownSquare4.appendChild(whiteRook2);

    //whiteKnight1
    brownSquare1.appendChild(whiteKnight1);
    
    //whiteKnight2
    tanSquare4.appendChild(whiteKnight2);
    
    //whiteBishop1
    tanSquare2.appendChild(whiteBishop1);
    
    //whiteBishop2
    brownSquare3.appendChild(whiteBishop2);
    
    //whiteKing
    brownSquare2.appendChild(whiteKing);
    
    //whiteQueen
    tanSquare3.appendChild(whiteQueen);

socket.on("started game", () => {
    start.style.display = "none";
    entertext.style.display = "none";
    randomOpponentMove();
});
});

socket.on("disconnected", () => {
    document.location.reload();
});

function randomOpponentMove() {
    socket.on("moveBlack", (piece) => {
        if (blackMove || whiteSocket) {
            blackMove = false;
            whiteSocket = false;
        var black = document.getElementById(piece.black);
        var child = document.getElementById(piece.child);
        black.parentElement.removeChild(black);
        child.appendChild(black);
        moveWhite = true;
    turn = 2;
    randomOpponentMove();
        }
        });
        socket.on("moveBlackHit", (piece) => {
            if (blackMove || whiteSocket) {
                blackMove = false;
                whiteSocket = false;
            var black = document.getElementById(piece.black);
        var child = document.getElementById(piece.child);
        var pieceCaptured = child.children[0];
            black.parentElement.removeChild(black);
            pieceCaptured.parentElement.removeChild(pieceCaptured);
            blackBase.appendChild(pieceCaptured);
            pieceCaptured.style.position = "unset";
            child.appendChild(black);
            moveWhite = true;
        turn = 2;
        randomOpponentMove();
            }
            });
            socket.on("moveWhite", (piece) => {
                if (whiteMove || blackSocket) {
                    whiteMove = false;
                    blackSocket = false;
                var white = document.getElementById(piece.white);
                var child = document.getElementById(piece.child);
                white.parentElement.removeChild(white);
                child.appendChild(white);
                moveWhite = false;
            turn = 1;
            randomOpponentMove();
                }
                });
                socket.on("moveWhiteHit", (piece) => {
                    if (whiteMove || blackSocket) {
                        whiteMove = false;
                        blackSocket = false;
                    var white = document.getElementById(piece.white);
                var child = document.getElementById(piece.child);
                var pieceCaptured = child.children[0];
                    white.parentElement.removeChild(white);
                    pieceCaptured.parentElement.removeChild(pieceCaptured);
                    whiteBase.appendChild(pieceCaptured);
                    pieceCaptured.style.position = "unset";
                    child.appendChild(white);
                    moveWhite = false;
                turn = 1;
                randomOpponentMove();
                    }
                    });
    if (turn == 1) {
        player1TurnText.style.left = `40px`;
        player1TurnText.style.top = `215px`;
        player1TurnText.style.display = "unset";
        clickBlack = false;
        setTimeout(function() {
            player1TurnText.style.display = "none";
            if (black) {
                blackPawn1.addEventListener("click", clickBlackPawn1);
                blackPawn2.addEventListener("click", clickBlackPawn2);
                blackPawn3.addEventListener("click", clickBlackPawn3);
                blackPawn4.addEventListener("click", clickBlackPawn4);
                blackPawn5.addEventListener("click", clickBlackPawn5);
                blackPawn6.addEventListener("click", clickBlackPawn6);
                blackPawn7.addEventListener("click", clickBlackPawn7);
                blackPawn8.addEventListener("click", clickBlackPawn8);
                blackRook1.addEventListener("click", clickBlackRook1);
                blackKnight1.addEventListener("click", clickBlackKnight1);
                blackBishop1.addEventListener("click", clickBlackBishop1);
                blackQueen.addEventListener("click", clickBlackQueen);
                blackKing.addEventListener("click", clickBlackKing);
                blackBishop2.addEventListener("click", clickBlackBishop2);
                blackKnight2.addEventListener("click", clickBlackKnight2);
                blackRook2.addEventListener("click", clickBlackRook2);
            }
        }, 2000);
    }

function clickBlackPawn1() {
    clickBlack = true;
    blackMove = true;
    blackSocket = true;
    checkerboard.removeAttribute("onclick");
    checkerboard.onclick = moveBlackPawn1;
}

function moveBlackPawn1(event) {
    if (clickBlack) {
    if (blackPawn1.contains(event.target)) {
        return;
    }
    var children = Array.from(checkerboard.children);
    children.forEach(function(child) {
        //oneSpace
        if (child.style.top == `${Number(blackPawn1.parentElement.style.top.slice(0, blackPawn1.parentElement.style.top.length - 2)) - 62.5}px`
&& child.style.left == blackPawn1.parentElement.style.left) {
    if (child.id == event.target.id && child.children.length == 0) {
        if (moveWhite === false) {
            socket.emit("black", {
                "black": blackPawn1.id,
                "child": child.id
            });
        }
    }
}
    //twoSpace
    if (child.style.top == `${Number(blackPawn1.parentElement.style.top.slice(0, blackPawn1.parentElement.style.top.length - 2)) - 125}px`
&& child.style.left == blackPawn1.parentElement.style.left) {
    if (child.id == event.target.id && child.children.length == 0) {
        if (moveWhite === false && tanSquare25.contains(blackPawn1)) {
            socket.emit("black", {
                "black": blackPawn1.id,
                "child": child.id
            });
        }
    }
}
    //diagonalSpace
    if (child.children.length > 0 && child.style.top == `${Number(blackPawn1.parentElement.style.top.slice(0, blackPawn1.parentElement.style.top.length - 2)) - 62.5}px`
&& child.style.left == `${Number(blackPawn1.parentElement.style.left.slice(0, blackPawn1.parentElement.style.left.length - 2)) + 62.5}px` && child.children[0].id.includes("white")
|| child.children.length > 0 && child.style.top == `${Number(blackPawn1.parentElement.style.top.slice(0, blackPawn1.parentElement.style.top.length - 2)) - 62.5}px`
&& child.style.left == `${Number(blackPawn1.parentElement.style.left.slice(0, blackPawn1.parentElement.style.left.length - 2)) - 62.5}px`
&& child.children[0].id.includes("white")) {
    if (child.children[0].id == event.target.id || child.id == event.target.id) {
        if (moveWhite === false) {
            socket.emit("blackHit", {
                "black": blackPawn1.id,
                "child": child.id
            });
        }
    }
}
});
    }
}

function clickBlackPawn2() {
    clickBlack = true;
    blackMove = true;
    blackSocket = true;
    checkerboard.removeAttribute("onclick");
    checkerboard.onclick = moveBlackPawn2;
}

function moveBlackPawn2(event) {
    if (clickBlack) {
    if (blackPawn2.contains(event.target)) {
        return;
    }
    var children = Array.from(checkerboard.children);
    children.forEach(function(child) {
        //oneSpace
        if (child.style.top == `${Number(blackPawn2.parentElement.style.top.slice(0, blackPawn2.parentElement.style.top.length - 2)) - 62.5}px`
&& child.style.left == blackPawn2.parentElement.style.left) {
    if (child.id == event.target.id && child.children.length == 0) {
        if (moveWhite === false) {
            socket.emit("black", {
                "black": blackPawn2.id,
                "child": child.id
            });
        }
    }
}
    //twoSpace
    if (child.style.top == `${Number(blackPawn2.parentElement.style.top.slice(0, blackPawn2.parentElement.style.top.length - 2)) - 125}px`
&& child.style.left == blackPawn2.parentElement.style.left) {
    if (child.id == event.target.id && child.children.length == 0) {
        if (moveWhite === false && brownSquare25.contains(blackPawn2)) {
            socket.emit("black", {
                "black": blackPawn2.id,
                "child": child.id
            });
        }
    }
}
    //diagonalSpace
    if (child.children.length > 0 && child.style.top == `${Number(blackPawn2.parentElement.style.top.slice(0, blackPawn2.parentElement.style.top.length - 2)) - 62.5}px`
&& child.style.left == `${Number(blackPawn2.parentElement.style.left.slice(0, blackPawn2.parentElement.style.left.length - 2)) + 62.5}px` && child.children[0].id.includes("white")
|| child.children.length > 0 && child.style.top == `${Number(blackPawn2.parentElement.style.top.slice(0, blackPawn2.parentElement.style.top.length - 2)) - 62.5}px`
&& child.style.left == `${Number(blackPawn2.parentElement.style.left.slice(0, blackPawn2.parentElement.style.left.length - 2)) - 62.5}px`
&& child.children[0].id.includes("white")) {
    if (child.children[0].id == event.target.id || child.id == event.target.id) {
        if (moveWhite === false) {
            socket.emit("blackHit", {
                "black": blackPawn2.id,
                "child": child.id
            });
        }
    }
}
});
}
}

function clickBlackPawn3() {
    clickBlack = true;
    blackMove = true;
    blackSocket = true;
    checkerboard.removeAttribute("onclick");
    checkerboard.onclick = moveBlackPawn3;
}

function moveBlackPawn3(event) {
    if (clickBlack) {
    if (blackPawn3.contains(event.target)) {
        return;
    }
    var children = Array.from(checkerboard.children);
    children.forEach(function(child) {
        //oneSpace
        if (child.style.top == `${Number(blackPawn3.parentElement.style.top.slice(0, blackPawn3.parentElement.style.top.length - 2)) - 62.5}px`
&& child.style.left == blackPawn3.parentElement.style.left) {
    if (child.id == event.target.id && child.children.length == 0) {
        if (moveWhite === false) {
            socket.emit("black", {
                "black": blackPawn3.id,
                "child": child.id
            });
        }
    }
}
    //twoSpace
    if (child.style.top == `${Number(blackPawn3.parentElement.style.top.slice(0, blackPawn3.parentElement.style.top.length - 2)) - 125}px`
&& child.style.left == blackPawn3.parentElement.style.left)
    if (child.id == event.target.id && child.children.length == 0) {
        if (moveWhite === false && tanSquare26.contains(blackPawn3)) {
            socket.emit("black", {
                "black": blackPawn3.id,
                "child": child.id
            });
        }
    }
    //diagonalSpace
    if (child.children.length > 0 && child.style.top == `${Number(blackPawn3.parentElement.style.top.slice(0, blackPawn3.parentElement.style.top.length - 2)) - 62.5}px`
&& child.style.left == `${Number(blackPawn3.parentElement.style.left.slice(0, blackPawn3.parentElement.style.left.length - 2)) + 62.5}px` && child.children[0].id.includes("white")
|| child.children.length > 0 && child.style.top == `${Number(blackPawn3.parentElement.style.top.slice(0, blackPawn3.parentElement.style.top.length - 2)) - 62.5}px`
&& child.style.left == `${Number(blackPawn3.parentElement.style.left.slice(0, blackPawn3.parentElement.style.left.length - 2)) - 62.5}px`
&& child.children[0].id.includes("white")) {
    if (child.children[0].id == event.target.id || child.id == event.target.id) {
        if (moveWhite === false) {
            socket.emit("blackHit", {
                "black": blackPawn3.id,
                "child": child.id
            });
        }
    }
}
});
}
}

function clickBlackPawn4() {
    clickBlack = true;
    blackMove = true;
    blackSocket = true;
    checkerboard.removeAttribute("onclick");
    checkerboard.onclick = moveBlackPawn4;
}

function moveBlackPawn4(event) {
    if (clickBlack) {
    if (blackPawn4.contains(event.target)) {
        return;
    }
    var children = Array.from(checkerboard.children);
    children.forEach(function(child) {
        //oneSpace
        if (child.style.top == `${Number(blackPawn4.parentElement.style.top.slice(0, blackPawn4.parentElement.style.top.length - 2)) - 62.5}px`
&& child.style.left == blackPawn4.parentElement.style.left) {
    if (child.id == event.target.id && child.children.length == 0) {
        if (moveWhite === false) {
            socket.emit("black", {
                "black": blackPawn4.id,
                "child": child.id
            });
        }
    }
}
    //twoSpace
    if (child.style.top == `${Number(blackPawn4.parentElement.style.top.slice(0, blackPawn4.parentElement.style.top.length - 2)) - 125}px`
&& child.style.left == blackPawn4.parentElement.style.left) {
    if (child.id == event.target.id && child.children.length == 0) {
        if (moveWhite === false && brownSquare26.contains(blackPawn4)) {
            socket.emit("black", {
                "black": blackPawn4.id,
                "child": child.id
            });
        }
    }
}
    //diagonalSpace
    if (child.children.length > 0 && child.style.top == `${Number(blackPawn4.parentElement.style.top.slice(0, blackPawn4.parentElement.style.top.length - 2)) - 62.5}px`
&& child.style.left == `${Number(blackPawn4.parentElement.style.left.slice(0, blackPawn4.parentElement.style.left.length - 2)) + 62.5}px` && child.children[0].id.includes("white")
|| child.children.length > 0 && child.style.top == `${Number(blackPawn4.parentElement.style.top.slice(0, blackPawn4.parentElement.style.top.length - 2)) - 62.5}px`
&& child.style.left == `${Number(blackPawn4.parentElement.style.left.slice(0, blackPawn4.parentElement.style.left.length - 2)) - 62.5}px`
&& child.children[0].id.includes("white")) {
    if (child.children[0].id == event.target.id || child.id == event.target.id) {
        if (moveWhite === false) {
            socket.emit("blackHit", {
                "black": blackPawn4.id,
                "child": child.id
            });
        }
    }
}
});
}
}

function clickBlackPawn5() {
    clickBlack = true;
    blackMove = true;
    blackSocket = true;
    checkerboard.removeAttribute("onclick");
    checkerboard.onclick = moveBlackPawn5;
}

function moveBlackPawn5(event) {
    if (clickBlack) {
    if (blackPawn5.contains(event.target)) {
        return;
    }
    var children = Array.from(checkerboard.children);
    children.forEach(function(child) {
        //oneSpace
        if (child.style.top == `${Number(blackPawn5.parentElement.style.top.slice(0, blackPawn5.parentElement.style.top.length - 2)) - 62.5}px`
&& child.style.left == blackPawn5.parentElement.style.left) {
    if (child.id == event.target.id && child.children.length == 0) {
        if (moveWhite === false) {
            socket.emit("black", {
                "black": blackPawn5.id,
                "child": child.id
            });
        }
    }
}
    //twoSpace
    if (child.style.top == `${Number(blackPawn5.parentElement.style.top.slice(0, blackPawn5.parentElement.style.top.length - 2)) - 125}px`
&& child.style.left == blackPawn5.parentElement.style.left) {
    if (child.id == event.target.id && child.children.length == 0) {
        if (moveWhite === false && tanSquare27.contains(blackPawn5)) {
            socket.emit("black", {
                "black": blackPawn5.id,
                "child": child.id
            });
        }
    }
}
//diagonalSpace
if (child.children.length > 0 && child.style.top == `${Number(blackPawn5.parentElement.style.top.slice(0, blackPawn5.parentElement.style.top.length - 2)) - 62.5}px`
&& child.style.left == `${Number(blackPawn5.parentElement.style.left.slice(0, blackPawn5.parentElement.style.left.length - 2)) + 62.5}px` && child.children[0].id.includes("white")
|| child.children.length > 0 && child.style.top == `${Number(blackPawn5.parentElement.style.top.slice(0, blackPawn5.parentElement.style.top.length - 2)) - 62.5}px`
&& child.style.left == `${Number(blackPawn5.parentElement.style.left.slice(0, blackPawn5.parentElement.style.left.length - 2)) - 62.5}px`
&& child.children[0].id.includes("white")) {
    if (child.children[0].id == event.target.id || child.id == event.target.id) {
        if (moveWhite === false) {
            socket.emit("blackHit", {
                "black": blackPawn5.id,
                "child": child.id
            });
        }
    }
}
});
    }
}

function clickBlackPawn6() {
    clickBlack = true;
    blackMove = true;
    blackSocket = true;
    checkerboard.removeAttribute("onclick");
    checkerboard.onclick = moveBlackPawn6;
}

function moveBlackPawn6(event) {
    if (clickBlack) {
    if (blackPawn6.contains(event.target)) {
        return;
    }
    var children = Array.from(checkerboard.children);
    children.forEach(function(child) {
        //oneSpace
        if (child.style.top == `${Number(blackPawn6.parentElement.style.top.slice(0, blackPawn6.parentElement.style.top.length - 2)) - 62.5}px`
&& child.style.left == blackPawn6.parentElement.style.left) {
    if (child.id == event.target.id && child.children.length == 0) {
        if (moveWhite === false) {
            socket.emit("black", {
                "black": blackPawn6.id,
                "child": child.id
            });
        }
    }
}
    //twoSpace
    if (child.style.top == `${Number(blackPawn6.parentElement.style.top.slice(0, blackPawn6.parentElement.style.top.length - 2)) - 125}px`
&& child.style.left == blackPawn6.parentElement.style.left)
    if (child.id == event.target.id && child.children.length == 0) {
        if (moveWhite === false && brownSquare27.contains(blackPawn6)) {
            socket.emit("black", {
                "black": blackPawn6.id,
                "child": child.id
            });
        }
    }
    //diagonalSpace
if (child.children.length > 0 && child.style.top == `${Number(blackPawn6.parentElement.style.top.slice(0, blackPawn6.parentElement.style.top.length - 2)) - 62.5}px`
&& child.style.left == `${Number(blackPawn6.parentElement.style.left.slice(0, blackPawn6.parentElement.style.left.length - 2)) + 62.5}px` && child.children[0].id.includes("white")
|| child.children.length > 0 && child.style.top == `${Number(blackPawn6.parentElement.style.top.slice(0, blackPawn6.parentElement.style.top.length - 2)) - 62.5}px`
&& child.style.left == `${Number(blackPawn6.parentElement.style.left.slice(0, blackPawn6.parentElement.style.left.length - 2)) - 62.5}px`
&& child.children[0].id.includes("white")) {
    if (child.children[0].id == event.target.id || child.id == event.target.id) {
        if (moveWhite === false) {
            socket.emit("blackHit", {
                "black": blackPawn6.id,
                "child": child.id
            });
        }
    }
}
});
}
}

function clickBlackPawn7() {
    clickBlack = true;
    blackMove = true;
    blackSocket = true;
    checkerboard.removeAttribute("onclick");
    checkerboard.onclick = moveBlackPawn7;
}

function moveBlackPawn7(event) {
    if (clickBlack) {
    if (blackPawn7.contains(event.target)) {
        return;
    }
    var children = Array.from(checkerboard.children);
    children.forEach(function(child) {
        //oneSpace
        if (child.style.top == `${Number(blackPawn7.parentElement.style.top.slice(0, blackPawn7.parentElement.style.top.length - 2)) - 62.5}px`
&& child.style.left == blackPawn7.parentElement.style.left) {
    if (child.id == event.target.id && child.children.length == 0) {
        if (moveWhite === false) {
            socket.emit("black", {
                "black": blackPawn7.id,
                "child": child.id
            });
        }
    }
}
    //twoSpace
    if (child.style.top == `${Number(blackPawn7.parentElement.style.top.slice(0, blackPawn7.parentElement.style.top.length - 2)) - 125}px`
&& child.style.left == blackPawn7.parentElement.style.left)
    if (child.id == event.target.id && child.children.length == 0) {
        if (moveWhite === false && tanSquare28.contains(blackPawn7)) {
            socket.emit("black", {
                "black": blackPawn7.id,
                "child": child.id
            });
        }
    }
    //diagonalSpace
if (child.children.length > 0 && child.style.top == `${Number(blackPawn7.parentElement.style.top.slice(0, blackPawn7.parentElement.style.top.length - 2)) - 62.5}px`
&& child.style.left == `${Number(blackPawn7.parentElement.style.left.slice(0, blackPawn7.parentElement.style.left.length - 2)) + 62.5}px` && child.children[0].id.includes("white")
|| child.children.length > 0 && child.style.top == `${Number(blackPawn7.parentElement.style.top.slice(0, blackPawn7.parentElement.style.top.length - 2)) - 62.5}px`
&& child.style.left == `${Number(blackPawn7.parentElement.style.left.slice(0, blackPawn7.parentElement.style.left.length - 2)) - 62.5}px`
&& child.children[0].id.includes("white")) {
    if (child.children[0].id == event.target.id || child.id == event.target.id) {
        if (moveWhite === false) {
            socket.emit("blackHit", {
                "black": blackPawn7.id,
                "child": child.id
            });
        }
    }
}
});
}
}

function clickBlackPawn8() {
    clickBlack = true;
    blackMove = true;
    blackSocket = true;
    checkerboard.removeAttribute("onclick");
    checkerboard.onclick = moveBlackPawn8;
}

function moveBlackPawn8(event) {
    if (clickBlack) {
    if (blackPawn8.contains(event.target)) {
        return;
    }
    var children = Array.from(checkerboard.children);
    children.forEach(function(child) {
        //oneSpace
        if (child.style.top == `${Number(blackPawn8.parentElement.style.top.slice(0, blackPawn8.parentElement.style.top.length - 2)) - 62.5}px`
&& child.style.left == blackPawn8.parentElement.style.left) {
    if (child.id == event.target.id && child.children.length == 0) {
        if (moveWhite === false) {
            socket.emit("black", {
                "black": blackPawn8.id,
                "child": child.id
            });
        }
    }
}
    //twoSpace
    if (child.style.top == `${Number(blackPawn8.parentElement.style.top.slice(0, blackPawn8.parentElement.style.top.length - 2)) - 125}px`
&& child.style.left == blackPawn8.parentElement.style.left)
    if (child.id == event.target.id && child.children.length == 0) {
        if (moveWhite === false && brownSquare28.contains(blackPawn8)) {
            socket.emit("black", {
                "black": blackPawn8.id,
                "child": child.id
            });
        }
    }
    //diagonalSpace
if (child.children.length > 0 && child.style.top == `${Number(blackPawn8.parentElement.style.top.slice(0, blackPawn8.parentElement.style.top.length - 2)) - 62.5}px`
&& child.style.left == `${Number(blackPawn8.parentElement.style.left.slice(0, blackPawn8.parentElement.style.left.length - 2)) + 62.5}px` && child.children[0].id.includes("white")
|| child.children.length > 0 && child.style.top == `${Number(blackPawn8.parentElement.style.top.slice(0, blackPawn8.parentElement.style.top.length - 2)) - 62.5}px`
&& child.style.left == `${Number(blackPawn8.parentElement.style.left.slice(0, blackPawn8.parentElement.style.left.length - 2)) - 62.5}px`
&& child.children[0].id.includes("white")) {
    if (child.children[0].id == event.target.id || child.id == event.target.id) {
        if (moveWhite === false) {
            socket.emit("blackHit", {
                "black": blackPawn8.id,
                "child": child.id
            });
        }
    }
}
});
}
}

function clickBlackRook1() {
    clickBlack = true;
    blackMove = true;
    blackSocket = true;
    checkerboard.removeAttribute("onclick");
    checkerboard.onclick = moveBlackRook1;
}

function moveBlackRook1(event) {
    if (clickBlack) {
    if (blackRook1.contains(event.target)) {
        return;
    }
    var children = Array.from(checkerboard.children);
    for (var child of children) {
        if (event.target.id.includes("white") || event.target.children.length > 0 && event.target.children[0].id.includes("white")) {
        if (child.children.length > 0 &&
        Number(event.target.parentElement.style.top.slice(0, event.target.parentElement.style.top.length - 2)) < Number(child.style.top.slice(0, child.style.top.length - 2))
        && Number(child.style.top.slice(0, child.style.top.length - 2)) < Number(blackRook1.parentElement.style.top.slice(0, blackRook1.parentElement.style.top.length - 2))
        && child.style.left == blackRook1.parentElement.style.left && child.id != blackRook1.parentElement.id
        && Number(event.target.parentElement.style.top.slice(0, event.target.parentElement.style.top.length - 2)) < Number(blackRook1.parentElement.style.top.slice(0, blackRook1.parentElement.style.top.length - 2)) ||
        child.children.length > 0 &&
        Number(event.target.parentElement.style.top.slice(0, event.target.parentElement.style.top.length - 2)) > Number(child.style.top.slice(0, child.style.top.length - 2))
        && Number(child.style.top.slice(0, child.style.top.length - 2)) > Number(blackRook1.parentElement.style.top.slice(0, blackRook1.parentElement.style.top.length - 2))
        && child.style.left == blackRook1.parentElement.style.left && child.id != blackRook1.parentElement.id
        && Number(event.target.parentElement.style.top.slice(0, event.target.parentElement.style.top.length - 2)) > Number(blackRook1.parentElement.style.top.slice(0, blackRook1.parentElement.style.top.length - 2)) ||
        child.children.length > 0 &&
        Number(event.target.parentElement.style.left.slice(0, event.target.parentElement.style.left.length - 2)) > Number(child.style.left.slice(0, child.style.left.length - 2))
        && Number(child.style.left.slice(0, child.style.left.length - 2)) > Number(blackRook1.parentElement.style.left.slice(0, blackRook1.parentElement.style.left.length - 2))
        && child.style.top == blackRook1.parentElement.style.top && child.id != blackRook1.parentElement.id
        && Number(event.target.parentElement.style.left.slice(0, event.target.parentElement.style.left.length - 2)) > Number(blackRook1.parentElement.style.left.slice(0, blackRook1.parentElement.style.left.length - 2)) ||
        child.children.length > 0 &&
        Number(event.target.parentElement.style.left.slice(0, event.target.parentElement.style.left.length - 2)) < Number(child.style.left.slice(0, child.style.left.length - 2))
        && Number(child.style.left.slice(0, child.style.left.length - 2)) < Number(blackRook1.parentElement.style.left.slice(0, blackRook1.parentElement.style.left.length - 2))
        && child.style.top == blackRook1.parentElement.style.top && child.id != blackRook1.parentElement.id
        && Number(event.target.parentElement.style.left.slice(0, event.target.parentElement.style.left.length - 2)) < Number(blackRook1.parentElement.style.left.slice(0, blackRook1.parentElement.style.left.length - 2))) {
            return console.log(child.id);
        }
    }
    if (event.target.id.includes("brown") || event.target.id.includes("tan")) {
        if (child.children.length > 0 &&
            Number(event.target.style.top.slice(0, event.target.style.top.length - 2)) < Number(child.style.top.slice(0, child.style.top.length - 2))
            && Number(child.style.top.slice(0, child.style.top.length - 2)) < Number(blackRook1.parentElement.style.top.slice(0, blackRook1.parentElement.style.top.length - 2))
            && child.style.left == blackRook1.parentElement.style.left && child.id != blackRook1.parentElement.id
            && Number(event.target.style.top.slice(0, event.target.style.top.length - 2)) < Number(blackRook1.parentElement.style.top.slice(0, blackRook1.parentElement.style.top.length - 2)) ||
            child.children.length > 0 &&
            Number(event.target.style.top.slice(0, event.target.style.top.length - 2)) > Number(child.style.top.slice(0, child.style.top.length - 2))
            && Number(child.style.top.slice(0, child.style.top.length - 2)) > Number(blackRook1.parentElement.style.top.slice(0, blackRook1.parentElement.style.top.length - 2))
            && child.style.left == blackRook1.parentElement.style.left && child.id != blackRook1.parentElement.id
            && Number(event.target.style.top.slice(0, event.target.style.top.length - 2)) > Number(blackRook1.parentElement.style.top.slice(0, blackRook1.parentElement.style.top.length - 2)) ||
            child.children.length > 0 &&
            Number(event.target.style.left.slice(0, event.target.style.left.length - 2)) > Number(child.style.left.slice(0, child.style.left.length - 2))
            && Number(child.style.left.slice(0, child.style.left.length - 2)) > Number(blackRook1.parentElement.style.left.slice(0, blackRook1.parentElement.style.left.length - 2))
            && child.style.top == blackRook1.parentElement.style.top && child.id != blackRook1.parentElement.id
            && Number(event.target.style.left.slice(0, event.target.style.left.length - 2)) > Number(blackRook1.parentElement.style.left.slice(0, blackRook1.parentElement.style.left.length - 2)) ||
            child.children.length > 0 &&
            Number(event.target.style.left.slice(0, event.target.style.left.length - 2)) < Number(child.style.left.slice(0, child.style.left.length - 2))
            && Number(child.style.left.slice(0, child.style.left.length - 2)) < Number(blackRook1.parentElement.style.left.slice(0, blackRook1.parentElement.style.left.length - 2))
            && child.style.top == blackRook1.parentElement.style.top && child.id != blackRook1.parentElement.id
            && Number(event.target.style.left.slice(0, event.target.style.left.length - 2)) < Number(blackRook1.parentElement.style.left.slice(0, blackRook1.parentElement.style.left.length - 2))) {
            return console.log(child.id);
        }
    }
    }
    children.forEach(function(child) {
        //Up
        if (Number(child.style.top.slice(0, child.style.top.length - 2)) < Number(blackRook1.parentElement.style.top.slice(0, blackRook1.parentElement.style.top.length - 2))
&& child.style.left == blackRook1.parentElement.style.left) {
    if (child.id == event.target.id && child.children.length == 0) {
        if (moveWhite === false) {
            socket.emit("black", {
                "black": blackRook1.id,
                "child": child.id
            });
        }
    }
}
//upHit
if (child.children.length > 0 && child.children[0].id.includes("white") && Number(child.style.top.slice(0, child.style.top.length - 2)) <
Number(blackRook1.parentElement.style.top.slice(0, blackRook1.parentElement.style.top.length - 2))
&& child.style.left == blackRook1.parentElement.style.left && child.children[0].id.includes("white")) {
    if (child.children[0].id == event.target.id || child.id == event.target.id) {
        if (moveWhite === false) {
            socket.emit("blackHit", {
                "black": blackRook1.id,
                "child": child.id
            });
        }
    }
}
    //Down
    if (Number(child.style.top.slice(0, child.style.top.length - 2)) > Number(blackRook1.parentElement.style.top.slice(0, blackRook1.parentElement.style.top.length - 2))
&& child.style.left == blackRook1.parentElement.style.left) {
    if (child.id == event.target.id && child.children.length == 0) {
        if (moveWhite === false) {
            socket.emit("black", {
                "black": blackRook1.id,
                "child": child.id
            });
        }
    }
}
//downHit
if (child.children.length > 0 && child.children[0].id.includes("white") && Number(child.style.top.slice(0, child.style.top.length - 2)) >
Number(blackRook1.parentElement.style.top.slice(0, blackRook1.parentElement.style.top.length - 2))
&& child.style.left == blackRook1.parentElement.style.left && child.children[0].id.includes("white")) {
    if (child.children[0].id == event.target.id || child.id == event.target.id) {
        if (moveWhite === false) {
            socket.emit("blackHit", {
                "black": blackRook1.id,
                "child": child.id
            });
        }
    }
}
    //Left
    if (Number(child.style.left.slice(0, child.style.left.length - 2)) > Number(blackRook1.parentElement.style.left.slice(0, blackRook1.parentElement.style.left.length - 2))
&& child.style.top == blackRook1.parentElement.style.top) {
    if (child.id == event.target.id && child.children.length == 0) {
        if (moveWhite === false) {
            socket.emit("black", {
                "black": blackRook1.id,
                "child": child.id
            });
        }
    }
}
//leftHit
if (child.children.length > 0 && child.children[0].id.includes("white") && Number(child.style.left.slice(0, child.style.left.length - 2)) <
Number(blackRook1.parentElement.style.left.slice(0, blackRook1.parentElement.style.left.length - 2))
&& child.style.top == blackRook1.parentElement.style.top && child.children[0].id.includes("white")) {
    if (child.children[0].id == event.target.id || child.id == event.target.id) {
        if (moveWhite === false) {
            socket.emit("blackHit", {
                "black": blackRook1.id,
                "child": child.id
            });
        }
    }
}
    //Right
    if (Number(child.style.left.slice(0, child.style.left.length - 2)) < Number(blackRook1.parentElement.style.left.slice(0, blackRook1.parentElement.style.left.length - 2))
    && child.style.top == blackRook1.parentElement.style.top) {
        if (child.id == event.target.id && child.children.length == 0) {
            if (moveWhite === false) {
                socket.emit("black", {
                    "black": blackRook1.id,
                    "child": child.id
                });
            }
        }
    }
    //rightHit
if (child.children.length > 0 && child.children[0].id.includes("white") && Number(child.style.left.slice(0, child.style.left.length - 2)) >
Number(blackRook1.parentElement.style.left.slice(0, blackRook1.parentElement.style.left.length - 2))
&& child.style.top == blackRook1.parentElement.style.top && child.children[0].id.includes("white")) {
    if (child.children[0].id == event.target.id || child.id == event.target.id) {
        if (moveWhite === false) {
            socket.emit("blackHit", {
                "black": blackRook1.id,
                "child": child.id
            });
        }
    }
}
});
}
}

function clickBlackKnight1() {
    clickBlack = true;
    blackMove = true;
    blackSocket = true;
    checkerboard.removeAttribute("onclick");
    checkerboard.onclick = moveBlackKnight1;
}

function moveBlackKnight1(event) {
    if (clickBlack) {
    if (blackKnight1.contains(event.target)) {
        return;
    }
    var children = Array.from(checkerboard.children);
    children.forEach(function(child) {
    //twoSpaceUp
    if (child.style.top == `${Number(blackKnight1.parentElement.style.top.slice(0, blackKnight1.parentElement.style.top.length - 2)) - 125}px`
    && child.style.left == `${Number(blackKnight1.parentElement.style.left.slice(0, blackKnight1.parentElement.style.left.length - 2)) + 62.5}px`
    || child.style.top == `${Number(blackKnight1.parentElement.style.top.slice(0, blackKnight1.parentElement.style.top.length - 2)) - 125}px`
    && child.style.left == `${Number(blackKnight1.parentElement.style.left.slice(0, blackKnight1.parentElement.style.left.length - 2)) - 62.5}px`) {
        if (child.id == event.target.id && child.children.length == 0) {
            if (moveWhite === false) {
                socket.emit("black", {
                    "black": blackKnight1.id,
                    "child": child.id
                });
            }
        }
        if (child.children.length > 0 && child.id == event.target.parentElement.id && event.target.id.includes("white")
        || child.children.length > 0 && child.children[0].id == event.target.id && event.target.id.includes("white")) {
            if (moveWhite === false) {
                socket.emit("blackHit", {
                    "black": blackKnight1.id,
                    "child": child.id
                });
            }
        }
    }
    //twoSpaceDown
    if (child.style.top == `${Number(blackKnight1.parentElement.style.top.slice(0, blackKnight1.parentElement.style.top.length - 2)) + 125}px`
    && child.style.left == `${Number(blackKnight1.parentElement.style.left.slice(0, blackKnight1.parentElement.style.left.length - 2)) + 62.5}px`
    || child.style.top == `${Number(blackKnight1.parentElement.style.top.slice(0, blackKnight1.parentElement.style.top.length - 2)) + 125}px`
    && child.style.left == `${Number(blackKnight1.parentElement.style.left.slice(0, blackKnight1.parentElement.style.left.length - 2)) - 62.5}px`) {
        if (child.id == event.target.id && child.children.length == 0) {
            if (moveWhite === false) {
                socket.emit("black", {
                    "black": blackKnight1.id,
                    "child": child.id
                });
            }
        }
        if (child.children.length > 0 && child.id == event.target.parentElement.id && event.target.id.includes("white")
        || child.children.length > 0 && child.children[0].id == event.target.id && event.target.id.includes("white")) {
            if (moveWhite === false) {
                socket.emit("blackHit", {
                    "black": blackKnight1.id,
                    "child": child.id
                });
            }
        }
    }
    //oneSpaceUp
    if (child.style.top == `${Number(blackKnight1.parentElement.style.top.slice(0, blackKnight1.parentElement.style.top.length - 2)) - 62.5}px`
    && child.style.left == `${Number(blackKnight1.parentElement.style.left.slice(0, blackKnight1.parentElement.style.left.length - 2)) + 125}px`
    || child.style.top == `${Number(blackKnight1.parentElement.style.top.slice(0, blackKnight1.parentElement.style.top.length - 2)) - 62.5}px`
    && child.style.left == `${Number(blackKnight1.parentElement.style.left.slice(0, blackKnight1.parentElement.style.left.length - 2)) - 125}px`) {
        if (child.id == event.target.id && child.children.length == 0) {
            if (moveWhite === false) {
                socket.emit("black", {
                    "black": blackKnight1.id,
                    "child": child.id
                });
            }
        }
        if (child.children.length > 0 && child.id == event.target.parentElement.id && event.target.id.includes("white")
        || child.children.length > 0 && child.children[0].id == event.target.id && event.target.id.includes("white")) {
            if (moveWhite === false) {
                socket.emit("blackHit", {
                    "black": blackKnight1.id,
                    "child": child.id
                });
            }
        }
    }
    //oneSpaceDown
    if (child.style.top == `${Number(blackKnight1.parentElement.style.top.slice(0, blackKnight1.parentElement.style.top.length - 2)) + 62.5}px`
    && child.style.left == `${Number(blackKnight1.parentElement.style.left.slice(0, blackKnight1.parentElement.style.left.length - 2)) + 125}px`
    || child.style.top == `${Number(blackKnight1.parentElement.style.top.slice(0, blackKnight1.parentElement.style.top.length - 2)) + 62.5}px`
    && child.style.left == `${Number(blackKnight1.parentElement.style.left.slice(0, blackKnight1.parentElement.style.left.length - 2)) - 125}px`) {
        if (child.id == event.target.id && child.children.length == 0) {
            if (moveWhite === false) {
                socket.emit("black", {
                    "black": blackKnight1.id,
                    "child": child.id
                });
            }
        }
        if (child.children.length > 0 && child.id == event.target.parentElement.id && event.target.id.includes("white")
        || child.children.length > 0 && child.children[0].id == event.target.id && event.target.id.includes("white")) {
            if (moveWhite === false) {
                socket.emit("blackHit", {
                    "black": blackKnight1.id,
                    "child": child.id
                });
            }
        }
    }
});
}
}

function clickBlackBishop1() {
    clickBlack = true;
    blackMove = true;
    blackSocket = true;
    checkerboard.removeAttribute("onclick");
    checkerboard.onclick = moveBlackBishop1;
}

function moveBlackBishop1(event) {
    if (clickBlack) {
    if (blackBishop1.contains(event.target)) {
        return;
    }
    var children = Array.from(checkerboard.children);
    for (var child of children) {
        if (event.target.id.includes("white") || event.target.children.length > 0 && event.target.children[0].id.includes("white")) {
            if (child.children.length > 0 && Number(child.style.left.slice(0, child.style.left.length - 2)) < Number(event.target.parentElement.style.left.slice(0, event.target.parentElement.style.left.length - 2))
            && Number(child.style.left.slice(0, child.style.left.length - 2)) > Number(blackBishop1.parentElement.style.left.slice(0, blackBishop1.parentElement.style.left.length - 2))
            && Number(child.style.top.slice(0, child.style.top.length - 2)) > Number(event.target.parentElement.style.top.slice(0, event.target.parentElement.style.top.length - 2)) && child.id != blackBishop1.parentElement.id
            && Number(child.style.top.slice(0, child.style.top.length - 2)) < Number(blackBishop1.parentElement.style.top.slice(0, blackBishop1.parentElement.style.top.length - 2)) && child.id.includes("brown")
            && Number(child.style.left.slice(0, child.style.left.length - 2)) - Number(blackBishop1.parentElement.style.left.slice(0, blackBishop1.parentElement.style.left.length - 2))
            == Number(blackBishop1.parentElement.style.top.slice(0, blackBishop1.parentElement.style.top.length - 2)) - Number(child.style.top.slice(0, child.style.top.length - 2)) ||
            child.children.length > 0 && Number(child.style.left.slice(0, child.style.left.length - 2)) > Number(event.target.parentElement.style.left.slice(0, event.target.parentElement.style.left.length - 2))
            && Number(child.style.left.slice(0, child.style.left.length - 2)) < Number(blackBishop1.parentElement.style.left.slice(0, blackBishop1.parentElement.style.left.length - 2))
            && Number(child.style.top.slice(0, child.style.top.length - 2)) > Number(event.target.parentElement.style.top.slice(0, event.target.parentElement.style.top.length - 2)) && child.id != blackBishop1.parentElement.id
            && Number(child.style.top.slice(0, child.style.top.length - 2)) < Number(blackBishop1.parentElement.style.top.slice(0, blackBishop1.parentElement.style.top.length - 2)) && child.id.includes("brown")
            && Number(blackBishop1.parentElement.style.left.slice(0, blackBishop1.parentElement.style.left.length - 2)) - Number(child.style.left.slice(0, child.style.left.length - 2))
            == Number(blackBishop1.parentElement.style.top.slice(0, blackBishop1.parentElement.style.top.length - 2)) - Number(child.style.top.slice(0, child.style.top.length - 2)) ||
            child.children.length > 0 && Number(child.style.left.slice(0, child.style.left.length - 2)) < Number(event.target.parentElement.style.left.slice(0, event.target.parentElement.style.left.length - 2))
            && Number(child.style.left.slice(0, child.style.left.length - 2)) > Number(blackBishop1.parentElement.style.left.slice(0, blackBishop1.parentElement.style.left.length - 2))
            && Number(child.style.top.slice(0, child.style.top.length - 2)) < Number(event.target.parentElement.style.top.slice(0, event.target.parentElement.style.top.length - 2)) && child.id != blackBishop1.parentElement.id
            && Number(child.style.top.slice(0, child.style.top.length - 2)) > Number(blackBishop1.parentElement.style.top.slice(0, blackBishop1.parentElement.style.top.length - 2)) && child.id.includes("brown")
            && Number(child.style.left.slice(0, child.style.left.length - 2)) - Number(blackBishop1.parentElement.style.left.slice(0, blackBishop1.parentElement.style.left.length - 2))
            == Number(child.style.top.slice(0, child.style.top.length - 2)) - Number(blackBishop1.parentElement.style.top.slice(0, blackBishop1.parentElement.style.top.length - 2)) ||
            child.children.length > 0 && Number(child.style.left.slice(0, child.style.left.length - 2)) > Number(event.target.parentElement.style.left.slice(0, event.target.parentElement.style.left.length - 2))
            && Number(child.style.left.slice(0, child.style.left.length - 2)) < Number(blackBishop1.parentElement.style.left.slice(0, blackBishop1.parentElement.style.left.length - 2))
            && Number(child.style.top.slice(0, child.style.top.length - 2)) < Number(event.target.parentElement.style.top.slice(0, event.target.parentElement.style.top.length - 2)) && child.id != blackBishop1.parentElement.id
            && Number(child.style.top.slice(0, child.style.top.length - 2)) > Number(blackBishop1.parentElement.style.top.slice(0, blackBishop1.parentElement.style.top.length - 2)) && child.id.includes("brown")
            && Number(blackBishop1.parentElement.style.left.slice(0, blackBishop1.parentElement.style.left.length - 2)) - Number(child.style.left.slice(0, child.style.left.length - 2))
            == Number(child.style.top.slice(0, child.style.top.length - 2)) - Number(blackBishop1.parentElement.style.top.slice(0, blackBishop1.parentElement.style.top.length - 2))) {
                return console.log(child.id);
            }
        }
        if (event.target.id.includes("brown") || event.target.id.includes("tan")) {
            if (child.children.length > 0 && Number(child.style.left.slice(0, child.style.left.length - 2)) < Number(event.target.style.left.slice(0, event.target.style.left.length - 2))
            && Number(child.style.left.slice(0, child.style.left.length - 2)) > Number(blackBishop1.parentElement.style.left.slice(0, blackBishop1.parentElement.style.left.length - 2))
            && Number(child.style.top.slice(0, child.style.top.length - 2)) > Number(event.target.style.top.slice(0, event.target.style.top.length - 2)) && child.id != blackBishop1.parentElement.id
            && Number(child.style.top.slice(0, child.style.top.length - 2)) < Number(blackBishop1.parentElement.style.top.slice(0, blackBishop1.parentElement.style.top.length - 2)) && child.id.includes("brown")
            && Number(child.style.left.slice(0, child.style.left.length - 2)) - Number(blackBishop1.parentElement.style.left.slice(0, blackBishop1.parentElement.style.left.length - 2))
            == Number(blackBishop1.parentElement.style.top.slice(0, blackBishop1.parentElement.style.top.length - 2)) - Number(child.style.top.slice(0, child.style.top.length - 2)) ||
            child.children.length > 0 && Number(child.style.left.slice(0, child.style.left.length - 2)) > Number(event.target.style.left.slice(0, event.target.style.left.length - 2))
            && Number(child.style.left.slice(0, child.style.left.length - 2)) < Number(blackBishop1.parentElement.style.left.slice(0, blackBishop1.parentElement.style.left.length - 2))
            && Number(child.style.top.slice(0, child.style.top.length - 2)) > Number(event.target.style.top.slice(0, event.target.style.top.length - 2)) && child.id != blackBishop1.parentElement.id
            && Number(child.style.top.slice(0, child.style.top.length - 2)) < Number(blackBishop1.parentElement.style.top.slice(0, blackBishop1.parentElement.style.top.length - 2)) && child.id.includes("brown")
            && Number(blackBishop1.parentElement.style.left.slice(0, blackBishop1.parentElement.style.left.length - 2)) - Number(child.style.left.slice(0, child.style.left.length - 2))
            == Number(blackBishop1.parentElement.style.top.slice(0, blackBishop1.parentElement.style.top.length - 2)) - Number(child.style.top.slice(0, child.style.top.length - 2)) ||
            child.children.length > 0 && Number(child.style.left.slice(0, child.style.left.length - 2)) < Number(event.target.style.left.slice(0, event.target.style.left.length - 2))
            && Number(child.style.left.slice(0, child.style.left.length - 2)) > Number(blackBishop1.parentElement.style.left.slice(0, blackBishop1.parentElement.style.left.length - 2))
            && Number(child.style.top.slice(0, child.style.top.length - 2)) < Number(event.target.style.top.slice(0, event.target.style.top.length - 2)) && child.id != blackBishop1.parentElement.id
            && Number(child.style.top.slice(0, child.style.top.length - 2)) > Number(blackBishop1.parentElement.style.top.slice(0, blackBishop1.parentElement.style.top.length - 2)) && child.id.includes("brown")
            && Number(child.style.left.slice(0, child.style.left.length - 2)) - Number(blackBishop1.parentElement.style.left.slice(0, blackBishop1.parentElement.style.left.length - 2))
            == Number(child.style.top.slice(0, child.style.top.length - 2)) - Number(blackBishop1.parentElement.style.top.slice(0, blackBishop1.parentElement.style.top.length - 2)) ||
            child.children.length > 0 && Number(child.style.left.slice(0, child.style.left.length - 2)) > Number(event.target.style.left.slice(0, event.target.style.left.length - 2))
            && Number(child.style.left.slice(0, child.style.left.length - 2)) < Number(blackBishop1.parentElement.style.left.slice(0, blackBishop1.parentElement.style.left.length - 2))
            && Number(child.style.top.slice(0, child.style.top.length - 2)) < Number(event.target.style.top.slice(0, event.target.style.top.length - 2)) && child.id != blackBishop1.parentElement.id
            && Number(child.style.top.slice(0, child.style.top.length - 2)) > Number(blackBishop1.parentElement.style.top.slice(0, blackBishop1.parentElement.style.top.length - 2)) && child.id.includes("brown")
            && Number(blackBishop1.parentElement.style.left.slice(0, blackBishop1.parentElement.style.left.length - 2)) - Number(child.style.left.slice(0, child.style.left.length - 2))
            == Number(child.style.top.slice(0, child.style.top.length - 2)) - Number(blackBishop1.parentElement.style.top.slice(0, blackBishop1.parentElement.style.top.length - 2))) {
                return console.log(child.id);
            }
        }
    }
    children.forEach(function(child) {
    //Diagonal
    if (Number(child.style.left.slice(0, child.style.left.length - 2)) - Number(blackBishop1.parentElement.style.left.slice(0, blackBishop1.parentElement.style.left.length - 2))
    == Number(blackBishop1.parentElement.style.top.slice(0, blackBishop1.parentElement.style.top.length - 2)) - Number(child.style.top.slice(0, child.style.top.length - 2)) ||
    Number(blackBishop1.parentElement.style.left.slice(0, blackBishop1.parentElement.style.left.length - 2)) - Number(child.style.left.slice(0, child.style.left.length - 2))
    == Number(blackBishop1.parentElement.style.top.slice(0, blackBishop1.parentElement.style.top.length - 2)) - Number(child.style.top.slice(0, child.style.top.length - 2))) {
        if (child.id == event.target.id && child.children.length == 0) {
            if (moveWhite === false) {
                socket.emit("black", {
                "black": blackBishop1.id,
                "child": child.id
            });
            }
        }
    }
    //diagonalHit
    if (child.children.length > 0 && Number(child.style.left.slice(0, child.style.left.length - 2)) - Number(blackBishop1.parentElement.style.left.slice(0, blackBishop1.parentElement.style.left.length - 2))
    == Number(blackBishop1.parentElement.style.top.slice(0, blackBishop1.parentElement.style.top.length - 2)) - Number(child.style.top.slice(0, child.style.top.length - 2))
    && child.children[0].id.includes("white") || child.children.length > 0 &&
    Number(blackBishop1.parentElement.style.left.slice(0, blackBishop1.parentElement.style.left.length - 2)) - Number(child.style.left.slice(0, child.style.left.length - 2))
    == Number(blackBishop1.parentElement.style.top.slice(0, blackBishop1.parentElement.style.top.length - 2)) - Number(child.style.top.slice(0, child.style.top.length - 2))
    && child.children[0].id.includes("white")) {
        if (child.children[0].id == event.target.id || child.id == event.target.id) {
            if (moveWhite === false) {
                socket.emit("blackHit", {
                    "black": blackBishop1.id,
                    "child": child.id
                });
            }
        }
    }
});
}
}

function clickBlackQueen() {
    clickBlack = true;
    blackMove = true;
    blackSocket = true;
    checkerboard.removeAttribute("onclick");
    checkerboard.onclick = moveBlackQueen;
}

function moveBlackQueen(event) {
    if (clickBlack) {
    if (blackQueen.contains(event.target)) {
        return;
    }
    var children = Array.from(checkerboard.children);
    for (var child of children) {
        if (event.target.id.includes("white") || event.target.children.length > 0 && event.target.children[0].id.includes("white")) {
            if (child.children.length > 0 && Number(child.style.left.slice(0, child.style.left.length - 2)) < Number(event.target.parentElement.style.left.slice(0, event.target.parentElement.style.left.length - 2))
            && Number(child.style.left.slice(0, child.style.left.length - 2)) > Number(blackQueen.parentElement.style.left.slice(0, blackQueen.parentElement.style.left.length - 2))
            && Number(child.style.top.slice(0, child.style.top.length - 2)) > Number(event.target.parentElement.style.top.slice(0, event.target.parentElement.style.top.length - 2)) && child.id != blackQueen.parentElement.id
            && Number(child.style.top.slice(0, child.style.top.length - 2)) < Number(blackQueen.parentElement.style.top.slice(0, blackQueen.parentElement.style.top.length - 2))
            && Number(child.style.left.slice(0, child.style.left.length - 2)) - Number(blackQueen.parentElement.style.left.slice(0, blackQueen.parentElement.style.left.length - 2))
            == Number(blackQueen.parentElement.style.top.slice(0, blackQueen.parentElement.style.top.length - 2)) - Number(child.style.top.slice(0, child.style.top.length - 2)) ||
            child.children.length > 0 && Number(child.style.left.slice(0, child.style.left.length - 2)) > Number(event.target.parentElement.style.left.slice(0, event.target.parentElement.style.left.length - 2))
            && Number(child.style.left.slice(0, child.style.left.length - 2)) < Number(blackQueen.parentElement.style.left.slice(0, blackQueen.parentElement.style.left.length - 2))
            && Number(child.style.top.slice(0, child.style.top.length - 2)) > Number(event.target.parentElement.style.top.slice(0, event.target.parentElement.style.top.length - 2)) && child.id != blackQueen.parentElement.id
            && Number(child.style.top.slice(0, child.style.top.length - 2)) < Number(blackQueen.parentElement.style.top.slice(0, blackQueen.parentElement.style.top.length - 2))
            && Number(blackQueen.parentElement.style.left.slice(0, blackQueen.parentElement.style.left.length - 2)) - Number(child.style.left.slice(0, child.style.left.length - 2))
            == Number(blackQueen.parentElement.style.top.slice(0, blackQueen.parentElement.style.top.length - 2)) - Number(child.style.top.slice(0, child.style.top.length - 2)) ||
            child.children.length > 0 && Number(child.style.left.slice(0, child.style.left.length - 2)) < Number(event.target.parentElement.style.left.slice(0, event.target.parentElement.style.left.length - 2))
            && Number(child.style.left.slice(0, child.style.left.length - 2)) > Number(blackQueen.parentElement.style.left.slice(0, blackQueen.parentElement.style.left.length - 2))
            && Number(child.style.top.slice(0, child.style.top.length - 2)) < Number(event.target.parentElement.style.top.slice(0, event.target.parentElement.style.top.length - 2)) && child.id != blackQueen.parentElement.id
            && Number(child.style.top.slice(0, child.style.top.length - 2)) > Number(blackQueen.parentElement.style.top.slice(0, blackQueen.parentElement.style.top.length - 2))
            && Number(child.style.left.slice(0, child.style.left.length - 2)) - Number(blackQueen.parentElement.style.left.slice(0, blackQueen.parentElement.style.left.length - 2))
            == Number(child.style.top.slice(0, child.style.top.length - 2)) - Number(blackQueen.parentElement.style.top.slice(0, blackQueen.parentElement.style.top.length - 2)) ||
            child.children.length > 0 && Number(child.style.left.slice(0, child.style.left.length - 2)) > Number(event.target.parentElement.style.left.slice(0, event.target.parentElement.style.left.length - 2))
            && Number(child.style.left.slice(0, child.style.left.length - 2)) < Number(blackQueen.parentElement.style.left.slice(0, blackQueen.parentElement.style.left.length - 2))
            && Number(child.style.top.slice(0, child.style.top.length - 2)) < Number(event.target.parentElement.style.top.slice(0, event.target.parentElement.style.top.length - 2)) && child.id != blackQueen.parentElement.id
            && Number(child.style.top.slice(0, child.style.top.length - 2)) > Number(blackQueen.parentElement.style.top.slice(0, blackQueen.parentElement.style.top.length - 2))
            && Number(blackQueen.parentElement.style.left.slice(0, blackQueen.parentElement.style.left.length - 2)) - Number(child.style.left.slice(0, child.style.left.length - 2))
            == Number(child.style.top.slice(0, child.style.top.length - 2)) - Number(blackQueen.parentElement.style.top.slice(0, blackQueen.parentElement.style.top.length - 2))) {
                return console.log(child.id);
            }
        if (event.target.parentElement.style.left == blackQueen.parentElement.style.left
            || event.target.parentElement.style.top == blackQueen.parentElement.style.top
            || event.target.style.left == blackQueen.parentElement.style.left
            || event.target.style.top == blackQueen.parentElement.style.top) {
            if (event.target.style.left == blackQueen.parentElement.style.left && child.children.length > 0 &&
                Number(event.target.parentElement.style.top.slice(0, event.target.parentElement.style.top.length - 2)) < Number(child.style.top.slice(0, child.style.top.length - 2))
                && Number(child.style.top.slice(0, child.style.top.length - 2)) < Number(blackQueen.parentElement.style.top.slice(0, blackQueen.parentElement.style.top.length - 2))
                && child.style.left == blackQueen.parentElement.style.left && child.id != blackQueen.parentElement.id
                && Number(event.target.parentElement.style.top.slice(0, event.target.parentElement.style.top.length - 2)) < Number(blackQueen.parentElement.style.top.slice(0, blackQueen.parentElement.style.top.length - 2)) ||
                event.target.style.left == blackQueen.parentElement.style.left && child.children.length > 0 &&
                Number(event.target.parentElement.style.top.slice(0, event.target.parentElement.style.top.length - 2)) > Number(child.style.top.slice(0, child.style.top.length - 2))
                && Number(child.style.top.slice(0, child.style.top.length - 2)) > Number(blackQueen.parentElement.style.top.slice(0, blackQueen.parentElement.style.top.length - 2))
                && child.style.left == blackQueen.parentElement.style.left && child.id != blackQueen.parentElement.id
                && Number(event.target.parentElement.style.top.slice(0, event.target.parentElement.style.top.length - 2)) > Number(blackQueen.parentElement.style.top.slice(0, blackQueen.parentElement.style.top.length - 2)) ||
                event.target.style.top == blackQueen.parentElement.style.top && child.children.length > 0 &&
                Number(event.target.parentElement.style.left.slice(0, event.target.parentElement.style.left.length - 2)) > Number(child.style.left.slice(0, child.style.left.length - 2))
                && Number(child.style.left.slice(0, child.style.left.length - 2)) > Number(blackQueen.parentElement.style.left.slice(0, blackQueen.parentElement.style.left.length - 2))
                && child.style.top == blackQueen.parentElement.style.top && child.id != blackQueen.parentElement.id
                && Number(event.target.parentElement.style.left.slice(0, event.target.parentElement.style.left.length - 2)) > Number(blackQueen.parentElement.style.left.slice(0, blackQueen.parentElement.style.left.length - 2)) ||
                event.target.style.top == blackQueen.parentElement.style.top && child.children.length > 0 &&
                Number(event.target.parentElement.style.left.slice(0, event.target.parentElement.style.left.length - 2)) < Number(child.style.left.slice(0, child.style.left.length - 2))
                && Number(child.style.left.slice(0, child.style.left.length - 2)) < Number(blackQueen.parentElement.style.left.slice(0, blackQueen.parentElement.style.left.length - 2))
                && child.style.top == blackQueen.parentElement.style.top && child.id != blackQueen.parentElement.id
                && Number(event.target.parentElement.style.left.slice(0, event.target.parentElement.style.left.length - 2)) < Number(blackQueen.parentElement.style.left.slice(0, blackQueen.parentElement.style.left.length - 2))) {
                return console.log(child.id);
            }
        }
        }
        if (event.target.id.includes("brown") || event.target.id.includes("tan")) {
            if (child.children.length > 0 && Number(child.style.left.slice(0, child.style.left.length - 2)) < Number(event.target.style.left.slice(0, event.target.style.left.length - 2))
            && Number(child.style.left.slice(0, child.style.left.length - 2)) > Number(blackQueen.parentElement.style.left.slice(0, blackQueen.parentElement.style.left.length - 2))
            && Number(child.style.top.slice(0, child.style.top.length - 2)) > Number(event.target.style.top.slice(0, event.target.style.top.length - 2)) && child.id != blackQueen.parentElement.id
            && Number(child.style.top.slice(0, child.style.top.length - 2)) < Number(blackQueen.parentElement.style.top.slice(0, blackQueen.parentElement.style.top.length - 2))
            && Number(child.style.left.slice(0, child.style.left.length - 2)) - Number(blackQueen.parentElement.style.left.slice(0, blackQueen.parentElement.style.left.length - 2))
            == Number(blackQueen.parentElement.style.top.slice(0, blackQueen.parentElement.style.top.length - 2)) - Number(child.style.top.slice(0, child.style.top.length - 2)) ||
            child.children.length > 0 && Number(child.style.left.slice(0, child.style.left.length - 2)) > Number(event.target.style.left.slice(0, event.target.style.left.length - 2))
            && Number(child.style.left.slice(0, child.style.left.length - 2)) < Number(blackQueen.parentElement.style.left.slice(0, blackQueen.parentElement.style.left.length - 2))
            && Number(child.style.top.slice(0, child.style.top.length - 2)) > Number(event.target.style.top.slice(0, event.target.style.top.length - 2)) && child.id != blackQueen.parentElement.id
            && Number(child.style.top.slice(0, child.style.top.length - 2)) < Number(blackQueen.parentElement.style.top.slice(0, blackQueen.parentElement.style.top.length - 2))
            && Number(blackQueen.parentElement.style.left.slice(0, blackQueen.parentElement.style.left.length - 2)) - Number(child.style.left.slice(0, child.style.left.length - 2))
            == Number(blackQueen.parentElement.style.top.slice(0, blackQueen.parentElement.style.top.length - 2)) - Number(child.style.top.slice(0, child.style.top.length - 2)) ||
            child.children.length > 0 && Number(child.style.left.slice(0, child.style.left.length - 2)) < Number(event.target.style.left.slice(0, event.target.style.left.length - 2))
            && Number(child.style.left.slice(0, child.style.left.length - 2)) > Number(blackQueen.parentElement.style.left.slice(0, blackQueen.parentElement.style.left.length - 2))
            && Number(child.style.top.slice(0, child.style.top.length - 2)) < Number(event.target.style.top.slice(0, event.target.style.top.length - 2)) && child.id != blackQueen.parentElement.id
            && Number(child.style.top.slice(0, child.style.top.length - 2)) > Number(blackQueen.parentElement.style.top.slice(0, blackQueen.parentElement.style.top.length - 2))
            && Number(child.style.left.slice(0, child.style.left.length - 2)) - Number(blackQueen.parentElement.style.left.slice(0, blackQueen.parentElement.style.left.length - 2))
            == Number(child.style.top.slice(0, child.style.top.length - 2)) - Number(blackQueen.parentElement.style.top.slice(0, blackQueen.parentElement.style.top.length - 2)) ||
            child.children.length > 0 && Number(child.style.left.slice(0, child.style.left.length - 2)) > Number(event.target.style.left.slice(0, event.target.style.left.length - 2))
            && Number(child.style.left.slice(0, child.style.left.length - 2)) < Number(blackQueen.parentElement.style.left.slice(0, blackQueen.parentElement.style.left.length - 2))
            && Number(child.style.top.slice(0, child.style.top.length - 2)) < Number(event.target.style.top.slice(0, event.target.style.top.length - 2)) && child.id != blackQueen.parentElement.id
            && Number(child.style.top.slice(0, child.style.top.length - 2)) > Number(blackQueen.parentElement.style.top.slice(0, blackQueen.parentElement.style.top.length - 2))
            && Number(blackQueen.parentElement.style.left.slice(0, blackQueen.parentElement.style.left.length - 2)) - Number(child.style.left.slice(0, child.style.left.length - 2))
            == Number(child.style.top.slice(0, child.style.top.length - 2)) - Number(blackQueen.parentElement.style.top.slice(0, blackQueen.parentElement.style.top.length - 2))) {
                return console.log(child.id);
        }
        if (event.target.parentElement.style.left == blackQueen.parentElement.style.left
            || event.target.parentElement.style.top == blackQueen.parentElement.style.top
            || event.target.style.left == blackQueen.parentElement.style.left
            || event.target.style.top == blackQueen.parentElement.style.top) {
            if (event.target.style.left == blackQueen.parentElement.style.left && child.children.length > 0 &&
                Number(event.target.style.top.slice(0, event.target.style.top.length - 2)) < Number(child.style.top.slice(0, child.style.top.length - 2))
                && Number(child.style.top.slice(0, child.style.top.length - 2)) < Number(blackQueen.parentElement.style.top.slice(0, blackQueen.parentElement.style.top.length - 2))
                && child.style.left == blackQueen.parentElement.style.left && child.id != blackQueen.parentElement.id
                && Number(event.target.style.top.slice(0, event.target.style.top.length - 2)) < Number(blackQueen.parentElement.style.top.slice(0, blackQueen.parentElement.style.top.length - 2)) ||
                event.target.style.left == blackQueen.parentElement.style.left && child.children.length > 0 &&
                Number(event.target.style.top.slice(0, event.target.style.top.length - 2)) > Number(child.style.top.slice(0, child.style.top.length - 2))
                && Number(child.style.top.slice(0, child.style.top.length - 2)) > Number(blackQueen.parentElement.style.top.slice(0, blackQueen.parentElement.style.top.length - 2))
                && child.style.left == blackQueen.parentElement.style.left && child.id != blackQueen.parentElement.id
                && Number(event.target.style.top.slice(0, event.target.style.top.length - 2)) > Number(blackQueen.parentElement.style.top.slice(0, blackQueen.parentElement.style.top.length - 2)) ||
                event.target.style.top == blackQueen.parentElement.style.top && child.children.length > 0 &&
                Number(event.target.style.left.slice(0, event.target.style.left.length - 2)) > Number(child.style.left.slice(0, child.style.left.length - 2))
                && Number(child.style.left.slice(0, child.style.left.length - 2)) > Number(blackQueen.parentElement.style.left.slice(0, blackQueen.parentElement.style.left.length - 2))
                && child.style.top == blackQueen.parentElement.style.top && child.id != blackQueen.parentElement.id
                && Number(event.target.style.left.slice(0, event.target.style.left.length - 2)) > Number(blackQueen.parentElement.style.left.slice(0, blackQueen.parentElement.style.left.length - 2)) ||
                event.target.style.top == blackQueen.parentElement.style.top && child.children.length > 0 &&
                Number(event.target.style.left.slice(0, event.target.style.left.length - 2)) < Number(child.style.left.slice(0, child.style.left.length - 2))
                && Number(child.style.left.slice(0, child.style.left.length - 2)) < Number(blackQueen.parentElement.style.left.slice(0, blackQueen.parentElement.style.left.length - 2))
                && child.style.top == blackQueen.parentElement.style.top && child.id != blackQueen.parentElement.id
                && Number(event.target.style.left.slice(0, event.target.style.left.length - 2)) < Number(blackQueen.parentElement.style.left.slice(0, blackQueen.parentElement.style.left.length - 2))) {
                return console.log(child.id);
            }
        }
        }
    }
    children.forEach(function(child) {
    //Diagonal
    if (Number(child.style.left.slice(0, child.style.left.length - 2)) - Number(blackQueen.parentElement.style.left.slice(0, blackQueen.parentElement.style.left.length - 2))
    == Number(blackQueen.parentElement.style.top.slice(0, blackQueen.parentElement.style.top.length - 2)) - Number(child.style.top.slice(0, child.style.top.length - 2)) ||
    Number(blackQueen.parentElement.style.left.slice(0, blackQueen.parentElement.style.left.length - 2)) - Number(child.style.left.slice(0, child.style.left.length - 2))
    == Number(blackQueen.parentElement.style.top.slice(0, blackQueen.parentElement.style.top.length - 2)) - Number(child.style.top.slice(0, child.style.top.length - 2))) {
        if (child.id == event.target.id && child.children.length == 0) {
            if (moveWhite === false) {
                socket.emit("black", {
                "black": blackQueen.id,
                "child": child.id
            });
            }
        }
    }
    //diagonalHit
    if (child.children.length > 0 && Number(child.style.left.slice(0, child.style.left.length - 2)) - Number(blackQueen.parentElement.style.left.slice(0, blackQueen.parentElement.style.left.length - 2))
    == Number(blackQueen.parentElement.style.top.slice(0, blackQueen.parentElement.style.top.length - 2)) - Number(child.style.top.slice(0, child.style.top.length - 2)) && child.children[0].id.includes("white") ||
    child.children.length > 0 && Number(blackQueen.parentElement.style.left.slice(0, blackQueen.parentElement.style.left.length - 2)) - Number(child.style.left.slice(0, child.style.left.length - 2))
    == Number(blackQueen.parentElement.style.top.slice(0, blackQueen.parentElement.style.top.length - 2)) - Number(child.style.top.slice(0, child.style.top.length - 2)) && child.children[0].id.includes("white")) {
        if (child.children[0].id == event.target.id || child.id == event.target.id) {
            if (moveWhite === false) {
                socket.emit("blackHit", {
                    "black": blackQueen.id,
                    "child": child.id
                });
            }
        }
    }
    //Up
        if (Number(child.style.top.slice(0, child.style.top.length - 2)) < Number(blackQueen.parentElement.style.top.slice(0, blackQueen.parentElement.style.top.length - 2))
&& child.style.left == blackQueen.parentElement.style.left) {
    if (child.id == event.target.id && child.children.length == 0) {
        if (moveWhite === false) {
            socket.emit("black", {
                "black": blackQueen.id,
                "child": child.id
            });
        }
    }
}
//upHit
if (child.children.length > 0 && child.children[0].id.includes("white") && Number(child.style.top.slice(0, child.style.top.length - 2)) <
Number(blackQueen.parentElement.style.top.slice(0, blackQueen.parentElement.style.top.length - 2))
&& child.style.left == blackQueen.parentElement.style.left && child.children[0].id.includes("white")) {
    if (child.children[0].id == event.target.id || child.id == event.target.id) {
        if (moveWhite === false) {
            socket.emit("blackHit", {
                "black": blackQueen.id,
                "child": child.id
            });
        }
    }
}
    //Down
    if (Number(child.style.top.slice(0, child.style.top.length - 2)) > Number(blackQueen.parentElement.style.top.slice(0, blackQueen.parentElement.style.top.length - 2))
&& child.style.left == blackQueen.parentElement.style.left) {
    if (child.id == event.target.id && child.children.length == 0) {
        if (moveWhite === false) {
            socket.emit("black", {
                "black": blackQueen.id,
                "child": child.id
            });
        }
    }
}
//downHit
if (child.children.length > 0 && child.children[0].id.includes("white") && Number(child.style.top.slice(0, child.style.top.length - 2)) >
Number(blackQueen.parentElement.style.top.slice(0, blackQueen.parentElement.style.top.length - 2))
&& child.style.left == blackQueen.parentElement.style.left && child.children[0].id.includes("white")) {
    if (child.children[0].id == event.target.id || child.id == event.target.id) {
        if (moveWhite === false) {
            socket.emit("blackHit", {
                "black": blackQueen.id,
                "child": child.id
            });
        }
    }
}
    //Left
    if (Number(child.style.left.slice(0, child.style.left.length - 2)) < Number(blackQueen.parentElement.style.left.slice(0, blackQueen.parentElement.style.left.length - 2))
&& child.style.top == blackQueen.parentElement.style.top) {
    if (child.id == event.target.id && child.children.length == 0) {
        if (moveWhite === false) {
            socket.emit("black", {
                "black": blackQueen.id,
                "child": child.id
            });
        }
    }
}
//leftHit
if (child.children.length > 0 && child.children[0].id.includes("white") && Number(child.style.left.slice(0, child.style.left.length - 2)) <
Number(blackQueen.parentElement.style.left.slice(0, blackQueen.parentElement.style.left.length - 2)) && child.style.top == blackQueen.parentElement.style.top) {
    console.log(child.id, event.target.id)
    if (child.children[0].id == event.target.id || child.id == event.target.id) {
        if (moveWhite === false) {
            socket.emit("blackHit", {
                "black": blackQueen.id,
                "child": child.id
            });
        }
    }
}
    //Right
    if (Number(child.style.left.slice(0, child.style.left.length - 2)) > Number(blackQueen.parentElement.style.left.slice(0, blackQueen.parentElement.style.left.length - 2))
    && child.style.top == blackQueen.parentElement.style.top) {
        if (child.id == event.target.id && child.children.length == 0) {
            if (moveWhite === false) {
                socket.emit("black", {
                "black": blackQueen.id,
                "child": child.id
            });
            }
        }
    }
    //rightHit
if (child.children.length > 0 && child.children[0].id.includes("white") && Number(child.style.left.slice(0, child.style.left.length - 2)) >
Number(blackQueen.parentElement.style.left.slice(0, blackQueen.parentElement.style.left.length - 2))
&& child.style.top == blackQueen.parentElement.style.top && child.children[0].id.includes("white")) {
    if (child.children[0].id == event.target.id || child.id == event.target.id) {
        if (moveWhite === false) {
            socket.emit("blackHit", {
                "black": blackQueen.id,
                "child": child.id
            });
        }
    }
}
});
}
}

function clickBlackKing() {
    clickBlack = true;
    blackMove = true;
    blackSocket = true;
    checkerboard.removeAttribute("onclick");
    checkerboard.onclick = moveBlackKing;
}

function moveBlackKing(event) {
    if (clickBlack) {
    if (blackKing.contains(event.target)) {
        return;
    }
    var children = Array.from(checkerboard.children);
    children.forEach(function(child) {
        //oneSpaceUp
        if (child.style.top == `${Number(blackKing.parentElement.style.top.slice(0, blackKing.parentElement.style.top.length - 2)) - 62.5}px`
&& child.style.left == blackKing.parentElement.style.left) {
    if (child.id == event.target.id && child.children.length == 0) {
        if (moveWhite === false) {
            socket.emit("black", {
                "black": blackKing.id,
                "child": child.id
            });
        }
    }
}
//oneSpaceUpHit
if (child.children.length > 0 && child.style.top == `${Number(blackKing.parentElement.style.top.slice(0, blackKing.parentElement.style.top.length - 2)) - 62.5}px`
&& child.style.left == blackKing.parentElement.style.left && child.children[0].id.includes("white")) {
    if (child.children[0].id == event.target.id || child.id == event.target.id) {
        if (moveWhite === false) {
            socket.emit("blackHit", {
                "black": blackKing.id,
                "child": child.id
            });
        }
    }
}
//oneSpaceLeft
if (child.style.left == `${Number(blackKing.parentElement.style.left.slice(0, blackKing.parentElement.style.left.length - 2)) - 62.5}px`
&& child.style.top == blackKing.parentElement.style.top) {
    if (child.id == event.target.id && child.children.length == 0) {
        if (moveWhite === false) {
            socket.emit("black", {
                "black": blackKing.id,
                "child": child.id
            });
        }
    }
}
//oneSpaceLeftHit
if (child.children.length > 0 && child.style.left == `${Number(blackKing.parentElement.style.left.slice(0, blackKing.parentElement.style.left.length - 2)) - 62.5}px`
&& child.style.top == blackKing.parentElement.style.top && child.children[0].id.includes("white")) {
    if (child.children[0].id == event.target.id || child.id == event.target.id) {
        if (moveWhite === false) {
            socket.emit("blackHit", {
                "black": blackKing.id,
                "child": child.id
            });
        }
    }
}
//oneSpaceDown
if (child.style.top == `${Number(blackKing.parentElement.style.top.slice(0, blackKing.parentElement.style.top.length - 2)) + 62.5}px`
&& child.style.left == blackKing.parentElement.style.left) {
    if (child.id == event.target.id && child.children.length == 0) {
        if (moveWhite === false) {
            socket.emit("black", {
                "black": blackKing.id,
                "child": child.id
            });
        }
    }
}
//oneSpaceDownHit
if (child.children.length > 0 && child.style.top == `${Number(blackKing.parentElement.style.top.slice(0, blackKing.parentElement.style.top.length - 2)) + 62.5}px`
&& child.style.left == blackKing.parentElement.style.left && child.children[0].id.includes("white")) {
    if (child.children[0].id == event.target.id || child.id == event.target.id) {
        if (moveWhite === false) {
            socket.emit("blackHit", {
                "black": blackKing.id,
                "child": child.id
            });
        }
    }
}
//oneSpaceRight
if (child.style.left == `${Number(blackKing.parentElement.style.left.slice(0, blackKing.parentElement.style.left.length - 2)) + 62.5}px`
&& child.style.top == blackKing.parentElement.style.top) {
    if (child.id == event.target.id && child.children.length == 0) {
        if (moveWhite === false) {
            socket.emit("black", {
                "black": blackKing.id,
                "child": child.id
            });
        }
    }
}
//oneSpaceRightHit
if (child.children.length > 0 && child.style.left == `${Number(blackKing.parentElement.style.left.slice(0, blackKing.parentElement.style.left.length - 2)) + 62.5}px`
&& child.style.top == blackKing.parentElement.style.top && child.children[0].id.includes("white")) {
    if (child.children[0].id == event.target.id || child.id == event.target.id) {
        if (moveWhite === false) {
            socket.emit("blackHit", {
                "black": blackKing.id,
                "child": child.id
            });
        }
    }
}
//diagonalSpaceUp
if (child.style.top == `${Number(blackKing.parentElement.style.top.slice(0, blackKing.parentElement.style.top.length - 2)) - 62.5}px`
&& child.style.left == `${Number(blackKing.parentElement.style.left.slice(0, blackKing.parentElement.style.left.length - 2)) + 62.5}px`
|| child.style.top == `${Number(blackKing.parentElement.style.top.slice(0, blackKing.parentElement.style.top.length - 2)) - 62.5}px`
&& child.style.left == `${Number(blackKing.parentElement.style.left.slice(0, blackKing.parentElement.style.left.length - 2)) - 62.5}px`) {
    if (child.id == event.target.id && child.children.length == 0) {
        if (moveWhite === false) {
            socket.emit("black", {
                "black": blackKing.id,
                "child": child.id
            });
        }
    }
}
//diagonalSpaceUpHit
if (child.children.length > 0 && child.style.top == `${Number(blackKing.parentElement.style.top.slice(0, blackKing.parentElement.style.top.length - 2)) - 62.5}px`
&& child.style.left == `${Number(blackKing.parentElement.style.left.slice(0, blackKing.parentElement.style.left.length - 2)) + 62.5}px` && child.children[0].id.includes("white")
|| child.children.length > 0 && child.style.top == `${Number(blackKing.parentElement.style.top.slice(0, blackKing.parentElement.style.top.length - 2)) - 62.5}px`
&& child.style.left == `${Number(blackKing.parentElement.style.left.slice(0, blackKing.parentElement.style.left.length - 2)) - 62.5}px` && child.children[0].id.includes("white")) {
    if (child.children[0].id == event.target.id || child.id == event.target.id) {
        if (moveWhite === false) {
            socket.emit("blackHit", {
                "black": blackKing.id,
                "child": child.id
            });
        }
    }
}
//diagonalSpaceDown
if (child.style.top == `${Number(blackKing.parentElement.style.top.slice(0, blackKing.parentElement.style.top.length - 2)) + 62.5}px`
&& child.style.left == `${Number(blackKing.parentElement.style.left.slice(0, blackKing.parentElement.style.left.length - 2)) + 62.5}px`
|| child.style.top == `${Number(blackKing.parentElement.style.top.slice(0, blackKing.parentElement.style.top.length - 2)) + 62.5}px`
&& child.style.left == `${Number(blackKing.parentElement.style.left.slice(0, blackKing.parentElement.style.left.length - 2)) - 62.5}px`) {
    if (child.id == event.target.id && child.children.length == 0) {
        if (moveWhite === false) {
            socket.emit("black", {
                "black": blackKing.id,
                "child": child.id
            });
        }
    }
}
//diagonalSpaceDownHit
if (child.children.length > 0 && child.style.top == `${Number(blackKing.parentElement.style.top.slice(0, blackKing.parentElement.style.top.length - 2)) + 62.5}px`
&& child.style.left == `${Number(blackKing.parentElement.style.left.slice(0, blackKing.parentElement.style.left.length - 2)) + 62.5}px` && child.children[0].id.includes("white")
|| child.children.length > 0 && child.style.top == `${Number(blackKing.parentElement.style.top.slice(0, blackKing.parentElement.style.top.length - 2)) + 62.5}px`
&& child.style.left == `${Number(blackKing.parentElement.style.left.slice(0, blackKing.parentElement.style.left.length - 2)) - 62.5}px` && child.children[0].id.includes("white")) {
    if (child.children[0].id == event.target.id || child.id == event.target.id) {
        if (moveWhite === false) {
            socket.emit("blackHit", {
                "black": blackKing.id,
                "child": child.id
            });
        }
        
    }
}
});
}
}

function clickBlackBishop2() {
    clickBlack = true;
    blackMove = true;
    blackSocket = true;
    checkerboard.removeAttribute("onclick");
    checkerboard.onclick = moveBlackBishop2;
}

function moveBlackBishop2(event) {
    if (clickBlack) {
    if (blackBishop2.contains(event.target)) {
        return;
    }
    var children = Array.from(checkerboard.children);
    for (var child of children) {
        if (event.target.id.includes("white") || event.target.children.length > 0 && event.target.children[0].id.includes("white")) {
            if (child.children.length > 0 && Number(child.style.left.slice(0, child.style.left.length - 2)) < Number(event.target.parentElement.style.left.slice(0, event.target.parentElement.style.left.length - 2))
            && Number(child.style.left.slice(0, child.style.left.length - 2)) > Number(blackBishop2.parentElement.style.left.slice(0, blackBishop2.parentElement.style.left.length - 2))
            && Number(child.style.top.slice(0, child.style.top.length - 2)) > Number(event.target.parentElement.style.top.slice(0, event.target.parentElement.style.top.length - 2)) && child.id != blackBishop2.parentElement.id
            && Number(child.style.top.slice(0, child.style.top.length - 2)) < Number(blackBishop2.parentElement.style.top.slice(0, blackBishop2.parentElement.style.top.length - 2))
            && Number(child.style.left.slice(0, child.style.left.length - 2)) - Number(blackBishop2.parentElement.style.left.slice(0, blackBishop2.parentElement.style.left.length - 2))
            == Number(blackBishop2.parentElement.style.top.slice(0, blackBishop2.parentElement.style.top.length - 2)) - Number(child.style.top.slice(0, child.style.top.length - 2)) ||
            child.children.length > 0 && Number(child.style.left.slice(0, child.style.left.length - 2)) > Number(event.target.parentElement.style.left.slice(0, event.target.parentElement.style.left.length - 2))
            && Number(child.style.left.slice(0, child.style.left.length - 2)) < Number(blackBishop2.parentElement.style.left.slice(0, blackBishop2.parentElement.style.left.length - 2))
            && Number(child.style.top.slice(0, child.style.top.length - 2)) > Number(event.target.parentElement.style.top.slice(0, event.target.parentElement.style.top.length - 2)) && child.id != blackBishop2.parentElement.id
            && Number(child.style.top.slice(0, child.style.top.length - 2)) < Number(blackBishop2.parentElement.style.top.slice(0, blackBishop2.parentElement.style.top.length - 2))
            && Number(blackBishop2.parentElement.style.left.slice(0, blackBishop2.parentElement.style.left.length - 2)) - Number(child.style.left.slice(0, child.style.left.length - 2))
            == Number(blackBishop2.parentElement.style.top.slice(0, blackBishop2.parentElement.style.top.length - 2)) - Number(child.style.top.slice(0, child.style.top.length - 2)) ||
            child.children.length > 0 && Number(child.style.left.slice(0, child.style.left.length - 2)) < Number(event.target.parentElement.style.left.slice(0, event.target.parentElement.style.left.length - 2))
            && Number(child.style.left.slice(0, child.style.left.length - 2)) > Number(blackBishop2.parentElement.style.left.slice(0, blackBishop2.parentElement.style.left.length - 2))
            && Number(child.style.top.slice(0, child.style.top.length - 2)) < Number(event.target.parentElement.style.top.slice(0, event.target.parentElement.style.top.length - 2)) && child.id != blackBishop2.parentElement.id
            && Number(child.style.top.slice(0, child.style.top.length - 2)) > Number(blackBishop2.parentElement.style.top.slice(0, blackBishop2.parentElement.style.top.length - 2))
            && Number(child.style.left.slice(0, child.style.left.length - 2)) - Number(blackBishop2.parentElement.style.left.slice(0, blackBishop2.parentElement.style.left.length - 2))
            == Number(child.style.top.slice(0, child.style.top.length - 2)) - Number(blackBishop2.parentElement.style.top.slice(0, blackBishop2.parentElement.style.top.length - 2)) ||
            child.children.length > 0 && Number(child.style.left.slice(0, child.style.left.length - 2)) > Number(event.target.parentElement.style.left.slice(0, event.target.parentElement.style.left.length - 2))
            && Number(child.style.left.slice(0, child.style.left.length - 2)) < Number(blackBishop2.parentElement.style.left.slice(0, blackBishop2.parentElement.style.left.length - 2))
            && Number(child.style.top.slice(0, child.style.top.length - 2)) < Number(event.target.parentElement.style.top.slice(0, event.target.parentElement.style.top.length - 2)) && child.id != blackBishop2.parentElement.id
            && Number(child.style.top.slice(0, child.style.top.length - 2)) > Number(blackBishop2.parentElement.style.top.slice(0, blackBishop2.parentElement.style.top.length - 2))
            && Number(blackBishop2.parentElement.style.left.slice(0, blackBishop2.parentElement.style.left.length - 2)) - Number(child.style.left.slice(0, child.style.left.length - 2))
            == Number(child.style.top.slice(0, child.style.top.length - 2)) - Number(blackBishop2.parentElement.style.top.slice(0, blackBishop2.parentElement.style.top.length - 2))) {
                return console.log(child.id);
            }
        }
        if (event.target.id.includes("brown") || event.target.id.includes("tan")) {
            if (child.children.length > 0 && Number(child.style.left.slice(0, child.style.left.length - 2)) < Number(event.target.style.left.slice(0, event.target.style.left.length - 2))
            && Number(child.style.left.slice(0, child.style.left.length - 2)) > Number(blackBishop2.parentElement.style.left.slice(0, blackBishop2.parentElement.style.left.length - 2))
            && Number(child.style.top.slice(0, child.style.top.length - 2)) > Number(event.target.style.top.slice(0, event.target.style.top.length - 2)) && child.id != blackBishop2.parentElement.id
            && Number(child.style.top.slice(0, child.style.top.length - 2)) < Number(blackBishop2.parentElement.style.top.slice(0, blackBishop2.parentElement.style.top.length - 2))
            && Number(child.style.left.slice(0, child.style.left.length - 2)) - Number(blackBishop2.parentElement.style.left.slice(0, blackBishop2.parentElement.style.left.length - 2))
            == Number(blackBishop2.parentElement.style.top.slice(0, blackBishop2.parentElement.style.top.length - 2)) - Number(child.style.top.slice(0, child.style.top.length - 2)) ||
            child.children.length > 0 && Number(child.style.left.slice(0, child.style.left.length - 2)) > Number(event.target.style.left.slice(0, event.target.style.left.length - 2))
            && Number(child.style.left.slice(0, child.style.left.length - 2)) < Number(blackBishop2.parentElement.style.left.slice(0, blackBishop2.parentElement.style.left.length - 2))
            && Number(child.style.top.slice(0, child.style.top.length - 2)) > Number(event.target.style.top.slice(0, event.target.style.top.length - 2)) && child.id != blackBishop2.parentElement.id
            && Number(child.style.top.slice(0, child.style.top.length - 2)) < Number(blackBishop2.parentElement.style.top.slice(0, blackBishop2.parentElement.style.top.length - 2))
            && Number(blackBishop2.parentElement.style.left.slice(0, blackBishop2.parentElement.style.left.length - 2)) - Number(child.style.left.slice(0, child.style.left.length - 2))
            == Number(blackBishop2.parentElement.style.top.slice(0, blackBishop2.parentElement.style.top.length - 2)) - Number(child.style.top.slice(0, child.style.top.length - 2)) ||
            child.children.length > 0 && Number(child.style.left.slice(0, child.style.left.length - 2)) < Number(event.target.style.left.slice(0, event.target.style.left.length - 2))
            && Number(child.style.left.slice(0, child.style.left.length - 2)) > Number(blackBishop2.parentElement.style.left.slice(0, blackBishop2.parentElement.style.left.length - 2))
            && Number(child.style.top.slice(0, child.style.top.length - 2)) < Number(event.target.style.top.slice(0, event.target.style.top.length - 2)) && child.id != blackBishop2.parentElement.id
            && Number(child.style.top.slice(0, child.style.top.length - 2)) > Number(blackBishop2.parentElement.style.top.slice(0, blackBishop2.parentElement.style.top.length - 2))
            && Number(child.style.left.slice(0, child.style.left.length - 2)) - Number(blackBishop2.parentElement.style.left.slice(0, blackBishop2.parentElement.style.left.length - 2))
            == Number(child.style.top.slice(0, child.style.top.length - 2)) - Number(blackBishop2.parentElement.style.top.slice(0, blackBishop2.parentElement.style.top.length - 2)) ||
            child.children.length > 0 && Number(child.style.left.slice(0, child.style.left.length - 2)) > Number(event.target.style.left.slice(0, event.target.style.left.length - 2))
            && Number(child.style.left.slice(0, child.style.left.length - 2)) < Number(blackBishop2.parentElement.style.left.slice(0, blackBishop2.parentElement.style.left.length - 2))
            && Number(child.style.top.slice(0, child.style.top.length - 2)) < Number(event.target.style.top.slice(0, event.target.style.top.length - 2)) && child.id != blackBishop2.parentElement.id
            && Number(child.style.top.slice(0, child.style.top.length - 2)) > Number(blackBishop2.parentElement.style.top.slice(0, blackBishop2.parentElement.style.top.length - 2))
            && Number(blackBishop2.parentElement.style.left.slice(0, blackBishop2.parentElement.style.left.length - 2)) - Number(child.style.left.slice(0, child.style.left.length - 2))
            == Number(child.style.top.slice(0, child.style.top.length - 2)) - Number(blackBishop2.parentElement.style.top.slice(0, blackBishop2.parentElement.style.top.length - 2))) {
                return console.log(child.id);
            }
        }
    }
    children.forEach(function(child) {
    //Diagonal
    if (Number(child.style.left.slice(0, child.style.left.length - 2)) - Number(blackBishop2.parentElement.style.left.slice(0, blackBishop2.parentElement.style.left.length - 2))
    == Number(blackBishop2.parentElement.style.top.slice(0, blackBishop2.parentElement.style.top.length - 2)) - Number(child.style.top.slice(0, child.style.top.length - 2)) ||
    Number(blackBishop2.parentElement.style.left.slice(0, blackBishop2.parentElement.style.left.length - 2)) - Number(child.style.left.slice(0, child.style.left.length - 2))
    == Number(blackBishop2.parentElement.style.top.slice(0, blackBishop2.parentElement.style.top.length - 2)) - Number(child.style.top.slice(0, child.style.top.length - 2))) {
        if (child.id == event.target.id && child.children.length == 0) {
            if (moveWhite === false) {
                socket.emit("black", {
                "black": blackBishop2.id,
                "child": child.id
            });
            }
        }
    }
    //diagonalHit
    if (child.children.length > 0 && Number(child.style.left.slice(0, child.style.left.length - 2)) - Number(blackBishop2.parentElement.style.left.slice(0, blackBishop2.parentElement.style.left.length - 2))
    == Number(blackBishop2.parentElement.style.top.slice(0, blackBishop2.parentElement.style.top.length - 2)) - Number(child.style.top.slice(0, child.style.top.length - 2)) && child.children[0].id.includes("white") ||
    child.children.length > 0 && Number(blackBishop2.parentElement.style.left.slice(0, blackBishop2.parentElement.style.left.length - 2)) - Number(child.style.left.slice(0, child.style.left.length - 2))
    == Number(blackBishop2.parentElement.style.top.slice(0, blackBishop2.parentElement.style.top.length - 2)) - Number(child.style.top.slice(0, child.style.top.length - 2)) && child.children[0].id.includes("white")) {
        if (child.children[0].id == event.target.id || child.id == event.target.id) {
            if (moveWhite === false) {
                socket.emit("blackHit", {
                    "black": blackBishop2.id,
                    "child": child.id
                });
            }
        }
    }
});
}
}

function clickBlackKnight2() {
    clickBlack = true;
    blackMove = true;
    blackSocket = true;
    checkerboard.removeAttribute("onclick");
    checkerboard.onclick = moveBlackKnight2;
}

function moveBlackKnight2(event) {
    if (clickBlack) {
    if (blackKnight2.contains(event.target)) {
        return;
    }
    var children = Array.from(checkerboard.children);
    children.forEach(function(child) {
    //twoSpaceUp
    if (child.style.top == `${Number(blackKnight2.parentElement.style.top.slice(0, blackKnight2.parentElement.style.top.length - 2)) - 125}px`
    && child.style.left == `${Number(blackKnight2.parentElement.style.left.slice(0, blackKnight2.parentElement.style.left.length - 2)) + 62.5}px`
    || child.style.top == `${Number(blackKnight2.parentElement.style.top.slice(0, blackKnight2.parentElement.style.top.length - 2)) - 125}px`
    && child.style.left == `${Number(blackKnight2.parentElement.style.left.slice(0, blackKnight2.parentElement.style.left.length - 2)) - 62.5}px`) {
        if (child.id == event.target.id && child.children.length == 0) {
            if (moveWhite === false) {
                socket.emit("black", {
                "black": blackKnight2.id,
                "child": child.id
            });
            }
        }
        if (child.children.length > 0 && child.id == event.target.parentElement.id && event.target.id.includes("white")
        || child.children.length > 0 && child.children[0].id == event.target.id && event.target.id.includes("white")) {
            if (moveWhite === false) {
                socket.emit("blackHit", {
                    "black": blackKnight2.id,
                    "child": child.id
                });
            }
        }
    }
    //twoSpaceDown
    if (child.style.top == `${Number(blackKnight2.parentElement.style.top.slice(0, blackKnight2.parentElement.style.top.length - 2)) + 125}px`
    && child.style.left == `${Number(blackKnight2.parentElement.style.left.slice(0, blackKnight2.parentElement.style.left.length - 2)) + 62.5}px`
    || child.style.top == `${Number(blackKnight2.parentElement.style.top.slice(0, blackKnight2.parentElement.style.top.length - 2)) + 125}px`
    && child.style.left == `${Number(blackKnight2.parentElement.style.left.slice(0, blackKnight2.parentElement.style.left.length - 2)) - 62.5}px`) {
        if (child.id == event.target.id && child.children.length == 0) {
            if (moveWhite === false) {
                socket.emit("black", {
                "black": blackKnight2.id,
                "child": child.id
            });
            }
        }
        if (child.children.length > 0 && child.id == event.target.parentElement.id && event.target.id.includes("white")
        || child.children.length > 0 && child.children[0].id == event.target.id && event.target.id.includes("white")) {
            if (moveWhite === false) {
                socket.emit("blackHit", {
                    "black": blackKnight2.id,
                    "child": child.id
                });
            }
        }
    }
    //oneSpaceUp
    if (child.style.top == `${Number(blackKnight2.parentElement.style.top.slice(0, blackKnight2.parentElement.style.top.length - 2)) - 62.5}px`
    && child.style.left == `${Number(blackKnight2.parentElement.style.left.slice(0, blackKnight2.parentElement.style.left.length - 2)) + 125}px`
    || child.style.top == `${Number(blackKnight2.parentElement.style.top.slice(0, blackKnight2.parentElement.style.top.length - 2)) - 62.5}px`
    && child.style.left == `${Number(blackKnight2.parentElement.style.left.slice(0, blackKnight2.parentElement.style.left.length - 2)) - 125}px`) {
        if (child.id == event.target.id && child.children.length == 0) {
            if (moveWhite === false) {
                socket.emit("black", {
                "black": blackKnight2.id,
                "child": child.id
            });
            }
        }
        if (child.children.length > 0 && child.id == event.target.parentElement.id && event.target.id.includes("white")
        || child.children.length > 0 && child.children[0].id == event.target.id && event.target.id.includes("white")) {
            if (moveWhite === false) {
                socket.emit("blackHit", {
                    "black": blackKnight2.id,
                    "child": child.id
                });
            }
        }
    }
    //oneSpaceDown
    if (child.style.top == `${Number(blackKnight2.parentElement.style.top.slice(0, blackKnight2.parentElement.style.top.length - 2)) + 62.5}px`
    && child.style.left == `${Number(blackKnight2.parentElement.style.left.slice(0, blackKnight2.parentElement.style.left.length - 2)) + 125}px`
    || child.style.top == `${Number(blackKnight2.parentElement.style.top.slice(0, blackKnight2.parentElement.style.top.length - 2)) + 62.5}px`
    && child.style.left == `${Number(blackKnight2.parentElement.style.left.slice(0, blackKnight2.parentElement.style.left.length - 2)) - 125}px`) {
        if (child.id == event.target.id && child.children.length == 0) {
            if (moveWhite === false) {
                socket.emit("black", {
                "black": blackKnight2.id,
                "child": child.id
            });
            }
        }
        if (child.children.length > 0 && child.id == event.target.parentElement.id && event.target.id.includes("white")
        || child.children.length > 0 && child.children[0].id == event.target.id && event.target.id.includes("white")) {
            if (moveWhite === false) {
                socket.emit("blackHit", {
                    "black": blackKnight2.id,
                    "child": child.id
                });
            }
        }
    }
});
}
}

function clickBlackRook2() {
    clickBlack = true;
    blackMove = true;
    blackSocket = true;
    checkerboard.removeAttribute("onclick");
    checkerboard.onclick = moveBlackRook2;
}

function moveBlackRook2(event) {
    if (clickBlack) {
    if (blackRook2.contains(event.target)) {
        return;
    }
    var children = Array.from(checkerboard.children);
    for (var child of children) {
        if (event.target.id.includes("white") || event.target.children.length > 0 && event.target.children[0].id.includes("white")) {
        if (child.children.length > 0 &&
        Number(event.target.parentElement.style.top.slice(0, event.target.parentElement.style.top.length - 2)) < Number(child.style.top.slice(0, child.style.top.length - 2))
        && Number(child.style.top.slice(0, child.style.top.length - 2)) < Number(blackRook2.parentElement.style.top.slice(0, blackRook2.parentElement.style.top.length - 2))
        && child.style.left == blackRook2.parentElement.style.left && child.id != blackRook2.parentElement.id
        && Number(event.target.parentElement.style.top.slice(0, event.target.parentElement.style.top.length - 2)) < Number(blackRook2.parentElement.style.top.slice(0, blackRook2.parentElement.style.top.length - 2)) ||
        child.children.length > 0 &&
        Number(event.target.parentElement.style.top.slice(0, event.target.parentElement.style.top.length - 2)) > Number(child.style.top.slice(0, child.style.top.length - 2))
        && Number(child.style.top.slice(0, child.style.top.length - 2)) > Number(blackRook2.parentElement.style.top.slice(0, blackRook2.parentElement.style.top.length - 2))
        && child.style.left == blackRook2.parentElement.style.left && child.id != blackRook2.parentElement.id
        && Number(event.target.parentElement.style.top.slice(0, event.target.parentElement.style.top.length - 2)) > Number(blackRook2.parentElement.style.top.slice(0, blackRook2.parentElement.style.top.length - 2)) ||
        child.children.length > 0 &&
        Number(event.target.parentElement.style.left.slice(0, event.target.parentElement.style.left.length - 2)) > Number(child.style.left.slice(0, child.style.left.length - 2))
        && Number(child.style.left.slice(0, child.style.left.length - 2)) > Number(blackRook2.parentElement.style.left.slice(0, blackRook2.parentElement.style.left.length - 2))
        && child.style.top == blackRook2.parentElement.style.top && child.id != blackRook2.parentElement.id
        && Number(event.target.parentElement.style.left.slice(0, event.target.parentElement.style.left.length - 2)) > Number(blackRook2.parentElement.style.left.slice(0, blackRook2.parentElement.style.left.length - 2)) ||
        child.children.length > 0 &&
        Number(event.target.parentElement.style.left.slice(0, event.target.parentElement.style.left.length - 2)) < Number(child.style.left.slice(0, child.style.left.length - 2))
        && Number(child.style.left.slice(0, child.style.left.length - 2)) < Number(blackRook2.parentElement.style.left.slice(0, blackRook2.parentElement.style.left.length - 2))
        && child.style.top == blackRook2.parentElement.style.top && child.id != blackRook2.parentElement.id
        && Number(event.target.parentElement.style.left.slice(0, event.target.parentElement.style.left.length - 2)) < Number(blackRook2.parentElement.style.left.slice(0, blackRook2.parentElement.style.left.length - 2))) {
            return console.log(child.id);
        }
    }
    if (event.target.id.includes("brown") || event.target.id.includes("tan")) {
        if (child.children.length > 0 &&
            Number(event.target.style.top.slice(0, event.target.style.top.length - 2)) < Number(child.style.top.slice(0, child.style.top.length - 2))
            && Number(child.style.top.slice(0, child.style.top.length - 2)) < Number(blackRook2.parentElement.style.top.slice(0, blackRook2.parentElement.style.top.length - 2))
            && child.style.left == blackRook2.parentElement.style.left && child.id != blackRook2.parentElement.id
            && Number(event.target.style.top.slice(0, event.target.style.top.length - 2)) < Number(blackRook2.parentElement.style.top.slice(0, blackRook2.parentElement.style.top.length - 2)) ||
            child.children.length > 0 &&
            Number(event.target.style.top.slice(0, event.target.style.top.length - 2)) > Number(child.style.top.slice(0, child.style.top.length - 2))
            && Number(child.style.top.slice(0, child.style.top.length - 2)) > Number(blackRook2.parentElement.style.top.slice(0, blackRook2.parentElement.style.top.length - 2))
            && child.style.left == blackRook2.parentElement.style.left && child.id != blackRook2.parentElement.id
            && Number(event.target.style.top.slice(0, event.target.style.top.length - 2)) > Number(blackRook2.parentElement.style.top.slice(0, blackRook2.parentElement.style.top.length - 2)) ||
            child.children.length > 0 &&
            Number(event.target.style.left.slice(0, event.target.style.left.length - 2)) > Number(child.style.left.slice(0, child.style.left.length - 2))
            && Number(child.style.left.slice(0, child.style.left.length - 2)) > Number(blackRook2.parentElement.style.left.slice(0, blackRook2.parentElement.style.left.length - 2))
            && child.style.top == blackRook2.parentElement.style.top && child.id != blackRook2.parentElement.id
            && Number(event.target.style.left.slice(0, event.target.style.left.length - 2)) > Number(blackRook2.parentElement.style.left.slice(0, blackRook2.parentElement.style.left.length - 2)) ||
            child.children.length > 0 &&
            Number(event.target.style.left.slice(0, event.target.style.left.length - 2)) < Number(child.style.left.slice(0, child.style.left.length - 2))
            && Number(child.style.left.slice(0, child.style.left.length - 2)) < Number(blackRook2.parentElement.style.left.slice(0, blackRook2.parentElement.style.left.length - 2))
            && child.style.top == blackRook2.parentElement.style.top && child.id != blackRook2.parentElement.id
            && Number(event.target.style.left.slice(0, event.target.style.left.length - 2)) < Number(blackRook2.parentElement.style.left.slice(0, blackRook2.parentElement.style.left.length - 2))) {
            return console.log(child.id);
        }
    }
    }
    children.forEach(function(child) {
        //Up
        if (Number(child.style.top.slice(0, child.style.top.length - 2)) < Number(blackRook2.parentElement.style.top.slice(0, blackRook2.parentElement.style.top.length - 2))
&& child.style.left == blackRook2.parentElement.style.left) {
    if (child.id == event.target.id && child.children.length == 0) {
        if (moveWhite === false) {
            socket.emit("black", {
                "black": blackRook2.id,
                "child": child.id
            });
        }
    }
}
//upHit
if (child.children.length > 0 && child.children[0].id.includes("white") && Number(child.style.top.slice(0, child.style.top.length - 2)) <
Number(blackRook2.parentElement.style.top.slice(0, blackRook2.parentElement.style.top.length - 2))
&& child.style.left == blackRook2.parentElement.style.left && child.children[0].id.includes("white")) {
    if (child.children[0].id == event.target.id || child.id == event.target.id) {
        if (moveWhite === false) {
            socket.emit("blackHit", {
                "black": blackRook2.id,
                "child": child.id
            });
        }
    }
}
    //Down
    if (Number(child.style.top.slice(0, child.style.top.length - 2)) > Number(blackRook2.parentElement.style.top.slice(0, blackRook2.parentElement.style.top.length - 2))
&& child.style.left == blackRook2.parentElement.style.left) {
    if (child.id == event.target.id && child.children.length == 0) {
        if (moveWhite === false) {
            socket.emit("black", {
                "black": blackRook2.id,
                "child": child.id
            });
        }
    }
}
//downHit
if (child.children.length > 0 && child.children[0].id.includes("white") && Number(child.style.top.slice(0, child.style.top.length - 2)) >
Number(blackRook2.parentElement.style.top.slice(0, blackRook2.parentElement.style.top.length - 2))
&& child.style.left == blackRook2.parentElement.style.left && child.children[0].id.includes("white")) {
    if (child.children[0].id == event.target.id || child.id == event.target.id) {
        if (moveWhite === false) {
            socket.emit("blackHit", {
                "black": blackRook2.id,
                "child": child.id
            });
        }
    }
}
    //Left
    if (Number(child.style.left.slice(0, child.style.left.length - 2)) > Number(blackRook2.parentElement.style.left.slice(0, blackRook2.parentElement.style.left.length - 2))
&& child.style.top == blackRook2.parentElement.style.top) {
    if (child.id == event.target.id && child.children.length == 0) {
        if (moveWhite === false) {
            socket.emit("black", {
                "black": blackRook2.id,
                "child": child.id
            });
        }
    }
}
//leftHit
if (child.children.length > 0 && child.children[0].id.includes("white") && Number(child.style.left.slice(0, child.style.left.length - 2)) <
Number(blackRook2.parentElement.style.left.slice(0, blackRook2.parentElement.style.left.length - 2))
&& child.style.top == blackRook2.parentElement.style.top && child.children[0].id.includes("white")) {
    if (child.children[0].id == event.target.id || child.id == event.target.id) {
        if (moveWhite === false) {
            socket.emit("blackHit", {
                "black": blackRook2.id,
                "child": child.id
            });
        }
    }
}
    //Right
    if (Number(child.style.left.slice(0, child.style.left.length - 2)) < Number(blackRook2.parentElement.style.left.slice(0, blackRook2.parentElement.style.left.length - 2))
    && child.style.top == blackRook2.parentElement.style.top) {
        if (child.id == event.target.id && child.children.length == 0) {
            if (moveWhite === false) {
                socket.emit("black", {
                "black": blackRook2.id,
                "child": child.id
            });
            }
        }
    }
    //rightHit
if (child.children.length > 0 && child.children[0].id.includes("white") && Number(child.style.left.slice(0, child.style.left.length - 2)) >
Number(blackRook2.parentElement.style.left.slice(0, blackRook2.parentElement.style.left.length - 2))
&& child.style.top == blackRook2.parentElement.style.top && child.children[0].id.includes("white")) {
    if (child.children[0].id == event.target.id || child.id == event.target.id) {
        if (moveWhite === false) {
            socket.emit("blackHit", {
                "black": blackRook2.id,
                "child": child.id
            });
        }
    }
}
});
}
}

    if (turn == 2) {
        player2TurnText.style.left = `40px`;
        player2TurnText.style.top = `215px`;
        player2TurnText.style.display = "unset";
        clickWhite = false;
        setTimeout(function() {
            player2TurnText.style.display = "none";
            if (white) {
                whitePawn1.addEventListener("click", clickWhitePawn1);
                whitePawn2.addEventListener("click", clickWhitePawn2);
                whitePawn3.addEventListener("click", clickWhitePawn3);
                whitePawn4.addEventListener("click", clickWhitePawn4);
                whitePawn5.addEventListener("click", clickWhitePawn5);
                whitePawn6.addEventListener("click", clickWhitePawn6);
                whitePawn7.addEventListener("click", clickWhitePawn7);
                whitePawn8.addEventListener("click", clickWhitePawn8);
                whiteRook1.addEventListener("click", clickWhiteRook1);
                whiteKnight1.addEventListener("click", clickWhiteKnight1);
                whiteBishop1.addEventListener("click", clickWhiteBishop1);
                whiteQueen.addEventListener("click", clickWhiteQueen);
                whiteKing.addEventListener("click", clickWhiteKing);
                whiteBishop2.addEventListener("click", clickWhiteBishop2);
                whiteKnight2.addEventListener("click", clickWhiteKnight2);
                whiteRook2.addEventListener("click", clickWhiteRook2);
            }
        }, 2000);
    }

function clickWhitePawn1() {
    clickWhite = true;
    whiteMove = true;
    whiteSocket = true;
    checkerboard.removeAttribute("onclick");
    checkerboard.onclick = moveWhitePawn1;
}

function moveWhitePawn1(event) {
    if (clickWhite) {
    if (whitePawn1.contains(event.target)) {
        return;
    }
    var children = Array.from(checkerboard.children);
    children.forEach(function(child) {
        //oneSpace
        if (child.style.top == `${Number(whitePawn1.parentElement.style.top.slice(0, whitePawn1.parentElement.style.top.length - 2)) + 62.5}px`
&& child.style.left == whitePawn1.parentElement.style.left) {
    if (child.id == event.target.id && child.children.length == 0) {
        if (moveWhite === true) {
            socket.emit("white", {
                "white": whitePawn1.id,
                "child": child.id
            });
        }
    }
}
    //twoSpace
    if (child.style.top == `${Number(whitePawn1.parentElement.style.top.slice(0, whitePawn1.parentElement.style.top.length - 2)) + 125}px`
&& child.style.left == whitePawn1.parentElement.style.left) {
    if (child.id == event.target.id && child.children.length == 0) {
        if (moveWhite === true && brownSquare5.contains(whitePawn1)) {
            socket.emit("white", {
                "white": whitePawn1.id,
                "child": child.id
            });
        }
    }
}
    //diagonalSpace
    if (child.children.length > 0 && child.style.top == `${Number(whitePawn1.parentElement.style.top.slice(0, whitePawn1.parentElement.style.top.length - 2)) + 62.5}px`
&& child.style.left == `${Number(whitePawn1.parentElement.style.left.slice(0, whitePawn1.parentElement.style.left.length - 2)) + 62.5}px` && child.children[0].id.includes("black")
|| child.children.length > 0 && child.style.top == `${Number(whitePawn1.parentElement.style.top.slice(0, whitePawn1.parentElement.style.top.length - 2)) + 62.5}px`
&& child.style.left == `${Number(whitePawn1.parentElement.style.left.slice(0, whitePawn1.parentElement.style.left.length - 2)) - 62.5}px`
&& child.children[0].id.includes("black")) {
    if (child.children[0].id == event.target.id || child.id == event.target.id) {
        if (moveWhite === true) {
            socket.emit("whiteHit", {
                "white": whitePawn1.id,
                "child": child.id
            });
        }
    }
}
});
}
}

function clickWhitePawn2() {
    clickWhite = true;
    whiteMove = true;
    whiteSocket = true;
    checkerboard.removeAttribute("onclick");
    checkerboard.onclick = moveWhitePawn2;
}

function moveWhitePawn2(event) {
    if (clickWhite) {
    if (whitePawn2.contains(event.target)) {
        return;
    }
    var children = Array.from(checkerboard.children);
    children.forEach(function(child) {
        //oneSpace
        if (child.style.top == `${Number(whitePawn2.parentElement.style.top.slice(0, whitePawn2.parentElement.style.top.length - 2)) + 62.5}px`
&& child.style.left == whitePawn2.parentElement.style.left) {
    if (child.id == event.target.id && child.children.length == 0) {
        if (moveWhite === true) {
            socket.emit("white", {
                "white": whitePawn2.id,
                "child": child.id
            });
        }
    }
}
    //twoSpace
    if (child.style.top == `${Number(whitePawn2.parentElement.style.top.slice(0, whitePawn2.parentElement.style.top.length - 2)) + 125}px`
&& child.style.left == whitePawn2.parentElement.style.left) {
    if (child.id == event.target.id && child.children.length == 0) {
        if (moveWhite === true && tanSquare5.contains(whitePawn2)) {
            socket.emit("white", {
                "white": whitePawn2.id,
                "child": child.id
            });
        }
    }
}
    //diagonalSpace
    if (child.children.length > 0 && child.style.top == `${Number(whitePawn2.parentElement.style.top.slice(0, whitePawn2.parentElement.style.top.length - 2)) + 62.5}px`
&& child.style.left == `${Number(whitePawn2.parentElement.style.left.slice(0, whitePawn2.parentElement.style.left.length - 2)) + 62.5}px` && child.children[0].id.includes("black")
|| child.children.length > 0 && child.style.top == `${Number(whitePawn2.parentElement.style.top.slice(0, whitePawn2.parentElement.style.top.length - 2)) + 62.5}px`
&& child.style.left == `${Number(whitePawn2.parentElement.style.left.slice(0, whitePawn2.parentElement.style.left.length - 2)) - 62.5}px`
&& child.children[0].id.includes("black")) {
    if (child.children[0].id == event.target.id || child.id == event.target.id) {
        if (moveWhite === true) {
            socket.emit("whiteHit", {
                "white": whitePawn2.id,
                "child": child.id
            });
        }
    }
}
});
}
}

function clickWhitePawn3() {
    clickWhite = true;
    whiteMove = true;
    whiteSocket = true;
    checkerboard.removeAttribute("onclick");
    checkerboard.onclick = moveWhitePawn3;
}

function moveWhitePawn3(event) {
    if (clickWhite) {
    if (whitePawn3.contains(event.target)) {
        return;
    }
    var children = Array.from(checkerboard.children);
    children.forEach(function(child) {
        //oneSpace
        if (child.style.top == `${Number(whitePawn3.parentElement.style.top.slice(0, whitePawn3.parentElement.style.top.length - 2)) + 62.5}px`
&& child.style.left == whitePawn3.parentElement.style.left) {
    if (child.id == event.target.id && child.children.length == 0) {
        if (moveWhite === true) {
            socket.emit("white", {
                "white": whitePawn3.id,
                "child": child.id
            });
        }
    }
}
    //twoSpace
    if (child.style.top == `${Number(whitePawn3.parentElement.style.top.slice(0, whitePawn3.parentElement.style.top.length - 2)) + 125}px`
&& child.style.left == whitePawn3.parentElement.style.left)
    if (child.id == event.target.id && child.children.length == 0) {
        if (moveWhite === true && brownSquare6.contains(whitePawn3)) {
            socket.emit("white", {
                "white": whitePawn3.id,
                "child": child.id
            });
        }
    }
    //diagonalSpace
    if (child.children.length > 0 && child.style.top == `${Number(whitePawn3.parentElement.style.top.slice(0, whitePawn3.parentElement.style.top.length - 2)) + 62.5}px`
&& child.style.left == `${Number(whitePawn3.parentElement.style.left.slice(0, whitePawn3.parentElement.style.left.length - 2)) + 62.5}px` && child.children[0].id.includes("black")
|| child.children.length > 0 && child.style.top == `${Number(whitePawn3.parentElement.style.top.slice(0, whitePawn3.parentElement.style.top.length - 2)) + 62.5}px`
&& child.style.left == `${Number(whitePawn3.parentElement.style.left.slice(0, whitePawn3.parentElement.style.left.length - 2)) - 62.5}px`
&& child.children[0].id.includes("black")) {
    if (child.children[0].id == event.target.id || child.id == event.target.id) {
        if (moveWhite === true) {
            socket.emit("whiteHit", {
                "white": whitePawn3.id,
                "child": child.id
            });
        }
    }
}
});
}
}

function clickWhitePawn4() {
    clickWhite = true;
    whiteMove = true;
    whiteSocket = true;
    checkerboard.removeAttribute("onclick");
    checkerboard.onclick = moveWhitePawn4;
}

function moveWhitePawn4(event) {
    if (clickWhite) {
    if (whitePawn4.contains(event.target)) {
        return;
    }
    var children = Array.from(checkerboard.children);
    children.forEach(function(child) {
        //oneSpace
        if (child.style.top == `${Number(whitePawn4.parentElement.style.top.slice(0, whitePawn4.parentElement.style.top.length - 2)) + 62.5}px`
&& child.style.left == whitePawn4.parentElement.style.left) {
    if (child.id == event.target.id && child.children.length == 0) {
        if (moveWhite === true) {
            socket.emit("white", {
                "white": whitePawn4.id,
                "child": child.id
            });
        }
    }
}
    //twoSpace
    if (child.style.top == `${Number(whitePawn4.parentElement.style.top.slice(0, whitePawn4.parentElement.style.top.length - 2)) + 125}px`
&& child.style.left == whitePawn4.parentElement.style.left) {
    if (child.id == event.target.id && child.children.length == 0) {
        if (moveWhite === true && tanSquare6.contains(whitePawn4)) {
            socket.emit("white", {
                "white": whitePawn4.id,
                "child": child.id
            });
        }
    }
}
    //diagonalSpace
    if (child.children.length > 0 && child.style.top == `${Number(whitePawn4.parentElement.style.top.slice(0, whitePawn4.parentElement.style.top.length - 2)) + 62.5}px`
&& child.style.left == `${Number(whitePawn4.parentElement.style.left.slice(0, whitePawn4.parentElement.style.left.length - 2)) + 62.5}px` && child.children[0].id.includes("black")
|| child.children.length > 0 && child.style.top == `${Number(whitePawn4.parentElement.style.top.slice(0, whitePawn4.parentElement.style.top.length - 2)) + 62.5}px`
&& child.style.left == `${Number(whitePawn4.parentElement.style.left.slice(0, whitePawn4.parentElement.style.left.length - 2)) - 62.5}px`
&& child.children[0].id.includes("black")) {
    if (child.children[0].id == event.target.id || child.id == event.target.id) {
        if (moveWhite === true) {
            socket.emit("whiteHit", {
                "white": whitePawn4.id,
                "child": child.id
            });
        }
    }
}
});
}
}

function clickWhitePawn5() {
    clickWhite = true;
    whiteMove = true;
    whiteSocket = true;
    checkerboard.removeAttribute("onclick");
    checkerboard.onclick = moveWhitePawn5;
}

function moveWhitePawn5(event) {
    if (clickWhite) {
    if (whitePawn5.contains(event.target)) {
        return;
    }
    var children = Array.from(checkerboard.children);
    children.forEach(function(child) {
        //oneSpace
        if (child.style.top == `${Number(whitePawn5.parentElement.style.top.slice(0, whitePawn5.parentElement.style.top.length - 2)) + 62.5}px`
&& child.style.left == whitePawn5.parentElement.style.left) {
    if (child.id == event.target.id && child.children.length == 0) {
        if (moveWhite === true) {
            socket.emit("white", {
                "white": whitePawn5.id,
                "child": child.id
            });
        }
    }
}
    //twoSpace
    if (child.style.top == `${Number(whitePawn5.parentElement.style.top.slice(0, whitePawn5.parentElement.style.top.length - 2)) + 125}px`
&& child.style.left == whitePawn5.parentElement.style.left) {
    if (child.id == event.target.id && child.children.length == 0) {
        if (moveWhite === true && brownSquare7.contains(whitePawn5)) {
            socket.emit("white", {
                "white": whitePawn5.id,
                "child": child.id
            });
        }
    }
}
//diagonalSpace
if (child.children.length > 0 && child.style.top == `${Number(whitePawn5.parentElement.style.top.slice(0, whitePawn5.parentElement.style.top.length - 2)) + 62.5}px`
&& child.style.left == `${Number(whitePawn5.parentElement.style.left.slice(0, whitePawn5.parentElement.style.left.length - 2)) + 62.5}px` && child.children[0].id.includes("black")
|| child.children.length > 0 && child.style.top == `${Number(whitePawn5.parentElement.style.top.slice(0, whitePawn5.parentElement.style.top.length - 2)) + 62.5}px`
&& child.style.left == `${Number(whitePawn5.parentElement.style.left.slice(0, whitePawn5.parentElement.style.left.length - 2)) - 62.5}px`
&& child.children[0].id.includes("black")) {
    if (child.children[0].id == event.target.id || child.id == event.target.id) {
        if (moveWhite === true) {
            socket.emit("whiteHit", {
                "white": whitePawn5.id,
                "child": child.id
            });
        }
    }
}
    });
}
}

function clickWhitePawn6() {
    clickWhite = true;
    whiteMove = true;
    whiteSocket = true;
    checkerboard.removeAttribute("onclick");
    checkerboard.onclick = moveWhitePawn6;
}

function moveWhitePawn6(event) {
    if (clickWhite) {
    if (whitePawn6.contains(event.target)) {
        return;
    }
    var children = Array.from(checkerboard.children);
    children.forEach(function(child) {
        //oneSpace
        if (child.style.top == `${Number(whitePawn6.parentElement.style.top.slice(0, whitePawn6.parentElement.style.top.length - 2)) + 62.5}px`
&& child.style.left == whitePawn6.parentElement.style.left) {
    if (child.id == event.target.id && child.children.length == 0) {
        if (moveWhite === true) {
            socket.emit("white", {
                "white": whitePawn6.id,
                "child": child.id
            });
        }
    }
}
    //twoSpace
    if (child.style.top == `${Number(whitePawn6.parentElement.style.top.slice(0, whitePawn6.parentElement.style.top.length - 2)) + 125}px`
&& child.style.left == whitePawn6.parentElement.style.left)
    if (child.id == event.target.id && child.children.length == 0) {
        if (moveWhite === true && tanSquare7.contains(whitePawn6)) {
            socket.emit("white", {
                "white": whitePawn6.id,
                "child": child.id
            });
        }
    }
    //diagonalSpace
if (child.children.length > 0 && child.style.top == `${Number(whitePawn6.parentElement.style.top.slice(0, whitePawn6.parentElement.style.top.length - 2)) + 62.5}px`
&& child.style.left == `${Number(whitePawn6.parentElement.style.left.slice(0, whitePawn6.parentElement.style.left.length - 2)) + 62.5}px` && child.children[0].id.includes("black")
|| child.children.length > 0 && child.style.top == `${Number(whitePawn6.parentElement.style.top.slice(0, whitePawn6.parentElement.style.top.length - 2)) + 62.5}px`
&& child.style.left == `${Number(whitePawn6.parentElement.style.left.slice(0, whitePawn6.parentElement.style.left.length - 2)) - 62.5}px`
&& child.children[0].id.includes("black")) {
    if (child.children[0].id == event.target.id || child.id == event.target.id) {
        if (moveWhite === true) {
            socket.emit("whiteHit", {
                "white": whitePawn6.id,
                "child": child.id
            });
        }
    }
}
});
}
}

function clickWhitePawn7() {
    clickWhite = true;
    whiteMove = true;
    whiteSocket = true;
    checkerboard.removeAttribute("onclick");
    checkerboard.onclick = moveWhitePawn7;
}

function moveWhitePawn7(event) {
    if (clickWhite) {
    if (whitePawn7.contains(event.target)) {
        return;
    }
    var children = Array.from(checkerboard.children);
    children.forEach(function(child) {
        //oneSpace
        if (child.style.top == `${Number(whitePawn7.parentElement.style.top.slice(0, whitePawn7.parentElement.style.top.length - 2)) + 62.5}px`
&& child.style.left == whitePawn7.parentElement.style.left) {
    if (child.id == event.target.id && child.children.length == 0) {
        if (moveWhite === true) {
            socket.emit("white", {
                "white": whitePawn7.id,
                "child": child.id
            });
        }
    }
}
    //twoSpace
    if (child.style.top == `${Number(whitePawn7.parentElement.style.top.slice(0, whitePawn7.parentElement.style.top.length - 2)) + 125}px`
&& child.style.left == whitePawn7.parentElement.style.left)
    if (child.id == event.target.id && child.children.length == 0) {
        if (moveWhite === true && brownSquare8.contains(whitePawn7)) {
            socket.emit("white", {
                "white": whitePawn7.id,
                "child": child.id
            });
        }
    }
    //diagonalSpace
    if (child.children.length > 0 && child.style.top == `${Number(whitePawn7.parentElement.style.top.slice(0, whitePawn7.parentElement.style.top.length - 2)) + 62.5}px`
    && child.style.left == `${Number(whitePawn7.parentElement.style.left.slice(0, whitePawn7.parentElement.style.left.length - 2)) + 62.5}px` && child.children[0].id.includes("black")
    || child.children.length > 0 && child.style.top == `${Number(whitePawn7.parentElement.style.top.slice(0, whitePawn7.parentElement.style.top.length - 2)) + 62.5}px`
    && child.style.left == `${Number(whitePawn7.parentElement.style.left.slice(0, whitePawn7.parentElement.style.left.length - 2)) - 62.5}px`
    && child.children[0].id.includes("black")) {
    if (child.children[0].id == event.target.id || child.id == event.target.id) {
        if (moveWhite === true) {
            socket.emit("whiteHit", {
                "white": whitePawn7.id,
                "child": child.id
            });
        }
    }
}
});
}
}

function clickWhitePawn8() {
    clickWhite = true;
    whiteMove = true;
    whiteSocket = true;
    checkerboard.removeAttribute("onclick");
    checkerboard.onclick = moveWhitePawn8;
}

function moveWhitePawn8(event) {
    if (clickWhite) {
    if (whitePawn8.contains(event.target)) {
        return;
    }
    var children = Array.from(checkerboard.children);
    children.forEach(function(child) {
        //oneSpace
        if (child.style.top == `${Number(whitePawn8.parentElement.style.top.slice(0, whitePawn8.parentElement.style.top.length - 2)) + 62.5}px`
&& child.style.left == whitePawn8.parentElement.style.left) {
    if (child.id == event.target.id && child.children.length == 0) {
        if (moveWhite === true) {
            socket.emit("white", {
                "white": whitePawn8.id,
                "child": child.id
            });
        }
    }
}
    //twoSpace
    if (child.style.top == `${Number(whitePawn8.parentElement.style.top.slice(0, whitePawn8.parentElement.style.top.length - 2)) + 125}px`
&& child.style.left == whitePawn8.parentElement.style.left)
    if (child.id == event.target.id && child.children.length == 0) {
        if (moveWhite === true && tanSquare8.contains(whitePawn8)) {
            socket.emit("white", {
                "white": whitePawn8.id,
                "child": child.id
            });
        }
    }
    //diagonalSpace
    if (child.children.length > 0 && child.style.top == `${Number(whitePawn8.parentElement.style.top.slice(0, whitePawn8.parentElement.style.top.length - 2)) + 62.5}px`
    && child.style.left == `${Number(whitePawn8.parentElement.style.left.slice(0, whitePawn8.parentElement.style.left.length - 2)) + 62.5}px` && child.children[0].id.includes("black")
    || child.children.length > 0 && child.style.top == `${Number(whitePawn8.parentElement.style.top.slice(0, whitePawn8.parentElement.style.top.length - 2)) + 62.5}px`
    && child.style.left == `${Number(whitePawn8.parentElement.style.left.slice(0, whitePawn8.parentElement.style.left.length - 2)) - 62.5}px`
    && child.children[0].id.includes("black")) {
    if (child.children[0].id == event.target.id || child.id == event.target.id) {
        if (moveWhite === true) {
            socket.emit("whiteHit", {
                "white": whitePawn8.id,
                "child": child.id
            });
        }
    }
}
});
}
}

function clickWhiteRook1() {
    clickWhite = true;
    whiteMove = true;
    whiteSocket = true;
    checkerboard.removeAttribute("onclick");
    checkerboard.onclick = moveWhiteRook1;
}

function moveWhiteRook1(event) {
    if (clickWhite) {
    if (whiteRook1.contains(event.target)) {
        return;
    }
    var children = Array.from(checkerboard.children);
    for (var child of children) {
        if (event.target.id.includes("black") || event.target.children.length > 0 && event.target.children[0].id.includes("black")) {
            if (child.children.length > 0 &&
                Number(event.target.parentElement.style.top.slice(0, event.target.parentElement.style.top.length - 2)) < Number(child.style.top.slice(0, child.style.top.length - 2))
                && Number(child.style.top.slice(0, child.style.top.length - 2)) < Number(whiteRook1.parentElement.style.top.slice(0, whiteRook1.parentElement.style.top.length - 2))
                && child.style.left == whiteRook1.parentElement.style.left && child.id != whiteRook1.parentElement.id
                && Number(event.target.parentElement.style.top.slice(0, event.target.parentElement.style.top.length - 2)) < Number(whiteRook1.parentElement.style.top.slice(0, whiteRook1.parentElement.style.top.length - 2)) ||
                child.children.length > 0 &&
                Number(event.target.parentElement.style.top.slice(0, event.target.parentElement.style.top.length - 2)) > Number(child.style.top.slice(0, child.style.top.length - 2))
                && Number(child.style.top.slice(0, child.style.top.length - 2)) > Number(whiteRook1.parentElement.style.top.slice(0, whiteRook1.parentElement.style.top.length - 2))
                && child.style.left == whiteRook1.parentElement.style.left && child.id != whiteRook1.parentElement.id
                && Number(event.target.parentElement.style.top.slice(0, event.target.parentElement.style.top.length - 2)) > Number(whiteRook1.parentElement.style.top.slice(0, whiteRook1.parentElement.style.top.length - 2)) ||
                child.children.length > 0 &&
                Number(event.target.parentElement.style.left.slice(0, event.target.parentElement.style.left.length - 2)) > Number(child.style.left.slice(0, child.style.left.length - 2))
                && Number(child.style.left.slice(0, child.style.left.length - 2)) > Number(whiteRook1.parentElement.style.left.slice(0, whiteRook1.parentElement.style.left.length - 2))
                && child.style.top == whiteRook1.parentElement.style.top && child.id != whiteRook1.parentElement.id
                && Number(event.target.parentElement.style.left.slice(0, event.target.parentElement.style.left.length - 2)) > Number(whiteRook1.parentElement.style.left.slice(0, whiteRook1.parentElement.style.left.length - 2)) ||
                child.children.length > 0 &&
                Number(event.target.parentElement.style.left.slice(0, event.target.parentElement.style.left.length - 2)) < Number(child.style.left.slice(0, child.style.left.length - 2))
                && Number(child.style.left.slice(0, child.style.left.length - 2)) < Number(whiteRook1.parentElement.style.left.slice(0, whiteRook1.parentElement.style.left.length - 2))
                && child.style.top == whiteRook1.parentElement.style.top && child.id != whiteRook1.parentElement.id
                && Number(event.target.parentElement.style.left.slice(0, event.target.parentElement.style.left.length - 2)) < Number(whiteRook1.parentElement.style.left.slice(0, whiteRook1.parentElement.style.left.length - 2))) {
                    return console.log(child.id);
                }
            }
            if (event.target.id.includes("brown") || event.target.id.includes("tan")) {
                if (child.children.length > 0 &&
                    Number(event.target.style.top.slice(0, event.target.style.top.length - 2)) < Number(child.style.top.slice(0, child.style.top.length - 2))
                    && Number(child.style.top.slice(0, child.style.top.length - 2)) < Number(whiteRook1.parentElement.style.top.slice(0, whiteRook1.parentElement.style.top.length - 2))
                    && child.style.left == whiteRook1.parentElement.style.left && child.id != whiteRook1.parentElement.id
                    && Number(event.target.style.top.slice(0, event.target.style.top.length - 2)) < Number(whiteRook1.parentElement.style.top.slice(0, whiteRook1.parentElement.style.top.length - 2)) ||
                    child.children.length > 0 &&
                    Number(event.target.style.top.slice(0, event.target.style.top.length - 2)) > Number(child.style.top.slice(0, child.style.top.length - 2))
                    && Number(child.style.top.slice(0, child.style.top.length - 2)) > Number(whiteRook1.parentElement.style.top.slice(0, whiteRook1.parentElement.style.top.length - 2))
                    && child.style.left == whiteRook1.parentElement.style.left && child.id != whiteRook1.parentElement.id
                    && Number(event.target.style.top.slice(0, event.target.style.top.length - 2)) > Number(whiteRook1.parentElement.style.top.slice(0, whiteRook1.parentElement.style.top.length - 2)) ||
                    child.children.length > 0 &&
                    Number(event.target.style.left.slice(0, event.target.style.left.length - 2)) > Number(child.style.left.slice(0, child.style.left.length - 2))
                    && Number(child.style.left.slice(0, child.style.left.length - 2)) > Number(whiteRook1.parentElement.style.left.slice(0, whiteRook1.parentElement.style.left.length - 2))
                    && child.style.top == whiteRook1.parentElement.style.top && child.id != whiteRook1.parentElement.id
                    && Number(event.target.style.left.slice(0, event.target.style.left.length - 2)) > Number(whiteRook1.parentElement.style.left.slice(0, whiteRook1.parentElement.style.left.length - 2)) ||
                    child.children.length > 0 &&
                    Number(event.target.style.left.slice(0, event.target.style.left.length - 2)) < Number(child.style.left.slice(0, child.style.left.length - 2))
                    && Number(child.style.left.slice(0, child.style.left.length - 2)) < Number(whiteRook1.parentElement.style.left.slice(0, whiteRook1.parentElement.style.left.length - 2))
                    && child.style.top == whiteRook1.parentElement.style.top && child.id != whiteRook1.parentElement.id
                    && Number(event.target.style.left.slice(0, event.target.style.left.length - 2)) < Number(whiteRook1.parentElement.style.left.slice(0, whiteRook1.parentElement.style.left.length - 2))) {
                    return console.log(child.id);
                }
            }
    }
    children.forEach(function(child) {
        //Up
        if (Number(child.style.top.slice(0, child.style.top.length - 2)) < Number(whiteRook1.parentElement.style.top.slice(0, whiteRook1.parentElement.style.top.length - 2))
&& child.style.left == whiteRook1.parentElement.style.left) {
    if (child.id == event.target.id && child.children.length == 0) {
        if (moveWhite === true) {
            socket.emit("white", {
                "white": whiteRook1.id,
                "child": child.id
            });
        }
    }
}
//upHit
if (child.children.length > 0 && child.children[0].id.includes("black") && Number(child.style.top.slice(0, child.style.top.length - 2)) <
Number(whiteRook1.parentElement.style.top.slice(0, whiteRook1.parentElement.style.top.length - 2))
&& child.style.left == whiteRook1.parentElement.style.left && child.children[0].id.includes("black")) {
    if (child.children[0].id == event.target.id || child.id == event.target.id) {
        if (moveWhite === true) {
            socket.emit("whiteHit", {
                "white": whiteRook1.id,
                "child": child.id
            });
        }
    }
}
    //Down
    if (Number(child.style.top.slice(0, child.style.top.length - 2)) > Number(whiteRook1.parentElement.style.top.slice(0, whiteRook1.parentElement.style.top.length - 2))
&& child.style.left == whiteRook1.parentElement.style.left) {
    if (child.id == event.target.id && child.children.length == 0) {
        if (moveWhite === true) {
            socket.emit("white", {
                "white": whiteRook1.id,
                "child": child.id
            });
        }
    }
}
//downHit
if (child.children.length > 0 && child.children[0].id.includes("black") && Number(child.style.top.slice(0, child.style.top.length - 2)) >
Number(whiteRook1.parentElement.style.top.slice(0, whiteRook1.parentElement.style.top.length - 2))
&& child.style.left == whiteRook1.parentElement.style.left && child.children[0].id.includes("black")) {
    if (child.children[0].id == event.target.id || child.id == event.target.id) {
        if (moveWhite === true) {
            socket.emit("whiteHit", {
                "white": whiteRook1.id,
                "child": child.id
            });
        }
    }
}
    //Left
    if (Number(child.style.left.slice(0, child.style.left.length - 2)) > Number(whiteRook1.parentElement.style.left.slice(0, whiteRook1.parentElement.style.left.length - 2))
&& child.style.top == whiteRook1.parentElement.style.top) {
    if (child.id == event.target.id && child.children.length == 0) {
        if (moveWhite === true) {
            socket.emit("white", {
                "white": whiteRook1.id,
                "child": child.id
            });
        }
    }
}
//leftHit
if (child.children.length > 0 && child.children[0].id.includes("black") && Number(child.style.left.slice(0, child.style.left.length - 2)) <
Number(whiteRook1.parentElement.style.left.slice(0, whiteRook1.parentElement.style.left.length - 2))
&& child.style.top == whiteRook1.parentElement.style.top && child.children[0].id.includes("black")) {
    if (child.children[0].id == event.target.id || child.id == event.target.id) {
        if (moveWhite === true) {
            socket.emit("whiteHit", {
                "white": whiteRook1.id,
                "child": child.id
            });
        }
    }
}
    //Right
    if (Number(child.style.left.slice(0, child.style.left.length - 2)) < Number(whiteRook1.parentElement.style.left.slice(0, whiteRook1.parentElement.style.left.length - 2))
    && child.style.top == whiteRook1.parentElement.style.top) {
        if (child.id == event.target.id && child.children.length == 0) {
            if (moveWhite === true) {
                socket.emit("white", {
                    "white": whiteRook1.id,
                    "child": child.id
                });
            }
        }
    }
    //rightHit
if (child.children.length > 0 && child.children[0].id.includes("black") && Number(child.style.left.slice(0, child.style.left.length - 2)) >
Number(whiteRook1.parentElement.style.left.slice(0, whiteRook1.parentElement.style.left.length - 2))
&& child.style.top == whiteRook1.parentElement.style.top && child.children[0].id.includes("black")) {
    if (child.children[0].id == event.target.id || child.id == event.target.id) {
        if (moveWhite === true) {
            socket.emit("whiteHit", {
                "white": whiteRook1.id,
                "child": child.id
            });
        }
    }
}
});
}
}

function clickWhiteKnight1() {
    clickWhite = true;
    whiteMove = true;
    whiteSocket = true;
    checkerboard.removeAttribute("onclick");
    checkerboard.onclick = moveWhiteKnight1;
}

function moveWhiteKnight1(event) {
    if (clickWhite) {
    if (whiteKnight1.contains(event.target)) {
        return;
    }
    var children = Array.from(checkerboard.children);
    children.forEach(function(child) {
    //twoSpaceUp
    if (child.style.top == `${Number(whiteKnight1.parentElement.style.top.slice(0, whiteKnight1.parentElement.style.top.length - 2)) - 125}px`
    && child.style.left == `${Number(whiteKnight1.parentElement.style.left.slice(0, whiteKnight1.parentElement.style.left.length - 2)) + 62.5}px`
    || child.style.top == `${Number(whiteKnight1.parentElement.style.top.slice(0, whiteKnight1.parentElement.style.top.length - 2)) - 125}px`
    && child.style.left == `${Number(whiteKnight1.parentElement.style.left.slice(0, whiteKnight1.parentElement.style.left.length - 2)) - 62.5}px`) {
        if (child.id == event.target.id && child.children.length == 0) {
            if (moveWhite === true) {
                socket.emit("white", {
                    "white": whiteKnight1.id,
                    "child": child.id
                });
            }
        }
        if (child.children.length > 0 && child.id == event.target.parentElement.id && event.target.id.includes("black")
        || child.children.length > 0 && child.children[0].id == event.target.id && event.target.id.includes("black")) {
            if (moveWhite === true) {
                socket.emit("whiteHit", {
                    "white": whiteKnight1.id,
                    "child": child.id
                });
            }
        }
    }
    //twoSpaceDown
    if (child.style.top == `${Number(whiteKnight1.parentElement.style.top.slice(0, whiteKnight1.parentElement.style.top.length - 2)) + 125}px`
    && child.style.left == `${Number(whiteKnight1.parentElement.style.left.slice(0, whiteKnight1.parentElement.style.left.length - 2)) + 62.5}px`
    || child.style.top == `${Number(whiteKnight1.parentElement.style.top.slice(0, whiteKnight1.parentElement.style.top.length - 2)) + 125}px`
    && child.style.left == `${Number(whiteKnight1.parentElement.style.left.slice(0, whiteKnight1.parentElement.style.left.length - 2)) - 62.5}px`) {
        if (child.id == event.target.id && child.children.length == 0) {
            if (moveWhite === true) {
                socket.emit("white", {
                    "white": whiteKnight1.id,
                    "child": child.id
                });
            }
        }
        if (child.children.length > 0 && child.id == event.target.parentElement.id && event.target.id.includes("black")
        || child.children.length > 0 && child.children[0].id == event.target.id && event.target.id.includes("black")) {
            if (moveWhite === true) {
                socket.emit("whiteHit", {
                    "white": whiteKnight1.id,
                    "child": child.id
                });
            }
        }
    }
    //oneSpaceUp
    if (child.style.top == `${Number(whiteKnight1.parentElement.style.top.slice(0, whiteKnight1.parentElement.style.top.length - 2)) - 62.5}px`
    && child.style.left == `${Number(whiteKnight1.parentElement.style.left.slice(0, whiteKnight1.parentElement.style.left.length - 2)) + 125}px`
    || child.style.top == `${Number(whiteKnight1.parentElement.style.top.slice(0, whiteKnight1.parentElement.style.top.length - 2)) - 62.5}px`
    && child.style.left == `${Number(whiteKnight1.parentElement.style.left.slice(0, whiteKnight1.parentElement.style.left.length - 2)) - 125}px`) {
        if (child.id == event.target.id && child.children.length == 0) {
            if (moveWhite === true) {
                socket.emit("white", {
                    "white": whiteKnight1.id,
                    "child": child.id
                });
            }
        }
        if (child.children.length > 0 && child.id == event.target.parentElement.id && event.target.id.includes("black")
        || child.children.length > 0 && child.children[0].id == event.target.id && event.target.id.includes("black")) {
            if (moveWhite === true) {
                socket.emit("whiteHit", {
                    "white": whiteKnight1.id,
                    "child": child.id
                });
            }
        }
    }
    //oneSpaceDown
    if (child.style.top == `${Number(whiteKnight1.parentElement.style.top.slice(0, whiteKnight1.parentElement.style.top.length - 2)) + 62.5}px`
    && child.style.left == `${Number(whiteKnight1.parentElement.style.left.slice(0, whiteKnight1.parentElement.style.left.length - 2)) + 125}px`
    || child.style.top == `${Number(whiteKnight1.parentElement.style.top.slice(0, whiteKnight1.parentElement.style.top.length - 2)) + 62.5}px`
    && child.style.left == `${Number(whiteKnight1.parentElement.style.left.slice(0, whiteKnight1.parentElement.style.left.length - 2)) - 125}px`) {
        if (child.id == event.target.id && child.children.length == 0) {
            if (moveWhite === true) {
                socket.emit("white", {
                    "white": whiteKnight1.id,
                    "child": child.id
                });
            }
        }
        if (child.children.length > 0 && child.id == event.target.parentElement.id && event.target.id.includes("black")
        || child.children.length > 0 && child.children[0].id == event.target.id && event.target.id.includes("black")) {
            if (moveWhite === true) {
                socket.emit("whiteHit", {
                    "white": whiteKnight1.id,
                    "child": child.id
                });
            }
        }
    }
});
}
}

function clickWhiteBishop1() {
    clickWhite = true;
    whiteMove = true;
    whiteSocket = true;
    checkerboard.removeAttribute("onclick");
    checkerboard.onclick = moveWhiteBishop1;
}

function moveWhiteBishop1(event) {
    if (clickWhite) {
    if (whiteBishop1.contains(event.target)) {
        return;
    }
    var children = Array.from(checkerboard.children);
    for (var child of children) {
        if (event.target.id.includes("black") || event.target.children.length > 0 && event.target.children[0].id.includes("black")) {
            if (child.children.length > 0 && Number(child.style.left.slice(0, child.style.left.length - 2)) < Number(event.target.parentElement.style.left.slice(0, event.target.parentElement.style.left.length - 2))
            && Number(child.style.left.slice(0, child.style.left.length - 2)) > Number(whiteBishop1.parentElement.style.left.slice(0, whiteBishop1.parentElement.style.left.length - 2))
            && Number(child.style.top.slice(0, child.style.top.length - 2)) > Number(event.target.parentElement.style.top.slice(0, event.target.parentElement.style.top.length - 2)) && child.id != whiteBishop1.parentElement.id
            && Number(child.style.top.slice(0, child.style.top.length - 2)) < Number(whiteBishop1.parentElement.style.top.slice(0, whiteBishop1.parentElement.style.top.length - 2))
            && Number(child.style.left.slice(0, child.style.left.length - 2)) - Number(whiteBishop1.parentElement.style.left.slice(0, whiteBishop1.parentElement.style.left.length - 2))
            == Number(whiteBishop1.parentElement.style.top.slice(0, whiteBishop1.parentElement.style.top.length - 2)) - Number(child.style.top.slice(0, child.style.top.length - 2)) ||
            child.children.length > 0 && Number(child.style.left.slice(0, child.style.left.length - 2)) > Number(event.target.parentElement.style.left.slice(0, event.target.parentElement.style.left.length - 2))
            && Number(child.style.left.slice(0, child.style.left.length - 2)) < Number(whiteBishop1.parentElement.style.left.slice(0, whiteBishop1.parentElement.style.left.length - 2))
            && Number(child.style.top.slice(0, child.style.top.length - 2)) > Number(event.target.parentElement.style.top.slice(0, event.target.parentElement.style.top.length - 2)) && child.id != whiteBishop1.parentElement.id
            && Number(child.style.top.slice(0, child.style.top.length - 2)) < Number(whiteBishop1.parentElement.style.top.slice(0, whiteBishop1.parentElement.style.top.length - 2))
            && Number(whiteBishop1.parentElement.style.left.slice(0, whiteBishop1.parentElement.style.left.length - 2)) - Number(child.style.left.slice(0, child.style.left.length - 2))
            == Number(whiteBishop1.parentElement.style.top.slice(0, whiteBishop1.parentElement.style.top.length - 2)) - Number(child.style.top.slice(0, child.style.top.length - 2)) ||
            child.children.length > 0 && Number(child.style.left.slice(0, child.style.left.length - 2)) < Number(event.target.parentElement.style.left.slice(0, event.target.parentElement.style.left.length - 2))
            && Number(child.style.left.slice(0, child.style.left.length - 2)) > Number(whiteBishop1.parentElement.style.left.slice(0, whiteBishop1.parentElement.style.left.length - 2))
            && Number(child.style.top.slice(0, child.style.top.length - 2)) < Number(event.target.parentElement.style.top.slice(0, event.target.parentElement.style.top.length - 2)) && child.id != whiteBishop1.parentElement.id
            && Number(child.style.top.slice(0, child.style.top.length - 2)) > Number(whiteBishop1.parentElement.style.top.slice(0, whiteBishop1.parentElement.style.top.length - 2))
            && Number(child.style.left.slice(0, child.style.left.length - 2)) - Number(whiteBishop1.parentElement.style.left.slice(0, whiteBishop1.parentElement.style.left.length - 2))
            == Number(child.style.top.slice(0, child.style.top.length - 2)) - Number(whiteBishop1.parentElement.style.top.slice(0, whiteBishop1.parentElement.style.top.length - 2)) ||
            child.children.length > 0 && Number(child.style.left.slice(0, child.style.left.length - 2)) > Number(event.target.parentElement.style.left.slice(0, event.target.parentElement.style.left.length - 2))
            && Number(child.style.left.slice(0, child.style.left.length - 2)) < Number(whiteBishop1.parentElement.style.left.slice(0, whiteBishop1.parentElement.style.left.length - 2))
            && Number(child.style.top.slice(0, child.style.top.length - 2)) < Number(event.target.parentElement.style.top.slice(0, event.target.parentElement.style.top.length - 2)) && child.id != whiteBishop1.parentElement.id
            && Number(child.style.top.slice(0, child.style.top.length - 2)) > Number(whiteBishop1.parentElement.style.top.slice(0, whiteBishop1.parentElement.style.top.length - 2))
            && Number(whiteBishop1.parentElement.style.left.slice(0, whiteBishop1.parentElement.style.left.length - 2)) - Number(child.style.left.slice(0, child.style.left.length - 2))
            == Number(child.style.top.slice(0, child.style.top.length - 2)) - Number(whiteBishop1.parentElement.style.top.slice(0, whiteBishop1.parentElement.style.top.length - 2))) {
                return console.log(child.id);
            }
        }
        if (event.target.id.includes("brown") || event.target.id.includes("tan")) {
            if (child.children.length > 0 && Number(child.style.left.slice(0, child.style.left.length - 2)) < Number(event.target.style.left.slice(0, event.target.style.left.length - 2))
            && Number(child.style.left.slice(0, child.style.left.length - 2)) > Number(whiteBishop1.parentElement.style.left.slice(0, whiteBishop1.parentElement.style.left.length - 2))
            && Number(child.style.top.slice(0, child.style.top.length - 2)) > Number(event.target.style.top.slice(0, event.target.style.top.length - 2)) && child.id != whiteBishop1.parentElement.id
            && Number(child.style.top.slice(0, child.style.top.length - 2)) < Number(whiteBishop1.parentElement.style.top.slice(0, whiteBishop1.parentElement.style.top.length - 2))
            && Number(child.style.left.slice(0, child.style.left.length - 2)) - Number(whiteBishop1.parentElement.style.left.slice(0, whiteBishop1.parentElement.style.left.length - 2))
            == Number(whiteBishop1.parentElement.style.top.slice(0, whiteBishop1.parentElement.style.top.length - 2)) - Number(child.style.top.slice(0, child.style.top.length - 2)) ||
            child.children.length > 0 && Number(child.style.left.slice(0, child.style.left.length - 2)) > Number(event.target.style.left.slice(0, event.target.style.left.length - 2))
            && Number(child.style.left.slice(0, child.style.left.length - 2)) < Number(whiteBishop1.parentElement.style.left.slice(0, whiteBishop1.parentElement.style.left.length - 2))
            && Number(child.style.top.slice(0, child.style.top.length - 2)) > Number(event.target.style.top.slice(0, event.target.style.top.length - 2)) && child.id != whiteBishop1.parentElement.id
            && Number(child.style.top.slice(0, child.style.top.length - 2)) < Number(whiteBishop1.parentElement.style.top.slice(0, whiteBishop1.parentElement.style.top.length - 2))
            && Number(whiteBishop1.parentElement.style.left.slice(0, whiteBishop1.parentElement.style.left.length - 2)) - Number(child.style.left.slice(0, child.style.left.length - 2))
            == Number(whiteBishop1.parentElement.style.top.slice(0, whiteBishop1.parentElement.style.top.length - 2)) - Number(child.style.top.slice(0, child.style.top.length - 2)) ||
            child.children.length > 0 && Number(child.style.left.slice(0, child.style.left.length - 2)) < Number(event.target.style.left.slice(0, event.target.style.left.length - 2))
            && Number(child.style.left.slice(0, child.style.left.length - 2)) > Number(whiteBishop1.parentElement.style.left.slice(0, whiteBishop1.parentElement.style.left.length - 2))
            && Number(child.style.top.slice(0, child.style.top.length - 2)) < Number(event.target.style.top.slice(0, event.target.style.top.length - 2)) && child.id != whiteBishop1.parentElement.id
            && Number(child.style.top.slice(0, child.style.top.length - 2)) > Number(whiteBishop1.parentElement.style.top.slice(0, whiteBishop1.parentElement.style.top.length - 2))
            && Number(child.style.left.slice(0, child.style.left.length - 2)) - Number(whiteBishop1.parentElement.style.left.slice(0, whiteBishop1.parentElement.style.left.length - 2))
            == Number(child.style.top.slice(0, child.style.top.length - 2)) - Number(whiteBishop1.parentElement.style.top.slice(0, whiteBishop1.parentElement.style.top.length - 2)) ||
            child.children.length > 0 && Number(child.style.left.slice(0, child.style.left.length - 2)) > Number(event.target.style.left.slice(0, event.target.style.left.length - 2))
            && Number(child.style.left.slice(0, child.style.left.length - 2)) < Number(whiteBishop1.parentElement.style.left.slice(0, whiteBishop1.parentElement.style.left.length - 2))
            && Number(child.style.top.slice(0, child.style.top.length - 2)) < Number(event.target.style.top.slice(0, event.target.style.top.length - 2)) && child.id != whiteBishop1.parentElement.id
            && Number(child.style.top.slice(0, child.style.top.length - 2)) > Number(whiteBishop1.parentElement.style.top.slice(0, whiteBishop1.parentElement.style.top.length - 2))
            && Number(whiteBishop1.parentElement.style.left.slice(0, whiteBishop1.parentElement.style.left.length - 2)) - Number(child.style.left.slice(0, child.style.left.length - 2))
            == Number(child.style.top.slice(0, child.style.top.length - 2)) - Number(whiteBishop1.parentElement.style.top.slice(0, whiteBishop1.parentElement.style.top.length - 2))) {
                return console.log(child.id);
            }
        }
    }
    children.forEach(function(child) {
    //Diagonal
    if (Number(child.style.left.slice(0, child.style.left.length - 2)) - Number(whiteBishop1.parentElement.style.left.slice(0, whiteBishop1.parentElement.style.left.length - 2))
    == Number(whiteBishop1.parentElement.style.top.slice(0, whiteBishop1.parentElement.style.top.length - 2)) - Number(child.style.top.slice(0, child.style.top.length - 2)) ||
    Number(whiteBishop1.parentElement.style.left.slice(0, whiteBishop1.parentElement.style.left.length - 2)) - Number(child.style.left.slice(0, child.style.left.length - 2))
    == Number(whiteBishop1.parentElement.style.top.slice(0, whiteBishop1.parentElement.style.top.length - 2)) - Number(child.style.top.slice(0, child.style.top.length - 2))) {
        if (child.id == event.target.id && child.children.length == 0) {
            if (moveWhite === true) {
                socket.emit("white", {
                    "white": whiteBishop1.id,
                    "child": child.id
                });
            }
        }
    }
    //diagonalHit
    if (child.children.length > 0 && Number(child.style.left.slice(0, child.style.left.length - 2)) - Number(whiteBishop1.parentElement.style.left.slice(0, whiteBishop1.parentElement.style.left.length - 2))
    == Number(whiteBishop1.parentElement.style.top.slice(0, whiteBishop1.parentElement.style.top.length - 2)) - Number(child.style.top.slice(0, child.style.top.length - 2)) && child.children[0].id.includes("black") ||
    child.children.length > 0 && Number(whiteBishop1.parentElement.style.left.slice(0, whiteBishop1.parentElement.style.left.length - 2)) - Number(child.style.left.slice(0, child.style.left.length - 2))
    == Number(whiteBishop1.parentElement.style.top.slice(0, whiteBishop1.parentElement.style.top.length - 2)) - Number(child.style.top.slice(0, child.style.top.length - 2)) && child.children[0].id.includes("black")) {
        if (child.children[0].id == event.target.id || child.id == event.target.id) {
            if (moveWhite === true) {
                socket.emit("whiteHit", {
                    "white": whiteBishop1.id,
                    "child": child.id
                });
            }
        }
    }
});
}
}

function clickWhiteQueen() {
    clickWhite = true;
    whiteMove = true;
    whiteSocket = true;
    checkerboard.removeAttribute("onclick");
    checkerboard.onclick = moveWhiteQueen;
}

function moveWhiteQueen(event) {
    if (clickWhite) {
    if (whiteQueen.contains(event.target)) {
        return;
    }
    var children = Array.from(checkerboard.children);
    for (var child of children) {
        if (event.target.id.includes("black") || event.target.children.length > 0 && event.target.children[0].id.includes("black")) {
            if (child.children.length > 0 && Number(child.style.left.slice(0, child.style.left.length - 2)) < Number(event.target.parentElement.style.left.slice(0, event.target.parentElement.style.left.length - 2))
            && Number(child.style.left.slice(0, child.style.left.length - 2)) > Number(whiteQueen.parentElement.style.left.slice(0, whiteQueen.parentElement.style.left.length - 2))
            && Number(child.style.top.slice(0, child.style.top.length - 2)) > Number(event.target.parentElement.style.top.slice(0, event.target.parentElement.style.top.length - 2)) && child.id != whiteQueen.parentElement.id
            && Number(child.style.top.slice(0, child.style.top.length - 2)) < Number(whiteQueen.parentElement.style.top.slice(0, whiteQueen.parentElement.style.top.length - 2))
            && Number(child.style.left.slice(0, child.style.left.length - 2)) - Number(whiteQueen.parentElement.style.left.slice(0, whiteQueen.parentElement.style.left.length - 2))
            == Number(whiteQueen.parentElement.style.top.slice(0, whiteQueen.parentElement.style.top.length - 2)) - Number(child.style.top.slice(0, child.style.top.length - 2)) ||
            child.children.length > 0 && Number(child.style.left.slice(0, child.style.left.length - 2)) > Number(event.target.parentElement.style.left.slice(0, event.target.parentElement.style.left.length - 2))
            && Number(child.style.left.slice(0, child.style.left.length - 2)) < Number(whiteQueen.parentElement.style.left.slice(0, whiteQueen.parentElement.style.left.length - 2))
            && Number(child.style.top.slice(0, child.style.top.length - 2)) > Number(event.target.parentElement.style.top.slice(0, event.target.parentElement.style.top.length - 2)) && child.id != whiteQueen.parentElement.id
            && Number(child.style.top.slice(0, child.style.top.length - 2)) < Number(whiteQueen.parentElement.style.top.slice(0, whiteQueen.parentElement.style.top.length - 2))
            && Number(whiteQueen.parentElement.style.left.slice(0, whiteQueen.parentElement.style.left.length - 2)) - Number(child.style.left.slice(0, child.style.left.length - 2))
            == Number(whiteQueen.parentElement.style.top.slice(0, whiteQueen.parentElement.style.top.length - 2)) - Number(child.style.top.slice(0, child.style.top.length - 2)) ||
            child.children.length > 0 && Number(child.style.left.slice(0, child.style.left.length - 2)) < Number(event.target.parentElement.style.left.slice(0, event.target.parentElement.style.left.length - 2))
            && Number(child.style.left.slice(0, child.style.left.length - 2)) > Number(whiteQueen.parentElement.style.left.slice(0, whiteQueen.parentElement.style.left.length - 2))
            && Number(child.style.top.slice(0, child.style.top.length - 2)) < Number(event.target.parentElement.style.top.slice(0, event.target.parentElement.style.top.length - 2)) && child.id != whiteQueen.parentElement.id
            && Number(child.style.top.slice(0, child.style.top.length - 2)) > Number(whiteQueen.parentElement.style.top.slice(0, whiteQueen.parentElement.style.top.length - 2))
            && Number(child.style.left.slice(0, child.style.left.length - 2)) - Number(whiteQueen.parentElement.style.left.slice(0, whiteQueen.parentElement.style.left.length - 2))
            == Number(child.style.top.slice(0, child.style.top.length - 2)) - Number(whiteQueen.parentElement.style.top.slice(0, whiteQueen.parentElement.style.top.length - 2)) ||
            child.children.length > 0 && Number(child.style.left.slice(0, child.style.left.length - 2)) > Number(event.target.parentElement.style.left.slice(0, event.target.parentElement.style.left.length - 2))
            && Number(child.style.left.slice(0, child.style.left.length - 2)) < Number(whiteQueen.parentElement.style.left.slice(0, whiteQueen.parentElement.style.left.length - 2))
            && Number(child.style.top.slice(0, child.style.top.length - 2)) < Number(event.target.parentElement.style.top.slice(0, event.target.parentElement.style.top.length - 2)) && child.id != whiteQueen.parentElement.id
            && Number(child.style.top.slice(0, child.style.top.length - 2)) > Number(whiteQueen.parentElement.style.top.slice(0, whiteQueen.parentElement.style.top.length - 2))
            && Number(whiteQueen.parentElement.style.left.slice(0, whiteQueen.parentElement.style.left.length - 2)) - Number(child.style.left.slice(0, child.style.left.length - 2))
            == Number(child.style.top.slice(0, child.style.top.length - 2)) - Number(whiteQueen.parentElement.style.top.slice(0, whiteQueen.parentElement.style.top.length - 2))) {
                return console.log(child.id);
            }
        if (event.target.parentElement.style.left == whiteQueen.parentElement.style.left
            || event.target.parentElement.style.top == whiteQueen.parentElement.style.top
            || event.target.style.left == whiteQueen.parentElement.style.left
            || event.target.style.top == whiteQueen.parentElement.style.top) {
            if (child.children.length > 0 &&
                Number(event.target.parentElement.style.top.slice(0, event.target.parentElement.style.top.length - 2)) < Number(child.style.top.slice(0, child.style.top.length - 2))
                && Number(child.style.top.slice(0, child.style.top.length - 2)) < Number(whiteQueen.parentElement.style.top.slice(0, whiteQueen.parentElement.style.top.length - 2))
                && child.style.left == whiteQueen.parentElement.style.left && child.id != whiteQueen.parentElement.id
                && Number(event.target.parentElement.style.top.slice(0, event.target.parentElement.style.top.length - 2)) < Number(whiteQueen.parentElement.style.top.slice(0, whiteQueen.parentElement.style.top.length - 2)) ||
                child.children.length > 0 &&
                Number(event.target.parentElement.style.top.slice(0, event.target.parentElement.style.top.length - 2)) > Number(child.style.top.slice(0, child.style.top.length - 2))
                && Number(child.style.top.slice(0, child.style.top.length - 2)) > Number(whiteQueen.parentElement.style.top.slice(0, whiteQueen.parentElement.style.top.length - 2))
                && child.style.left == whiteQueen.parentElement.style.left && child.id != whiteQueen.parentElement.id
                && Number(event.target.parentElement.style.top.slice(0, event.target.parentElement.style.top.length - 2)) > Number(whiteQueen.parentElement.style.top.slice(0, whiteQueen.parentElement.style.top.length - 2)) ||
                child.children.length > 0 &&
                Number(event.target.parentElement.style.left.slice(0, event.target.parentElement.style.left.length - 2)) > Number(child.style.left.slice(0, child.style.left.length - 2))
                && Number(child.style.left.slice(0, child.style.left.length - 2)) > Number(whiteQueen.parentElement.style.left.slice(0, whiteQueen.parentElement.style.left.length - 2))
                && child.style.top == whiteQueen.parentElement.style.top && child.id != whiteQueen.parentElement.id
                && Number(event.target.parentElement.style.left.slice(0, event.target.parentElement.style.left.length - 2)) > Number(whiteQueen.parentElement.style.left.slice(0, whiteQueen.parentElement.style.left.length - 2)) ||
                child.children.length > 0 &&
                Number(event.target.parentElement.style.left.slice(0, event.target.parentElement.style.left.length - 2)) < Number(child.style.left.slice(0, child.style.left.length - 2))
                && Number(child.style.left.slice(0, child.style.left.length - 2)) < Number(whiteQueen.parentElement.style.left.slice(0, whiteQueen.parentElement.style.left.length - 2))
                && child.style.top == whiteQueen.parentElement.style.top && child.id != whiteQueen.parentElement.id
                && Number(event.target.parentElement.style.left.slice(0, event.target.parentElement.style.left.length - 2)) < Number(whiteQueen.parentElement.style.left.slice(0, whiteQueen.parentElement.style.left.length - 2))) {
                return console.log(child.id);
            }
        }
        }
        if (event.target.id.includes("brown") || event.target.id.includes("tan")) {
            if (child.children.length > 0 && Number(child.style.left.slice(0, child.style.left.length - 2)) < Number(event.target.style.left.slice(0, event.target.style.left.length - 2))
            && Number(child.style.left.slice(0, child.style.left.length - 2)) > Number(whiteQueen.parentElement.style.left.slice(0, whiteQueen.parentElement.style.left.length - 2))
            && Number(child.style.top.slice(0, child.style.top.length - 2)) > Number(event.target.style.top.slice(0, event.target.style.top.length - 2)) && child.id != whiteQueen.parentElement.id
            && Number(child.style.top.slice(0, child.style.top.length - 2)) < Number(whiteQueen.parentElement.style.top.slice(0, whiteQueen.parentElement.style.top.length - 2))
            && Number(child.style.left.slice(0, child.style.left.length - 2)) - Number(whiteQueen.parentElement.style.left.slice(0, whiteQueen.parentElement.style.left.length - 2))
            == Number(whiteQueen.parentElement.style.top.slice(0, whiteQueen.parentElement.style.top.length - 2)) - Number(child.style.top.slice(0, child.style.top.length - 2)) ||
            child.children.length > 0 && Number(child.style.left.slice(0, child.style.left.length - 2)) > Number(event.target.style.left.slice(0, event.target.style.left.length - 2))
            && Number(child.style.left.slice(0, child.style.left.length - 2)) < Number(whiteQueen.parentElement.style.left.slice(0, whiteQueen.parentElement.style.left.length - 2))
            && Number(child.style.top.slice(0, child.style.top.length - 2)) > Number(event.target.style.top.slice(0, event.target.style.top.length - 2)) && child.id != whiteQueen.parentElement.id
            && Number(child.style.top.slice(0, child.style.top.length - 2)) < Number(whiteQueen.parentElement.style.top.slice(0, whiteQueen.parentElement.style.top.length - 2))
            && Number(whiteQueen.parentElement.style.left.slice(0, whiteQueen.parentElement.style.left.length - 2)) - Number(child.style.left.slice(0, child.style.left.length - 2))
            == Number(whiteQueen.parentElement.style.top.slice(0, whiteQueen.parentElement.style.top.length - 2)) - Number(child.style.top.slice(0, child.style.top.length - 2)) ||
            child.children.length > 0 && Number(child.style.left.slice(0, child.style.left.length - 2)) < Number(event.target.style.left.slice(0, event.target.style.left.length - 2))
            && Number(child.style.left.slice(0, child.style.left.length - 2)) > Number(whiteQueen.parentElement.style.left.slice(0, whiteQueen.parentElement.style.left.length - 2))
            && Number(child.style.top.slice(0, child.style.top.length - 2)) < Number(event.target.style.top.slice(0, event.target.style.top.length - 2)) && child.id != whiteQueen.parentElement.id
            && Number(child.style.top.slice(0, child.style.top.length - 2)) > Number(whiteQueen.parentElement.style.top.slice(0, whiteQueen.parentElement.style.top.length - 2))
            && Number(child.style.left.slice(0, child.style.left.length - 2)) - Number(whiteQueen.parentElement.style.left.slice(0, whiteQueen.parentElement.style.left.length - 2))
            == Number(child.style.top.slice(0, child.style.top.length - 2)) - Number(whiteQueen.parentElement.style.top.slice(0, whiteQueen.parentElement.style.top.length - 2)) ||
            child.children.length > 0 && Number(child.style.left.slice(0, child.style.left.length - 2)) > Number(event.target.style.left.slice(0, event.target.style.left.length - 2))
            && Number(child.style.left.slice(0, child.style.left.length - 2)) < Number(whiteQueen.parentElement.style.left.slice(0, whiteQueen.parentElement.style.left.length - 2))
            && Number(child.style.top.slice(0, child.style.top.length - 2)) < Number(event.target.style.top.slice(0, event.target.style.top.length - 2)) && child.id != whiteQueen.parentElement.id
            && Number(child.style.top.slice(0, child.style.top.length - 2)) > Number(whiteQueen.parentElement.style.top.slice(0, whiteQueen.parentElement.style.top.length - 2))
            && Number(whiteQueen.parentElement.style.left.slice(0, whiteQueen.parentElement.style.left.length - 2)) - Number(child.style.left.slice(0, child.style.left.length - 2))
            == Number(child.style.top.slice(0, child.style.top.length - 2)) - Number(whiteQueen.parentElement.style.top.slice(0, whiteQueen.parentElement.style.top.length - 2))) {
                return console.log(child.id);
            }
        if (event.target.parentElement.style.left == whiteQueen.parentElement.style.left
            || event.target.parentElement.style.top == whiteQueen.parentElement.style.top
            || event.target.style.left == whiteQueen.parentElement.style.left
            || event.target.style.top == whiteQueen.parentElement.style.top) {
            if (child.children.length > 0 &&
                Number(event.target.style.top.slice(0, event.target.style.top.length - 2)) < Number(child.style.top.slice(0, child.style.top.length - 2))
                && Number(child.style.top.slice(0, child.style.top.length - 2)) < Number(whiteQueen.parentElement.style.top.slice(0, whiteQueen.parentElement.style.top.length - 2))
                && child.style.left == whiteQueen.parentElement.style.left && child.id != whiteQueen.parentElement.id
                && Number(event.target.style.top.slice(0, event.target.style.top.length - 2)) < Number(whiteQueen.parentElement.style.top.slice(0, whiteQueen.parentElement.style.top.length - 2)) ||
                child.children.length > 0 &&
                Number(event.target.style.top.slice(0, event.target.style.top.length - 2)) > Number(child.style.top.slice(0, child.style.top.length - 2))
                && Number(child.style.top.slice(0, child.style.top.length - 2)) > Number(whiteQueen.parentElement.style.top.slice(0, whiteQueen.parentElement.style.top.length - 2))
                && child.style.left == whiteQueen.parentElement.style.left && child.id != whiteQueen.parentElement.id
                && Number(event.target.style.top.slice(0, event.target.style.top.length - 2)) > Number(whiteQueen.parentElement.style.top.slice(0, whiteQueen.parentElement.style.top.length - 2)) ||
                child.children.length > 0 &&
                Number(event.target.style.left.slice(0, event.target.style.left.length - 2)) > Number(child.style.left.slice(0, child.style.left.length - 2))
                && Number(child.style.left.slice(0, child.style.left.length - 2)) > Number(whiteQueen.parentElement.style.left.slice(0, whiteQueen.parentElement.style.left.length - 2))
                && child.style.top == whiteQueen.parentElement.style.top && child.id != whiteQueen.parentElement.id
                && Number(event.target.style.left.slice(0, event.target.style.left.length - 2)) > Number(whiteQueen.parentElement.style.left.slice(0, whiteQueen.parentElement.style.left.length - 2)) ||
                child.children.length > 0 &&
                Number(event.target.style.left.slice(0, event.target.style.left.length - 2)) < Number(child.style.left.slice(0, child.style.left.length - 2))
                && Number(child.style.left.slice(0, child.style.left.length - 2)) < Number(whiteQueen.parentElement.style.left.slice(0, whiteQueen.parentElement.style.left.length - 2))
                && child.style.top == whiteQueen.parentElement.style.top && child.id != whiteQueen.parentElement.id
                && Number(event.target.style.left.slice(0, event.target.style.left.length - 2)) < Number(whiteQueen.parentElement.style.left.slice(0, whiteQueen.parentElement.style.left.length - 2))) {
                return console.log(child.id);
            }
        }
        }
    }
    children.forEach(function(child) {
    //Diagonal
    if (Number(child.style.left.slice(0, child.style.left.length - 2)) - Number(whiteQueen.parentElement.style.left.slice(0, whiteQueen.parentElement.style.left.length - 2))
    == Number(whiteQueen.parentElement.style.top.slice(0, whiteQueen.parentElement.style.top.length - 2)) - Number(child.style.top.slice(0, child.style.top.length - 2)) ||
    Number(whiteQueen.parentElement.style.left.slice(0, whiteQueen.parentElement.style.left.length - 2)) - Number(child.style.left.slice(0, child.style.left.length - 2))
    == Number(whiteQueen.parentElement.style.top.slice(0, whiteQueen.parentElement.style.top.length - 2)) - Number(child.style.top.slice(0, child.style.top.length - 2))) {
        if (child.id == event.target.id && child.children.length == 0) {
            if (moveWhite === true) {
                socket.emit("white", {
                    "white": whiteQueen.id,
                    "child": child.id
                });
            }
        }
    }
    //diagonalHit
    if (child.children.length > 0 && Number(child.style.left.slice(0, child.style.left.length - 2)) - Number(whiteQueen.parentElement.style.left.slice(0, whiteQueen.parentElement.style.left.length - 2))
    == Number(whiteQueen.parentElement.style.top.slice(0, whiteQueen.parentElement.style.top.length - 2)) - Number(child.style.top.slice(0, child.style.top.length - 2)) && child.children[0].id.includes("black") ||
    child.children.length > 0 && Number(whiteQueen.parentElement.style.left.slice(0, whiteQueen.parentElement.style.left.length - 2)) - Number(child.style.left.slice(0, child.style.left.length - 2))
    == Number(whiteQueen.parentElement.style.top.slice(0, whiteQueen.parentElement.style.top.length - 2)) - Number(child.style.top.slice(0, child.style.top.length - 2)) && child.children[0].id.includes("black")) {
        if (child.children[0].id == event.target.id || child.id == event.target.id) {
            if (moveWhite === true) {
                socket.emit("whiteHit", {
                    "white": whiteQueen.id,
                    "child": child.id
                });
            }
        }
    }
    //Up
        if (Number(child.style.top.slice(0, child.style.top.length - 2)) < Number(whiteQueen.parentElement.style.top.slice(0, whiteQueen.parentElement.style.top.length - 2))
&& child.style.left == whiteQueen.parentElement.style.left) {
    if (child.id == event.target.id && child.children.length == 0) {
        if (moveWhite === true) {
            socket.emit("white", {
                "white": whiteQueen.id,
                "child": child.id
            });
        }
    }
}
//upHit
if (child.children.length > 0 && child.children[0].id.includes("black") && Number(child.style.top.slice(0, child.style.top.length - 2)) <
Number(whiteQueen.parentElement.style.top.slice(0, whiteQueen.parentElement.style.top.length - 2))
&& child.style.left == whiteQueen.parentElement.style.left && child.children[0].id.includes("black")) {
    if (child.children[0].id == event.target.id || child.id == event.target.id) {
        if (moveWhite === true) {
            socket.emit("whiteHit", {
                "white": whiteQueen.id,
                "child": child.id
            });
        }
    }
}
    //Down
    if (Number(child.style.top.slice(0, child.style.top.length - 2)) > Number(whiteQueen.parentElement.style.top.slice(0, whiteQueen.parentElement.style.top.length - 2))
&& child.style.left == whiteQueen.parentElement.style.left) {
    if (child.id == event.target.id && child.children.length == 0) {
        if (moveWhite === true) {
            socket.emit("white", {
                "white": whiteQueen.id,
                "child": child.id
            });
        }
    }
}
//downHit
if (child.children.length > 0 && child.children[0].id.includes("black") && Number(child.style.top.slice(0, child.style.top.length - 2)) >
Number(whiteQueen.parentElement.style.top.slice(0, whiteQueen.parentElement.style.top.length - 2))
&& child.style.left == whiteQueen.parentElement.style.left && child.children[0].id.includes("black")) {
    if (child.children[0].id == event.target.id || child.id == event.target.id) {
        if (moveWhite === true) {
            socket.emit("whiteHit", {
                "white": whiteQueen.id,
                "child": child.id
            });
        }
    }
}
    //Left
    if (Number(child.style.left.slice(0, child.style.left.length - 2)) < Number(whiteQueen.parentElement.style.left.slice(0, whiteQueen.parentElement.style.left.length - 2))
&& child.style.top == whiteQueen.parentElement.style.top) {
    if (child.id == event.target.id && child.children.length == 0) {
        if (moveWhite === true) {
            socket.emit("white", {
                "white": whiteQueen.id,
                "child": child.id
            });
        }
    }
}
//leftHit
if (child.children.length > 0 && child.children[0].id.includes("black") && Number(child.style.left.slice(0, child.style.left.length - 2)) <
Number(whiteQueen.parentElement.style.left.slice(0, whiteQueen.parentElement.style.left.length - 2))
&& child.style.top == whiteQueen.parentElement.style.top && child.children[0].id.includes("black")) {
    if (child.children[0].id == event.target.id || child.id == event.target.id) {
        if (moveWhite === true) {
            socket.emit("whiteHit", {
                "white": whiteQueen.id,
                "child": child.id
            });
        }
    }
}
    //Right
    if (Number(child.style.left.slice(0, child.style.left.length - 2)) > Number(whiteQueen.parentElement.style.left.slice(0, whiteQueen.parentElement.style.left.length - 2))
    && child.style.top == whiteQueen.parentElement.style.top) {
        if (child.id == event.target.id && child.children.length == 0) {
            if (moveWhite === true) {
                socket.emit("white", {
                    "white": whiteQueen.id,
                    "child": child.id
                });
            }
        }
    }
    //rightHit
if (child.children.length > 0 && child.children[0].id.includes("black") && Number(child.style.left.slice(0, child.style.left.length - 2)) >
Number(whiteQueen.parentElement.style.left.slice(0, whiteQueen.parentElement.style.left.length - 2))
&& child.style.top == whiteQueen.parentElement.style.top && child.children[0].id.includes("black")) {
    if (child.children[0].id == event.target.id || child.id == event.target.id) {
        if (moveWhite === true) {
            socket.emit("whiteHit", {
                "white": whiteQueen.id,
                "child": child.id
            });
        }
    }
}
});
}
}

function clickWhiteKing() {
    clickWhite = true;
    whiteMove = true;
    whiteSocket = true;
    checkerboard.removeAttribute("onclick");
    checkerboard.onclick = moveWhiteKing;
}

function moveWhiteKing(event) {
    if (clickWhite) {
    if (whiteKing.contains(event.target)) {
        return;
    }
    var children = Array.from(checkerboard.children);
    children.forEach(function(child) {
        //oneSpaceUp
        if (child.style.top == `${Number(whiteKing.parentElement.style.top.slice(0, whiteKing.parentElement.style.top.length - 2)) - 62.5}px`
&& child.style.left == whiteKing.parentElement.style.left) {
    if (child.id == event.target.id && child.children.length == 0) {
        if (moveWhite === true) {
            socket.emit("white", {
                "white": whiteKing.id,
                "child": child.id
            });
        }
    }
}
//oneSpaceUpHit
if (child.children.length > 0 && child.style.top == `${Number(whiteKing.parentElement.style.top.slice(0, whiteKing.parentElement.style.top.length - 2)) - 62.5}px`
&& child.style.left == whiteKing.parentElement.style.left && child.children[0].id.includes("black")) {
    if (child.children[0].id == event.target.id || child.id == event.target.id) {
        if (moveWhite === true) {
            socket.emit("whiteHit", {
                "white": whiteKing.id,
                "child": child.id
            });
        }
    }
}
//oneSpaceLeft
if (child.style.left == `${Number(whiteKing.parentElement.style.left.slice(0, whiteKing.parentElement.style.left.length - 2)) - 62.5}px`
&& child.style.top == whiteKing.parentElement.style.top) {
    if (child.id == event.target.id && child.children.length == 0) {
        if (moveWhite === true) {
            socket.emit("white", {
                "white": whiteKing.id,
                "child": child.id
            });
        }
    }
}
//oneSpaceLeftHit
if (child.children.length > 0 && child.style.left == `${Number(whiteKing.parentElement.style.left.slice(0, whiteKing.parentElement.style.left.length - 2)) - 62.5}px`
&& child.style.top == whiteKing.parentElement.style.top && child.children[0].id.includes("black")) {
    if (child.children[0].id == event.target.id || child.id == event.target.id) {
        if (moveWhite === true) {
            socket.emit("whiteHit", {
                "white": whiteKing.id,
                "child": child.id
            });
        }
    }
}
//oneSpaceDown
if (child.style.top == `${Number(whiteKing.parentElement.style.top.slice(0, whiteKing.parentElement.style.top.length - 2)) + 62.5}px`
&& child.style.left == whiteKing.parentElement.style.left) {
    if (child.id == event.target.id && child.children.length == 0) {
        if (moveWhite === true) {
            socket.emit("white", {
                "white": whiteKing.id,
                "child": child.id
            });
        }
    }
}
//oneSpaceDownHit
if (child.children.length > 0 && child.style.top == `${Number(whiteKing.parentElement.style.top.slice(0, whiteKing.parentElement.style.top.length - 2)) + 62.5}px`
&& child.style.left == whiteKing.parentElement.style.left && child.children[0].id.includes("black")) {
    if (child.children[0].id == event.target.id || child.id == event.target.id) {
        if (moveWhite === true) {
            socket.emit("whiteHit", {
                "white": whiteKing.id,
                "child": child.id
            });
        }
    }
}
//oneSpaceRight
if (child.style.left == `${Number(whiteKing.parentElement.style.left.slice(0, whiteKing.parentElement.style.left.length - 2)) + 62.5}px`
&& child.style.top == whiteKing.parentElement.style.top) {
    if (child.id == event.target.id && child.children.length == 0) {
        if (moveWhite === true) {
            socket.emit("white", {
                "white": whiteKing.id,
                "child": child.id
            });
        }
    }
}
//oneSpaceRightHit
if (child.children.length > 0 && child.style.left == `${Number(whiteKing.parentElement.style.left.slice(0, whiteKing.parentElement.style.left.length - 2)) + 62.5}px`
&& child.style.top == whiteKing.parentElement.style.top && child.children[0].id.includes("black")) {
    if (child.children[0].id == event.target.id || child.id == event.target.id) {
        if (moveWhite === true) {
            socket.emit("whiteHit", {
                "white": whiteKing.id,
                "child": child.id
            });
        }
    }
}
//diagonalSpaceUp
if (child.style.top == `${Number(whiteKing.parentElement.style.top.slice(0, whiteKing.parentElement.style.top.length - 2)) - 62.5}px`
&& child.style.left == `${Number(whiteKing.parentElement.style.left.slice(0, whiteKing.parentElement.style.left.length - 2)) + 62.5}px`
|| child.style.top == `${Number(whiteKing.parentElement.style.top.slice(0, whiteKing.parentElement.style.top.length - 2)) - 62.5}px`
&& child.style.left == `${Number(whiteKing.parentElement.style.left.slice(0, whiteKing.parentElement.style.left.length - 2)) - 62.5}px`) {
    if (child.id == event.target.id && child.children.length == 0) {
        if (moveWhite === true) {
            socket.emit("white", {
                "white": whiteKing.id,
                "child": child.id
            });
        }
    }
}
//diagonalSpaceUpHit
if (child.children.length > 0 && child.style.top == `${Number(whiteKing.parentElement.style.top.slice(0, whiteKing.parentElement.style.top.length - 2)) - 62.5}px`
&& child.style.left == `${Number(whiteKing.parentElement.style.left.slice(0, whiteKing.parentElement.style.left.length - 2)) + 62.5}px` && child.children[0].id.includes("black")
|| child.children.length > 0 && child.style.top == `${Number(whiteKing.parentElement.style.top.slice(0, whiteKing.parentElement.style.top.length - 2)) - 62.5}px`
&& child.style.left == `${Number(whiteKing.parentElement.style.left.slice(0, whiteKing.parentElement.style.left.length - 2)) - 62.5}px` && child.children[0].id.includes("black")) {
    if (child.children[0].id == event.target.id || child.id == event.target.id) {
        if (moveWhite === true) {
            socket.emit("whiteHit", {
                "white": whiteKing.id,
                "child": child.id
            });
        }
    }
}
//diagonalSpaceDown
if (child.style.top == `${Number(whiteKing.parentElement.style.top.slice(0, whiteKing.parentElement.style.top.length - 2)) + 62.5}px`
&& child.style.left == `${Number(whiteKing.parentElement.style.left.slice(0, whiteKing.parentElement.style.left.length - 2)) + 62.5}px`
|| child.style.top == `${Number(whiteKing.parentElement.style.top.slice(0, whiteKing.parentElement.style.top.length - 2)) + 62.5}px`
&& child.style.left == `${Number(whiteKing.parentElement.style.left.slice(0, whiteKing.parentElement.style.left.length - 2)) - 62.5}px`) {
    if (child.id == event.target.id && child.children.length == 0) {
        if (moveWhite === true) {
            socket.emit("white", {
                "white": whiteKing.id,
                "child": child.id
            });
        }
    }
}
//diagonalSpaceDownHit
if (child.children.length > 0 && child.style.top == `${Number(whiteKing.parentElement.style.top.slice(0, whiteKing.parentElement.style.top.length - 2)) + 62.5}px`
&& child.style.left == `${Number(whiteKing.parentElement.style.left.slice(0, whiteKing.parentElement.style.left.length - 2)) + 62.5}px` && child.children[0].id.includes("black")
|| child.children.length > 0 && child.style.top == `${Number(whiteKing.parentElement.style.top.slice(0, whiteKing.parentElement.style.top.length - 2)) + 62.5}px`
&& child.style.left == `${Number(whiteKing.parentElement.style.left.slice(0, whiteKing.parentElement.style.left.length - 2)) - 62.5}px` && child.children[0].id.includes("black")) {
    if (child.children[0].id == event.target.id || child.id == event.target.id) {
        if (moveWhite === true) {
            socket.emit("whiteHit", {
                "white": whiteKing.id,
                "child": child.id
            });
        }
        
    }
}
});
}
}

function clickWhiteBishop2() {
    clickWhite = true;
    whiteMove = true;
    whiteSocket = true;
    checkerboard.removeAttribute("onclick");
    checkerboard.onclick = moveWhiteBishop2;
}

function moveWhiteBishop2(event) {
    if (clickWhite) {
    if (whiteBishop2.contains(event.target)) {
        return;
    }
    var children = Array.from(checkerboard.children);
    for (var child of children) {
        if (event.target.id.includes("black") || event.target.children.length > 0 && event.target.children[0].id.includes("black")) {
            if (child.children.length > 0 && Number(child.style.left.slice(0, child.style.left.length - 2)) < Number(event.target.parentElement.style.left.slice(0, event.target.parentElement.style.left.length - 2))
            && Number(child.style.left.slice(0, child.style.left.length - 2)) > Number(whiteBishop2.parentElement.style.left.slice(0, whiteBishop2.parentElement.style.left.length - 2))
            && Number(child.style.top.slice(0, child.style.top.length - 2)) > Number(event.target.parentElement.style.top.slice(0, event.target.parentElement.style.top.length - 2)) && child.id != whiteBishop2.parentElement.id
            && Number(child.style.top.slice(0, child.style.top.length - 2)) < Number(whiteBishop2.parentElement.style.top.slice(0, whiteBishop2.parentElement.style.top.length - 2)) && child.id.includes("brown")
            && Number(child.style.left.slice(0, child.style.left.length - 2)) - Number(whiteBishop2.parentElement.style.left.slice(0, whiteBishop2.parentElement.style.left.length - 2))
            == Number(whiteBishop2.parentElement.style.top.slice(0, whiteBishop2.parentElement.style.top.length - 2)) - Number(child.style.top.slice(0, child.style.top.length - 2)) ||
            child.children.length > 0 && Number(child.style.left.slice(0, child.style.left.length - 2)) > Number(event.target.parentElement.style.left.slice(0, event.target.parentElement.style.left.length - 2))
            && Number(child.style.left.slice(0, child.style.left.length - 2)) < Number(whiteBishop2.parentElement.style.left.slice(0, whiteBishop2.parentElement.style.left.length - 2))
            && Number(child.style.top.slice(0, child.style.top.length - 2)) > Number(event.target.parentElement.style.top.slice(0, event.target.parentElement.style.top.length - 2)) && child.id != whiteBishop2.parentElement.id
            && Number(child.style.top.slice(0, child.style.top.length - 2)) < Number(whiteBishop2.parentElement.style.top.slice(0, whiteBishop2.parentElement.style.top.length - 2)) && child.id.includes("brown")
            && Number(whiteBishop2.parentElement.style.left.slice(0, whiteBishop2.parentElement.style.left.length - 2)) - Number(child.style.left.slice(0, child.style.left.length - 2))
            == Number(whiteBishop2.parentElement.style.top.slice(0, whiteBishop2.parentElement.style.top.length - 2)) - Number(child.style.top.slice(0, child.style.top.length - 2)) ||
            child.children.length > 0 && Number(child.style.left.slice(0, child.style.left.length - 2)) < Number(event.target.parentElement.style.left.slice(0, event.target.parentElement.style.left.length - 2))
            && Number(child.style.left.slice(0, child.style.left.length - 2)) > Number(whiteBishop2.parentElement.style.left.slice(0, whiteBishop2.parentElement.style.left.length - 2))
            && Number(child.style.top.slice(0, child.style.top.length - 2)) < Number(event.target.parentElement.style.top.slice(0, event.target.parentElement.style.top.length - 2)) && child.id != whiteBishop2.parentElement.id
            && Number(child.style.top.slice(0, child.style.top.length - 2)) > Number(whiteBishop2.parentElement.style.top.slice(0, whiteBishop2.parentElement.style.top.length - 2)) && child.id.includes("brown")
            && Number(child.style.left.slice(0, child.style.left.length - 2)) - Number(whiteBishop2.parentElement.style.left.slice(0, whiteBishop2.parentElement.style.left.length - 2))
            == Number(child.style.top.slice(0, child.style.top.length - 2)) - Number(whiteBishop2.parentElement.style.top.slice(0, whiteBishop2.parentElement.style.top.length - 2)) ||
            child.children.length > 0 && Number(child.style.left.slice(0, child.style.left.length - 2)) > Number(event.target.parentElement.style.left.slice(0, event.target.parentElement.style.left.length - 2))
            && Number(child.style.left.slice(0, child.style.left.length - 2)) < Number(whiteBishop2.parentElement.style.left.slice(0, whiteBishop2.parentElement.style.left.length - 2))
            && Number(child.style.top.slice(0, child.style.top.length - 2)) < Number(event.target.parentElement.style.top.slice(0, event.target.parentElement.style.top.length - 2)) && child.id != whiteBishop2.parentElement.id
            && Number(child.style.top.slice(0, child.style.top.length - 2)) > Number(whiteBishop2.parentElement.style.top.slice(0, whiteBishop2.parentElement.style.top.length - 2)) && child.id.includes("brown")
            && Number(whiteBishop2.parentElement.style.left.slice(0, whiteBishop2.parentElement.style.left.length - 2)) - Number(child.style.left.slice(0, child.style.left.length - 2))
            == Number(child.style.top.slice(0, child.style.top.length - 2)) - Number(whiteBishop2.parentElement.style.top.slice(0, whiteBishop2.parentElement.style.top.length - 2))) {
                return console.log(child.id);
            }
        }
        if (event.target.id.includes("brown") || event.target.id.includes("tan")) {
            if (child.children.length > 0 && Number(child.style.left.slice(0, child.style.left.length - 2)) < Number(event.target.style.left.slice(0, event.target.style.left.length - 2))
            && Number(child.style.left.slice(0, child.style.left.length - 2)) > Number(whiteBishop2.parentElement.style.left.slice(0, whiteBishop2.parentElement.style.left.length - 2))
            && Number(child.style.top.slice(0, child.style.top.length - 2)) > Number(event.target.style.top.slice(0, event.target.style.top.length - 2)) && child.id != whiteBishop2.parentElement.id
            && Number(child.style.top.slice(0, child.style.top.length - 2)) < Number(whiteBishop2.parentElement.style.top.slice(0, whiteBishop2.parentElement.style.top.length - 2)) && child.id.includes("brown")
            && Number(child.style.left.slice(0, child.style.left.length - 2)) - Number(whiteBishop2.parentElement.style.left.slice(0, whiteBishop2.parentElement.style.left.length - 2))
            == Number(whiteBishop2.parentElement.style.top.slice(0, whiteBishop2.parentElement.style.top.length - 2)) - Number(child.style.top.slice(0, child.style.top.length - 2)) ||
            child.children.length > 0 && Number(child.style.left.slice(0, child.style.left.length - 2)) > Number(event.target.style.left.slice(0, event.target.style.left.length - 2))
            && Number(child.style.left.slice(0, child.style.left.length - 2)) < Number(whiteBishop2.parentElement.style.left.slice(0, whiteBishop2.parentElement.style.left.length - 2))
            && Number(child.style.top.slice(0, child.style.top.length - 2)) > Number(event.target.style.top.slice(0, event.target.style.top.length - 2)) && child.id != whiteBishop2.parentElement.id
            && Number(child.style.top.slice(0, child.style.top.length - 2)) < Number(whiteBishop2.parentElement.style.top.slice(0, whiteBishop2.parentElement.style.top.length - 2)) && child.id.includes("brown")
            && Number(whiteBishop2.parentElement.style.left.slice(0, whiteBishop2.parentElement.style.left.length - 2)) - Number(child.style.left.slice(0, child.style.left.length - 2))
            == Number(whiteBishop2.parentElement.style.top.slice(0, whiteBishop2.parentElement.style.top.length - 2)) - Number(child.style.top.slice(0, child.style.top.length - 2)) ||
            child.children.length > 0 && Number(child.style.left.slice(0, child.style.left.length - 2)) < Number(event.target.style.left.slice(0, event.target.style.left.length - 2))
            && Number(child.style.left.slice(0, child.style.left.length - 2)) > Number(whiteBishop2.parentElement.style.left.slice(0, whiteBishop2.parentElement.style.left.length - 2))
            && Number(child.style.top.slice(0, child.style.top.length - 2)) < Number(event.target.style.top.slice(0, event.target.style.top.length - 2)) && child.id != whiteBishop2.parentElement.id
            && Number(child.style.top.slice(0, child.style.top.length - 2)) > Number(whiteBishop2.parentElement.style.top.slice(0, whiteBishop2.parentElement.style.top.length - 2)) && child.id.includes("brown")
            && Number(child.style.left.slice(0, child.style.left.length - 2)) - Number(whiteBishop2.parentElement.style.left.slice(0, whiteBishop2.parentElement.style.left.length - 2))
            == Number(child.style.top.slice(0, child.style.top.length - 2)) - Number(whiteBishop2.parentElement.style.top.slice(0, whiteBishop2.parentElement.style.top.length - 2)) ||
            child.children.length > 0 && Number(child.style.left.slice(0, child.style.left.length - 2)) > Number(event.target.style.left.slice(0, event.target.style.left.length - 2))
            && Number(child.style.left.slice(0, child.style.left.length - 2)) < Number(whiteBishop2.parentElement.style.left.slice(0, whiteBishop2.parentElement.style.left.length - 2))
            && Number(child.style.top.slice(0, child.style.top.length - 2)) < Number(event.target.style.top.slice(0, event.target.style.top.length - 2)) && child.id != whiteBishop2.parentElement.id
            && Number(child.style.top.slice(0, child.style.top.length - 2)) > Number(whiteBishop2.parentElement.style.top.slice(0, whiteBishop2.parentElement.style.top.length - 2)) && child.id.includes("brown")
            && Number(whiteBishop2.parentElement.style.left.slice(0, whiteBishop2.parentElement.style.left.length - 2)) - Number(child.style.left.slice(0, child.style.left.length - 2))
            == Number(child.style.top.slice(0, child.style.top.length - 2)) - Number(whiteBishop2.parentElement.style.top.slice(0, whiteBishop2.parentElement.style.top.length - 2))) {
                return console.log(child.id);
            }
        }
    }
    children.forEach(function(child) {
    //Diagonal
    if (Number(child.style.left.slice(0, child.style.left.length - 2)) - Number(whiteBishop2.parentElement.style.left.slice(0, whiteBishop2.parentElement.style.left.length - 2))
    == Number(whiteBishop2.parentElement.style.top.slice(0, whiteBishop2.parentElement.style.top.length - 2)) - Number(child.style.top.slice(0, child.style.top.length - 2)) ||
    Number(whiteBishop2.parentElement.style.left.slice(0, whiteBishop2.parentElement.style.left.length - 2)) - Number(child.style.left.slice(0, child.style.left.length - 2))
    == Number(whiteBishop2.parentElement.style.top.slice(0, whiteBishop2.parentElement.style.top.length - 2)) - Number(child.style.top.slice(0, child.style.top.length - 2))) {
        if (child.id == event.target.id && child.children.length == 0) {
            if (moveWhite === true) {
                socket.emit("white", {
                    "white": whiteBishop2.id,
                    "child": child.id
                });
            }
        }
    }
    //diagonalHit
    if (child.children.length > 0 && Number(child.style.left.slice(0, child.style.left.length - 2)) - Number(whiteBishop2.parentElement.style.left.slice(0, whiteBishop2.parentElement.style.left.length - 2))
    == Number(whiteBishop2.parentElement.style.top.slice(0, whiteBishop2.parentElement.style.top.length - 2)) - Number(child.style.top.slice(0, child.style.top.length - 2)) && child.children[0].id.includes("black") ||
    child.children.length > 0 && Number(whiteBishop2.parentElement.style.left.slice(0, whiteBishop2.parentElement.style.left.length - 2)) - Number(child.style.left.slice(0, child.style.left.length - 2))
    == Number(whiteBishop2.parentElement.style.top.slice(0, whiteBishop2.parentElement.style.top.length - 2)) - Number(child.style.top.slice(0, child.style.top.length - 2)) && child.children[0].id.includes("black")) {
        if (child.children[0].id == event.target.id || child.id == event.target.id) {
            if (moveWhite === true) {
                socket.emit("whiteHit", {
                    "white": whiteBishop2.id,
                    "child": child.id
                });
            }
        }
    }
});
}
}

function clickWhiteKnight2() {
    clickWhite = true;
    whiteMove = true;
    whiteSocket = true;
    checkerboard.removeAttribute("onclick");
    checkerboard.onclick = moveWhiteKnight2;
}

function moveWhiteKnight2(event) {
    if (clickWhite) {
    if (whiteKnight2.contains(event.target)) {
        return;
    }
    var children = Array.from(checkerboard.children);
    children.forEach(function(child) {
    //twoSpaceUp
    if (child.style.top == `${Number(whiteKnight2.parentElement.style.top.slice(0, whiteKnight2.parentElement.style.top.length - 2)) - 125}px`
    && child.style.left == `${Number(whiteKnight2.parentElement.style.left.slice(0, whiteKnight2.parentElement.style.left.length - 2)) + 62.5}px`
    || child.style.top == `${Number(whiteKnight2.parentElement.style.top.slice(0, whiteKnight2.parentElement.style.top.length - 2)) - 125}px`
    && child.style.left == `${Number(whiteKnight2.parentElement.style.left.slice(0, whiteKnight2.parentElement.style.left.length - 2)) - 62.5}px`) {
        if (child.id == event.target.id && child.children.length == 0) {
            if (moveWhite === true) {
                socket.emit("white", {
                    "white": whiteKnight2.id,
                    "child": child.id
                });
            }
        }
        if (child.children.length > 0 && child.id == event.target.parentElement.id && event.target.id.includes("black")
        || child.children.length > 0 && child.children[0].id == event.target.id && event.target.id.includes("black")) {
            if (moveWhite === true) {
                socket.emit("whiteHit", {
                    "white": whiteKnight2.id,
                    "child": child.id
                });
            }
        }
    }
    //twoSpaceDown
    if (child.style.top == `${Number(whiteKnight2.parentElement.style.top.slice(0, whiteKnight2.parentElement.style.top.length - 2)) + 125}px`
    && child.style.left == `${Number(whiteKnight2.parentElement.style.left.slice(0, whiteKnight2.parentElement.style.left.length - 2)) + 62.5}px`
    || child.style.top == `${Number(whiteKnight2.parentElement.style.top.slice(0, whiteKnight2.parentElement.style.top.length - 2)) + 125}px`
    && child.style.left == `${Number(whiteKnight2.parentElement.style.left.slice(0, whiteKnight2.parentElement.style.left.length - 2)) - 62.5}px`) {
        if (child.id == event.target.id && child.children.length == 0) {
            if (moveWhite === true) {
                socket.emit("white", {
                    "white": whiteKnight2.id,
                    "child": child.id
                });
            }
        }
        if (child.children.length > 0 && child.children.length > 0 && child.id == event.target.parentElement.id && event.target.id.includes("black")
        || child.children.length > 0 && child.children.length > 0 && child.children[0].id == event.target.id && event.target.id.includes("black")) {
            if (moveWhite === true) {
                socket.emit("whiteHit", {
                    "white": whiteKnight2.id,
                    "child": child.id
                });
            }
        }
    }
    //oneSpaceUp
    if (child.style.top == `${Number(whiteKnight2.parentElement.style.top.slice(0, whiteKnight2.parentElement.style.top.length - 2)) - 62.5}px`
    && child.style.left == `${Number(whiteKnight2.parentElement.style.left.slice(0, whiteKnight2.parentElement.style.left.length - 2)) + 125}px`
    || child.style.top == `${Number(whiteKnight2.parentElement.style.top.slice(0, whiteKnight2.parentElement.style.top.length - 2)) - 62.5}px`
    && child.style.left == `${Number(whiteKnight2.parentElement.style.left.slice(0, whiteKnight2.parentElement.style.left.length - 2)) - 125}px`) {
        if (child.id == event.target.id && child.children.length == 0) {
            if (moveWhite === true) {
                socket.emit("white", {
                    "white": whiteKnight2.id,
                    "child": child.id
                });
            }
        }
        if (child.children.length > 0 && child.id == event.target.parentElement.id && event.target.id.includes("black")
        || child.children.length > 0 && child.children[0].id == event.target.id && event.target.id.includes("black")) {
            if (moveWhite === true) {
                socket.emit("whiteHit", {
                    "white": whiteKnight2.id,
                    "child": child.id
                });
            }
        }
    }
    //oneSpaceDown
    if (child.style.top == `${Number(whiteKnight2.parentElement.style.top.slice(0, whiteKnight2.parentElement.style.top.length - 2)) + 62.5}px`
    && child.style.left == `${Number(whiteKnight2.parentElement.style.left.slice(0, whiteKnight2.parentElement.style.left.length - 2)) + 125}px`
    || child.style.top == `${Number(whiteKnight2.parentElement.style.top.slice(0, whiteKnight2.parentElement.style.top.length - 2)) + 62.5}px`
    && child.style.left == `${Number(whiteKnight2.parentElement.style.left.slice(0, whiteKnight2.parentElement.style.left.length - 2)) - 125}px`) {
        if (child.id == event.target.id && child.children.length == 0) {
            if (moveWhite === true) {
                socket.emit("white", {
                    "white": whiteKnight2.id,
                    "child": child.id
                });
            }
        }
        if (child.children.length > 0 && child.id == event.target.parentElement.id && event.target.id.includes("black")
        || child.children.length > 0 && child.children[0].id == event.target.id && event.target.id.includes("black")) {
            if (moveWhite === true) {
                socket.emit("whiteHit", {
                    "white": whiteKnight2.id,
                    "child": child.id
                });
            }
        }
    }
});
}
}

function clickWhiteRook2() {
    clickWhite = true;
    whiteMove = true;
    whiteSocket = true;
    checkerboard.removeAttribute("onclick");
    checkerboard.onclick = moveWhiteRook2;
}

function moveWhiteRook2(event) {
    if (clickWhite) {
    if (whiteRook2.contains(event.target)) {
        return;
    }
    var children = Array.from(checkerboard.children);
    for (var child of children) {
        if (event.target.id.includes("black") || event.target.children.length > 0 && event.target.children[0].id.includes("black")) {
        if (child.children.length > 0 &&
        Number(event.target.parentElement.style.top.slice(0, event.target.parentElement.style.top.length - 2)) < Number(child.style.top.slice(0, child.style.top.length - 2))
        && Number(child.style.top.slice(0, child.style.top.length - 2)) < Number(whiteRook2.parentElement.style.top.slice(0, whiteRook2.parentElement.style.top.length - 2))
        && child.style.left == whiteRook2.parentElement.style.left && child.id != whiteRook2.parentElement.id
        && Number(event.target.parentElement.style.top.slice(0, event.target.parentElement.style.top.length - 2)) < Number(whiteRook2.parentElement.style.top.slice(0, whiteRook2.parentElement.style.top.length - 2)) ||
        child.children.length > 0 &&
        Number(event.target.parentElement.style.top.slice(0, event.target.parentElement.style.top.length - 2)) > Number(child.style.top.slice(0, child.style.top.length - 2))
        && Number(child.style.top.slice(0, child.style.top.length - 2)) > Number(whiteRook2.parentElement.style.top.slice(0, whiteRook2.parentElement.style.top.length - 2))
        && child.style.left == whiteRook2.parentElement.style.left && child.id != whiteRook2.parentElement.id
        && Number(event.target.parentElement.style.top.slice(0, event.target.parentElement.style.top.length - 2)) > Number(whiteRook2.parentElement.style.top.slice(0, whiteRook2.parentElement.style.top.length - 2)) ||
        child.children.length > 0 &&
        Number(event.target.parentElement.style.left.slice(0, event.target.parentElement.style.left.length - 2)) > Number(child.style.left.slice(0, child.style.left.length - 2))
        && Number(child.style.left.slice(0, child.style.left.length - 2)) > Number(whiteRook2.parentElement.style.left.slice(0, whiteRook2.parentElement.style.left.length - 2))
        && child.style.top == whiteRook2.parentElement.style.top && child.id != whiteRook2.parentElement.id
        && Number(event.target.parentElement.style.left.slice(0, event.target.parentElement.style.left.length - 2)) > Number(whiteRook2.parentElement.style.left.slice(0, whiteRook2.parentElement.style.left.length - 2)) ||
        child.children.length > 0 &&
        Number(event.target.parentElement.style.left.slice(0, event.target.parentElement.style.left.length - 2)) < Number(child.style.left.slice(0, child.style.left.length - 2))
        && Number(child.style.left.slice(0, child.style.left.length - 2)) < Number(whiteRook2.parentElement.style.left.slice(0, whiteRook2.parentElement.style.left.length - 2))
        && child.style.top == whiteRook2.parentElement.style.top && child.id != whiteRook2.parentElement.id
        && Number(event.target.parentElement.style.left.slice(0, event.target.parentElement.style.left.length - 2)) < Number(whiteRook2.parentElement.style.left.slice(0, whiteRook2.parentElement.style.left.length - 2))) {
            return console.log(child.id);
        }
    }
    if (event.target.id.includes("brown") || event.target.id.includes("tan")) {
        if (child.children.length > 0 &&
            Number(event.target.style.top.slice(0, event.target.style.top.length - 2)) < Number(child.style.top.slice(0, child.style.top.length - 2))
            && Number(child.style.top.slice(0, child.style.top.length - 2)) < Number(whiteRook2.parentElement.style.top.slice(0, whiteRook2.parentElement.style.top.length - 2))
            && child.style.left == whiteRook2.parentElement.style.left && child.id != whiteRook2.parentElement.id
            && Number(event.target.style.top.slice(0, event.target.style.top.length - 2)) < Number(whiteRook2.parentElement.style.top.slice(0, whiteRook2.parentElement.style.top.length - 2)) ||
            child.children.length > 0 &&
            Number(event.target.style.top.slice(0, event.target.style.top.length - 2)) > Number(child.style.top.slice(0, child.style.top.length - 2))
            && Number(child.style.top.slice(0, child.style.top.length - 2)) > Number(whiteRook2.parentElement.style.top.slice(0, whiteRook2.parentElement.style.top.length - 2))
            && child.style.left == whiteRook2.parentElement.style.left && child.id != whiteRook2.parentElement.id
            && Number(event.target.style.top.slice(0, event.target.style.top.length - 2)) > Number(whiteRook2.parentElement.style.top.slice(0, whiteRook2.parentElement.style.top.length - 2)) ||
            child.children.length > 0 &&
            Number(event.target.style.left.slice(0, event.target.style.left.length - 2)) > Number(child.style.left.slice(0, child.style.left.length - 2))
            && Number(child.style.left.slice(0, child.style.left.length - 2)) > Number(whiteRook2.parentElement.style.left.slice(0, whiteRook2.parentElement.style.left.length - 2))
            && child.style.top == whiteRook2.parentElement.style.top && child.id != whiteRook2.parentElement.id
            && Number(event.target.style.left.slice(0, event.target.style.left.length - 2)) > Number(whiteRook2.parentElement.style.left.slice(0, whiteRook2.parentElement.style.left.length - 2)) ||
            child.children.length > 0 &&
            Number(event.target.style.left.slice(0, event.target.style.left.length - 2)) < Number(child.style.left.slice(0, child.style.left.length - 2))
            && Number(child.style.left.slice(0, child.style.left.length - 2)) < Number(whiteRook2.parentElement.style.left.slice(0, whiteRook2.parentElement.style.left.length - 2))
            && child.style.top == whiteRook2.parentElement.style.top && child.id != whiteRook2.parentElement.id
            && Number(event.target.style.left.slice(0, event.target.style.left.length - 2)) < Number(whiteRook2.parentElement.style.left.slice(0, whiteRook2.parentElement.style.left.length - 2))) {
            return console.log(child.id);
        }
    }
    }
    children.forEach(function(child) {
        //Up
        if (Number(child.style.top.slice(0, child.style.top.length - 2)) < Number(whiteRook2.parentElement.style.top.slice(0, whiteRook2.parentElement.style.top.length - 2))
&& child.style.left == whiteRook2.parentElement.style.left) {
    if (child.id == event.target.id && child.children.length == 0) {
        if (moveWhite === true) {
            socket.emit("white", {
                "white": whiteRook2.id,
                "child": child.id
            });
        }
    }
}
//upHit
if (child.children.length > 0 && child.children[0].id.includes("black") && Number(child.style.top.slice(0, child.style.top.length - 2)) <
Number(whiteRook2.parentElement.style.top.slice(0, whiteRook2.parentElement.style.top.length - 2))
&& child.style.left == whiteRook2.parentElement.style.left && child.children[0].id.includes("black")) {
    if (child.children[0].id == event.target.id || child.id == event.target.id) {
        if (moveWhite === true) {
            socket.emit("whiteHit", {
                "white": whiteRook2.id,
                "child": child.id
            });
        }
    }
}
    //Down
    if (Number(child.style.top.slice(0, child.style.top.length - 2)) > Number(whiteRook2.parentElement.style.top.slice(0, whiteRook2.parentElement.style.top.length - 2))
&& child.style.left == whiteRook2.parentElement.style.left) {
    if (child.id == event.target.id && child.children.length == 0) {
        if (moveWhite === true) {
            socket.emit("white", {
                "white": whiteRook2.id,
                "child": child.id
            });
        }
    }
}
//downHit
if (child.children.length > 0 && child.children[0].id.includes("black") && Number(child.style.top.slice(0, child.style.top.length - 2)) >
Number(whiteRook2.parentElement.style.top.slice(0, whiteRook2.parentElement.style.top.length - 2))
&& child.style.left == whiteRook2.parentElement.style.left && child.children[0].id.includes("black")) {
    if (child.children[0].id == event.target.id || child.id == event.target.id) {
        if (moveWhite === true) {
            socket.emit("whiteHit", {
                "white": whiteRook2.id,
                "child": child.id
            });
        }
    }
}
    //Left
    if (Number(child.style.left.slice(0, child.style.left.length - 2)) > Number(whiteRook2.parentElement.style.left.slice(0, whiteRook2.parentElement.style.left.length - 2))
&& child.style.top == whiteRook2.parentElement.style.top) {
    if (child.id == event.target.id && child.children.length == 0) {
        if (moveWhite === true) {
            socket.emit("white", {
                "white": whiteRook2.id,
                "child": child.id
            });
        }
    }
}
//leftHit
if (child.children.length > 0 && child.children[0].id.includes("black") && Number(child.style.left.slice(0, child.style.left.length - 2)) <
Number(whiteRook2.parentElement.style.left.slice(0, whiteRook2.parentElement.style.left.length - 2))
&& child.style.top == whiteRook2.parentElement.style.top && child.children[0].id.includes("black")) {
    if (child.children[0].id == event.target.id || child.id == event.target.id) {
        if (moveWhite === true) {
            socket.emit("whiteHit", {
                "white": whiteRook2.id,
                "child": child.id
            });
        }
    }
}
    //Right
    if (Number(child.style.left.slice(0, child.style.left.length - 2)) < Number(whiteRook2.parentElement.style.left.slice(0, whiteRook2.parentElement.style.left.length - 2))
    && child.style.top == whiteRook2.parentElement.style.top) {
        if (child.id == event.target.id && child.children.length == 0) {
            if (moveWhite === true) {
                socket.emit("white", {
                    "white": whiteRook2.id,
                    "child": child.id
                });
            }
        }
    }
    //rightHit
if (child.children.length > 0 && child.children[0].id.includes("black") && Number(child.style.left.slice(0, child.style.left.length - 2)) >
Number(whiteRook2.parentElement.style.left.slice(0, whiteRook2.parentElement.style.left.length - 2))
&& child.style.top == whiteRook2.parentElement.style.top && child.children[0].id.includes("black")) {
    if (child.children[0].id == event.target.id || child.id == event.target.id) {
        if (moveWhite === true) {
            socket.emit("whiteHit", {
                "white": whiteRook2.id,
                "child": child.id
            });
        }
    }
}
});
}
}
}