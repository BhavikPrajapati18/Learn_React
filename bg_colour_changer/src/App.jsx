import { useState } from 'react'

function App() {
  const [colour, setColour] = useState("Purple")

  return (
     <div className="h-screen w-full duration-200 p-0" style={{backgroundColor: colour}}>  
     <div className='fixed flex flex-wrap justify-center inset-x-0 bottom-20'>
      <div className='fixed flex flex-wrap bg-white justify-center gap-3 px-4 py-2 rounded-full'>
      <button className="bg-red-500 p-3 px-6 rounded-3xl duration-200 " onClick={
        () => setColour("red")
      }> red </button>
      <button className="bg-blue-500 p-3 px-6 rounded-3xl duration-200 " onClick={
        () => setColour("blue")
      }> blue </button>
      <button className="bg-amber-950 p-3 px-6 rounded-3xl duration-200 " onClick={
        () => setColour("maroon")
      }> maroon </button>
      <button className="bg-purple-50 p-3 px-6 rounded-3xl duration-200 " onClick={
        () => setColour("beige")
      }> beige </button>
      <button className="bg-green-500 p-3 px-6 rounded-3xl duration-200 " onClick={
        () => setColour("green")
      }> green </button>
      <button className="bg-pink-500 p-3 px-6 rounded-3xl duration-200 " onClick={
        () => setColour("pink")
      }> pink </button>
      <button className="bg-black p-3 px-6 rounded-3xl duration-200 " onClick={
        () => setColour("grey")
      }> grey </button>
      <button className="bg-orange-500 p-3 px-6 rounded-3xl duration-200 " onClick={
        () => setColour("orange")
      }> orange </button>
      </div>
     </div>
      
     </div>
  )
}

export default App
