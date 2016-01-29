


/*
var user;
function LoadPage(){//..........loads data while page is starting
  $.get('/searching', function(data) {
    $('#results').html(function(){
      var d=" ";
      for(var i=0; i<data.length; i++){
        //alert(data.length);
        d=d+ " <p> " + data[i].email + "  " + data[i].name + "</p>";
      }
      return d;
    });
  });
}
//////..............................login
function check(form)/*function to check userid & password
{
  var parameters = { username: form.username.value,
                     password: form.password.value
                    };
  $.post('/login',parameters, function(logged) {
      //(" you have logged in logged");
      if(logged===true){
        user={ username: form.username.value,
               password: form.password.value
              };
        redirect();
      }
      else{
        alert("invalid username or password");
      }
    //alert( "success" );
  });
}
///////.........................redirecting page
function redirect(){
  //$.get('/profile', function(data) {
    //alert("sending request");
  //});
  window.location.href = '/'+user.username;
}
///////.........................sign up
function register(form){
  var valid=true;
  if(form.name.value.length===0){
    valid=false;
    alert("please enter your name");
  }
  if(form.email.value.length===0 && valid===true){
    valid=false;
    alert("please enter your email");
  }
  if(form.password.value.length<3 && valid===true){//....password should be more than 3 characters
    valid=false;
    alert("please enter valid password");
  }
  var parameters={ email: form.email.value,
                   name: form.name.value,
                   password: form.password.value,
                   gameplay: "begins"
                  }
  if(valid===true){
    $.post('/signup',parameters, function(logged) {
      LoadPage();
      location.reload();//....reloading the page
    });
  }
}


*/

 /*the following code checkes whether the entered userid and password are matching*/
 //if(form.username.value == "1" || form.password.value == "mypswrd")
  //{
    //alert("sucess");
    //window.open('target.html')/*opens the target page while Id & password matches*/
  //}
 //else
 //{
   //alert("Error Password or Username")/*displays error message*/
  //}



/*
$(function(){//........loads data when enter is pressed and reloads the data
 $('#search').on('keyup', function(e){
   if(e.keyCode === 13) {
     var parameters = { search: $(this).val() };
          alert(parameters);
       $.get( '/searching',parameters, function(data) {
       $('#results').html(function(){
         var d=" ";
         for(var i=0; i<data.length; i++){
           d=d+ " <p> " + data[0].NAME + "  " + data[0].USERNAME + "</p>";
         }
         return d;
       }
       );
     });
    };
 });
});
*/
/////.....posting to the server








/*
$(function(){//........loads data when enter is pressed and reloads the data
 $('#search').on('keyup', function(e){
   alert("asdf");
   if(e.keyCode === 13) {

    };
 });
});
*/
