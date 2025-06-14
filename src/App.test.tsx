import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { checkColumns, checkDiagonals, checkRows, gameOver } from './utils/TicTacToeHelpers';

const { expect, test } = require('@jest/globals');

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test(`1 + 1 === 2`, () => {
    expect(1+1).toBe(2);
});

test(`Row filled wins for X`, () => {
    const grid: string[][] = [
      ["X", "X", "X"],
      ["", "O", "O"],
      ["", "", ""],
    ];
    expect(checkRows(grid)).toBe(true);
});

test(`Row filled wins for O`, () => {
    const grid: string[][] = [
      ["O", "O", "O"],
      ["X", "", ""],
      ["", "X", "X"],
    ];
    expect(checkRows(grid)).toBe(true);
});

test(`Column filled wins for X`, () => {
    const grid: string[][] = [
      ["X", "", ""],
      ["X", "O", "O"],
      ["X", "", ""],
    ];
    expect(checkColumns(grid)).toBe(true);
});

test(`Column filled wins for O`, () => {
    const grid: string[][] = [
      ["", "O", ""],
      ["X", "O", "X"],
      ["X", "O", ""],
    ];
    expect(checkColumns(grid)).toBe(true);
});

test(`Diag1 filled wins for X`, () => {
    const grid: string[][] = [
      ["X", "O", ""],
      ["", "X", ""],
      ["", "O", "X"],
    ];
    expect(checkDiagonals(grid)).toBe(true);
});

test(`Diag1 filled wins for O`, () => {
    const grid: string[][] = [
      ["O", "", "X"],
      ["", "O", "X"],
      ["", "X", "O"],
    ];
    expect(checkDiagonals(grid)).toBe(true);
});

test(`Diag2 filled wins for X`, () => {
    const grid: string[][] = [
      ["", "", "X"],
      ["O", "X", ""],
      ["X", "O", ""],
    ];
    expect(checkDiagonals(grid)).toBe(true);
});

test(`Diag2 filled wins for O`, () => {
    const grid: string[][] = [
      ["", "", "O"],
      ["X", "O", ""],
      ["O", "X", "X"],
    ];
    expect(checkDiagonals(grid)).toBe(true);
});

test(`Starting board is not ended`, () => {
    const grid: string[][] = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
    expect(gameOver(grid)).toBe(false);
});

test(`Draw for X and O`, () => {
    const grid: string[][] = [
      ["X", "O", "X"],
      ["O", "X", "X"],
      ["O", "X", "O"],
    ];
    expect(gameOver(grid)).toBe(false);
});