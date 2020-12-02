const fs = require('fs');

const getNthCharacter = (str, index) => {
 if ( str !== undefined) {
   return str.split('')[parseInt(index-1)];
 }
}

const getResult = () => {
    fs.readFile('inputs/day2-input.txt', (err, data) => {
        arr = data.toString().split('\n');
	let validpasswords = 0;
	arr.forEach((val) => {
	  const line = val.split(' ');
	  if ( line[1] !== undefined) {
	    const bounds = line[0].split('-');
	    const charToLookFor = line[1].split(':')[0];
	    const firstBoundChar = getNthCharacter(line[2], bounds[0]);
	    const secondBoundChar = getNthCharacter(line[2], bounds[1]);
            console.log(charToLookFor, firstBoundChar, secondBoundChar, line[2]);
            if ( (charToLookFor == firstBoundChar && charToLookFor != secondBoundChar) || (charToLookFor != firstBoundChar && charToLookFor == secondBoundChar) ) {
	  	validpasswords++;
	    }
	  }
	});
        console.log("There are ", validpasswords, " valid passwords");
    });
}

getResult();
