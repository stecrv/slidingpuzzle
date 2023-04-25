# Sliding puzzle project

## Desc 

We would like you to build a sliding puzzle (example: https://en.wikipedia.org/wiki/Sliding_puzzle). 

## Must-haves:

* A game field of 3x3 with 8 blocks and one gap; if a block is clicked that borders the gap, it moves into the gap
* Random start locations; but without any duplicate blocks
* The blocks are numbered; 1 to 8
* Responsiveness; the game size adjusts to screen size
* A counter tracking the number of moves

## Nice-to-have:

* Parts of an image instead of numbers in the blocks
* Win-condition; if successfully completed, give some kind of feedback
* Dynamic number of blocks; some kind of input whereby the size of the game (and number of blocks) can be increased from 3x3 to any dimension

## Spec

The project has to be developed using ReactJS + TypeScript.

## Solutions

### Tech stack
To complete the game has been used:
* node 18.16
* vite 4.2 using default settings
* ts 4.9
* react 18
* yarn 1.22

### Solution description
The js/ts codebase includes:
* a small library to manage the puzzle
* standard react components
* react context for props sharing
* styled components for the css

### AI
* The code base include some basic suggestion from AI for basic components
* AI has been used to verify some author solutions

## Run the code
on the terminal, run
* `yarn`
* `yarn dev`
* on the terminal open the URL `http://localhost:5173/`

## Future devs and What is missing
Future improvements that are missing:
* unit test and integration test (they are mandatory, missing for lack of time)
* the image is only available for 3x3 game (this require a css tweak)
* sliding animation
* cleaning app ts warning
* docker images