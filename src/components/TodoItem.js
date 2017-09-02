import React from 'react'

//Stateless Components

export const TodoItem = (props) => {
    return (
        <div>
            <li>
                <input type="checkBox" defaultChecked={props.iscomplete}/>
                {props.name}
            </li>
        </div>
    )
}


