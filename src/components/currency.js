import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'

const Currency=()=>{

    const {currency,dispatch}=useContext(AppContext);
    const[newCurrency,setCurrency]=useState(currency);

    const submitCurrency=(event)=>{
       
        setCurrency(event.target.value);

       dispatch({
        type:"CHG_CURRENCY",
        payload:event.target.value
       })
    }

    return(
        
        <div className="alert alert-success">
                <label className="input-group-text" >Currency</label>
                  
                  <select className="custom-select" id="inputGroupSelect01"  onClick={submitCurrency}>
                 
                  <option value="$" name="marketing">$ Dollar</option>
          <option value="£" name="marketing1">£ Pound</option>
          <option value="€" name="marketing2">€ Euro</option>
          <option value="₹" name="marketing3">₹ Ruppee</option>
          </select>
          </div>
    )

}

export default Currency