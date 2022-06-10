//Utility Logic//

//Business Logic//

function numberList(numberInput) {
  let numReturn = [];
  for (let i = 0; i <= numberInput; i +=1) {
    if (numberInput[i] === 1) {
      numberInput[i] = "Beep!"
    }
    numReturn.push(i);
  }
  
  return numReturn;
}


//UI Logic//