import LifeAbstract from './lifeAbstract';

export class TwoLife extends LifeAbstract {
    constructor(size, typeNeighborhood='normal', board=[[]]) {
        super();
        this._size = size;
        this._typeNeighborhood = typeNeighborhood;
        if (board.length === 1) {
            for (let row = 0; row < size; row++) {
                for (let col = 0; col < size; col++) {
                    board[row].push(Math.round(Math.random() * 1));
                }
                board.push([]);
            }
            board.pop();
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
        let out = '';
        this.board.forEach((line)=>{
            line.forEach((item)=>{
                out += item + ' ';
            });
            out += '\n';
        });
        console.log(out);
    }

    tick() {
        function countNeighborhoods(obj, index) {
            let n = 0;
            switch (obj._typeNeighborhood) {
                case 'normal':
                    for (let row = -1; row <= 1; row++) {
                        for (let col = -1; col <= 1; col++) {
                            const i = {'row': index.row + row, 'col': index.col + col};
                            if (i.row >= 0 && i.row < obj.size && i.col >= 0 && i.col < obj.size) {
                                n += obj.board[i.row][i.col];
                            }
                        }
                    }
                    return obj.board[index.row][index.col] === 1 ? n - 1 : n;
            
                default:
                    throw new Error('Undefined type of neighborhood!');
            }
        }
        
        let newBoard = this.board.slice();
        this.board.forEach((line, row)=>{
            line.forEach((item, col)=>{
                let n = countNeighborhoods(this, {'row': row, 'col': col});
                if (this.board[row][col] === 1) {
                    if (n !== 2 && n !== 3) {
                        newBoard[row][col] = 0;
                    }
                } else if (this.board[row][col] === 0) {
                    if (n === 3) {
                        newBoard[row][col] = 1;
                    }
                }
            })
        })
        this._board = newBoard;
    }

    clone() {
        return new TwoLife(this.size, this.typeNeighborhood, this.board);
    }
}

export default TwoLife;