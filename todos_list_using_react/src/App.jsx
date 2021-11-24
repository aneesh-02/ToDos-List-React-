import React, {useState} from 'react';

const App = () => {

    const  [inputList, setInputList] = useState(""); // hooks to add onChange of input text
    const [Items, setItems] = useState([]); // hooks array to store items on button click 

    const itemEvents = (event) => {
        setInputList(event.target.value);
    };

    const listOfItems = (event) => {
        setItems((oldItems) => {
            return [...oldItems, inputList];
        });
    };

    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br/>
                    <h1>ToDo List</h1>
                    <br/>
                    <input type= "text" placeholder = "Add an Item" onChange={itemEvents}/>
                    <button onClick={listOfItems}> + </button>

                    <ol>
                        {/* <li> {inputList} </li> */}
                        
                        {
                            Items.map( (itemval) => {
                                return <li>{itemval}</li>
                            })
                        }
                    
                    </ol>
                </div>
            </div>
        </>
    );
};

export default App;