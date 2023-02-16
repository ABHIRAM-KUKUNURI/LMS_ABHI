const express = require('express')
const routes = express.Router()

const quizRoute = require('../controllers/quizControllers')

routes.post('/',quizRoute.addQuiz)

module.exports = routes