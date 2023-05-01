import { useState, useCallback, useEffect } from "react";
import { SlidingPuzzle } from "../lib/sliding-puzzle/sliding-puzzle";

const slidingPuzzle = new SlidingPuzzle(3, 3);
export const useSlidingPuzzle = (width, height) => {
    const [puzzleList, setPuzzleList] = useState([]);
    const [puzzleIndex, setPuzzleIndex] = useState(0);
    const [puzzleMoves, setPuzzleMoves] = useState(0);

    const slidingPuzzleData = () =>{
        const {list, index, moves} = slidingPuzzle.getData()
        setPuzzleList(list);
        setPuzzleIndex(index);
        setPuzzleMoves(moves);
    }

    const handlePuzzleClick = useCallback(
        (index) => {
            slidingPuzzle.move(index);
            slidingPuzzleData();
        },
        [slidingPuzzle]
    );

    useEffect(() => {
        slidingPuzzle.createPuzzle(width, height);
        slidingPuzzleData();
    }, [slidingPuzzle, width, height]);

    return {
        puzzleList,
        handlePuzzleClick,
        puzzleIndex,
        puzzleMoves,
    };
};
