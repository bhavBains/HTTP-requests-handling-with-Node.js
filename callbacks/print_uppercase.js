var imported = require('../http-functions.js');

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step6/uppercase.html'
  };

imported(requestOptions, function printHTML(html){
  console.log(html.toUpperCase());
});