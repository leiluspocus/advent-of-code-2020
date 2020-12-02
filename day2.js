const fs = require('fs');

const getNumberLetters = (str, character) => {
 if ( str !== undefined) {
  const countOcc = new RegExp(character, "g");
  return (str.match(countOcc)||[]).length;
 }
}

const getResult = () => {
    fs.readFile('inputs/day2-input.txt', (err, data) => {
        arr = data.toString().split('\n');
	let validpasswords = 0;
	arr.forEach((val) => {
	  const line = val.split(' ');
	  if ( line[1] !== undefined) {
            console.log(line);
	    const bounds = line[0].split('-');
	    const charToLookFor = line[1].split(':')[0];
	    const occ = getNumberLetters(line[2], charToLookFor);
	    if ( occ >= bounds[0] && occ <= bounds[1] ) {
	  	validpasswords++;
	    }
	  }
	});
        console.log("There are ", validpasswords, " valid passwords");
    });
}

getResult();
