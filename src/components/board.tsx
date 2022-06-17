import './board.css';

import { FC } from 'react';

import Square from './square';

interface boardType {
    squares: any,
    click: any,
}

const Board: FC<boardType> = ({ squares, click }) => {
    return (<div className='board'>
        {
            squares.map((square: any, i: number) => (
                <Square key={i} value={square} onClick={() => click(i)} />
            ))
        }
    </div >
    )
}

export default Board