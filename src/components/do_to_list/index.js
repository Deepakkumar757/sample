import React, { useState } from 'react'
import './to_do.css'
const ToDo = () => {
    const [input_value, setinput_value] = useState('')
    const [list_array, setlist_array] = useState([])
    const handle_add = () =>{
        if(input_value) setlist_array((pre)=>[input_value,...pre])
        setinput_value("")
    }
    const clickHandler = (delete_index) =>{
        console.log(delete_index)
        const copyVal = list_array.filter((e,i)=>i!==delete_index)
        console.log(copyVal)
        setlist_array(copyVal)
    }
  return (
    <div className="to_do_main">
        <div className='input_div'>
            <input className={"to_do_input"} value={input_value} onKeyDown={(e)=>{
                if(e.key === 'Enter'){
                    console.log("workign")
                    handle_add()
                    e.preventDefault()
                }
            }} onChange={(e)=>{setinput_value(e.target.value)}} /><button className='to_do_add_btn' onClick={handle_add}>Add</button>
        </div>
            <hr></hr>
        <div style={{width:"97%",height:"100%"}}>
                {list_array.length ? list_array.map((e,i)=><div key={e} style={{display:'flex'}}>
                    <label className='list_label'>{i+1}</label>
                    <div className='list_div'>{e}</div>
                    <button className='delete_btn' onClick={()=>clickHandler(i)}>X</button>
                </div>)
                :<>No Data Added</>}
        </div>
    </div>
  )
}

export default ToDo;