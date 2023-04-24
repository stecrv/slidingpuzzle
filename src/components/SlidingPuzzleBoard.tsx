import React, {useContext} from 'react';
import {SlidingPuzzleContext} from "../context/SlidingPuzzleContext";
import {Tile} from "./Tile";

export const SlidingPuzzleBoard = () => {
    const {
        puzzleList, puzzleIndex, puzzleStyle, tileStyle, emptyTileStyle, gridSize
    } = useContext(SlidingPuzzleContext);

    
    const tiles = puzzleList.map((value, index) => {
        const tileContent = value === 0 ? '' : value;
        const tileStyleWithPosition = {
            ...tileStyle,
            gridColumn: `${(index % gridSize) + 1} / span 1`,
            gridRow: `${Math.floor(index / gridSize) + 1} / span 1`,
            transform: index === puzzleIndex ? 'scale(1)' : 'scale(1.1)',
            cursor: index === puzzleIndex ? 'default' : 'pointer',
            ...(index === puzzleIndex ? emptyTileStyle : {}),
        };

        return (
            <Tile index={index} content={tileContent} style={tileStyleWithPosition}></Tile>
        )
    });

    return (
        <>
            <h1>Sliding Puzzle Game</h1>
            <p>{[...puzzleList]}</p>
            <div style={puzzleStyle}>
                {tiles}
            </div>
        </>
    );
}