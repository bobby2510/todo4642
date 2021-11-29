import React from "react"


function Welcome()
{
    return (
        <React.Fragment>
        <div class="card">
            <div class="card-header">
                React Todo App
            </div>
            <div class="card-body">
                <h5 class="card-title">Welcome To Todo App</h5>
                <img src="/todo.jpg" style={{width:300,height:300}} />
                <p class="card-text">
                    To use this Application you have to create your account if you are new user
                    or if you are existing user you can easitly  login and start writing yours tasks
                    and get it gone as soon as possilble
                </p>
            </div>
      </div>
        </React.Fragment>
    );
}

export default Welcome;