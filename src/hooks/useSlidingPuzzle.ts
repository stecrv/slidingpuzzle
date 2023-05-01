import { useState, useCallback, useEffect } from "react";
import { SlidingPuzzle } from "../lib/sliding-puzzle/sliding-puzzle";

const slidingPuzzle = new SlidingPuzzle(3, 3);
export const useSlidingPuzzle = (width, height) => {
    const [puzzleList, setPuzzleList] = useState([]);
    const [puzzleIndex, setPuzzleIndex] = useState(0);
    const [puzzleMoves, setPuzzleMoves] = useState(0);

    const handlePuzzleClick = useCallback(
        (index) => {
            const newList = slidingPuzzle.move(index);
            const newIndex = slidingPuzzle.getIndex();
            const newMoves = slidingPuzzle.getMoves();
            setPuzzleList(newList);
            setPuzzleIndex(newIndex);
            setPuzzleMoves(newMoves);
        },
        [slidingPuzzle]
    );

    useEffect(() => {
        slidingPuzzle.createPuzzle(width, height);
        const newIndex = slidingPuzzle.getIndex();
        const newMoves = slidingPuzzle.getMoves();
        setPuzzleList(slidingPuzzle.list);
        setPuzzleIndex(newIndex);
        setPuzzleMoves(newMoves);
    }, [slidingPuzzle, width, height]);

    return {
        puzzleList,
        handlePuzzleClick,
        puzzleIndex,
        puzzleMoves,
    };
};
