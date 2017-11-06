const https = require('https');


function getHTML (options, callback) {

  https.get(options, function(response){
  	let responseBodyString = '';
  	response.setEncoding('utf8');

  	response.on('end', function(){
  		console.log('response body: ', responseBodyString);
  	});

  	response.on('data', function(chunks){
  		responseBodyString += chunks;
  	});

  });

  

}
var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step4.html'
  };

getHTML(requestOptions, function printHTML(html){
  console.log(html);
});