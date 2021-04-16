import React from 'react';
import Character from './Character';
import styled from 'styled-components';

// styling for the list item cards
const ListItem = styled.div`
	background-color: rgba(255, 255, 255, 0.3);
	border-radius: 20px;
	margin: 1rem auto;
	width: 80%;
	color: white;
	box-shadow: 5px 5px 10px #5c5c5c;
`;

export default function CharactersCard(props) {
	const { swCharacters } = props;

	// safety measure, so that nothing trys to render before the request is finished
	if (!swCharacters) return <h2>Loading.....</h2>;

	return (
		<>
			<h1 className="Header">Star Wars Characters</h1>
			{swCharacters.map((swCharacter, index) => {
				return (
					<ListItem>
						<Character key={index} swCharacter={swCharacter} />
					</ListItem>
				);
			})}
		</>
	);
}
