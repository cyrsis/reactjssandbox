import React from 'react'
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
  todos: React.PropTypes.array.isRequired
}

