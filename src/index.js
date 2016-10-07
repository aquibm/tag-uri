import validateInputs from './util/validateInputs';

function tag(uri, date = new Date()) {
    validateInputs(uri, date);

    // Do nothing.
}

module.exports = tag;