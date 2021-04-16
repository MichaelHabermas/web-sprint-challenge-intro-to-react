import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import styled from 'styled-components';
import CharactersCard from './components/CharactersCard';

// This is the main page to display the web application
function App() {
	// Try to think through what state you'll need for this app before starting. Then build out
	// the state properties here.

	// this will store and set the main data, Star Wars characters retrieved from the axios request
	const [swCharacters, setSWCharacters] = useState([]); //
	// Fetch characters from the API in an effect hook. Remember, anytime you have a
	// side effect in a component, you want to think about which state and/or props it should
	// sync up with, if any. hi.

	//this will pull the star wars data and save it to the swCharacters state
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

	// safety measure, so that nothing trys to render before the request is finished
	if (swCharacters.length === 0) return <h2>Loading.....</h2>;

	// styling for the main display card background
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
