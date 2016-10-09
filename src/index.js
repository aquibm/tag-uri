import url from 'url';
import moment from 'moment';
import validateInputs from './util/validateInputs';

function getDateString(date) {
    return moment(date).format('YYYY-MM-DD');
}

function translateSlashes(pathname) {
    const replaced = pathname.replace(/\//g, ':');
    return replaced.length > 1 ? replaced : '';
}

function tag(uri, date = new Date()) {
    validateInputs(uri, date);

    const parsedUrl = url.parse(uri);
    return `tag:${parsedUrl.hostname},${getDateString(date)}${translateSlashes(parsedUrl.pathname)}`;
}

module.exports = tag;