const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
app.use(express.json())
app.use(cors())


//routes
const allUsersRoutes = require("./routes/allUserRoutes")
// const imageRoutes = require('./routes/images')
//instructors
// app.use('/img',allUsersRoutes)
app.use('/a',allUsersRoutes)


app.listen(9999)
