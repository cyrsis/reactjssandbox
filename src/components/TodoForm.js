import React from 'react';

export const TodoForm = (props) => (
    <form>
        <input type="text" onChange={props.HandleInputChange} value={props.currentTodo}/>
    </form>)



