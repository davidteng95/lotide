# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @davidteng95/lotide`

**Require it:**

`const _ = require('@davidteng95/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: checking if two arrays are equal and returns assertion with emoji.
* `assertEqual`: checking if two elements are equal and returns assertion with emoji.
* `assertObjectsEqual`: checking if two objects are equal and returns assertion with emoji.
* `countLetters`: counts the amount of letters in a string.
* `countOnly`: counts only the items specified to be counted.
* `eqArrays`: checking if two arrays are equal.
* `eqObjects`: checking if two objects are equal.
* `findKey`: more powerful version of findKeyByValue, finds the key of an object that matches the callback.
* `findKeyByValue`: finds the key inside an object where its value matches a given value.
* `head`: returns the first element of an array.
* `index`: documents all the functions created.
* `letterPositions`: returns the position of a letter entered in a string.
* `map`: applies an action to all of the elements within the array.
* `middle`: returns the middle value of an array.
* `tail`: returns the values of an array exluding the element of the first index.
* `takeUntil`: returns the value of the array until there's a first unsuccessful callback.
* `without`: returns an array with the specified element/s taken out.