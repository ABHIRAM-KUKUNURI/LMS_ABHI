const express = require('express')
const routes = express.Router()

const userDetail = require('../controllers/allUsersControllers')
const upload = require('../middleware/upload')


routes.post('/',userDetail.addUser)
routes.get('/',userDetail.instructorInfo)
routes.post('/login',userDetail.authUser)
// routes.post('/store',ploads.single('file'),userDetail.addUser)
routes.post('/instructorUpdate',upload.single('file'),userDetail.studentToUserStep1)
routes.post('/acceptOrReject',userDetail.acceptInstructor)
routes.post('/status',userDetail.getinstructorInfo)
// routes.post('/reg',userDetail.upload)


module.exports = routes