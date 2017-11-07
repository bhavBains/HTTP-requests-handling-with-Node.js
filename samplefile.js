const https = require('https');

var imported = require('./http-functions.js');

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step5.html'
  };

imported(requestOptions, function printHTML(html){
  console.log(html);
});