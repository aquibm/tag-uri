/*
    tag-uri: A node implementation of RFC4151.
*/
'use strict';

const validateInputs = (uri, date) => {
    if(uri === undefined || typeof(uri) !== 'string') {
        throw Error('Expected uri to be a string');
    }

    if(date === undefined || typeof(date) !== 'object') {
        throw Error('Expected date to be a date');
    }
};

function tag(uri, date = new Date()) {
    validateInputs(uri, date);

    // Do nothing.
}

module.exports = tag;
