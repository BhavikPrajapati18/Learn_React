import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  const addValue = () =>{
    if ( counter < 20 ){
      counter = counter + 1;
      setCounter(counter)
      console.log(counter); 
    }
  }

  const removeValue = () =>{
    if ( counter >0 ){
      counter = counter - 1;
      setCounter(counter)
      console.log(counter)
    }
  }

  return (
    <>
    <div>
      <h1>Counter: {counter}</h1>
      <br />
      <br />
      <button onClick={addValue}
      >Add + 1 | Counter: {counter} </button>
      <br />
      <br />
      <button  onClick={removeValue}
      >Remove - 1 | Counter: {counter}</button>
    </div>
    </>
  )
}

export default App
