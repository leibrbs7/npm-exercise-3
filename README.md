# npm-exercise-3

## Table of contents
* [General info](#general-info)
* [Setup](#setup)

## General info
This project is an expression parser that accepts a single argument, which is an infix expression, and converts and displays it into a postfix expression. 

This project uses an npm module and here's the link to the module: 
https://www.npmjs.com/package/@estilles/expression-parser

## Setup

Installation

To run in this project, install this npm module
```
npm install @estilles/expression-parser
```

Run the program using this line (see below) in the command line:
```
node index 'infixExpression' 
```

The parsed expression will be displayed by converting it into an array using the ```toArray(parsedExpression)``` and into a string using the ```toString(parsedExpression)```. Below are the examples of the expected output from the program:

```
console.log(toString(parse(finalString))); => string

node index '3 + 7 * 2 / 5' 
console.log(toString(parse(finalString))); => 3 7 2 * 5 / +
```

```
console.log(toString(parse(finalString))); => array

node index '3 + 7 * 2 / 5' 
console.log(toString(parse(finalString))); => [3, 7, 2, '*', 5, '/', '+']
```
