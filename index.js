require('dotenv').config()
const express = require('express')
const connectDb = require('./configure/db')


const Users = require('./router/user-router')
connectDb()

const app = express()
app.set('view engine','ejs')
app.use(express.json())

app.set('views', __dirname + '/view');

app.get("/",(req,res)=>{
    res.render('register')
})
app.use('/api/v1/Users',Users)

const port = process.env.port || 4000
app.listen(port,()=>{
    console.log(`server running on this port:${port}`)
})