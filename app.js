/****************************************************
*                 if/else Statement                 *
****************************************************/
var blue = 43;
var red = 43;

if (blue == red){
  document.write("I love hotpockets");
} else {
  console.log("I love strawberries");
}

document.write("<br>");

/****************************************************
*                Nesting and Fridays!               *
****************************************************/
var firstName = "bucky";
var lastName = "roberts";

if(firstName == "bucky") {
  if(lastName == "roberts") {
    document.write("welcome bucky roberts!!!");
  } else {
    document.write("welcome bucy someone!!!");
  }
}

document.write("<br>");

/****************************************************
*                Complex Conditions                *
****************************************************/
var first = "bucky";
var last = "roberts";

if ((first==="bucky") && (last=="roberts")) {
  document.write("Hey good job buddy");
}
