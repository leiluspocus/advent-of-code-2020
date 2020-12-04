const fs = require('fs');

const mandatoryKeys = [ 'eyr', 'iyr', 'byr', 'ecl', 'pid', 'hcl', 'hgt' ];

const isValidPassport = (passport) => {
	console.log(passport);
	for (var i = 0; i < mandatoryKeys.length; i++) {
		console.log(passport[mandatoryKeys[i]]);
		if (passport[mandatoryKeys[i]] == undefined) {
			return false;
		}
	}
	return true;
};

const getResult = () => {
	fs.readFile('inputs/day4-input.txt', (err, data) => {
		arr = data.toString().split('\n');
		let validPassports = 0;
		let passport = {};
		for (var i = 0; i < arr.length; i++) {
			let line = arr[i].split(' ');
			if (line[0] !== '') {
				for (var j = 0; j < line.length; j++) {
					let info = line[j].split(':');
					passport[info[0]] = info[1];
				}
			} else {
				// We finished processing one line for a passport
				if (isValidPassport(passport)) {
					validPassports++;
				}
				passport = {};
			}
		}
		console.log('There are ', validPassports, ' valid passports');
	});
};

getResult();
