function createQuestion()
{
  var text = $("#createQuestionForm input[name=text]").val();
  var correct_answer = $("#createQuestionForm input[name=correct_answer]").val();
  var wrong_answer_1 = $("#createQuestionForm input[name=wrong_answer_1]").val();
  var wrong_answer_2 = $("#createQuestionForm input[name=wrong_answer_2]").val();
  var wrong_answer_3 = $("#createQuestionForm input[name=wrong_answer_3]").val();

  var question = new Question({
    text : text,
    correct_answer : correct_answer,
    wrong_answers : [wrong_answer_1, wrong_answer_2, wrong_answer_3],
    weight : parseInt(weight),
    correctly_answered : false,
    has_been_asked : false
  });

  question.create({
    async : false,
    success : function(model) {
      alert("Created new question successfully");
      console.log(model.toJSON());
    },
    error : function(model, response) {
      alert("Could not create question");
      console.log(response);
    }
  });
}



function createUser()
{
  var username = $("#createUserForm input[name=username]").val();
  var password = $("#createUserForm input[name=password]").val();

  
  var user = new User({
   
	user_level: "eb1f7ecc3400484a93b9dd027cb21857",
	username: username,
	points: 0,
	password1: password,
	password: password
  });

  user.create({
    async : false,
    success : function(model) {
      alert("Created new user successfully");
      console.log(model.toJSON());
    },
    error : function(model, response) {
      alert("Could not create user");
      console.log(response);
    }
  });
}
