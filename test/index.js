/* eslint-disable unicorn/prefer-module */
const test = require('ava');
const chalkTemplate = require('../index.js');

test('return an empty string for an empty literal', t => {
	t.is(chalkTemplate``, '');
});
