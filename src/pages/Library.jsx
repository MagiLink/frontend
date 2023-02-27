import SearchBar from '../components/SearchBar';
import React, { useState } from 'react';
import axios from 'axios';

function Library() {
	const [searchResults, setSearchResults] = useState([]);
	const [loading, setLoading] = useState(false);
	const SERVER_URL = import.meta.env.VITE_SERVER_URL;

	const searchComponentLibrary = async (prompt) => {
		try {
			setLoading(true);
			const result = await axios.get('/', {});
			setSearchResults(result.data);
			setLoading(false);
		} catch (error) {
			setLoading(false);
			console.log('error searching component library: ', error);
		}
	};

	return (
		<div className="w-full">
			<SearchBar handleSearch={searchComponentLibrary} />
			{loading ? (
				<p>loading...</p>
			) : (
				<div>
					{searchResults.map((result) => {
						return (
							<div>
								<h1>{result.title}</h1>
								<p>{result.description}</p>
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
}

export default Library;
