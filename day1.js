const fs = require('fs');

const getResult = () => {
    fs.readFile('inputs/day1-input.txt', (err, data) => {
        arr = data.toString().split('\n');
	arr.forEach((val) => {
	  arr.forEach((valbis) => {
	  	if ( parseInt(val) + parseInt(valbis) === 2020 ) {
			console.log('Its ' + val + ' and ' + valbis);
			return;
	        }
	  });
	});
        console.log("END " );
    });
}

getResult();
