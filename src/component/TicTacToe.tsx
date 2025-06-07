import "./../styles/TicTacToe.css";

function Board() {
    return (
        <div>
            <div className="container">
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
            </div>
        </div>
    );
}

function BoardSwitcher(boardType: string) {
    /*
        Function to switch the board type.
        :Args: boardType = "Normal", "Neon", or "Shell"
    */

}

function TicTacToe() {
    return (
        <div className="page">
            <h1 className="normal-text">Bowser Tic Tac Toe</h1>
            <Board></Board>
            <div className="selection">
                <button>Normal</button>
                <button>Neon</button>
                <button>Shell</button>
            </div>
        </div>
    );
};

export default TicTacToe;