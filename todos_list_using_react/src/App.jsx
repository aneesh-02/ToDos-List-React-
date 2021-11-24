import React, { useState } from 'react';
import ToDoLists from './TodoLists';

const App = () => {

    const [inputList, setInputList] = useState(""); // hooks to add onChange of input text
    const [Items, setItems] = useState([]); // hooks array to store items on button click 

    const itemEvents = (event) => {        //displays inputed data in list
        setInputList(event.target.value);
    };

    const listOfItems = (event) => {    // adds all prev items to list and then the new item to it
        setItems((oldItems) => {
            return [...oldItems, inputList];
        });
        setInputList(""); // to empty the input field after addition
    };

    const deleteItems = (id) => {
        console.log("deleted");
        // delete the id indexed element of array 
        setItems((oldItems) => {
            return oldItems.filter((arrElem, index) => { return index !== id; });
        });
    };

    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1>ToDo List</h1>
                    <br />
                    <input type="text" placeholder="Add an Item"
                        value={inputList} onChange={itemEvents} />
                    <button onClick={listOfItems}> + </button>

                    <ol>
                        {/* <li> {inputList} </li> */}


                        {   // add itemval to map                                 
                            Items.map((itemval, index) => {   //calls the component ToDoLsits
                                return < ToDoLists
                                    key={index}
                                    id={index}
                                    text={itemval} // 3 prpos used
                                    onSelect={deleteItems}

                                     />;
                                    
                            })
                        }

                    </ol>
                </div>
            </div>
        </>
    );
};

export default App;