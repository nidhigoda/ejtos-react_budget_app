import React,{useContext} from 'react'
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';

const ExpenseList=()=>{
    const {expenses}=useContext(AppContext);
    return(
        <ul className='list-group'>
            {expenses.map(((ex)=>(
                <ExpenseItem id={ex.id} name={ex.name} cost={ex.cost}/>
            )))}
        </ul>
    )

}

export default ExpenseList