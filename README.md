# Tag URI

[![CircleCI](https://circleci.com/gh/aquibm/tag-uri.svg?style=svg)](https://circleci.com/gh/aquibm/tag-uri)
[![Code Climate](https://codeclimate.com/github/aquibm/tag-uri/badges/gpa.svg)](https://codeclimate.com/github/aquibm/tag-uri)

This is a node implementation of [RFC4151: The 'tag' URI Scheme.](https://www.ietf.org/rfc/rfc4151.txt)

### Abstract (from the RFC)
Tag URIs (also known as "tags") are designed to be unique across space and time while being tractable to humans.  They are distinct from most other URIs in that they have no authoritative resolution mechanism.  A tag may be used purely as an entity identifier. Furthermore, using tags has some advantages over the common practice of using "http" URIs as identifiers for non-HTTP-accessible resources.

### Installation
~~~
npm install tag-uri
~~~

### Usage
##### ES6
```javascript
import tag from 'tag-uri';

const publishDate = new Date(2016, 4, 28);

const tagged = tag('https://github.com', publishDate);
// tagged = 'tag:github.com,2016-05-28'


const taggedToday = tag('https://github.com/aquibm/tag-uri');
// taggedToday = 'tag:github.com,2016-09-10:aquibm:tag-uri'
```

##### ES5
```javascript
var tag = require('tag-uri');

var taggedToday = tag('https://github.com');
// taggedToday = 'tag:github.com,2016-09-10'
```

### License
[MIT](LICENSE)
