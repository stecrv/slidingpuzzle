import React, { useState, useEffect, createContext, useCallback, useMemo} from 'react';
import { SlidingPuzzle } from "../lib/sliding-puzzle/sliding-puzzle";
import { GRID_MINIMUM_SIZE } from "../lib/sliding-puzzle/constants";

export const SlidingPuzzleContext = createContext();

const slidingPuzzle : SlidingPuzzle = new SlidingPuzzle(3,3);

export const SlidingPuzzleProvider = ({ imageSrc, gridWidth, gridHeight, children }) => {
    const [width, setWidth] = useState(gridWidth);
    const [height, setHeight] = useState(gridHeight);
    const [puzzleList, setPuzzleList] = useState(slidingPuzzle.list);
    const [puzzleIndex, setPuzzleIndex] = useState(slidingPuzzle.index);
    const [puzzleMoves, setPuzzleMoves] = useState(slidingPuzzle.moves);

    const handlePuzzleClick = useCallback((index) => {
        const newList = slidingPuzzle.move(index);
        const newIndex = slidingPuzzle.getIndex();
        const newMoves = slidingPuzzle.getMoves();
        setPuzzleList(newList);
        setPuzzleIndex(newIndex);
        setPuzzleMoves(newMoves);
    }, []);

    const handleSettingsClick = useCallback((size) => {
        if (size < GRID_MINIMUM_SIZE) return;
        setWidth(size);
        setHeight(size);
    }, []);

    useEffect(() => {
        slidingPuzzle.createPuzzle(width, height);
        const newIndex = slidingPuzzle.getIndex();
        const newMoves = slidingPuzzle.getMoves();
        setPuzzleList(slidingPuzzle.list);
        setPuzzleIndex(newIndex);
        setPuzzleMoves(newMoves);
    }, [width, height]);

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
