import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget,expenses,currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

   
    const handleBudgetChange = (event) => {

        const totalcost= expenses.reduce((total,item)=>{
            return (total+=item.cost);
        },0);

        if(event.target.value>20000)
        {
            alert(`The value cannot exceed remaing funds:`)
        }
        else if(event.target.value<totalcost)
        {
            alert("You cannot reduce te budget value lower than spending");
        }
        
        
            setNewBudget(event.target.value);
        
        
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;