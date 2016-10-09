import test from 'ava';
import tag from '../lib';

const neverForget = new Date(2016, 4, 28);

test('should be able to instantiate without the date parameter', t => {
    t.notThrows(() => {
        tag('Hello!');
    });
});

test('should be able to convert simple domain names', t => {
    const tagUri = tag('http://gmail.com', neverForget);

    t.is(tagUri, 'tag:gmail.com,2016-05-28');
});

test('should be able to convert domains with trailing slashes', t => {
    const tagUri = tag('http://gmail.com/', neverForget);
    
    t.is(tagUri, 'tag:gmail.com,2016-05-28');
});

test('should be able to convert subdomains', t => {
    const tagUri = tag('http://mail.google.com/', neverForget);

    t.is(tagUri, 'tag:mail.google.com,2016-05-28');
});

test('should be able to convert url\'s with paths', t => {
    const tagUri = tag('http://mail.google.com/u/1', neverForget);

    t.is(tagUri, 'tag:mail.google.com,2016-05-28:u:1');
});