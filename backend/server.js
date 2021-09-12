const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

const uri = process.env.LOCAL_URI
mongoose.connect(uri)
const connection = mongoose.connection
connection.once('open', () => {
    console.log('MongoDB connected successfully!')
})

const usersRouter = require('./routes/users')
const exercisesRouter = require('./routes/exercises')

app.use('/users', usersRouter)
app.use('/exercise', exercisesRouter)

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})