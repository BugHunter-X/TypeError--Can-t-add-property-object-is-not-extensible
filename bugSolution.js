"use strict";

const obj = {};

// Check if the object is extensible
if (Object.isExtensible(obj)) {
  obj.name = "John";
} else {
  // Create a new object and copy properties if necessary
  const newObj = { ...obj, name: "John" };
  console.log(newObj); // Outputs: { name: "John" }
}

console.log(obj); // Output: {} or { name: "John" } depending on if extensible or not

// Example of working with preventExtensions:
const extensibleObj = {};
extensibleObj.originalProperty = "originalValue";
Object.preventExtensions(extensibleObj);

// Attempting to add a property will fail silently
extensibleObj.newProperty = "newValue";
console.log(extensibleObj.newProperty); // Outputs undefined

// Existing properties can still be modified
extensibleObj.originalProperty = "modifiedValue";
console.log(extensibleObj.originalProperty); // Outputs: modifiedValue

// Attempting to delete an existing property will not result in an error in strict mode, whether the property exists or not
delete extensibleObj.originalProperty;  // Does not delete, as delete operations are not prevented by preventExtensions
console.log(extensibleObj.originalProperty);  // Outputs: modifiedValue

//Check if an object is extensible:
console.log(Object.isExtensible(extensibleObj));   //Outputs: false
console.log(Object.isExtensible(obj));   //Outputs: true