import React, { useContext, useCallback } from "react";
import { SlidingPuzzleContext } from "../context/SlidingPuzzleContext";
import { Button } from "./Button";

export const SlidingPuzzleSettings = () => {
    const { width, height, handleSettingsClick } = useContext(SlidingPuzzleContext);

    const increaseWidth = useCallback(() => {
        handleSettingsClick(width + 1);
    }, [handleSettingsClick, width]);

    const decreaseHeight = useCallback(() => {
        handleSettingsClick(height - 1);
    }, [handleSettingsClick, height]);

    return (
        <>
            <p>Size: {width}x{height}</p>
            <div>
                <Button onClick={increaseWidth}>Increase Size</Button>
                <Button onClick={decreaseHeight}>Decrease size</Button>
            </div>
        </>
    );
};
