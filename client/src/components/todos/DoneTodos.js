import React,{useState,useEffect} from "react"
import axios from 'axios'

const DoneTodos = ()=>{
    const [todoList , setTodoList] = useState([])

    //calling the api to get the data 
    useEffect(()=>{
        let id = localStorage.getItem('userId')
        axios.get(`/api/todo/done/${id}`)
        .then(response=>{
            if(response.status===200)
                setTodoList(response.data.data)
        })
    },[])

    return (
        <React.Fragment>
        <div className="card ">
            <div className="card-header">
                React Todo App
            </div>
            <div>
                <h5 className="mt-4 mb-4">React Done Todos</h5>
                {todoList.map((todo)=>{
                    return <h6 key={todo.id}>{todo.title}</h6>
                })}
            </div>
        </div>
        </React.Fragment>
    );
}

export default DoneTodos;