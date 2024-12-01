"use strict";

const obj = {};

Object.preventExtensions(obj);

obj.name = "John"; // TypeError: Can't add new property name, object is not extensible

console.log(obj.name); // Output: undefined because 'name' property was not added

delete obj.test; // No error, but it doesn't delete anything as 'test' property doesn't exist 

console.log(obj.test); // Outputs undefined because the property 'test' does not exist