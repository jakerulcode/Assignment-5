# JavaScript Concepts

## 1. What is the difference between var, let, and const?

`var`, `let`, and `const` are used to declare variables in JavaScript.

- **var** is function-scoped and can be redeclared and reassigned.
- **let** is block-scoped and can be reassigned but not redeclared.
- **const** is block-scoped and cannot be reassigned after declaration.

---

## 2. What is the spread operator (...)?

The spread operator (`...`) is used to expand, copy, or merge elements of an array or object.

Example:

```javascript
const newArray = [...oldArray];
```

---

## 3. What is the difference between map(), filter(), and forEach()?

- **map()** → transforms each element of an array and returns a new array.
- **filter()** → selects elements based on a condition and returns a new array.
- **forEach()** → loops through the array but does not return a new array.

---

## 4. What is an arrow function?

An arrow function is a shorter syntax for writing functions in JavaScript using the `=>` symbol.

Example:

```javascript
const add = (a, b) => a + b;
```

---

## 5. What are template literals?

Template literals are strings written using backticks (` `) that allow embedded variables using `${}`.

Example:

```javascript
const message = `My name is ${name}`;
```