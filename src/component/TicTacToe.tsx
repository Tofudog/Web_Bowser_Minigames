import { useState } from "react";
import "./../styles/TicTacToe.css";
import { BOARD_MAP } from "../constants";
import { checkRows, checkColumns, checkDiagonals, gameOver } from "../utils/TicTacToeHelpers";

type BoardProps = {
    boardType: string;
    setBoardType: React.Dispatch<React.SetStateAction<string>>;
};

function changeMarker(button: HTMLButtonElement, marker: string, boardType: string) {
    if (boardType === "normal") {
        button.innerHTML = marker;
    } else {
        const newImg = BOARD_MAP.get(`(${marker}, ${boardType})`);
        button.innerHTML = `<img src="${newImg}" width="60" height="60" />`;
        console.log(newImg);
    }
}

function Board({boardType, setBoardType}: BoardProps) {
    const [turn, setTurn] = useState(false); //false is X, true is O
    const [grid, setGrid] = useState([
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
    ]);
    const [done, setDone] = useState(false);
    const [numTurns, setNumTurns] = useState(1);
    const updateBoard = (event: React.MouseEvent<HTMLButtonElement>, rowNum: number, colNum: number) => {
        if (!done && grid[rowNum][colNum] === "") {
            const marker: string = (turn) ? "X" : "O";
            const button = event.target as HTMLButtonElement;
            changeMarker(button, marker, boardType);
            setTurn(turn => !turn);
            let nextGrid: string[][] = grid;
            nextGrid[rowNum][colNum] = marker;
            setGrid(nextGrid);
            if (gameOver(grid)) {
                setDone(true);
                const gameOverScreen = document.getElementById("game-over-screen");
                if (gameOverScreen) {
                    gameOverScreen.innerText = `${marker} WON!`;
                }
                return;
            }
            setNumTurns(numTurns => numTurns+1);
            if (numTurns === 9) {
                const gameOverScreen = document.getElementById("game-over-screen");
                if (gameOverScreen) {
                    gameOverScreen.innerText = `Draw :(`;
                    setDone(true);
                }
            }
        }
    };
    return (
        <div>
            <div className="container">
                <button className="tic-tac-toe-square" id="tic-tac-toe-(0, 0)" onClick={(event) => updateBoard(event, 0, 0)}></button>
                <button className="tic-tac-toe-square" id="tic-tac-toe-(0, 1)" onClick={(event) => updateBoard(event, 0, 1)}></button>
                <button className="tic-tac-toe-square" id="tic-tac-toe-(0, 2)" onClick={(event) => updateBoard(event, 0, 2)}></button>
                <button className="tic-tac-toe-square" id="tic-tac-toe-(1, 0)" onClick={(event) => updateBoard(event, 1, 0)}></button>
                <button className="tic-tac-toe-square" id="tic-tac-toe-(1, 1)" onClick={(event) => updateBoard(event, 1, 1)}></button>
                <button className="tic-tac-toe-square" id="tic-tac-toe-(1, 2)" onClick={(event) => updateBoard(event, 1, 2)}></button>
                <button className="tic-tac-toe-square" id="tic-tac-toe-(2, 0)" onClick={(event) => updateBoard(event, 2, 0)}></button>
                <button className="tic-tac-toe-square" id="tic-tac-toe-(2, 1)" onClick={(event) => updateBoard(event, 2, 1)}></button>
                <button className="tic-tac-toe-square" id="tic-tac-toe-(2, 2)" onClick={(event) => updateBoard(event, 2, 2)}></button>
            </div>
        </div>
    );
}

function BoardSwitcher(newBoardType: string, {boardType, setBoardType}: BoardProps) {
    /*
        Function to switch the board type.
        :Args: boardType = "Normal", "Neon", or "Shell"
    */
    setBoardType(newBoardType);
}

function TicTacToe() {
    const [boardType, setBoardType] = useState("normal");
    return (
        <div className="page">
            <h1 className="normal-text">Bowser Tic Tac Toe</h1>
            <h3 id="game-over-screen">Game in progress...</h3>
            <Board boardType={boardType} setBoardType={setBoardType} ></Board>
            <div className="selection">
                <button onClick={() => BoardSwitcher("normal", {boardType, setBoardType})}>Normal</button>
                <button onClick={() => BoardSwitcher("neon", {boardType, setBoardType})}>Neon</button>
                <button onClick={() => BoardSwitcher("shell", {boardType, setBoardType})}>Shell</button>
            </div>
            <br></br><br></br>
        </div>
    );
};

export default TicTacToe;