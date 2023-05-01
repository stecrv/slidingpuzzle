import React, { useState, createContext, useCallback, useMemo} from 'react';
import { GRID_MINIMUM_SIZE } from "../lib/sliding-puzzle/constants";
import { useSlidingPuzzle } from "../hooks/useSlidingPuzzle";

export const SlidingPuzzleContext = createContext();

export const SlidingPuzzleProvider = ({ imageSrc, gridWidth, gridHeight, children }) => {
    const [width, setWidth] = useState(gridWidth);
    const [height, setHeight] = useState(gridHeight);

    const { puzzleList, handlePuzzleClick, puzzleIndex, puzzleMoves } = useSlidingPuzzle(
        width,
        height
    );

    const handleSettingsClick = useCallback((size) => {
        if (size < GRID_MINIMUM_SIZE) return;
        setWidth(size);
        setHeight(size);
    }, []);

    const value = useMemo(() => {
        return {
            puzzleList,
            handlePuzzleClick,
            handleSettingsClick,
            puzzleIndex,
            width,
            height,
            puzzleMoves,
            imageSrc,
        };
    }, [puzzleList, handlePuzzleClick, handleSettingsClick, puzzleIndex, width, height, puzzleMoves, imageSrc]);

    return (
        <SlidingPuzzleContext.Provider value={value}>{children}</SlidingPuzzleContext.Provider>
    );
};
