const test = require('ava');
const isMultipleOf5 = require("./index.js");

test('numbers', t => {
    t.is(isMultipleOf5(10), true);
    t.is(isMultipleOf5(8), false);
});

test('strings', t => {
    t.is(isMultipleOf5("25"), true);
    t.is(isMultipleOf5("21"), false);
});
