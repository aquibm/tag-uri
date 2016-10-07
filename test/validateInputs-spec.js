import test from 'ava';
import validateInputs from '../lib/util/validateInputs';

test('should pass for valid inputs', t => {
    t.notThrows(() => {
        validateInputs('http://google.com', new Date());
    });
});

test('should throw if uri is undefined', t => {
    t.throws(() => {
        validateInputs(undefined, new Date());
    });
});

test('should throw if uri is not a string', t => {
    t.throws(() => {
        validateInputs({
            clearlyNot: ['a string']
        }, new Date());
    });
});

test('should throw if date is undefined', t => {
    t.throws(() => {
        validateInputs('http://google.com');
    });
});

test('should throw if date is not an object', t => {
   t.throws(() => {
        validateInputs('http://google.com', '31st October 2016');
    }); 
});