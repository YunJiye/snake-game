import './App.css';
import { useState } from 'react';
import Board from './Board';
import Score from './Score';
import Control from './Control';

function App() {

  return (
    <div className="App">
      {/*배경*/}
      <Board>
      </Board>
      {/*점수판*/}
      <Score>
      </Score>
      {/*게임조작판*/}
      <Control>
      </Control>
    </div>
  );
}

export default App;
