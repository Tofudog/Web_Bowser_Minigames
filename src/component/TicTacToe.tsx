import { useState } from "react";
import "./../styles/TicTacToe.css";
import { BOARD_MAP } from "../constants";

type BoardProps = {
    boardType: string;
    setBoardType: React.Dispatch<React.SetStateAction<string>>;
};

function checkRows(grid: string[][]) {
    for (var i=0; i<3; i++) {
        if (grid[i][0] !== "" && grid[i][0] === grid[i][1] && grid[i][1] === grid[i][2]) {
            return true;
        }
    }
    return false;
}

function checkColumns(grid: string[][]) {
    for (var i=0; i<3; i++) {
        if (grid[0][i] !== "" && grid[0][i] === grid[1][i] && grid[1][i] === grid[2][i]) {
            return true;
        }
    }
    return false;
}

function checkDiagonals(grid: string[][]) {
    if (grid[0][0] !== "" && grid[0][0] === grid[1][1] && grid[1][1] === grid[2][2]) {
        return true;
    } else if (grid[2][0] !== "" && grid[2][0] === grid[1][1] && grid[1][1] === grid[0][2]) {
        return true;
    }
    return false;
}

function gameOver(grid: string[][]) {
    return checkRows(grid) || checkColumns(grid) || checkDiagonals(grid);
}

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
                <button id="tic-tac-toe-(0, 0)" onClick={(event) => updateBoard(event, 0, 0)}></button>
                <button id="tic-tac-toe-(0, 1)" onClick={(event) => updateBoard(event, 0, 1)}></button>
                <button id="tic-tac-toe-(0, 2)" onClick={(event) => updateBoard(event, 0, 2)}></button>
                <button id="tic-tac-toe-(1, 0)" onClick={(event) => updateBoard(event, 1, 0)}></button>
                <button id="tic-tac-toe-(1, 1)" onClick={(event) => updateBoard(event, 1, 1)}></button>
                <button id="tic-tac-toe-(1, 2)" onClick={(event) => updateBoard(event, 1, 2)}></button>
                <button id="tic-tac-toe-(2, 0)" onClick={(event) => updateBoard(event, 2, 0)}></button>
                <button id="tic-tac-toe-(2, 1)" onClick={(event) => updateBoard(event, 2, 1)}></button>
                <button id="tic-tac-toe-(2, 2)" onClick={(event) => updateBoard(event, 2, 2)}></button>
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
            <h2 id="game-over-screen"></h2>
            <Board boardType={boardType} setBoardType={setBoardType} ></Board>
            <div className="selection">
                <button onClick={() => BoardSwitcher("normal", {boardType, setBoardType})}>Normal</button>
                <button onClick={() => BoardSwitcher("neon", {boardType, setBoardType})}>Neon</button>
                <button onClick={() => BoardSwitcher("shell", {boardType, setBoardType})}>Shell</button>
            </div>
            <br></br>
        </div>
    );
};

export default TicTacToe;