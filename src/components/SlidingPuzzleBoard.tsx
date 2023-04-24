import React, {useContext} from 'react';
import {SlidingPuzzleContext} from "../context/SlidingPuzzleContext";
import {Tile} from "./Tile";

export const SlidingPuzzleBoard = () => {
    const {
        puzzleList, puzzleIndex, puzzleStyle, tileStyle, emptyTileStyle, gridWidth, gridHeight
    } = useContext(SlidingPuzzleContext);


    const tiles = puzzleList.map((value, index) => {
        const tileContent = value === 0 ? '' : value;
        const tileStyleWithPosition = {
            ...tileStyle,
            gridColumn: `${(index % gridWidth) + 1} / span 1`,
            gridRow: `${Math.floor(index / gridHeight) + 1} / span 1`,
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
            <div style={puzzleStyle}>
                {tiles}
            </div>
        </>
    );
}