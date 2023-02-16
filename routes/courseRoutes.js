const express = require('express')
const routes = express.Router()

const courseRoute = require('../controllers/courseControllers')

routes.post('/c',courseRoute.addCourse)

module.exports = routes