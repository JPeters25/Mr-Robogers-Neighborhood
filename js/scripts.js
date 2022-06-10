//Utility Logic//

//Business Logic//

function numberList(numberInput) {
  let numReturn = [];
  for (let i = 0; i <= numberInput; i +=1) {
    numReturn.push(i);
  }
  return numReturn;

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
