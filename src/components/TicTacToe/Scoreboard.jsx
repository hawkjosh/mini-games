import '../../assets/styles/TicTacToe/Scoreboard.css'

export default function Scoreboard({ score, xPlaying }) {

  const {xScore, oScore} = score;

  return (
    // <div>
    //   <h1 className='scoreboard-title'>SCORE</h1>
    //   <div className='scoreboard'>
    //     <div className={`score x-score ${!xPlaying && 'inactive'}`}>
    //       X's ▸ {xScore}
    //     </div>
    //     <div className={`score o-score ${xPlaying && 'inactive'}`}>
    //       O's ▸ {oScore}
    //     </div>
    //   </div>
    // </div>
    <div className='scoreboard-heading'>
      <div className='scoreboard'>
        <div className={`score x-score ${!xPlaying && 'inactive'}`}>
          X's ▸ {xScore}
        </div>
        <div><h1 className='scoreboard-title'>TIC-TAC-TOE</h1></div>
        <div className={`score o-score ${xPlaying && 'inactive'}`}>
          O's ▸ {oScore}
        </div>
      </div>
    </div>
  )
}