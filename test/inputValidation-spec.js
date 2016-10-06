import test from 'ava';
import tag from '../lib';

test('should be able to instantiate without the date parameter', t => {
    t.notThrows(() => {
        tag('Hello!');
    });
});

test('should throw if the uri is not specified', t => {
    t.throws(() => {
        tag();
    });
});

test('should throw if the uri is not a string', t => {
    t.throws(() => {
        tag(['whoa dude, that\'s an array!']);
    });
});

test('should throw if the date is not an object', t => {
    t.throws(() => {
        tag('www.google.com', 'totally not a date');
    });
});