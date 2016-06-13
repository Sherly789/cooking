var tablespoonConversion = function(teaspoon) {
 return "You have " + teaspoon / 3 + " tablespoons.";
}
var tbconversion = tablespoonConversion(prompt("How many teaspoons do you have?"));
alert(tbconversion);

var kgconversion=function(g){
  return g*Math.pow(10,-3);
}
var kgconvert=kgconversion(prompt("how many g do you have"))
alert (kgconvert);
