import React from 'react';

export default function Character(props) {
	const { people } = props;
	// console.log('A');
	if (!people) return <h2>Loading.....</h2>;
	// console.log(people);
	// console.log(props);

	return (
		<>
			<h3>Name: {people[0]['name']}</h3>
		</>
	);
}
