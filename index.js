const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
app.use(express.json())
app.use(cors())


//routes
const allUsersRoutes = require("./routes/allUserRoutes")
const courseRoutes = require("./routes/courseRoutes")
const quizRoutes = require('./routes/quizRoutes')
// const imageRoutes = require('./routes/images')
//instructors
// app.use('/img',allUsersRoutes)
app.use('/a',allUsersRoutes)
app.use('/',courseRoutes)
app.use('/',quizRoutes)

app.listen(9999)
