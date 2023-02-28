import SearchBar from '../components/SearchBar';
import React, { useState } from 'react';
import axios from 'axios';
import CardComponent from '../components/CardComponent';

const DUMMY_SEARCH_RESULTS = [
	{
		prompt: 'blue button that says hello world',
		component: `() => {
		return <h1>Hello, world!</h1>;
	}`,
		score: 0.5,
		component_name: 'HelloWorld',
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
		component_name: 'List items',
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
		score: 0.9,
		component_name: 'Form',
		upvotes: 25,
		username: 'janedoe',
		category: 'form',
	},
];

function Library() {
	const [searchResults, setSearchResults] = useState(['a', 'b', 'c']);
	const [loading, setLoading] = useState(false);
	const SERVER_URL = import.meta.env.VITE_SERVER_URL;

	const searchComponentLibrary = async (prompt) => {
		try {
			setLoading(true);
			const result = await axios.post(`${SERVER_URL}/search`, {
				prompt,
				top_k: 3,
			});
			setSearchResults(result.data.matches);
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
	const groupedComponents = groupBy(DUMMY_SEARCH_RESULTS, 'category');
	const categories = Object.entries(groupedComponents);
	console.log('categories: ', categories);

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

									<div>
										{components.map((data, index) => {
											return <CardComponent key={index} data={data} />;
										})}
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
