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

    const tileWidthSize = 100 / width;
    const tileHeightSize = 100 / height;
    const puzzleStyle = {
        display: 'grid',
        gridTemplateColumns: `repeat(${width}, ${tileWidthSize}%)`,
        gridTemplateRows: `repeat(${height}, ${tileHeightSize}%)`,
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
        <SlidingPuzzleContext.Provider value={
            { puzzleList, handlePuzzleClick, handleSettingsClick, puzzleIndex, puzzleStyle,
                tileStyle, emptyTileStyle, width, height,  puzzleMoves }}>
            {children}
        </SlidingPuzzleContext.Provider>
    );
};