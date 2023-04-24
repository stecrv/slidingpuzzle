import React, { useState, useEffect, createContext, } from 'react';
import {SlidingPuzzle} from "../lib/sliding-puzzle/sliding-puzzle";
import {GRID_MINIMUM_SIZE} from "../lib/sliding-puzzle/constants";

export const SlidingPuzzleContext = createContext();

const slidingPuzzle = new SlidingPuzzle(3,3);

export const SlidingPuzzleProvider = ({ imageSrc, gridWidth, gridHeight, children }) => {

    const [width, setWidth] = useState(gridWidth)
    const [height, setHeight] = useState(gridHeight)
    const [puzzleList, setPuzzleList] = useState(slidingPuzzle.list);
    const [puzzleIndex, setPuzzleIndex] = useState(slidingPuzzle.index);
    const [puzzleMoves, setPuzzleMoves ] =  useState(slidingPuzzle.moves);

    useEffect(() => {
        console.log('change',width,height)
        slidingPuzzle.createPuzzle(width,height);
        slidingPuzzle.index = slidingPuzzle.getIndex();
        setPuzzleList(slidingPuzzle.list);
        setPuzzleIndex(slidingPuzzle.index);
        setPuzzleMoves(slidingPuzzle.getMoves());
    }, [width, height]);

    const handlePuzzleClick = (index:number) => {
        slidingPuzzle.list = slidingPuzzle.move(index);
        slidingPuzzle.index = slidingPuzzle.getIndex();
        setPuzzleList(slidingPuzzle.list);
        setPuzzleIndex(slidingPuzzle.index);
        setPuzzleMoves(slidingPuzzle.getMoves());
    };

    const handleSettingsClick = (size:number) => {
        if(size < GRID_MINIMUM_SIZE) return;
        setWidth(size);
        setHeight(size);
    };

    return (
        <SlidingPuzzleContext.Provider value={
            { puzzleList, handlePuzzleClick, handleSettingsClick, puzzleIndex,
                width, height,  puzzleMoves, imageSrc }}>
            {children}
        </SlidingPuzzleContext.Provider>
    );
};