alert("ES6");

var variableVar1;
variable1 = 10;

var variableVar2 ="Hello World!";

let variableLet = "Hello World!";

const gravity = 9.8;

//code block -> a segment of code that is grouped together

//the scope is the area in which a variable is defined and can be accessed
//we can access a variable in the same scope or in a child scope, but not in a parent scope
function test(){
    let variableVarTest = 10; //local variable
    console.log(variableVarTest); //10

    var variableVar1 = 20; //local variable
    let variableLet1 = 30; //local variable
}

//preffered not to use var, use let or const instead
test();

function meet(name){
    console.log("Hello " + name + "!");
    console.log(`Hello ${name}!`); //template literal
}

meet("John Doe");

//ANONYMOUS FUNCTION EXPRESSION, they're used as callbacks
(name) => {
    console.log(name.reverse);
}

function mathOperation(a,b,todoOperation){};

//literal object
let person = {
    name: "John Doe",
    age: 30,
    isMarried: false,
    hobbies: ["reading", "sports"],
    address: {
        street: "123 Main St",
        city: "New York",
        state: "NY"
    },
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};

console.log(person.name); //John Doe
console.log([person["name"]]); //John Doe
person.greet();

//arrow functions don't recozgnize themselves as a function, so they don't have their own this keyword

array = [1,2,3,4,5];

//last element


