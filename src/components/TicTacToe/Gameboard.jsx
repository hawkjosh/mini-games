import Square from '../TicTacToe/Square.jsx'

import '../../assets/styles/TicTacToe/Gameboard.css'

export default function Gameboard({ board, onClick }) {
  
  return (
    <div className='board-background'>
      <div className='board'>
        {board.map((value, index) => {
          return <Square key={index} value={value} onClick={() => value === null && onClick(index)} />
        })}
      </div>
    </div>
  )
}