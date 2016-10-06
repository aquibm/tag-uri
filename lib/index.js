/*
    tag-uri: A node implementation of RFC4151.
*/
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var validateInputs = function validateInputs(uri, date) {
    if (uri === undefined || typeof uri !== 'string') {
        throw Error('Expected uri to be a string');
    }

    if (date === undefined || (typeof date === 'undefined' ? 'undefined' : _typeof(date)) !== 'object') {
        throw Error('Expected date to be a date');
    }
};

function tag(uri) {
    var date = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();

    validateInputs(uri, date);

    // Do nothing.
}

module.exports = tag;