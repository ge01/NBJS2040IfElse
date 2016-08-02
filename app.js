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
document.write("<br>");

/****************************************************
*                     Switch                        *
****************************************************/
var girl = "emily";

switch (girl) {
  case "natalie":
    document.write("you must like garden state");
    break;
  case "ashley":
    document.write("oo fan of twilight ey?");
    break;
  default:
    document.write("this is the default");
}
document.write("<br>");
/****************************************************
*                    for Loop                       *
****************************************************/
for(x=0; x<10; x+=3){
  document.write("I use a conon printer" + "<br>");
}
document.write("<br>");

/****************************************************
*                   while Loop                      *
****************************************************/
var x = 1;

while(x < 10) {
  document.write(x + " how do you like them apples" + "<br>")
  x++;
}
document.write("<br>");
/****************************************************
*                    do while                       *
****************************************************/
var x = 5;
do{
  document.write(x + " alo! <br>");
  x+=5;
}while(x<=20);
