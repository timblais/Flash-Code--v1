const express = require('express')
const app = express()
const mongoose = require('mongoose')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const flash = require('express-flash')
const connectDB = require('./config/database')

//Route Variables

// .ENV setup
require('dotenv').config({path: './config/.env'})


//Connect To Database
connectDB()


app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Sessions
app.use(
    session({
      secret: 'bigHair',
      resave: false,
      saveUninitialized: false,
      store: MongoStore.create({ mongoUrl: process.env.DB_STRING }),
    })
  )

app.use(flash())

// Routes
// app.use('/api', apiRoutes)

app.listen(process.env.PORT, ()=>{
    console.log('Server is running, you better catch it!')
})   