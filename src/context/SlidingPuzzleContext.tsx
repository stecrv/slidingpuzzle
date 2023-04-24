import React, { useState, useEffect, createContext, } from 'react';
import {SlidingPuzzle} from "../lib/sliding-puzzle/sliding-puzzle";
import slidingPuzzleTest from "../AI/SlidingPuzzleTest";

export const SlidingPuzzleContext = createContext();

const slidingPuzzle = new SlidingPuzzle(3,3);
export const SlidingPuzzleProvider = ({ imageSrc, gridSize, children }) => {

    const [puzzleList, setPuzzleList] = useState(slidingPuzzle.list);
    const [puzzleIndex, setPuzzleIndex] = useState(slidingPuzzle.index); // 0?

    useEffect(() => {
        setPuzzleList(slidingPuzzle.list);
        setPuzzleIndex(slidingPuzzle.index);
    }, [gridSize]);

    const handlePuzzleClick = (index:number) => {
        console.log(index)
        slidingPuzzle.list = slidingPuzzle.move(index);
        slidingPuzzle.index = slidingPuzzle.getIndex();
        setPuzzleList(slidingPuzzle.list);
        setPuzzleIndex(slidingPuzzle.index);
    };

    const tileSize = 100 / gridSize;
    const puzzleStyle = {
        display: 'grid',
        gridTemplateColumns: `repeat(${gridSize}, ${tileSize}%)`,
        gridTemplateRows: `repeat(${gridSize}, ${tileSize}%)`,
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
        <SlidingPuzzleContext.Provider value={{ puzzleList, handlePuzzleClick, puzzleIndex, puzzleStyle, tileStyle, emptyTileStyle, gridSize }}>
            {children}
        </SlidingPuzzleContext.Provider>
    );
};