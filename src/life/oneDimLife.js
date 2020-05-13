import LifeAbstract from './lifeAbstract';
export class OneLife extends LifeAbstract {
    constructor(size, numNeighborhoods=2, board=[]) {
        super();
        this._size = size;
        this._numNeighborhoods = numNeighborhoods;
        if (board.length === 0) {
            for (let i = 0; i < size; i++) {
                board.push(Math.round(Math.random() * 1));
            }    
        }
        this._board = board;
    }

    get size() {
        return this._size;
    }

    get board() {
        return this._board;
    }

    print() {
        let line = '';
        this.board.forEach(e => {
            line += e + ' ';
        });
        console.log(line);
    }

    tick() {
        function countNeighborhoods(obj, index) {
            let n = 0;
            for (let i = -obj._numNeighborhoods; i <= obj._numNeighborhoods; i++) {
                if (index + i >= 0 && index + i < obj.board.length) {
                    n += obj.board[index + i];
                }
            }
            return obj.board[index] === 1 ? n - 1 : n;
        }

        let newBoard = this.board.slice();
        for (let i = 0; i < this.size; i++) {
            let n = countNeighborhoods(this, i);
            if (this.board[i] === 1) {
                if (n === 0 || n === 1 || n === 3) {
                    newBoard[i] = 0;
                }
            } else if (this.board[i] === 0) {
                if (n === 2 || n === 3) {
                    newBoard[i] = 1;
                }
            }
        }
        this._board = newBoard;
    }

    clone() {
        return new OneLife(this.size, this.numNeighborhoods, this.board);
    }
}

export default OneLife