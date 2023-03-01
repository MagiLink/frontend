import SearchBar from '../components/SearchBar';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardComponent from '../components/CardComponent';
import { useStateContext } from '../context/ContextProvider';

const DUMMY_SEARCH_RESULTS = [
	{
		prompt: 'blue button that says hello world',
		component: `() => {
		return <h1>Hello, world!</h1>;
	}`,
		score: 0.5,
		name: 'HelloWorld',
		upvotes: 20,
		username: 'janedoe',
		category: 'text',
	},
	{
		prompt: 'blue button that says hello world',
		component: `() => {
		return <h1>Hello, world!</h1>;
	}`,
		score: 0.83,
		name: 'HelloWorld',
		upvotes: 20,
		username: 'janedoe',
		category: 'text',
	},
	{
		prompt: 'blue button that says hello world',
		component: `() => {
		return <h1>Hello, world!</h1>;
	}`,
		score: 0.22,
		name: 'HelloWorld',
		upvotes: 20,
		username: 'janedoe',
		category: 'text',
	},
	{
		prompt: 'purple button that says hello world',
		component: `() => {
		return (
			<ul>
				<li>Item 1</li>
				<li>Item 2</li>
				<li>Item 3</li>
			</ul>
		);
	}`,
		score: 0.75,
		name: 'List items',
		upvotes: 15,
		username: 'johndoe',
		category: 'list',
	},

	{
		prompt: 'blue button that says hello world',
		component: `() => {
		return (
			<form>
				<label>
					Name:
					<input type="text" name="name" />
				</label>
				<br />
				<label>
					Email:
					<input type="email" name="email" />
				</label>
				<br />
				<button type="submit">Submit</button>
			</form>
		);
	}`,
		score: 0.1,
		name: 'Form',
		upvotes: 25,
		username: 'janedoe',
		category: 'form',
	},
];

function Library() {
	const { prompt, setPrompt } = useStateContext();
	const [searchResults, setSearchResults] = useState([]);
	const [allComponents, setAllComponents] = useState([]);
	const [loading, setLoading] = useState(false);
	const SERVER_URL = import.meta.env.VITE_SERVER_URL;

	const searchComponentLibrary = async (prompt) => {
		try {
			setLoading(true);
			const result = await axios.post(`${SERVER_URL}/library/search`, {
				prompt,
				top_k: 3,
			});
			console.log('result.data: ', result.data);
			setSearchResults(result.data);
			// setSearchResults(DUMMY_SEARCH_RESULTS);
			setLoading(false);
		} catch (error) {
			setLoading(false);
			console.log('error searching component library: ', error);
		}
	};

	function groupBy(objectArray, property) {
		return objectArray.reduce((acc, obj) => {
			const key = obj[property];
			const curGroup = acc[key] ?? [];

			return { ...acc, [key]: [...curGroup, obj] };
		}, {});
	}

	const groupedComponents = groupBy(!!searchResults.length ? searchResults : allComponents, 'category');
	const categories = Object.entries(groupedComponents);

	const getAllComponents = async () => {
		try {
			const results = await axios.get(`${SERVER_URL}/library`);
			console.log('get all results: ', results);
			setAllComponents(results.data);
		} catch (error) {
			console.log('error getting all components from library: ', error);
		}
	};

	useEffect(() => {
		// if (!prompt) getAllComponents();
		getAllComponents();
	}, []);

	return (
		<div className="w-full">
			<SearchBar handleSearch={searchComponentLibrary} />

			<div className="flex flex-col items-center">
				{loading ? (
					<div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-black"></div>
				) : (
					<div>
						{categories.map((group, index) => {
							const [category, components] = group;
							return (
								<div key={index}>
									<div>
										<h1>#{category}</h1>
									</div>

									<div className="max-w-3xl bg-green-300 flex items-center gap-10">
										{components.length ? (
											components.map((data, index) => {
												return <CardComponent key={index} data={data} />;
											})
										) : (
											<h1>No components found - generate one</h1>
										)}
									</div>
								</div>
							);
						})}
					</div>
				)}
			</div>
		</div>
	);
}

export default Library;
