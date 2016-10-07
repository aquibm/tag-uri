export default function (uri, date) {
    if (uri === undefined || typeof uri !== 'string') {
        throw Error('Expected uri to be a string');
    }

    if (date === undefined || typeof date !== 'object') {
        throw Error('Expected date to be a date');
    }
}