import test from 'ava';
import tag from '../lib';

test('should be able to instantiate without the date parameter', t => {
    t.notThrows(() => {
        tag('Hello!');
    });
});