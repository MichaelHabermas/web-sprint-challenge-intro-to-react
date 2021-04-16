import React from 'react';
import Character from './Character';

export default function CharactersCard(props) {
	const { people } = props;

	if (!people) return <h2>Loading.....</h2>;

	return (
		<>
			<h1 className="Header">Characters</h1>
			{people.map((person, index) => {
				return <Character key={index} person={person} />;
			})}
		</>
	);
}
