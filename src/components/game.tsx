import './game.css';

import {
  FC,
  useState,
} from 'react';

import { calculateWiner } from '../helper';
import Board from './board';

const Game: FC = () => {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true)
  const winner = calculateWiner(board)

  const checkDraw = (board: any) => {

  }

  const draw = checkDraw(board)

  const handleClick = (index: number) => {
    if (winner || board[index]) return;

    setBoard((board) => board.map((b, i) => i === index ? xIsNext ? 'X' : '0' : b));
    setXIsNext((xIsNext) => !xIsNext);
  }

  return (<div className='game'>
    <p className='round'>
      {winner ? `Выйграл ${winner}` : `Сейчас ход ${xIsNext ? 'X' : '0'}`}
    </p>
    <Board squares={board} click={handleClick} />
    <button className='restart' onClick={() => setBoard(Array(9).fill(null))}>Начать заново</button>
  </div >
  )
}

export default Game