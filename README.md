# TypeError: Can't add property, object is not extensible

This bug occurs when you try to add a new property to an object that has been made non-extensible using `Object.preventExtensions()`.  This method prevents new properties from being added to an object. 

## How to reproduce the error

1. Create an object.
2. Make the object non-extensible using `Object.preventExtensions()`.
3. Attempt to add a new property to the object.

```javascript
"use strict";

const obj = {};

Object.preventExtensions(obj);

obj.name = "John"; // TypeError: Can't add new property name, object is not extensible

console.log(obj.name); // Output: undefined because 'name' property was not added

delete obj.test; // No error, but it doesn't delete anything as 'test' property doesn't exist 

console.log(obj.test); // Outputs undefined because the property 'test' does not exist
```

This will throw a `TypeError: Can't add property name, object is not extensible` in strict mode. In non-strict mode, the assignment will silently fail, and the property will not be added.

## Solution

To avoid this error, ensure that you only attempt to add properties to objects that are extensible. If you need to add a property to an object and you're unsure if it's extensible, you can use `Object.isExtensible()` to check before attempting to add the property.  If you determine that the object is not extensible and you *must* add properties, you'll need to create a new object, copy the existing properties and add the new ones.