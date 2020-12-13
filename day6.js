const fs = require('fs');


const getResult = () => {
	fs.readFile('inputs/day6-input.txt', (err, data) => {
		data = data.toString(); 
		data = data.split('\n');
		// Final array we will interate on to count sum.
		let groupsCounts = [];
		let answers = [];
		for ( var i=0; i < data.length; i++) {
			if ( data[i] === '') {
				// newline 
				groupsCounts.push(answers.length);
				answers = [];
			}
			else {
				let questions = data[i].split(''); 
				for ( var j=0; j < questions.length; j++) { 
					if ( !answers.includes(questions[j])) { 
						answers.push(questions[j]);
					}
				}
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
