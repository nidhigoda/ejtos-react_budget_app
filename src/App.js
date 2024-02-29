import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';

// Add code to import the other components here under


import { AppProvider } from './context/AppContext';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                        {
                           <div className='col-sm'> 
                            <Budget/>
                           </div>
                            /* Add Budget component here */
                          
                        }        

                        {
                            /* Add Remaining component here*/
                            <div className='col-sm'> 
                            <Remaining/>
                           </div>
                        }        

                        {
                            /* Add ExpenseTotal component here */
                            <div className='col-sm'> 
                            <ExpenseTotal/>
                           </div>
                        }        
                        <h3 className='mt-3'>Expenses</h3>
                        {
                            /* Add ExpenseList component here */
                           
                            <div className='row mt-3'>
                                <div className='col-sm'>
                                    <ExpenseList />
                                </div>
                            </div>
                            
                        }         
                         <h3 className='mt-3'> Add Expenses</h3>
                        {
                            /* Add ExpenseItem component here */
                        <div className='  mt-3'>
                            <div className='col-sm'>
                                <AllocationForm />
                            </div>
                        </div>                            
                         }        

                        {
                            /* Add AllocationForm component here under */
                        }        

                </div>
            </div>
        </AppProvider>
    );
};
export default App;
