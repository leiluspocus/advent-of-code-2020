const fs = require('fs');


const getResult = () => {
	fs.readFile('inputs/day5-input.txt', (err, data) => {
		data = data.toString();
		let lines = data.split('\n');
		let airplane = [];
		let minSeatValue = 10000; 
		for(let line of lines) {
			let min = 0;
			let max = 127;
	
			for(let i = 0; i < 7; i++) {
				let range = max - min + 1;
				if(line[i] === 'F') {
					max -= range / 2;
				}
				else {
					min += range / 2;
				}
			}
	
			let row = min;
	
			min = 0;
			max = 7;
	
			for(let i = 7; i < 10; i++) {
				let range = max - min + 1;
	
				if(line[i] === 'L') {
					max -= range / 2;
				}
				else {
					min += range / 2;
				}
			}
	
			let column = min;
			let id = row * 8 + column;
			airplane[id] = true;
			minSeatValue = Math.min(id, minSeatValue);
		}

		for ( let seat_id = minSeatValue ; seat_id < airplane.length ; seat_id++) {
			if ( !airplane[seat_id] ) {
				console.log('✅ ' + seat_id + ' is your seat ID!');
				return;
			} 
		}
	});
		 
};

getResult();
