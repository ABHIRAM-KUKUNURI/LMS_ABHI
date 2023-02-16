// const { format } = require("path");
btns = document.getElementById("submits");
// btns.addEventListener("click", function(){
// var no_module = document.getElementById('numberOfModules').value
// console.log(no_module)
// })
// localStorage.setItem('links', JSON.stringify([]));
const storedBlogs = JSON.parse(localStorage.getItem('links'));
console.log(storedBlogs)

btns.addEventListener("click", function(){
document.querySelector("#quiz-form").innerHTML = `<div class="form-group">
<label for="quizquestion">ADD Course Module</label>
<input type="text" class="form-control" id="courseModules" name="courseModules" placeholder="Add Question" required>
</div>
<div class="form-group">
<label for="quizquestion">Add Question</label>
<input type="text" class="form-control" id="quizquestion" name="quizquestion" aria-describedby="emailHelp" placeholder="Add Question" required>
</div>
<div class="form-group">
<label for="quizoption1">Option 1</label>
<input type="text" class="form-control" id="quizoption1" name="quizoption1" placeholder="Option 1" required>
</div>
<div class="form-group">
<label for="quizoption2">Option 2</label>
<input type="text" class="form-control" id="quizoption2" name="quizoption2" placeholder="Option 2" required>
</div>
<div class="form-group">
<label for="quizoption3">Option 3</label>
<input type="text" class="form-control" id="quizoption3" name="quizoption3" placeholder="Option 3" required>
</div>
<div class="form-group">
<label for="quizoption4">Option 4</label>
<input type="text" class="form-control" id="quizoption4" name="quizoption4" placeholder="Option 4" required>
</div>
<div class="col-2">
<div class="form-group">
<label for="correctOption">Correct Option</label>
<select class="form-select" id="correctOption" name="correctOption">
  <option selected>Correct Option</option>
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
  <option value="option3">Option 3</option>
  <option value="option4">Option 4</option>
</select>
</div>
</div>
<button  class="btn btn-primary">Submit</button>`
})

btn2 = document.getElementById('next');
btn2.addEventListener("click", function(){
    const data = {
        courseModules: $('#courseModules').val(),
        quizquestion: $('#quizquestion').val(),
        quizoption1: $('#quizoption1').val(),
        quizoption2: $('#quizoption2').val(),
        quizoption3: $('#quizoption3').val(),
        quizoption4: $('#quizoption4').val(),
        correctOption: $('#correctOption').val(),
        };
    var store = JSON.parse(localStorage.getItem('links'));
    store.push(data);
    localStorage.setItem('links', JSON.stringify(store));
    })

function gen(){
    
    store=[]
    const data = {
    courseModules: $('#courseModules').val(),
    quizquestion: $('#quizquestion').val(),
    quizoption1: $('#quizoption1').val(),
    quizoption2: $('#quizoption2').val(),
    quizoption3: $('#quizoption3').val(),
    quizoption4: $('#quizoption4').val(),
    correctOption: $('#correctOption').val(),
    };
    store.append(data)
    console.log(store)
    $('#courseModules').val("")
    $('#quizquestion').val("")
    $('#quizoption1').val("")
    $('#quizoption2').val("")
    $('#quizoption3').val("")
    $('#quizoption4').val("")
    $('#correctOption').val("")
    // form.reset()

//     document.querySelector('#adding').innerHTML+=`<form id="quiz-form" method="POST">
//     <div class="form-group">
//       <label for="quizquestion">ADD Course Module</label>
//       <input type="text" class="form-control" id="courseModules" name="courseModules" placeholder="Add Question">
//     </div>
//     <div class="form-group">
//       <label for="quizquestion">Add Question</label>
//       <input type="text" class="form-control" id="quizquestion" name="quizquestion" aria-describedby="emailHelp" placeholder="Add Question">
//     </div>
//     <div class="form-group">
//       <label for="quizoption1">Option 1</label>
//       <input type="text" class="form-control" id="quizoption1" name="quizoption1" placeholder="Option 1">
//     </div>
//     <div class="form-group">
//       <label for="quizoption2">Option 2</label>
//       <input type="text" class="form-control" id="quizoption2" name="quizoption2" placeholder="Option 2">
//     </div>
//     <div class="form-group">
//       <label for="quizoption3">Option 3</label>
//       <input type="text" class="form-control" id="quizoption3" name="quizoption3" placeholder="Option 3">
//     </div>
//     <div class="form-group">
//       <label for="quizoption4">Option 4</label>
//       <input type="text" class="form-control" id="quizoption4" name="quizoption4" placeholder="Option 4">
//     </div>
//     <div class="col-2">
//     <div class="form-group">
//       <label for="correctOption">Correct Option</label>
//       <select class="form-select" id="correctOption" name="correctOption">
//         <option selected>Correct Option</option>
//         <option value="option1">Option 1</option>
//         <option value="option2">Option 2</option>
//         <option value="option3">Option 3</option>
//         <option value="option4">Option 4</option>
//       </select>
//     </div>
//   </div>
//     <button type="submit" class="btn btn-primary">Submit</button>
//   </form>`


           
}