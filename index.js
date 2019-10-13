"use strict"
const toInt = require('to-integer')
const isMultipleOf = require('is-multiple-of')

function isMultipleOf5(value){
    return isMultipleOf(toInt(value), 5)
}

module.exports = isMultipleOf5;
