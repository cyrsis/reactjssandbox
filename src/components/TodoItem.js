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
//
// TodoItem.propTypes ={
//   name: React.PropTypes.string.isRequired,
//   iscomplete: React.PropTypes.bool,
//     id: React.PropTypes.number.isRequired
// }

