import React, { useState } from 'react';

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
return(
    <div>
        <p>counter :{counter}</p>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
    </div>
)

export default counterhandler;