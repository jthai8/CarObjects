function getCred(userId, userPass){
  userId = prompt("Please enter your ID Name");
  userPass = prompt ("Please enter your password");
};

var goodLogIn = { valid: true };
var badLogIn = { valid: false, reason: "password must include a !, # or $"};
var exCheck = userPass.includes("!", 0);
var dolCheck = userPass.includes("$");
var hashCheck = userPass.includes("#");

function pointCheck(exCheck) {
  if(exCheck === true) {
    alert (goodLogIn.valid);
  } else {
    alert (badLogIn.reason);
  }
}

//pointCheck will not work in this function
function checkId(){
  getCred();
  pointCheck();
};

// function checkId(id, password){
//   getCred();
//   if (id != password) {
//     alert (goodLogIn.valid);
//   } else if (id === password) {
//     alert (badLogIn.reason);
//   } else {
//     alert(badLogIn.valid);
//   }
// }


// && id.length < 6 && (id.includes(!) || id.includes(#) || id.includes($))
// && password.length >= 6 && (password.includes("!")|| password.includes("#")||password.includes("$")

  function passwordCheck(password){
    if (id != password && password.length >= 6 && (password.includes(!) || password.includes(#) || password.includes($)))
  }

// function secretPassword(id, password){
//   return {
//     id:id,
//     password:password,
//     getData: function() { return this.id + " is your ID. " + this.password + " is your password."},
//     userCheck: function() { return "valid: true"}
//     checkFalse: function() { return "valid: false, reason: 'User ID cannot contain $'"}
//     }
//   }
// }
//
// var getLogIn = secretPassword("Bob", "asdkasd");
