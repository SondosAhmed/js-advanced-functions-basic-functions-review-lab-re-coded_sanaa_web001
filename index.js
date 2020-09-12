// Your code here
function saturdayFun(name="roller-skate"){
  return "This Saturday, I want to "+name+"!";
}

let mondayWork= function (arg="go to the office"){
  return "This Monday, I will "+arg+".";
}

function wrapAdjective(msg="*") {
  return function(name="special") {
    return "You are "+`${name}`+msg+"*i";
  }
}

function wrapAdjective(msg = "*") { // 2
    return function(name = "special") { // 3
        return "You are " +
            ` ${msg}${name}`; // 4
    }
    calculator ={
      function add {
        return 1+3;
      }
}
}

wrapAdjective()();
