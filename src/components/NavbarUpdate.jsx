import * as React from 'react';

import { Outlet } from 'react-router-dom'

export default function Navbar() {
  
  const [title, setTitle] = React.useState('Home')

  const handleSelect = (e) => {
    setTitle(e.target.value)
  }

  const renderTitle = () => {
    let result = title
    return result
  }

  return (
    <div>
      <div>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          {/* <button onClick={handleOpen} style={{marginRight: '50px'}}>Menu</button> */}
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '100px'}}>
            <label htmlFor='menu'>Menu</label>
            <select id='menu' value={title} onChange={handleSelect} size='3'>
              <option value='Home'>Home</option>
              <option value='Tic-Tac-Toe'>Tic-Tac-Toe</option>
              <option value='Hangman'>Hangman</option>
            </select>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <h1 style={{margin: '0'}}>Mini Games</h1>
            <h2 style={{margin: '0'}}>{renderTitle()}</h2>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  )
}