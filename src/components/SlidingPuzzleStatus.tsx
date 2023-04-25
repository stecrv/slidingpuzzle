import React, { useContext } from "react";
import { SlidingPuzzleContext } from "../context/SlidingPuzzleContext";

export const SlidingPuzzleStatus = () => {
    let { puzzleList, puzzleMoves } = useContext(SlidingPuzzleContext);
    const isSolved = puzzleList.slice(0, puzzleList.length-1).every((value, index) => value === index+1);

    return (
        <>
            <p>Number of Moves: {puzzleMoves}</p>
            <p>{isSolved && <span>Congrats! Puzzle Completed!</span>} </p>
        </>
    );
};
