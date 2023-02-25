import React, { useEffect } from 'react'
import localStorage from 'localStorage'

const CrudeInLocalStorage = () => {
  
  return (
    <div className='crud_in_ls_main'>
        <form>
            <label>Name</label><input/>
            <label>Age</label><input/>
            <label>Subject</label><input/>
            <label>Mark</label><input/>
        </form>
    </div>
  )
}

export default CrudeInLocalStorage