const db = require('./conn').db
const mongoose = require('./conn').mongoose

const Courses = {
    Course_Name:{
        type:String,
        required:true
    },
    Course_Description: {
        type:String,
    },
    Course_Modules:
     [[]],
    Instrutor_email:{
        type:String
    },
    Course_Img:{
        type:String
    },
    category_name:{
        type:String
    },
    
    Students_Enrolled:{
        type:[String]
    }
}

let User = mongoose.model('ALL_USERS', user,'ALL_USERS')
module.exports = {User}