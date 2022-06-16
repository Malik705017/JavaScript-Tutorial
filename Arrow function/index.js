// Ref: https://dmitripavlutin.com/differences-between-arrow-and-regular-functions/#11-regular-function

/** Regular Function */
/* Inside of a regular JavaScript function, this value (aka the execution context) is dynamic. */

function myFunction() {
  console.log(this);
}

// Simple invocation
myFunction(); // logs global object (window)

// Indirect invocation
const myContext = { value: 'A' };
myFunction.call(myContext); // logs { value: 'A' }
myFunction.apply(myContext); // logs { value: 'A' }

const myObject = {
  method() {
    console.log(this);
  },
};

// Method invocation
myObject.method(); // logs myObject

// Constructor invocation
function MyFunction() {
  console.log(this);
}
new MyFunction(); // logs an instance of MyFunction

/** Arrow Function */
/* Unlike regular functions, arrow functions do not have their own this. 
The value of this inside an arrow function remains the same throughout the 
lifecycle of the function and is always bound to the value of this in the 
closest non-arrow parent function. */

class Person {
  constructor(name) {
    this.name = name;
  }

  printNameArrow = () => {
    console.log(`Arrow1: ${this.name}`);
  };

  printNameArrow2 = () => {
    setTimeout(() => {
      console.log(`Arrow2: ${this.name}`);
    }, 0);
  };

  printNameFunction1() {
    console.log(`Function1: ${this.name}`);
  }

  printNameFunction2() {
    setTimeout(function () {
      console.log(`Function2: ${this.name}`);
    }, 0);
  }
}

const person = new Person('Malik');
person.printNameArrow(); // Arrow1: Malik
person.printNameArrow2(); // Arrow2: Malik
person.printNameFunction1(); // Function1: Malik
person.printNameFunction2(); // Function2:

const person2 = {
  name: 'Malik',
  thisInArrow: () => {
    console.log('Arrow: ' + this.name); // no 'this' binding here
  },
  thisInRegular() {
    console.log('Function: ' + this.name); // 'this' binding works here
  },
};
person2.thisInArrow(); // Arrow:
person2.thisInRegular(); // Function: Malik

// Summary

/* Understanding the differences between regular and arrow functions helps choose the right syntax for specific needs.

1. this value inside a regular function is dynamic and depends on the invocation. But this inside the arrow function is bound lexically and equals to this of the outer function.

2. arguments object inside the regular functions contains the list of arguments. The arrow function, on the opposite, doesn't define arguments (but you can easily access the arrow function arguments using a rest parameter ...args).

3. If the arrow function has one expression, then the expression is returned implicitly, even without using the return keyword.

4. Last but not least, you can define methods using the arrow function syntax inside classes. Fat arrow methods bind this value to the class instance.

5. Anyhow the fat arrow method is invoked, this always equals the class instance, which is useful when the methods are used as callbacks.

*/
