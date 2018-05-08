//Looping a triangle

for (var pound = "#"; pound.length <= 7; pound += "#") {
    console.log(pound);
}

/* 
Displays:
#
##
###
####
#####
######
####### 
*/


//FizzBuzz

for (var number = "1"; number <= 100; number++) {
    var result = ""
    if (number % 3 == 0) result += "Fizz";
    if (number % 5 == 0) result += "Buzz";
    console.log(result || number);
}

/* 
Displays:
Numbers 1-100 with the exception of numbers divisible by 3, which print "Fizz" instead of the number, and numbers divisible by 5 and not 3, which print "Buzz" instead. Numbers divisible by 3 and 5 display as "FizzBuzz"
*/


//Chessboard

var grid = 8;
var board = "";

for (var y = 0; y < grid; y++) {
  for (var x = 0; x < grid; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
	} else {
      board += "#";
    }
  }
  board += "\n";
}
console.log(board);

/* 
Displays:
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #
*/