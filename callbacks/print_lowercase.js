var imported = require('../http-functions.js');

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step6/lowercase.html'
  };

imported(requestOptions, function printHTML(html){
  console.log(html.toLowerCase());
});


// function printUpperCase (html) {

//   var x = html.lo

// }

// getHTML(requestOptions, printUpperCase);