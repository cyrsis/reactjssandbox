import React from 'react';

export const TodoForm = (props) => (
    <form onSubmit={props.HandleSubmit}>
        <input type="text" onChange={props.HandleInputChange} value={props.currentTodo}/>
    </form>
)

TodoForm.propTypes = {
    currentTodo: React.PropTypes.string.isRequired,
    HandleInputChange: React.PropTypes.func.isRequired,
    HandleSubmit: React.PropTypes.func.isRequired
}


