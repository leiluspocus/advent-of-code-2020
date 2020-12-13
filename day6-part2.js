const fs = require('fs');


const getResult = () => {
	fs.readFile('inputs/day6-input.txt', (err, data) => {
		data = data.toString(); 
		data = data.split('\n');
		// Final array we will interate on to count sum.
		let groupsCounts = [];
		let answers = {};
		let nbPeople = 0;
		for ( var i=0; i < data.length; i++) {
			if ( data[i] === '') {
				// newline 
				let sum = 0;
				for ( const property in answers) {
					if (answers[property] == nbPeople ) {
						sum++;
					} 
				} 
				groupsCounts.push(sum); 
				answers = [];
				nbPeople = 0;
			}
			else {
				let questions = data[i].split(''); 
				for ( var j=0; j < questions.length; j++) { 
					if ( answers[questions[j]] === undefined ) { 
						answers[questions[j]] = 1;
					}
					else {
						answers[questions[j]] = answers[questions[j]] +1;
					}
				}
				nbPeople++;
			}
		}
		let finalSum = 0;
		for ( var t = 0; t < groupsCounts.length; t++) {
			finalSum += groupsCounts[t];
		}
		console.log("🤡 The final sum is: ", finalSum);

	});
		 
};

getResult();
