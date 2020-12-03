const fs = require('fs');

const tree = '#';

const getResult = (data, stepRight, stepBottom) => {
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
	return treeCount;
};

fs.readFile('inputs/day3-input.txt', (err, data) => {
	let total = 1;
	const occurences = [
		getResult(data, 1, 1),
		getResult(data, 3, 1),
		getResult(data, 5, 1),
		getResult(data, 7, 1),
		getResult(data, 1, 2)
	];
	for (let i = 0; i < occurences.length; i++) {
		total = total * occurences[i];
	}
	console.log('😍 The multiplication is ', total, ' !');
});
