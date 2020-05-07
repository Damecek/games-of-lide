export class OneGame {
    constructor(size) {
        this._size = size;
        let board = [];
        for (let i = 0; i < size; i++) {
            board.push(Math.round(Math.random() * 1));
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
        return line;
    }

    tick() {
        function neib(board, index) {
            let n = 0;
            for (let i = -2; i < 3; i++) {
                if (index + i >= 0 && index + i < board.length) {
                    n += board[index + i];
                }
            }
            return board[index] === 1 ? n - 1 : n;
        }

        let newBoard = this.board.slice();
        for (let i = 0; i < this.size; i++) {
            let n = neib(this.board, i);
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
}

export default OneGame