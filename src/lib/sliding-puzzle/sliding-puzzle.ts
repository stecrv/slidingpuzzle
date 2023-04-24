import { DEFAULT_PUZZLE, GRID_MINIMUM_SIZE } from "./constants";


export class SlidingPuzzle {
    index: number = DEFAULT_PUZZLE.index;
    gridWidth: number = DEFAULT_PUZZLE.gridWidth;
    gridHeight: number = DEFAULT_PUZZLE.gridHeight;
    list: number[] = DEFAULT_PUZZLE.list;
    moves: number = DEFAULT_PUZZLE.moves;

    constructor(width: number = 3, height: number = 3, regenerate = false) {
        if ((regenerate
            || width !== this.gridWidth
            || height !== this.gridHeight
            || !this.list.length) && (
            width >= GRID_MINIMUM_SIZE
            && height >= GRID_MINIMUM_SIZE
        )
        ) {
            this.createPuzzle(3, 3);
        }
    }

    getIndex(): number {
        this.index = this.list.indexOf(0);
        return this.index;
    }

    getMoves(): number {
        return this.moves
    }

    createGrid(width: number, height: number): number[] {
        const gridWidth: number = width * height;
        const gridList: number[] = [...Array(gridWidth).keys()];
        return gridList.sort((a, b) => 0.5 - Math.random());
    }

    createPuzzle(width: number, height: number): void {
        console.log('construct');
        this.gridHeight = height;
        this.gridWidth = width;
        this.list = this.createGrid(this.gridWidth, this.gridHeight);
        this.index = this.getIndex();
        this.moves = 0;
    }

    move(newIndex: number): number[] {
        if (newIndex - this.gridWidth === this.index || // swap element up
            newIndex + this.gridWidth === this.index || // swap element down
            (newIndex % this.gridWidth !== 0 && newIndex - 1 === this.index) || // left
            ((newIndex + 1) % this.gridWidth !== 0 && newIndex + 1 === this.index)) { // right
            [this.list[newIndex], this.list[this.index]] = [this.list[this.index], this.list[newIndex]];
            this.moves = this.moves + 1;
        }
        this.index = this.getIndex();
        return this.list;
    }

}
