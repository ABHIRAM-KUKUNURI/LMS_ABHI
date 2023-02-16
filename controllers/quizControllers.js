const quizCTRl = require('../models/quize')
  

function addQuiz(req, res){
    // courseModule = []
    console.log(req.body)

    o1=req.body.Options[0].opt_A
    o2=req.body.Options[0].opt_B
    o3=req.body.Options[0].opt_C
    o4=req.body.Options[0].opt_D
    news = [{opt_A:o1,
        opt_B:o2,
        opt_C:o3,
        opt_D:o4,}]
    let addQuizData = quizCTRl.Quiz({
        Question:req.body.Question,
        Options:news,
        CorrectOption:req.body.CorrectOption
        // Student_Enrolled: req.body.Students_Enrolled
    })
    

    console.log(addQuizData)   
    addQuizData.save((err,result)=>{
        if(err){
            console.log("5000")
            res.send(err)
        }else{
            console.log("1000")
            res.send("Full Course added")
        }
    })
}

module.exports = {addQuiz}
