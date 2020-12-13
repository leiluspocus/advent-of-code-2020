const fs = require('fs');


const getResult = () => {
	fs.readFile('inputs/day7-input.txt', (err, data) => {
		data = data.toString(); 
		data = data.split('\n');
	});
		 
};

getResult();
