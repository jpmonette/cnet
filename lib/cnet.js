var http = require('http');

/**
 * CNET Class
 * @param  options
 */
function cnet(options) {
	this.apiKey		= options.apiKey;
	this.format		= options.format || 'json';

	this.category = function (options, callback) {
		this.request('/rest/v1.0/category', options, function(err, data) {
			if(err) callback(err);
			else callback(null, data);
		});
	}

	this.childCategories = function (options, callback) {
		this.request('/rest/v1.0/childCategories', options, function(err, data) {
			if(err) callback(err);
			else callback(null, data);
		});
	}

	this.techProduct = function (options, callback) {
		this.request('/rest/v1.0/techProduct', options, function(err, data) {
			if(err) callback(err);
			else callback(null, data);
		});
	}

	this.techProductSearch = function (options, callback) {
		this.request('/rest/v1.0/techProductSearch', options, function(err, data) {
			if(err) callback(err);
			else callback(null, data);
		});
	}

	this.softwareProduct = function (options, callback) {
		this.request('/rest/v1.0/softwareProduct', options, function(err, data) {
			if(err) callback(err);
			else callback(null, data);
		});
	}

	this.softwareProductSearch = function (options, callback) {
		this.request('/rest/v1.0/softwareProductSearch', options, function(err, data) {
			if(err) callback(err);
			else callback(null, data);
		});
	}

	this.request = function(uri, options, callback) {
		request(uri, options, this.apiKey, this.format, callback);
	}
};

/**
 * Makes the HTTP GET request to CNET API
 * @param  uri
 * @param  options
 * @param  apiKey
 * @param  format
 * @param  callback
 */
function request(uri, options, apiKey, format, callback) {
	if(options.siteId)
		switch(options.siteId) {
			case 'reviews':
				options.siteId = 7;
			break;
			case 'shopper':
				options.siteId = 9;
			break;
			case 'download':
				options.siteId = 4;
			break;
			default:
				callback(new Error('Invalid siteId "' + options.siteId + '"'));
		}

	var params = '';

	for (var key in options) {
		if (params != '')
			params += '&';

		switch(key) {
			case 'iod':
				var iodParams = '';
				for(var iodKey in options.iod) {
					if(iodParams != '')
						iodParams += ',';
					iodParams += options.iod[iodKey];
				}

				params += key + '=' + encodeURIComponent(iodParams);
			break;

			default:
				params += key + '=' + encodeURIComponent(options[key]);
		}
	}

	var httpOptions = {
		host:	'developer.api.cnet.com',
		port:	80,
		path:	uri + '?viewType=' + format + '&partKey=' + apiKey + '&partTag=' + apiKey + '&' + params,
		method: 'GET'
	};

	var req = http.request(httpOptions, function(res) {
		res.setEncoding('utf8');
		res.on('data', function (chunk) {
			callback(null, JSON.parse(chunk));
		});
	});

	req.on('error', function(e) {
		callback(e);
		//callback(e.message);
	});

	req.end();
}

module.exports = cnet;