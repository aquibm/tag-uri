'use strict';

var _validateInputs = require('./util/validateInputs');

var _validateInputs2 = _interopRequireDefault(_validateInputs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function tag(uri) {
    var date = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();

    (0, _validateInputs2.default)(uri, date);

    // Do nothing.
}

module.exports = tag;