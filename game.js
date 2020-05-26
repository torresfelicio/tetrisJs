const cvs = document.getElementById("tetris");
const ctx = cvs.getContext("2d");
const scoreElement = document.getElementById("score");
const speedElement = document.getElementById("speed");

const ROW = 16;
const COL = 10;
const SQ = 30;
const defaultColor = "#73648A";
const defaultBorder = "rgba(255,255,255,0.1)";

let canMove = true;
let speed = 500;
let dropStart = Date.now();
let score = 0;

let board = [];
for (let currentRow = 0; currentRow < ROW; currentRow++) {
    board[currentRow] = [];
    for(let currentCol = 0; currentCol < COL; currentCol++) {
        board[currentRow][currentCol] = defaultColor;
    }
}

drawBoard();

const PIECES = [
    [Z,'#B38D97'],
    [S,'#D5ACA9'],
    [T,'#EBCFB2'],
    [O,'#C5BAAF'],
    [L,'#2A2D34'],
    [I,'#5C80BC'],
    [J,'#CDD1C4'],
];

let piece = randomPiece();

drop();

document.addEventListener("keydown", CONTROL);