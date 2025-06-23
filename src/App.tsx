import React from 'react';
import logo from './logo.svg';
import './App.css';
import TicTacToe from './component/TicTacToe';
import Router from './providers/Router';
import Navbar from './component/Navbar';

function App() {
  return (
    <div className="App-header">
      <Navbar></Navbar>
    </div>
  );
}

export default App;
