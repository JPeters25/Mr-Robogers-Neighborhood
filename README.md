Describe: numberList() 

Test: "It should return an array of numbers from 0 to the user's inputted number"
Code: numberList(5);
Expected Output: [0, 1, 2, 3, 4, 5]

Test: "It should replace the number 1 with 'Beep!'
Code: numberList();
Expected Output [0, Beep!, 2, 3, 4, 5]

Describe: notNumber()

Test:"It should return not a number if something other that a number is entered"
Code:numberList(dog);
Expected Output [Not a Number!]

Describe noInput()

Test: "I should return please enter a number if nothing entered"
Code: noInput()
Expected Output: Please enter an number!