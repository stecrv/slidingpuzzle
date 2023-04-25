import React, { useContext } from 'react';
import styled from 'styled-components';
import { SlidingPuzzleContext } from "../context/SlidingPuzzleContext";
import { APP_BACKGROUND_SIZE } from "../constants/app";

const SlidingPuzzleContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.width}, ${props => 100 / props.width}%);
  grid-template-rows: repeat(${props => props.height}, ${props => 100 / props.height}%);
  width: 500px;
  height: 500px;
  margin: 0 auto;
  background-size: cover;
  background-position: center;
  border: 2px solid black;
  border-radius: 5px;
  overflow: hidden;
`;

const Tile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  font-weight: bold;
  color: white;
  background-color: rgba(0, 0, 0, 0.4);
  cursor: pointer;
  transform: scale(1);
  ${props => props.width > APP_BACKGROUND_SIZE} {
    background-image: url(${props => props.imageSrc});
    background-size: ${props => props.imageWidth}px ${props => props.imageHeight}px;
    background-position-x: ${props => ((((props.pos - 1) % props.width === 0 ? 0 : (props.pos - 1) % props.width === 1 ? 0.5 : 1) * 100))}%;
    background-position-y: ${props => (((Math.floor((props.pos - 1) / props.height)) * 50))}%;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }
`;

const EmptyTile = styled(Tile)`
  background-color: transparent;
  cursor: default;
`;

export const SlidingPuzzleBoard = () => {
    const {
        puzzleList, width, height,handlePuzzleClick, imageSrc
    } = useContext(SlidingPuzzleContext);

    return (
        <SlidingPuzzleContainer width={width} height={height}>
            {puzzleList.map((content, index) =>
                content === 0 ? (
                    <EmptyTile key={index} />
                ) : (
                    <Tile key={index}
                          onClick={() => handlePuzzleClick(index)}
                          imageSrc={imageSrc}
                          imageWidth={500}
                          imageHeight={500}
                          width={width}
                          height={height}
                          pos={content}>
                        <>
                        {content}
                        </>
                    </Tile>
                )
            )}
        </SlidingPuzzleContainer>
    );
}