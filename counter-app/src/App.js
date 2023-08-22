import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

const counterhandler = () => {
    const  [counter, setCounter] = useState(0)
  }
  const increment=() => {
      setCounter(counter + 1);
  }
  const decrement=() => {
    if(counter > 0)
{
    setCounter(counter - 1);
}
}
  return (
    <div className="App">
    <p>counter :</p>
    
        <button >increment</button>
        <button >decrement</button>
    </div>
  );
}

export default App;
