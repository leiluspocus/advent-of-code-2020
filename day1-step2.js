const fs = require('fs');

const getResult = () => {
    fs.readFile('inputs/day1-input.txt', (err, data) => {
        arr = data.toString().split('\n');
	arr.forEach((val) => {
	  arr.forEach((valbis) => {
            arr.forEach ((valter) => {
	      if ( parseInt(val) + parseInt(valbis) + parseInt(valter) === 2020	)   
              {
                console.log(' WE GOT A MATCH - ', val, valbis, valter);
		return;
	      }
            });
	  });
	});
        console.log("END " );
    });
}

getResult();
