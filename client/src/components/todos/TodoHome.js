import React,{useState , useEffect} from "react"
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import axios from 'axios'
function TodoHome()
{
    const [todoList, setTodoList] = useState([])
    

    useEffect(()=>{
        let id = localStorage.getItem('userId')
        console.log(id)
        axios.get(`/api/todo/current/${id}`)
        .then(response=>{
            console.log(response)
            setTodoList(response.data.data)
        })
    },[])

    

    return (    
        <React.Fragment>
            <div class="card">
                <div class="card-header">
                    React Todo App
                </div>
                <div className="container" style={{maxWidth:600}} >
                    <h5 class="mt-4">React Todo List!</h5>
                    <TodoInput todoList = {todoList} setTodoList = {setTodoList} />  
                    <TodoList todoList = {todoList} setTodoList = {setTodoList} />
                </div>
            </div>
        </React.Fragment>
    );
}

export default TodoHome;