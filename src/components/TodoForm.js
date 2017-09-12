import React from 'react';
import PropTypes from 'prop-types';

export const TodoForm = (props) => (
    <form onSubmit={props.HandleSubmit}>
        <input type="text" onChange={props.HandleInputChange} value={props.currentTodo}/>
    </form>
)

TodoForm.propTypes = {
    currentTodo: PropTypes.string.isRequired,
    HandleInputChange: PropTypes.func.isRequired,
    HandleSubmit: PropTypes.func.isRequired
}


