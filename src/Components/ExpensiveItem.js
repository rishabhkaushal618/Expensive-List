
import React from 'react';
import './ExpensiveItem.css';


function ExpensiveItem({item, ondeleteList, oneditList}) {

    let day = item.expensiveDate?.toLocaleString('en-US', {day: '2-digit'});
    let month = item.expensiveDate?.toLocaleString('en-US', {month: 'short'});
    let year = item.expensiveDate?.getFullYear();

    const deleteList = _ => ondeleteList(item);

    const editList = () => {
        oneditList(item);
    };

    return(
            <div className = "container-fluid tr">
                <div className = "row d-flex item-wrapper justify-content-evenly">

                    <div className = "col-7 item-date">
                        <h2>
                            {item.expensiveTitle}
                        </h2>
                    
                        <h6>
                            {/* {day}-{month}-{year} */}
                        </h6>
                    </div>

                    <div className = "col-3 item-price">
                        <h2>
                            ${item.expensivePrice}
                        </h2>
                    </div>

                    <div className = "col-1 mt-2">

                        <i className = "bi bi-x-octagon-fill" title = 'Delete Item' onClick = {deleteList}></i>

                        <i className ="bi bi-pencil-square" title = 'Edit Item' onClick = {editList}></i>

                    </div>
                </div>

            </div>
    )
}

export default ExpensiveItem;