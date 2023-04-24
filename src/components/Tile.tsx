import React, {useState, useEffect, useContext} from 'react';
import {SlidingPuzzleContext} from "../context/SlidingPuzzleContext";

export const Tile = ({ index, content, style }) => {

    const {
        handlePuzzleClick
    } = useContext(SlidingPuzzleContext);

    return (
        <div key={index} style={style} onClick={() => handlePuzzleClick(index)}>
            {content}
        </div>
    );
}