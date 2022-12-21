var obj1 = {name: "person1", age: 5};
var obj2 = {age: 5, name: "person1"};

let a = JSON.stringify(obj1) === JSON.stringify(obj2);   
// console.log( _.isEqual(obj1, obj2) );
console.log(a);