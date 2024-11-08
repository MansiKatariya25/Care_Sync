const express = require('express');
const connectDb = require('./Models/conn');
const User = require('./Models/User');
const app = express()
const cors = require('cors');
require('dotenv').config()
const PORT = process.env.PORT
const AuthRoutes = require('./Routes/Auth')
const FamilyRoutes = require('./Routes/Family');
const jwtverify = require('./Models/JWT');
app.use(express.json())
app.use(cors())

connectDb()
app.use('/auth',AuthRoutes)
app.use('/family',FamilyRoutes)


app.listen(PORT,()=>{
    console.log("Running..."+PORT);
})