type KeyValue = { [x: string]: string };

const People = [
	{ Name: 'Name', Surname: 'Surname' },
	{ Name: 'AAA', Surname: 'ZZZ' },
	{ Name: 'Name', Surname: 'AAA' }
];

const sortByKey = (property: string) => {
	let sortOrder = 1;
	if (property[0] === '-') {
		sortOrder = -1;
		property = property.substr(1);
	}
	return (a: KeyValue, b: KeyValue) => {
		const result = a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
		return result * sortOrder;
	};
};

People.sort(sortByKey('-Name'));
