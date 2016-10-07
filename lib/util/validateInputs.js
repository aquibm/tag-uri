'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = function (uri, date) {
    if (uri === undefined || typeof uri !== 'string') {
        throw Error('Expected uri to be a string');
    }

    if (date === undefined || (typeof date === 'undefined' ? 'undefined' : _typeof(date)) !== 'object') {
        throw Error('Expected date to be a date');
    }
};