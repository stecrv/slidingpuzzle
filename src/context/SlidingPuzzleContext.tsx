import React, { useState, useEffect, createContext, } from 'react';
import {SlidingPuzzle} from "../lib/sliding-puzzle/sliding-puzzle";

export const SlidingPuzzleContext = createContext();

const slidingPuzzle = new SlidingPuzzle(3,3);

export const SlidingPuzzleProvider = ({ imageSrc, gridWidth, gridHeight, children }) => {

    const [puzzleList, setPuzzleList] = useState(slidingPuzzle.list);
    const [puzzleIndex, setPuzzleIndex] = useState(slidingPuzzle.index);
    const [puzzleMoves, setPuzzleMoves ] =  useState(slidingPuzzle.moves);

    useEffect(() => {
        setPuzzleList(slidingPuzzle.list);
        setPuzzleIndex(slidingPuzzle.index);
    }, [gridWidth, gridHeight]);

    const handlePuzzleClick = (index:number) => {
        console.log(index)
        slidingPuzzle.list = slidingPuzzle.move(index);
        slidingPuzzle.index = slidingPuzzle.getIndex();
        setPuzzleList(slidingPuzzle.list);
        setPuzzleIndex(slidingPuzzle.index);
        setPuzzleMoves(slidingPuzzle.getMoves());
    };

    const tileSize = 100 / gridWidth;
    const puzzleStyle = {
        display: 'grid',
        gridTemplateColumns: `repeat(${gridWidth}, ${tileSize}%)`,
        gridTemplateRows: `repeat(${gridWidth}, ${tileSize}%)`,
        width: '500px',
        height: '500px',
        margin: '0 auto',
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        border: '2px solid black',
        borderRadius: '5px',
        overflow: 'hidden',
    };

    const tileStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '36px',
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        cursor: 'pointer',
        transition: 'transform 0.2s ease-in-out',
        transform: 'scale(1)',
    };

    const emptyTileStyle = {
        ...tileStyle,
        backgroundColor: 'transparent',
        cursor: 'default',
    };

    return (
        <SlidingPuzzleContext.Provider value={{ puzzleList, handlePuzzleClick, puzzleIndex, puzzleStyle, tileStyle, emptyTileStyle, gridWidth, gridHeight,  puzzleMoves }}>
            {children}
        </SlidingPuzzleContext.Provider>
    );
};