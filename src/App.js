import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import style from 'styled-components';
import Character from './components/Character';

function App() {
	// Try to think through what state you'll need for this app before starting. Then build out
	// the state properties here.
	const [people, setPeople] = useState([]);
	// Fetch characters from the API in an effect hook. Remember, anytime you have a
	// side effect in a component, you want to think about which state and/or props it should
	// sync up with, if any.

	useEffect(() => {
		axios
			.get('https://swapi.dev/api/people')
			.then(res => {
				// console.log(res.data[0].name);
				setPeople(res.data);
			})
			.catch(err => {
				console.log(err);
			});
	}, []);

	if (people.length === 0) return <h2>Loading.....</h2>;

	return (
		<div className="App">
			<h1 className="Header">Characters</h1>
			<Character people={people} />
		</div>
	);
}

export default App;
