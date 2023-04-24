import {DEFAULT_PUZZLE} from "./constants";


export class SlidingPuzzle {
    index = DEFAULT_PUZZLE.index;
    gridWidth = DEFAULT_PUZZLE.gridWidth;
    gridHeight = DEFAULT_PUZZLE.gridHeight;
    list = DEFAULT_PUZZLE.list;

    constructor(width: number = 3, height: number = 3, regenerate = false) {
        if(regenerate || width !== this.gridWidth || height !== this.gridHeight || !this.list.length){
            console.log('construct');
            this.gridHeight = height;
            this.gridWidth = width;
            this.list = this.create(this.gridWidth, this.gridHeight);
            this.index = this.getIndex();
        }
    }

    getIndex(){
        return this.list.indexOf(0)
    }
    create(width:number, height:number) {
        console.log('create');
        const gridSize:number = width*height;
        const gridList:number[] = [ ...Array(gridSize).keys() ];
        return gridList.sort((a, b) => 0.5 - Math.random());
    }

    move(newIndex: number) {
        console.log('move', this.list);
        if (newIndex - this.gridWidth === this.index || // swap element up
            newIndex + this.gridWidth === this.index || // swap element down
            (newIndex % this.gridWidth !== 0 && newIndex - 1 === this.index) || // left
            ((newIndex + 1) % this.gridWidth !== 0 && newIndex + 1 === this.index)) { // right
            [this.list[newIndex], this.list[this.index]] = [this.list[this.index], this.list[newIndex]];
            console.log('moved', this.list);
        }
        this.index = this.getIndex();
        return this.list;
    }

}
