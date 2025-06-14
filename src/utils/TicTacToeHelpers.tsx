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

export { checkRows, checkColumns, checkDiagonals, gameOver }