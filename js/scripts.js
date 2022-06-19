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
  // console.log(typeof numberInput)
  for (let i=0; i <= parseInt(numberInput); i +=1) {
    numReturn.push(i);
    if (numReturn[i].toString().includes(3)) {
      numReturn[i] = "Wont you be my neighbor"
    } 
    else if (numReturn[i].toString().includes(2)) {
        numReturn[i] = "Boop"
      } else if (numReturn[i].toString().includes(1)) {
        numReturn[i] = "Beep"
      }
  }
  return numReturn
}

//UI Logic//
$(document).ready(function() {
  $("form#userInput").submit(function(event){
    event.preventDefault();
    const numInput = $("#numberInput").val();
    const numberReturn = numberList(numInput);
    $("#output").html(numberReturn + "");
  })
});
