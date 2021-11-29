if(process.env.NODE_ENV  != 'production')
{
    require('dotenv').config()
}
const express = require('express')
const authRouter = require('./routes/auth')
const todoRouter = require('./routes/todo')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 4001




//connecting to the database 
const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=> console.log('connected to the Database'))

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/api/auth',authRouter)
app.use('/api/todo',todoRouter)

if(process.env.NODE_ENV == 'production')
{
	app.use(express.static("client/build"));
	const path = require('path');
	app.get('*',(res,req)=>{
		res.sendFile(path.resolve(__dirname,'client','build','index.html'));
	})
}

app.listen(port,()=>{
    console.log('server is up and running at port : '+port)
})