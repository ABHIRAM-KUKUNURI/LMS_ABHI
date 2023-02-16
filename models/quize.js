const db = require('./conn').db
const mongoose = require('./conn').mongoose


const quizSchema = new mongoose.Schema({
    Question: {
      type: String,
      required: true
    },
    Options:[{
      opt_A:{
          type:String
      },
      opt_B:{
          type:String
      },
      opt_C:{
          type:String
      },
      opt_D:{
          type:String
      }
    }],
    CorrectOption:{
      type:String
    }
  });
  
  const Quiz = mongoose.model('Quiz', quizSchema, 'Quiz');
module.exports = {Quiz}