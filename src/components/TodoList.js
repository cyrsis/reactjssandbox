import React from 'react'
import PropTypes from 'prop-types';
import { TodoItem } from "./TodoItem";


//Stateless Components

export const TodoList = (props) =>  {
   return(
       <div>
           <div className="ToDo-list">
               <ul>
                   {props.todos.map(todos =>
                       <TodoItem handleToggle={props.handleToggle}key={todos.id}{...todos}/>)}

               </ul>
           </div>
       </div>
   )
}
TodoList.propTypes ={
  todos: PropTypes.array.isRequired
}

