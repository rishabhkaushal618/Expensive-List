import React, { useState } from 'react';
import NavBar from '../NavBar/NavBar';
import ExpensiveForm from './ExpensiveForm';
import ExpensiveItem from './ExpensiveItem';
 
function Expensive() {
    
const arrayExpensive = [
    // {
    //   expensiveDate: new Date(1993, 6, 3, 6, 59, 30),
    //   expensiveTitle:'Pizza',
    //   expensivePrice: 870,
    //   expensiveId: '0'
    // }
 ];

 const [newDummyExpensive, setnewDummyExpensive] = useState(arrayExpensive);

 const [newItem, setnewItem] = useState("");

 const [newPrice, setnewPrice] = useState("");

 const [newDate, setnewDate] = useState("");

 const [editbutton, seteditbutton] = useState(true);

 const [toggleeffect, settoggleeffect] = useState(null);

        const DummyExpensive = (storeExpensiveObject) => { 

            console.log(newDate)
            
            if(newItem && !editbutton, newPrice && !editbutton, newDate && !editbutton) {
                setnewDummyExpensive(
                    newDummyExpensive.map(editList => {
                        if (editList.expensiveId === toggleeffect.expensiveId) {
                            return ({...editList, expensiveTitle:newItem, expensivePrice:newPrice, expensiveDate:newDate})
                        }
                        return editList;
                    }
                        
                        )
                    )
                    seteditbutton(true);
                    settoggleeffect(null);

                }else {
             setnewDummyExpensive([storeExpensiveObject, ...newDummyExpensive])
                }
         }
            
        const deleteList = (storeExpensive) => {
           const deleteResponse =  newDummyExpensive.filter(deleteItem => deleteItem.expensiveId !== storeExpensive?.expensiveId);
              setnewDummyExpensive(deleteResponse);
        };

        const editList = (storeExpensiveObject) => {
            const editResponse = newDummyExpensive.find(itemNumber => itemNumber.expensiveId === storeExpensiveObject.expensiveId);
            console.log(editResponse);
            setnewItem(editResponse.expensiveTitle);
            setnewPrice(editResponse.expensivePrice);
            setnewDate(editResponse?.expensiveDate);
            seteditbutton(false);
            settoggleeffect(storeExpensiveObject);
        }

    return(

        <div>
        <NavBar/>
        <ExpensiveForm 
        onDummyExpensive = {DummyExpensive}
        newItem = {newItem}
        setnewItem = {setnewItem}
        newPrice = {newPrice}
        setnewPrice = {setnewPrice}
        newDate = {newDate}
        setnewDate = {setnewDate}
        editbutton = {editbutton}/>

        {
            newDummyExpensive.map(storeExpensiveObject => (
                <ExpensiveItem
                    key = {storeExpensiveObject.expensiveId}
                    item = {storeExpensiveObject}
                    ondeleteList = {deleteList}
                    oneditList = {editList}/>
                )
            )
        }  
        </div>
    )
}

export default Expensive;