import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import styled from 'styled-components';
import CharactersCard from './components/CharactersCard';

function App() {
	// Try to think through what state you'll need for this app before starting. Then build out
	// the state properties here.
	const [swCharacters, setSWCharacters] = useState([]);
	// Fetch characters from the API in an effect hook. Remember, anytime you have a
	// side effect in a component, you want to think about which state and/or props it should
	// sync up with, if any.

	useEffect(() => {
		axios
			.get('https://swapi.dev/api/people')
			.then(res => {
				setSWCharacters(res.data);
			})
			.catch(err => {
				console.log(err);
			});
	}, []);

	if (swCharacters.length === 0) return <h2>Loading.....</h2>;

	const Card = styled.div`
		background-color: rgba(255, 255, 255, 0.3);
		border-radius: 50px;
		margin: 5rem auto;
		padding: 1rem 0 3rem;
		width: 80%;
		color: white;
		box-shadow: 5px 5px 50px #8a8a8a;
	`;

	return (
		<div className="App">
			<Card>
				<CharactersCard swCharacters={swCharacters} />
			</Card>
		</div>
	);
}

export default App;
