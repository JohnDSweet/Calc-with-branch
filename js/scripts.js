//Business (Back end) Logic
//Adding
var add = function(number1, number2) {
return number1 + number2;
};


//Subtracting
var subtract = function(number1, number2) {
return number1 - number2;
};


//Multiplying
var multiply = function(number1, number2) {
return number1 * number2;
};


//Dividing
var divide = function(number1, number2) {
return number1 / number2;
};

// Front-end Logic
$(document).ready(function() {
  $("form#calculator").submit(function(event) {
    var number1 = parseFloat($("#input1").val());
    var number2 = parseFloat($("#input2").val());
    var operator = $("input:radio[name=operator]:checked").val();
    var result;
    if (operator === "add") {
      result = add(number1, number2);
    } else if (operator === "subtract") {
      result = subtract(number1, number2);
    } else if (operator === "multiply") {
      result = multiply(number1, number2);
    } else if (operator === "divide") {
      result = divide(number1, number2);
    }
    $("#output").text(result);
    event.preventDefault();
  });
});
    //console.log(answer);
    //console.log(answer.toFixed(2));

  //   if(number1 & number2 !== 0) {
  //     $("#answer").text(answer.toFixed(2));
  //   } else {
  //     $("#answer").text(answer);
  //   }
  //   $("#result").show();
  //
  //   event.preventDefault();
  // });
  // //make a subtract .submit function HERE
  // $("#subtract").submit(function(event) {
  //   var number1 = parseFloat($("#sub1").val());
  //   var number2 = parseFloat($("#sub2").val());
  //   var answer = subtract(number1, number2);
  //   $("#answer").text(answer.toFixed(2));
  //   $("#result").show();
  //
  //   event.preventDefault();
  // });
  // // Multiply function
  // $("#multiply").submit(function(event) {
  //   var number1 = parseFloat($("#mult1").val());
  //   var number2 = parseFloat($("#mult2").val());
  //   var answer = multiply(number1, number2);
  //   $("#answer").text(answer.toFixed(2));
  //   $("#result").show();
  //
  //   event.preventDefault();
  // });
  // // Divide function
  // $("#divide").submit(function(event) {
  //   var number1 = parseFloat($("#div1").val());
  //   var number2 = parseFloat($("#div2").val());
  //   var answer = divide(number1, number2);
  //   $("#answer").text(answer.toFixed(2));
  //   $("#result").show();

//     event.preventDefault();
//   });
// });
  //Alert to print on page
  // alert(add(number1, number2));

// element.noDefault
