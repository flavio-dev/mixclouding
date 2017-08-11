"use strict";

// Optional. You will see this name in eg. 'ps' or 'top' command
process.title = 'node-visu';

// Port where we'll run the websocket server
var webSocketsServerPort = Number(process.env.PORT || 4000);

// websocket and http servers
var webSocketServer = require('websocket').server;
var http = require('http');
var https = require('https');
var fs = require('fs');

// list of currently connected clients (users)
var clients = [ ];

/**
 * HTTP server
 */
var server = http.createServer(function(request, response) {

	// to do: how to pass the port to the other js files

	if (request.url === '/test/') {

		var options = {
		    host: 'www.mixcloud.com',
		    path: '/player/details/?key=/NetilRadio/extra-sunday-mermaids-marcy-takeover/'
		};

		console.log("Shit will go DOWN!");

		var req = https.get(options, function(res)
    {
			console.log("Oh YEAH!");
			var output = '';
			res.on('data', function (chunk) {
        output += chunk;
      });

			res.on('end', function() {
	        var obj = JSON.parse(output);
					console.log(obj);
					response.writeHead(200, {
					  'Content-Type': 'application/json',
					  'Access-Control-Allow-Origin': '*',
					  'Access-Control-Allow-Methods': 'GET, OPTIONS',
			      'Access-Control-Allow-Headers': 'Content-Type'
				  });
					response.write(output);
				  response.end();
	    });

			console.log('do we end here?');

			req.end();

			console.log('MOFO output = ', output);
		});


	//   response.writeHead(200, {
	// 	  'Content-Type': 'application/json',
	// 	  'Access-Control-Allow-Origin': '*',
	// 	  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  //     'Access-Control-Allow-Headers': 'Content-Type'
	//   });
	//   response.write(JSON.stringify({
	// 	  responseJson: 'blabla'
	//   }));
	//   response.end();
	}
});

server.listen(webSocketsServerPort, function() {
	console.log((new Date()) + " Server is listening on port " + webSocketsServerPort);
});

/**
 * WebSocket server
 */
var wsServer = new webSocketServer({
	// WebSocket server is tied to a HTTP server. WebSocket request is just
	// an enhanced HTTP request. For more info http://tools.ietf.org/html/rfc6455#page-6
	httpServer: server
});

// This callback function is called every time someone
// tries to connect to the WebSocket server
wsServer.on('request', function(request) {
	console.log((new Date()) + ' Connection from origin ' + request.origin + '.');

	// accept connection - you should check 'request.origin' to make sure that
	// client is connecting from your website
	// (http://en.wikipedia.org/wiki/Same_origin_policy)
	var connection = request.accept(null, request.origin);
	// we need to know client index to remove them on 'close' event
	var index = clients.push(connection) - 1;

	console.log((new Date()) + ' Connection accepted.');

	// user sent some message
	connection.on('message', function(message) {

		console.log('hey nessage = ', message);

		if (message.type === 'utf8') {
			console.log((new Date()) + ' Received Parameters: '+ message.utf8Data);
			console.log('clients = ', clients)

			// broadcast message to all connected clients
			// var json = JSON.stringify({ type: 'message', data: obj });
			for (var i=0; i < clients.length; i++) {
				clients[i].sendUTF(message.utf8Data);
			}
		}
	});

	// user disconnected
	connection.on('close', function(connection) {
		console.log((new Date()) + " Peer "
			+ connection.remoteAddress + " disconnected.");
		// remove user from the list of connected clients
		clients.splice(index, 1);
	});

});
