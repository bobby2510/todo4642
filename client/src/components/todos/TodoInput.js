import React,{useState} from 'react'
import './todo.css'
import axios from 'axios'

function TodoInput(props)
{
    const [title , setTitle] = useState('')
    const handleInput = e =>{
        setTitle(e.target.value)
    }
    const handleSubmit  = e =>{
        e.preventDefault()
        let id = localStorage.getItem('userId')
        axios.post(`api/todo/add/${id}`,{title:title})
        .then(response => {
            if(response.status===200)
            {
                let new_list = [...props.todoList,response.data.data]
                props.setTodoList(new_list)
                setTitle('')
            }
        })
       
    }
    return (
        <React.Fragment>
            <form onSubmit={handleSubmit} >
                <div className="form-group">
                    <label style={{float: 'left'}}  for="title">Todo</label>
                    <input type="text" className="form-control" id="title" onChange={handleInput}  placeholder="Write Todo" value={title} />
                </div>
                <input type="submit" class="btn btn-primary mt-2" value="Add Todo" />
            </form>
            <hr/>
        </React.Fragment>
    );
}

export default TodoInput;