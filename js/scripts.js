//Utility Logic//
function noInput(numberInput) {
  return ((numberInput.length===0));
}

function notNumber(numberInput) {
  if (isNaN(numberInput)) {
    return 'Not a Number!';
  }
}

//Business Logic//

function numberList(numberInput) {
  let numReturn = []
  if (noInput(numberInput)) {
    return "Please enter a number!";
  }
  if (notNumber(numberInput)) {
    return "Not a Number!";
  }
  for (let i = 0; i <= numberInput; i +=1) {
    numReturn.push(i);
  }
  return numReturn
  }

//UI Logic//
$(document).ready(function() {
  $("form#userInput").submit(function(event){
    event.preventDefault();
    const numInput = $("#numberInput").val();
    const numReturn = numberList(numInput);
    $("#output").html(numReturn + "");
  })
});
