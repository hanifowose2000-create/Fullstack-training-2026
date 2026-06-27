// functions

// 1. name function


function greet(name) {
    console.log('welcome back,' + name + ' How are you?'); //concatenation -- string variable
    console.log('welcome back, ${name}! How are you?'); // mostly prefered
    console.log('welcome back, ${name}! How are you?'); // mostly prefered
}

// greet("Micheal J."); // function call
greet("adedeji");
// greet()
// greet(12)





function calculate_numbers (name, val, operator) {

    switch (operator) {          
        case "+":
          console.log('Hello {name}, your result is ${val + val}');
          break;

        case "-":
          console.log('Hello {name}, your result is ${val - val}');
          break;

        case "/":
          console.log('Hello {name}, your result is ${val / val}');
          break;

        case "*":
          console.log('Hello {name}, your result is ${val * val}');
          break;

        default:
          console.log('stopp calculation!!!')
          break;
        }
    }