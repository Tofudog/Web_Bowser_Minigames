import { useState } from "react";
import "./../styles/TicTacToe.css";
import { BOARD_MAP } from "../constants";

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

function Board() {
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
            console.log("Updating the board: ", marker);
            const button = event.target as HTMLButtonElement;
            button.innerHTML = marker;
            console.log(`(${rowNum}, ${colNum})`);
            setTurn(turn => !turn);
            let nextGrid: string[][] = grid;
            nextGrid[rowNum][colNum] = marker;
            setGrid(nextGrid);
            if (gameOver(grid)) {
                setDone(true);
                console.log(`${marker} WON!`);
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

function BoardSwitcher(curType: string, newType: string) {
    /*
        Function to switch the board type.
        :Args: boardType = "Normal", "Neon", or "Shell"
    */
    // for (var i=0; i<3; i++) {
    //     for (var j=0; j<3; j++) {
    //         const element = document.getElementById(`tic-tac-toe-(${i}, ${j})`);

    //         if (element && element.innerText !== "") {
    //             if (curType === "normal") {
    //                 const curText = element.innerText;
    //                 const newImg = BOARD_MAP.get(`(${curText}, ${newType})`);
    //                 element.innerHTML = "<img src=`bowser1.png` />";

    //             } else {

    //             }
    //         }
    //     }
    // }
}

function TicTacToe() {
    const [boardType, setBoardType] = useState("normal");
    return (
        <div className="page">
            <h1 className="normal-text">Bowser Tic Tac Toe</h1>
            <h2 id="game-over-screen"></h2>
            <Board></Board>
            <div className="selection">
                <button onClick={() => BoardSwitcher(boardType, "normal")}>Normal</button>
                <button onClick={() => BoardSwitcher(boardType, "neon")}>Neon</button>
                <button onClick={() => BoardSwitcher(boardType, "shell")}>Shell</button>
            </div>
        </div>
    );
};

export default TicTacToe;