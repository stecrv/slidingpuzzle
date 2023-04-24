import React from 'react'
import './App.css'
import reactLogo from './assets/react.svg'
import {SlidingPuzzleProvider} from "./context/SlidingPuzzleContext";
import {SlidingPuzzleBoard} from "./components/SlidingPuzzleBoard";
import {SlidingPuzzleStatus} from "./components/SlidingPuzzleStatus";
import {APP_INITIAL_VALUE} from "./constants/app";


function App() {

  return (
    <div className="App">
      <h1>Sliding Puzzle</h1>
      <div className="card">
          <SlidingPuzzleProvider imageSrc={reactLogo} gridWidth={APP_INITIAL_VALUE.width} gridHeight={APP_INITIAL_VALUE.height}>
              <SlidingPuzzleStatus />
              <SlidingPuzzleBoard />
          </SlidingPuzzleProvider>
      </div>
    </div>
  )
}

export default App
