const express = require('express')
const dotenv = require('dotenv') // holds config, variables
const connectDB = require('./config/db')

// LOAD CONFIG 
dotenv.config({path: './config/config.env' })

connectDB()

const app = express()

const PORT = process.env.PORT || 3000 // using process.env lets you use variables from that config file

app.listen(
    PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)