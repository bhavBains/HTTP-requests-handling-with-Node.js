var imported = require('../http-functions.js');

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step6/reverse.html'
  };

imported(requestOptions, function printHTML(html){
  console.log(html.reverse());
});