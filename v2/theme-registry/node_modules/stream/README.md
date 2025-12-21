stream
======

Node.js streams in the browser.

Ported straight from the [Node.js core](https://github.com/joyent/node/blob/master/lib/stream.js) and adapted to [component/emitter](https://github.com/component/emitter)'s api.

__If you're offended by this, keep in mind that it's old and I don't want to break anyone's build by deleting this.__

For docs:

* [Stream Node.js v0.8.9 Manual & Documentation](http://nodejs.org/api/stream.html)
* [Stream Handbook](https://github.com/substack/stream-handbook)

A [testsuite](https://github.com/juliangruber/stream/blob/master/test.html) for the browser is there too. Just issue `npm install` after you've cloned this repo and then open the html file.

Installation
------------

Install with [component(1)](https://github.com/component/component)

```bash
$ component install juliangruber/stream
```
or

```
$ npm install stream
```

Usage example
-------------

```javascript
var Stream = require('stream');

var src = new Stream();
src.readable = true;

var dest = new Stream();
dest.writable = true;
dest.write = function(data) {
  assert(data == 'test');
};

src.pipe(dest);

src.emit('data', 'test');
```

License
-------
(MIT)

Copyright (c) 2012 Julian Gruber &lt;julian@juliangruber.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
