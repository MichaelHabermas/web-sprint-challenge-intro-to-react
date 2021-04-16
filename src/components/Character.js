import React from 'react';
import styled from 'styled-components';

// styling for the info in each list item card
const Individual = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0 5%;
	text-shadow: 5px 5px 10px #5c5c5c;
	font-size: 1.5rem;
`;

export default function Character(props) {
	const { swCharacter } = props;

	return (
		<>
			<Individual>
				<h3>{swCharacter.name}</h3>
				<h3>{swCharacter.birth_year}</h3>
			</Individual>
		</>
	);
}
