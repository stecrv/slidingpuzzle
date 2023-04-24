import React from 'react'
import './App.css'
import reactLogo from './assets/react.svg'
import {DEFAULT_PUZZLE} from "./lib/sliding-puzzle/constants";
import {SlidingPuzzleProvider} from "./context/SlidingPuzzleContext";
import {SlidingPuzzleBoard} from "./components/SlidingPuzzleBoard";
import {SlidingPuzzleStatus} from "./components/SlidingPuzzleStatus";
import {SlidingPuzzleSettings} from "./components/SlidingPuzzleSettigns";



function App() {

  return (
    <div className="App">
      <h1>Sliding Puzzle</h1>
      <div className="card">
          <SlidingPuzzleProvider
              imageSrc={reactLogo}
              gridWidth={DEFAULT_PUZZLE.gridWidth}
              gridHeight={DEFAULT_PUZZLE.gridHeight}>
              <SlidingPuzzleStatus />
              <SlidingPuzzleBoard />
              <SlidingPuzzleSettings />
          </SlidingPuzzleProvider>
      </div>
    </div>
  )
}

export default App
