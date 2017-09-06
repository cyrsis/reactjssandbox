import React from 'react'
import { partial } from "../lib/utils";

//Stateless Components

export const TodoItem = (props) => {
    const handleToggle = partial(props.handleToggle,props.id)
    return (
        <div>
            <li>
                <input type="checkBox" onChange={handleToggle} checked={props.isComplete}/>
                {props.name}
            </li>
        </div>
    )
}
//
// TodoItem.propTypes ={
//   name: React.PropTypes.string.isRequired,
//   iscomplete: React.PropTypes.bool,
//     id: React.PropTypes.number.isRequired
// }

