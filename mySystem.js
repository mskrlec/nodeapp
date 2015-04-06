var os = require('os'); // bringing os module

var message = 'Here is some info about your system...';

var sysArray = new Array('Type: ' + os.type(), 
						  'Node version: ' + process.version,
						  'Platform: ' + os.platform(),
						  'Hostname: ' + os.hostname(),
						  'Total memory: ' + os.totalmem(),
						  'Free memory: ' + os.freemem(),
						  'Uptime: ' + os.uptime()
						  );

console.log(message);

for(var i = 0; i < sysArray.length; i++) {
	console.log(sysArray[i]);
}