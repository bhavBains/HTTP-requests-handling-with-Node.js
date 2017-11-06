const https = require('https');


function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function(response){
  	let responseBodyString = '';
  	response.setEncoding('utf8');

  	response.on('end', function(){
  		// console.log('end');
  		console.log('response body: ', responseBodyString);
  	});

  	response.on('data', function(chunks){
  		// console.log('new chunk');
  		responseBodyString += chunks;
  		// console.log(chunks);
  	});

  	// console.log('so bored, wanna go hone');


  });

  

}

getAndPrintHTML();