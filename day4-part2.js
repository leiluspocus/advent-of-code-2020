const fs = require('fs');

const mandatoryKeys = [ 'eyr', 'iyr', 'byr', 'ecl', 'pid', 'hcl', 'hgt' ];
const validEyeColors = [ 'amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth' ];

const validationRules = {
	byr: (input) => {
		const inputInt = parseInt(input);
		return input.length === 4 && inputInt >= 1920 && inputInt <= 2002;
	},
	iyr: (input) => {
		const inputInt = parseInt(input);
		return input.length === 4 && inputInt >= 2010 && inputInt <= 2020;
	},
	eyr: (input) => {
		const inputInt = parseInt(input);
		return input.length === 4 && inputInt >= 2020 && inputInt <= 2030;
	},
	ecl: (input) => {
		console.log(input, validEyeColors);
		return validEyeColors.includes(input);
	},
	pid: (input) => {
		return parseInt(input) && input.length === 9;
	},
	hcl: (input) => {
		return input.match(/#[0-9a-f]{6}/g);
	},
	hgt: (input) => {
		if (input.includes('cm')) {
			// cm check
			const inputNb = parseInt(input.replace('cm', ''));
			return inputNb <= 193 && inputNb >= 150;
		}
		if (input.includes('in')) {
			// inches check
			const inputNb = parseInt(input.replace('in', ''));
			return inputNb <= 76 && inputNb >= 59;
		}
		return false;
	}
};
const isValidPassport = (passport) => {
	for (var i = 0; i < mandatoryKeys.length; i++) {
		const element = mandatoryKeys[i];
		if (passport[element] == undefined) {
			return false;
		} else {
			console.log(validationRules[element](passport[element]), passport[element], element);
			if (!validationRules[element](passport[element])) {
				return false;
			}
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
