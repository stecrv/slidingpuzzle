import React, { useContext } from "react";
import { SlidingPuzzleContext } from "../context/SlidingPuzzleContext";
import { Button } from "./Button";

export const SlidingPuzzleSettings = () => {
    let { width, height, handleSettingsClick } = useContext(SlidingPuzzleContext);

    return (
        <>
            <p>Size: {width}x{height}</p>
            <div>
                <Button onClick={()=>{handleSettingsClick(width+1)}}>Increase Size</Button>
                <Button onClick={()=>{handleSettingsClick(height-1)}}>Decrease size</Button>
            </div>
        </>
    );
};
