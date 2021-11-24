import React, {useState} from 'react';
import ToDoLists from './TodoLists';

const App = () => {

    const  [inputList, setInputList] = useState(""); // hooks to add onChange of input text
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

    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br/>
                    <h1>ToDo List</h1>
                    <br/>
                    <input type= "text" placeholder = "Add an Item" 
                    value={inputList}    onChange={itemEvents}/> 
                    <button onClick={listOfItems}> + </button>

                    <ol>
                        {/* <li> {inputList} </li> */}
                        

                        {   // add itemval to map                                 
                            Items.map( (itemval) => {   //calls the component ToDoLsits
                                return < ToDoLists text = {itemval} />;
                            })
                        }
                    
                    </ol>
                </div>
            </div>
        </>
    );
};

export default App;