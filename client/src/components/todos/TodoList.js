import React from 'react'
import Todo from './Todo'

function TodoList(props)
{

    return (
        <React.Fragment>
            <div>
                {
                    props.todoList.map(todo =>
                        <Todo 
                            key = {todo._id}
                            todoList = {props.todoList} 
                            setTodoList= {props.setTodoList} 
                            todo={todo}  
                        /> )
                }
            </div>
        </React.Fragment>
    );
}
export default TodoList;