'use strict';

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _validateInputs = require('./util/validateInputs');

var _validateInputs2 = _interopRequireDefault(_validateInputs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getDateString(date) {
    return (0, _moment2.default)(date).format('YYYY-MM-DD');
}

function translateSlashes(pathname) {
    var replaced = pathname.replace(/\//g, ':');
    return replaced.length > 1 ? replaced : '';
}

function tag(uri) {
    var date = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();

    (0, _validateInputs2.default)(uri, date);

    var parsedUrl = _url2.default.parse(uri);
    return 'tag:' + parsedUrl.hostname + ',' + getDateString(date) + translateSlashes(parsedUrl.pathname);
}

module.exports = tag;