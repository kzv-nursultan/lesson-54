import React, {useState} from 'react';
import './App.css';
import Square from './components/Square/Square';

const App = () => {

  const [squares, setSquares] = useState([]);
  const [tryCounter, setTryCounter]= useState([]);

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
    const counter = 0;
    const tryCounterCopy = [...tryCounter];
    tryCounterCopy.push(counter);
    setTryCounter(tryCounterCopy);
  };

  const resetBtn = () =>{
    const squaresCopy = [...squares];
    squaresCopy.splice(0,squaresCopy.length);
    setSquares(squaresCopy);
    const tryCounterCopy = [...tryCounter];
    tryCounterCopy.splice(0,tryCounterCopy.length);
    setTryCounter(tryCounterCopy);
    squarePacks();
  }

  // const item = (
   
  // )

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
      <p>Tries:{tryCounter.length}</p>
      <p><button onClick={resetBtn}>Reset</button></p>
    </div>
  );
}

export default App;
