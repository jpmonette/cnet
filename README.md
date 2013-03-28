# CNET API for Node.js

[CNET API for Node.js](https://npmjs.org/package/cnet) is a *connection library* for [CNET API](http://developer.cnet.com/), giving you access to data about tech and consumer electronics products such as computers, digital cameras, MP3 players, and TVs, as well as software titles and merchant pricing from CNET Certified Merchants.

## Installation

```bash
$ npm install cnet
```

## Features

* Pure JavaScript
* Full access to CNET API
* Lightweight - No dependency, using core [HTTP](http://nodejs.org/api/http.html#http_http) interface!

## Quick Start

First, add the module:

```js
var CNET = require('cnet');
```

Initialize your `CNET` object using your API key (request one [here](http://developer.cnet.com/)):

```js
var cnet = new CNET({ apiKey: '<your-api-key>' });
```

Build your `HTTP` request using [CNET API Reference Guide](http://developer.cnet.com/docs/read/reference_guide). Here's an example requesting the `category` ressource:

```js
cnet.category({ 'categoryId': 6505, 'siteId': 'reviews'}, function(err, data) {
    if(err) throw err;
    console.log(data);
});
```

Here's a more complex HTTP request using the `softwareProduct` ressource:

```js
cnet.softwareProductSearch({ 
    query:  'Microsoft Office', 
    iod:    [
        'userRatings',
        'popularityChart'
    ],
    minEditorsRating: 3,
    maxEditorsRating: 5,
    minUserRating: 2,
    platform: 'Windows',
    orderBy: 'downloadsAndCreatedDate',
    sortDesc: true,
    sortSearchFacets: true,
    start: 0,
    limit: 1
}, function(err, data) {
    if(err) throw err;
    console.log(data);
});
```

## Additional Information

If you prefer to receive your data in **XML** format, populate the `format` key on initialization:

```js
var cnet = new CNET({
    apiKey: '<your-api-key>',
    format: 'xml'
});
```

If you want to explore the [CNET API](http://developer.cnet.com/), head to their REST developer console:

```
http://developer.api.cnet.com/dashboard.html?partTag=<your-api-key>
```

## More Information

* [CNET for Node.js on NPM Registry](https://github.com/jpmonette/cnet)
* Follow [@jpmonette](https://twitter.com/jpmonette) on Twitter for updates
* Read my personal blog [Blogue de Jean-Philippe Monette](http://blogue.jpmonette.net/) to learn more about what I do!

## License

Copyright (C) 2013, Jean-Philippe Monette <contact@jpmonette.net>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.