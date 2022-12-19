import React from 'react';
import moment from 'moment/moment';
import './ExpensiveForm.css';

        function ExpensiveForm({onDummyExpensive, newItem, setnewItem, newPrice, setnewPrice, newDate, setnewDate, editbutton}){ 

            let ChangeItem = (event) => {
                setnewItem(event.target.value);
            };

            let ChangePrice = (event) => {
                setnewPrice(event.target.value);
            };

            let ChangeDate = (event) => {
                setnewDate(event.target.value);
            };

            let ClearExpensive = () => {
                setnewItem("");
                setnewDate("")
                setnewPrice("");
            }

             let SubmitExpensive = () => {
                if(newItem == "", newDate == "", newPrice == ""){
                        alert("Please Enter Details")
                }else {
                const expensiveData = {
                    expensiveDate: new Date(newDate),
                    expensiveTitle: newItem,
                    expensivePrice: newPrice,
                    expensiveId: Math.random()*9
                }
                    console.log(expensiveData);
                onDummyExpensive(expensiveData);

                setnewItem("");
                setnewDate("");
                setnewPrice("");
             }
        }

            const SubmitHandler = (event) => {
                event.preventDefault();  
            }

        return(

        <form onSubmit = {SubmitHandler} className= "container-fluid p-3 wrapper">
            <div className="row justify-content-evenly">

                <div className="col-lg-5 expensive-name">
                        <label>
                         Expense Name
                        </label> <br/>
                        <input type = "text" placeholder= "Enter expense name" name = "add_item" value={newItem} className = "form-control" onChange={ChangeItem} autoComplete = "off"/>
                </div>

                <div className="col-lg-5 expensive-price">
                        <label>
                            Cost
                        </label> <br/>
                        <input type = "number" placeholder='Enter cost of expense' name = "add_numbe" value= {newPrice} min = "0.01" step = "0.01" className = "form-control" onChange={ChangePrice}/>
                </div>
            </div>

                <div className="row">
                    <div className="col-lg-12 expensive-date">
                        <label>
                            Choose Date 
                    </label> <br/>
                    <input type = "date" name = "add_date"  value= {newDate.value} onChange = {ChangeDate}/>
                    </div>
                </div>
                
            <div className="row justify-content-evenly   mt-5">
                <div className= "col-lg-11">

                    <button type = "clear" className="col-md-6 btn-clear" onClick={ClearExpensive}>
                        Clear Data
                    </button>
                { 
                    editbutton ?
                    <button type = "submit" className="col-md-6 btn-submit" onClick={SubmitExpensive}>
                        Add Expensive
                    </button>
                    :
                    <button type = "submit" className="col-md-6 btn-submit" onClick={SubmitExpensive}>
                        Edit Expensive
                    </button>
                }   
                </div>
            </div>
        </form>

            );
        }
    

export default ExpensiveForm;