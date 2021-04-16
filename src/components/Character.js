import React from 'react';

export default function Character(props) {
	const { person } = props;

	return (
		<>
			<h3>{person.name}</h3>
		</>
	);
}
