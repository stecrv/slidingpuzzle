import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {SlidingPuzzleContext, SlidingPuzzleProvider} from "./context/SlidingPuzzleContext";
import {SlidingPuzzleBoard} from "./components/SlidingPuzzleBoard";
import {SlidingPuzzleStatus} from "./components/SlidingPuzzleStatus";


function App() {

  return (
    <div className="App">
      <h1>Sliding Puzzle</h1>
      <div className="card">
          <SlidingPuzzleProvider imageSrc={reactLogo} gridSize={3}>
              <SlidingPuzzleStatus />
              <SlidingPuzzleBoard />
          </SlidingPuzzleProvider>
      </div>
    </div>
  )
}

export default App
