import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [counter, setCounter] = useState(0);
  const [disabled, setDisabeld] = useState(false);

  return (
    <div class Name="App">
      <header className="App-header">
        <h3 data-testid="counter">{counter}</h3>
        <div>
        <button data-testid ="minus-button" onClick={() => setCounter((count) => count - 1)}
        disabled= {disabled}        
        >-</button>
        <button data-testid="plus-button" onClick={() => setCounter((count) => count + 1)}
        disabled= {disabled} >+</button>
        </div>
        <div>
          <button data-testid = "on/off-button" style={{backgroundColor : "blue"}}
          onClick={() => setDisabeld((prev) => !prev)}>
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
