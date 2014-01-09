var queue = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
			
function mockIO(arg, callback) {	
	setTimeout(function() { 
		callback('Square of ' + arg + ' is calculated, answer =' + Math.pow(arg , 2)); 
	}, Math.round(Math.random() * 1000 * 2) );
}

function serialLookUp(item) {	
	if (!(item === undefined )) { // if not end of queue, recursively execute the async mockIO	
		mockIO(item, function(callback){
				console.log(callback + ', Queue=[' + queue + ']');
				serialLookUp(queue.shift());												
		});
	} 
}
serialLookUp(queue.shift());

