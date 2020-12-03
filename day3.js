const fs = require('fs');

const stepRight = 1;
const stepBottom = 1;
const tree = '#';

const getResult = () => {
	fs.readFile('inputs/day3-input.txt', (err, data) => {
		arr = data.toString().split('\n');
		let treeMap = data.toString().split('\n').map((x) => x.split(''));
		let treeCount = 0;

		for (x = 0, y = 0; y < treeMap.length; y += stepBottom, x += stepRight) {
			const flowingX = x % treeMap[0].length;
			const element = treeMap[y][flowingX];

			if (element === tree) {
				treeCount++;
			}
		}
		console.log('There were ', treeCount, ' trees encountered');
	});
};

getResult();
