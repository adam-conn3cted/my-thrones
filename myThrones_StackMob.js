function createQuestion()
{
  StackMob.customcode('hello_world', {}, 'GET', {
  success: function(result) {
    alert('Success:' + result)
  },
  error: function(result) {
    alert('fail:' + result)
  }
})

  // var text = $("#createQuestionForm input[name=text]").val();
  // var correct_answer = $("#createQuestionForm input[name=correct_answer]").val();
  // var wrong_answer_1 = $("#createQuestionForm input[name=wrong_answer_1]").val();
  // var wrong_answer_2 = $("#createQuestionForm input[name=wrong_answer_2]").val();
  // var wrong_answer_3 = $("#createQuestionForm input[name=wrong_answer_3]").val();

  // var question = new Question({
  //   text : text,
  //   correct_answer : correct_answer,
  //   wrong_answers : [wrong_answer_1, wrong_answer_2, wrong_answer_3],
  //   correctly_answered : false,
  //   has_been_asked : false
  // });

  // question.create({
  //   async : false,
  //   success : function(model) {
  //     alert("Created new question successfully");
  //     console.log(model.toJSON());
  //   },
  //   error : function(model, response) {
  //     alert("Could not create question");
  //     console.log(response);
  //   }
  // });
}