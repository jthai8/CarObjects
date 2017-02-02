var id = " ";
var password = " ";

function getCred(id, password){
  id = prompt("Please enter your ID Name");
  password = prompt ("Please enter your password");
}

var goodLogIn = { valid: true };
var badLogIn = { valid: false, reason: "user ID cannot contain equal password"};

function checkId(id, password){
  getCred();
  if (id === password) {
    alert (badLogIn.reason);
  } else {
    alert (goodLogIn.valid);
  }
}

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
