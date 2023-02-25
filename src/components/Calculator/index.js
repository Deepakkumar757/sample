import React, { useState } from 'react'
import CalculatorLayout from './CalculatorLayout'
import './index.css'
const Calculator = () => {
  const [result, setresult] = useState(0)
  const [inputVal, setInputVal] = useState('')
  const numbers = new Set(["1","2","3","4","5","6","7","8","9",'.',"0","="])
const symbols = new Set(["+","-","*","/","C","AC"])
const temp = ["1","2","3","4","5","6","7","8","9",'.',"0"]
const allowedKeys = new Set([...temp,...symbols,'Backspace'])
  const clickHandler =(val)=>{
    if(val === "=") {
      return calculateValue()
    }
    if(val === "AC")
    {
      setInputVal("")
      setresult(0)
      return 
    }
    if(val === "C"){
      const temp = inputVal.replace(/\$/, '');
      setInputVal(temp)
      return;
    }
    setresult("")
    setInputVal((prev)=>prev+val)
  }
  const calculateValue = () =>{
    try {
      const value = eval(inputVal);
      return setresult(value);
      
    } catch (error) {
      setresult("Invalid Input")
    }      
  }
  const onChangeHandler = (event)=>{
    const { value } =  event.target;
    setInputVal(value)
    setresult("")
  }
  return (
    <CalculatorLayout>
        <div className='display_value'>
            <input className='result_input' value={inputVal} onChange={onChangeHandler} 
              onKeyDown={(event)=>{
                const { key } = event;
                if(key === 'Enter' || key === "=") {
                 calculateValue()
                }
                if(!allowedKeys.has(key)) event.preventDefault()
                
              }}/>
            <div className='result_div'>{result} </div>
        </div>
        <div className='button_div'>
            <div className='number_button'>
              {[...numbers].map(e=><button key={e} className='btn' onClick={()=>clickHandler(e)}>{e}</button>)}
            </div>
            <div className='symbol_button'>
              {[...symbols].map(e=><button key={e} className='symbol_btn' onClick={()=>clickHandler(e)}>{e}</button>)}
            </div>
        </div>
    </CalculatorLayout>
  )
}

export default Calculator