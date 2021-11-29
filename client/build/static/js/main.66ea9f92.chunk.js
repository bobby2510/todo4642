(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{27:function(e,t,a){},29:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(22),o=a.n(n),l=a(3),r=a(4),i=a(2),d=(a(27),a(0));var j=function(e){var t=e.isLoggedIn;return e.setLogin,Object(d.jsx)("nav",{className:"navbar p-2  navbar-light bg-light",children:Object(d.jsxs)("div",{className:"container ",children:[Object(d.jsx)(r.b,{to:"/",className:"my-link",style:{color:"black"},children:Object(d.jsx)("h5",{children:"React Todo App"})}),Object(d.jsxs)("div",{className:" d-flex flex-wrap",children:[t?Object(d.jsxs)(s.a.Fragment,{children:[Object(d.jsx)(r.b,{to:"/doneTodos",className:"my-link",children:"Done Todos"}),Object(d.jsx)(r.b,{to:"/logout",className:"my-link",children:"Logout"})]}):Object(d.jsxs)(s.a.Fragment,{children:[Object(d.jsx)(r.b,{to:"/login",className:"my-link",children:"Login"}),Object(d.jsx)(r.b,{to:"/register",className:"my-link",children:"Register"})]}),Object(d.jsx)(r.b,{to:"/aboutUs",className:"my-link",children:"About us"}),Object(d.jsx)(r.b,{to:"/contactUS",className:"my-link",children:"Contact us"})]})]})})},b=a(10),m=(a(29),a(7)),h=a.n(m);var u=function(e){var t=Object(c.useState)(""),a=Object(l.a)(t,2),n=a[0],o=a[1];return Object(d.jsxs)(s.a.Fragment,{children:[Object(d.jsxs)("form",{onSubmit:function(t){t.preventDefault();var a=localStorage.getItem("userId");h.a.post("api/todo/add/".concat(a),{title:n}).then((function(t){if(200===t.status){var a=[].concat(Object(b.a)(e.todoList),[t.data.data]);e.setTodoList(a),o("")}}))},children:[Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{style:{float:"left"},for:"title",children:"Todo"}),Object(d.jsx)("input",{type:"text",className:"form-control",id:"title",onChange:function(e){o(e.target.value)},placeholder:"Write Todo",value:n})]}),Object(d.jsx)("input",{type:"submit",class:"btn btn-primary mt-2",value:"Add Todo"})]}),Object(d.jsx)("hr",{})]})};var O=function(e){return Object(d.jsx)(s.a.Fragment,{children:Object(d.jsx)("div",{className:"card m-2",children:Object(d.jsxs)("div",{class:"card-body",children:[Object(d.jsx)("h5",{className:"card-title",children:e.todo.title}),Object(d.jsx)("button",{className:"btn btn-danger my-btn",onClick:function(){return t=e.todo._id,void h.a.delete("/api/todo/delete/".concat(t)).then((function(a){if(200===a.status){var c=Object(b.a)(e.todoList);c=e.todoList.filter((function(e){return e._id!==t})),e.setTodoList(c)}}));var t},children:"Delete"}),Object(d.jsx)("button",{className:"btn btn-success",onClick:function(){return t=e.todo._id,void h.a.put("/api/todo/update/".concat(t)).then((function(a){if(200===a.status){var c=Object(b.a)(e.todoList);console.log(c),c=c.map((function(e){return e._id===t&&(e.isDone=!0),e})),console.log(c),c=c.filter((function(e){return!1===e.isDone})),e.setTodoList(c),console.log(e.todoList)}}));var t},children:"Done"})]})})})};var x=function(e){return Object(d.jsx)(s.a.Fragment,{children:Object(d.jsx)("div",{children:e.todoList.map((function(t){return Object(d.jsx)(O,{todoList:e.todoList,setTodoList:e.setTodoList,todo:t},t._id)}))})})};var g=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),a=t[0],n=t[1];return Object(c.useEffect)((function(){var e=localStorage.getItem("userId");console.log(e),h.a.get("/api/todo/current/".concat(e)).then((function(e){console.log(e),n(e.data.data)}))}),[]),Object(d.jsx)(s.a.Fragment,{children:Object(d.jsxs)("div",{class:"card",children:[Object(d.jsx)("div",{class:"card-header",children:"React Todo App"}),Object(d.jsxs)("div",{className:"container",style:{maxWidth:600},children:[Object(d.jsx)("h5",{class:"mt-4",children:"React Todo List!"}),Object(d.jsx)(u,{todoList:a,setTodoList:n}),Object(d.jsx)(x,{todoList:a,setTodoList:n})]})]})})};var p=function(){return Object(d.jsx)(s.a.Fragment,{children:Object(d.jsxs)("div",{class:"card",children:[Object(d.jsx)("div",{class:"card-header",children:"React Todo App"}),Object(d.jsxs)("div",{class:"card-body",children:[Object(d.jsx)("h5",{class:"card-title",children:"Welcome To Todo App"}),Object(d.jsx)("img",{src:"/todo.jpg",style:{width:300,height:300}}),Object(d.jsx)("p",{class:"card-text",children:"To use this Application you have to create your account if you are new user or if you are existing user you can easitly  login and start writing yours tasks and get it gone as soon as possilble"})]})]})})};var v=function(e){var t=Object(c.useState)(""),a=Object(l.a)(t,2),n=a[0],o=a[1],r=Object(c.useState)(""),j=Object(l.a)(r,2),b=j[0],m=j[1],u=Object(c.useState)(""),O=Object(l.a)(u,2),x=O[0],g=O[1],p=Object(c.useState)(""),v=Object(l.a)(p,2),f=v[0],y=v[1],N=Object(c.useState)(""),I=Object(l.a)(N,2),S=I[0],L=I[1],T=Object(c.useState)(""),w=Object(l.a)(T,2),F=w[0],k=w[1],A=Object(i.h)(),R=function(e){switch(e.target.name){case"name":o(e.target.value);break;case"email":m(e.target.value);break;case"password":g(e.target.value)}};return Object(d.jsx)(s.a.Fragment,{children:Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("div",{className:"card-header",children:"React Todo App"}),Object(d.jsxs)("div",{className:"container",style:{maxWidth:600},children:[Object(d.jsx)("h5",{className:"mt-4",children:"Register Here"}),Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),y(""),L(""),k("");var t=""!==n&&n.length>4,a=""!==b&&b.length>4,c=""!==x&&x.length>4;if(!(t&&a&&c))return t||y("Invalid User Name"),a||L("Invalid Email Id"),void(c||k("Invalid Password"));h.a.post("/api/auth/register",{name:n,email:b,password:x}).then((function(e){console.log(e.data.data.message)})),A("/login")},children:[Object(d.jsxs)("div",{className:"form-group mt-2 mb-2",children:[Object(d.jsx)("label",{htmlFor:"name",style:{float:"left"},children:"User Name"}),Object(d.jsx)("input",{type:"text",name:"name",id:"name",onChange:R,placeholder:"Enter name",value:n,className:"form-control"}),""!==f?Object(d.jsx)("span",{style:{color:"red"},children:f}):null]}),Object(d.jsxs)("div",{className:"form-group mt-2 mb-2",children:[Object(d.jsx)("label",{htmlFor:"email",style:{float:"left"},children:"Email"}),Object(d.jsx)("input",{type:"email",name:"email",id:"email",onChange:R,placeholder:"Enter email",value:b,className:"form-control"}),""!==S?Object(d.jsx)("span",{style:{color:"red"},children:S}):null]}),Object(d.jsxs)("div",{className:"form-group mt-2 mb-2",children:[Object(d.jsx)("label",{htmlFor:"password",style:{float:"left"},children:"Password"}),Object(d.jsx)("input",{type:"password",name:"password",onChange:R,id:"password",placeholder:"Enter password",value:x,className:"form-control"}),""!==F?Object(d.jsx)("span",{style:{color:"red"},children:F}):null]}),Object(d.jsx)("input",{type:"submit",className:"btn btn-primary m-2 mb-4",value:"Register"})]})]})]})})};var f=function(e){var t=Object(c.useState)(""),a=Object(l.a)(t,2),n=a[0],o=a[1],r=Object(c.useState)(""),j=Object(l.a)(r,2),b=j[0],m=j[1],u=Object(c.useState)(""),O=Object(l.a)(u,2),x=O[0],g=O[1],p=Object(c.useState)(""),v=Object(l.a)(p,2),f=v[0],y=v[1],N=Object(c.useState)(""),I=Object(l.a)(N,2),S=I[0],L=I[1],T=Object(i.h)(),w=function(e){switch(e.target.name){case"email":o(e.target.value);break;case"password":m(e.target.value)}};return Object(d.jsx)(s.a.Fragment,{children:Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("div",{className:"card-header",children:"React Todo App"}),Object(d.jsxs)("div",{className:"container",style:{maxWidth:600},children:[Object(d.jsx)("h5",{className:"mt-4",children:"Login Here"}),""!==S?Object(d.jsx)("span",{style:{color:"red"},children:S}):null,Object(d.jsxs)("form",{onSubmit:function(t){t.preventDefault(),g(""),y(""),L("");var a=""!==n&&n.length>4,c=""!==b&&b.length>4;if(!a||!c)return a||g("Invalid Email Id"),void(c||y("Invalid Password"));console.log(n,b),h.a.post("/api/auth/login",{email:n,password:b}).then((function(t){200===t.status?(localStorage.setItem("loggedIn","yes"),localStorage.setItem("userName",t.data.data.name),localStorage.setItem("userId",t.data.data.id),e.setLogin(!0),T("/")):(console.log(t),console.log(t.data.message),L(t.data.data.message))}))},children:[Object(d.jsxs)("div",{className:"form-group m-2",children:[Object(d.jsx)("label",{htmlFor:"email",style:{float:"left"},children:"Email"}),Object(d.jsx)("input",{type:"email",className:"form-control",onChange:w,value:n,id:"email",name:"email",placeholder:"Enter email"}),""!==x?Object(d.jsx)("span",{style:{color:"red"},children:x}):null]}),Object(d.jsxs)("div",{className:"form-group m-2",children:[Object(d.jsx)("label",{htmlFor:"password",style:{float:"left"},children:"Password"}),Object(d.jsx)("input",{type:"password",className:"form-control",onChange:w,value:b,id:"password",name:"password",placeholder:"Enter password"}),""!==f?Object(d.jsx)("span",{style:{color:"red"},children:f}):null]}),Object(d.jsx)("input",{className:"btn btn-primary m-2 mb-4",type:"submit"})]})]})]})})},y=function(){return Object(d.jsx)(s.a.Fragment,{children:Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("div",{className:"card-header",children:"React Todo App"}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h5",{className:"mt-4",children:"About Us"}),Object(d.jsx)("div",{className:"card-body",children:Object(d.jsx)("p",{children:"This is the About us page of React Todo App, where it contains all the information about this App and developer of this application!"})})]})]})})},N=function(){return Object(d.jsx)(s.a.Fragment,{children:Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("div",{className:"card-header",children:"React Todo App"}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h5",{className:"mt-4",children:"Contact Us"}),Object(d.jsx)("div",{className:"card-body",children:Object(d.jsx)("p",{children:"This is the Contact Us Page of this application where it contans all the contact information of the developer of this application!"})})]})]})})},I=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),a=t[0],n=t[1];return Object(c.useEffect)((function(){var e=localStorage.getItem("userId");h.a.get("/api/todo/done/".concat(e)).then((function(e){200===e.status&&n(e.data.data)}))}),[]),Object(d.jsx)(s.a.Fragment,{children:Object(d.jsxs)("div",{className:"card ",children:[Object(d.jsx)("div",{className:"card-header",children:"React Todo App"}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h5",{className:"mt-4 mb-4",children:"React Done Todos"}),a.map((function(e){return Object(d.jsx)("h6",{children:e.title},e.id)}))]})]})})},S=function(e){return localStorage.setItem("loggedIn","no"),localStorage.removeItem("userId"),localStorage.removeItem("userName"),e.setLogin(!1),Object(d.jsx)(s.a.Fragment,{children:Object(d.jsx)(i.a,{to:"/"})})};var L=function(){var e=localStorage.getItem("loggedIn"),t=null!==e&&"yes"===e,a=Object(i.g)();return Object(d.jsx)(s.a.Fragment,{children:t?Object(d.jsx)(i.b,{}):Object(d.jsx)(i.a,{to:"/login",state:{from:a}})})},T=function(){var e=localStorage.getItem("loggedIn"),t=null!==e&&"yes"===e;return Object(d.jsx)(s.a.Fragment,{children:t?Object(d.jsx)(i.b,{}):Object(d.jsx)(p,{})})};var w=function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),a=t[0],n=t[1];return Object(c.useEffect)((function(){var e=localStorage.getItem("loggedIn");n(null!==e&&"yes"===e)}),[]),Object(d.jsx)(s.a.Fragment,{children:Object(d.jsxs)(r.a,{children:[Object(d.jsx)(j,{isLoggedIn:a,setLogin:n}),Object(d.jsx)("div",{className:"container mt-4 text-center",style:{maxWidth:900},children:Object(d.jsxs)(i.e,{children:[Object(d.jsx)(i.c,{exact:!0,path:"/",element:Object(d.jsx)(T,{}),children:Object(d.jsx)(i.c,{path:"/",element:Object(d.jsx)(g,{})})}),Object(d.jsx)(i.c,{path:"/login",element:Object(d.jsx)(f,{isLoggedIn:a,setLogin:n})}),Object(d.jsx)(i.c,{path:"/register",element:Object(d.jsx)(v,{})}),Object(d.jsx)(i.c,{path:"/aboutUs",element:Object(d.jsx)(y,{})}),Object(d.jsx)(i.c,{path:"/contactUs",element:Object(d.jsx)(N,{})}),Object(d.jsx)(i.c,{path:"/logout",element:Object(d.jsx)(S,{isLoggedIn:a,setLogin:n})}),Object(d.jsx)(i.c,{path:"/doneTodos",element:Object(d.jsx)(L,{}),children:Object(d.jsx)(i.c,{path:"/doneTodos",element:Object(d.jsx)(I,{})})})]})})]})})};a(48);o.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(w,{})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.66ea9f92.chunk.js.map