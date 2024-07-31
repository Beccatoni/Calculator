import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Screen from './components/Screen.jsx'
import Buttons from './components/Buttons.jsx'

function App() {
  const [count, setCount] = useState(0)
  const [input, setInput] = useState('')
  const [result, setResult] = useState('')

  const handleClick = (value)=>{
    if(value === 'AC'){
      setInput('');
      setResult('');
    } else if(value === '='){
      try {
        setResult(eval(input));
        
      } catch (error) {
        setResult('Error')
      } 
    } else if(value === '+/-'){
      if(input.startsWith('-')){
        setInput(input.substring(1))   
      } else{
        setInput(`-${input}`)
      }
        
    } else if(value === '%'){
         setInput(parseFloat(input / 100).toString())
    }
     else{
      if(result){
        setInput(value)
        setResult('')
      } else{
        setInput((prevInput=> prevInput+value))
      }
      
    }
  }

  // console.log(result)
  // console.log(input)

  return (
    <>
    <div className='flex py-6 justify-center'>
    <div className='h-[29rem] w-[24rem] bg-gray-900 flex flex-col p-4 gap-5 rounded '>
        
        <Screen output={result} input={input}/>
        <Buttons handleClick={handleClick}/>

      </div>
    </div>
     
    </>
  )
}

export default App
