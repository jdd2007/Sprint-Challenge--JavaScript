// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/

function consume(p1, p2, cb) {
  return cb(p1,p2);
};

function add(x,y) {
  return (x+y);
};

function multiply(x,y) {
  return (x*y);
};

function greeting (x,y) {
  return `Hello ${x} ${y}, nice to meet you!`;
};


/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/


/* Step 3: Check your work by un-commenting the following calls to consume(): */

console.log('Below should be: 4, 160 and the sentence "Hello Marry Poppins, nice to meet you!"')
console.log(consume(2,2,add)); // 4
console.log(consume(10,16,multiply)); // 160
console.log(consume("Mary","Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: Scope is really important in JS, meaning when and where variables may be accessed. If a variable is declared outside of any function, it has global scope and can be accessed anywhere. When a variable is declared inside a function it has local scope, so it can't be read by outside code. In our example, 'nestedfunction()' itself does not have the variable 'internal' so JS will look up the chain and sure enough it finds 'internal' in that slightly outer scope. If I declare a new constant inside the nestedFunction, then it wouldn't be able to be accessed from outside that nestedFunction. 

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();