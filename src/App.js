import React, {useState} from 'react';
import './App.css';
import Square from './components/Square/Square';

const App = () => {

  const [squares, setSquares] = useState([ ]);

const squarePacks = () =>{
    if (squares.length<=35){
      for (let i=0; i<36; i++){
        const newSquare = {};
        newSquare.className='squareBlock';
        newSquare.hasItem = false;
        newSquare.id = i;
        squares.push(newSquare);
    }
    const randomIndex = Math.floor(Math.random()*36)
    squares[randomIndex].hasItem = true;
  };
};

  squarePacks();


  const clickSquare = id =>{
    const index = squares.findIndex(p=>p.id===id);
    const squaresCopy = [...squares];
    const square = {...squaresCopy[index]};
    square.className = 'White';
    squaresCopy[index] = square;
    setSquares(squaresCopy);
  };

  const resetBtn = () =>{
    const squaresCopy = [...squares];
    squaresCopy.splice(0,squaresCopy.length);
    setSquares(squaresCopy);
    squarePacks();
  }

  const squareList = (
    squares.map(square=>(
      <Square 
      key={square.id}
      className={square.className}
      clickSquare={()=>clickSquare(square.id)}
      >      
      </Square>
    ))
  );
  

  return (
    <div className="App">
      <div className='Board'>
        {squareList}    
      </div>
      <p>Tries:{tryCounter}</p>
      <p><button onClick={resetBtn}>Reset</button></p>
    </div>
  );
}

export default App;
