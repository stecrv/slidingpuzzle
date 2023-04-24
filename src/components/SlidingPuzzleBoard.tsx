import React, {useContext} from 'react';
import styled from 'styled-components';
import {SlidingPuzzleContext} from "../context/SlidingPuzzleContext";

const PuzzleContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.width}, ${props => 100 / props.width}%);
  grid-template-rows: repeat(${props => props.height}, ${props => 100 / props.height}%);
  width: 500px;
  height: 500px;
  margin: 0 auto;
  background-image: url(${props => props.imageSrc});
  background-size: cover;
  background-position: center;
  border: 2px solid black;
  border-radius: 5px;
  overflow: hidden;
`;

const PuzzleTile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  font-weight: bold;
  color: white;
  background-color: rgba(0, 0, 0, 0.4);
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  transform: scale(1);
`;

const EmptyPuzzleTile = styled(PuzzleTile)`
  background-color: transparent;
  cursor: default;
`;

export const SlidingPuzzleBoard = () => {
    const {
        puzzleList, width, height,handlePuzzleClick, imageSrc
    } = useContext(SlidingPuzzleContext);

    return (
        <PuzzleContainer imageSrc={imageSrc} width={width} height={height}>
            {puzzleList.map((content, index) =>
                content === 0 ? (
                    <EmptyPuzzleTile key={index} />
                ) : (
                    <PuzzleTile key={index} onClick={() => handlePuzzleClick(index)}>
                        {content}
                    </PuzzleTile>
                )
            )}
        </PuzzleContainer>
    );
}