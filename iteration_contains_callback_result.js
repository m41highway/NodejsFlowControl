var queue = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function mockIO(arg, callback) {	
	setTimeout(function() { 
		callback('Square of ' + arg + ' = ' + Math.pow(arg , 2));
	}, Math.round(Math.random() * 1000 * 2));
}

for (item in queue) {	
	mockIO(item, function(callback){
		console.log(callback);
	});
}