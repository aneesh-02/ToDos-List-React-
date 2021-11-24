import React from 'react';

const ToDoLists = (props) => { // using props text = itemval and text gets added to array



    return (
        <>
            <div className="todo_style">
                <span className="fa fa-times"
                    onClick={() => {
                        props.onSelect(props.id);
                    }}>x</span>
                <li>{props.text}</li>
            </div>
        </>
    );
}

export default ToDoLists;