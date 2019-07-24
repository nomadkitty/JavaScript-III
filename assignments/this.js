/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding: this will refer to the window/console Object;
* 2. Implicit Binding: this will refer to the object before the dot
* 3. New Binding: this will refer to the specific instance of the object that is created and returned by the constructor function
* 4. Explicit Binding: this is explicitly defined by call or apply method
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
let myPet = function (){
    console.log(this.age);
}

const me = {
    age: 12
}

myPet();

// Principle 2

// code example for Implicit Binding

let yourPet = {
    name: 'Snoopy',
    greeting: function(sound){
        console.log(`My ${this.name} is ${sound}.`)
    }
};

yourPet.greeting('meowing')

// Principle 3

// code example for New Binding
function Pet(breed, name, color){
  this.breed = breed;
  this.name = name;
  this.color = color;
  this.say = function() {
      console.log(`My ${this.breed}'s name is ${this.name} and he is ${this.color}`);
  }
}

const Theo = new Pet('cat', 'Theo', 'white')
Theo.say();


// Principle 4

// code example for Explicit Binding
const sayName = function(){
    console.log(`My name is ${this.name}`);
};

const Maya = {
    name: "Maya"
};

sayName.call(Maya);

