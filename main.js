// var, let, const
// String, Numbers, Boolean, null, undefined, Symbol

/*let name = 'mjid'
const isCool = true;
let age = 30;
const rating = 4.5;
const x = null;
const y = undefined;
let z;

console.log(name);
console.log(typeof isCool);*/

//Concatenation

/*console.log('My name is '+name+' and I am '+age);*/

//Template String 

/*const hello = `My name is ${name} and I am ${age}`;
console.log(hello);*/

//String methods

/*console.log(name.toUpperCase());
console.log(name.substring(0,2).toUpperCase());
console.log(name.toUpperCase().split(''));*/

//Arrays

/*const fruit = ['Apples', 'Pears', 'orange', 20, true];
console.log(fruit[1]);
fruit.push('strawbery');
fruit.unshift('mangos');
fruit.pop()
console.log(fruit);
console.log(Array.isArray(fruit));
console.log(fruit.indexOf('Pears'));*/

//Object

/*const person={
    firstName: 'Mjid',
    lastName: 'Ghaiati',
    age: 22,
    hobbies:['Gaming', 'Sport','movies'],
    address: {
        street: "Grupo Jaume D'Urgell",
        city:'Mollerussa',
    }
}
person.email = 'a2mjidgh@gmail.com';
console.log(person);*/

//ArrayOfObjects

const todos=[
    {
        id:1,
        name:"Jax",
        isOP:true
    },
    {
        id:2,
        name:"Irelia",
        isOP:false
    },
    {
        id:3,
        name:"tryndamere",
        isOP:false
    }

];
console.log(todos[1].id)
//To Json
 const todoJSON = JSON.stringify(todos);
 console.log(todoJSON)

 //For Loop

 for(let i=0;i<10;i++){
        console.log(i);
 }
 
 for(let i of todos){
     console.log(i)
 }

 //ForEach, map, filter

 todos.forEach(function(i) {
     console.log(i.name)
 });

 const todoName = todos.map(function(i) {
    return i.name;
});
console.log(todoName);

const todoOP = todos.filter(function(i) {
    return i.isOP===true;
}).map(function(i) {
    return i.name;
});
console.log(todoOP);

