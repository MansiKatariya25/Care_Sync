const express = require('express');
const connectDb = require('./Models/conn');
const User = require('./Models/User');
const app = express()
const cors = require('cors');
const AuthRoutes = require('./Routes/Auth')
app.use(express.json())
app.use(cors())
connectDb()

const checkdb = async() => {
    const user = User.find()
}
checkdb()

app.use('/auth',AuthRoutes)

app.listen(8800,()=>{
    console.log("Running...");
})