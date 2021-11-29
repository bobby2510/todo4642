import React from 'react'
import axios from 'axios'

function Todo(props)
{
    const handleDelete = id =>{
        axios.delete(`/api/todo/delete/${id}`)
        .then(response =>{
            if(response.status===200)
            {
                let  new_list = [...props.todoList]
                new_list = props.todoList.filter(todo => todo._id !== id )
                props.setTodoList(new_list)
            }
        })
      
    }
    const handleDone = id =>{
        axios.put(`/api/todo/update/${id}`)
        .then(response =>{
            if(response.status===200)
            {
                let new_list = [...props.todoList]
                console.log(new_list)
                new_list = new_list.map( todo =>{
                    if(todo._id === id)
                        todo.isDone = true 
                    return todo
                })
                console.log(new_list)
                new_list = new_list.filter(todo => todo.isDone === false )
                props.setTodoList(new_list)
                console.log(props.todoList)
            }
        })
     
    }
    return (
        <React.Fragment>
            <div className="card m-2">
                <div class="card-body">
                    <h5 className="card-title">{props.todo.title}</h5>
                    <button className="btn btn-danger my-btn" onClick={()=> handleDelete(props.todo._id)}>Delete</button>
                    <button className="btn btn-success" onClick={()=> handleDone(props.todo._id)} >Done</button>
                </div>
          </div>
        </React.Fragment>
    );
}
export default Todo;