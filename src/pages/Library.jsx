import SearchBar from '../components/SearchBar';
import React, { useState } from 'react';
import axios from 'axios';
import CardComponent from '../components/CardComponent';

function Library() {
	const [searchResults, setSearchResults] = useState(['a', 'b', 'c']);
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

			<div className="flex flex-col items-center">
				{loading ? (
					<div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-black"></div>
				) : (
					<div>
						{searchResults.map((result) => {
							return <CardComponent />;
						})}
					</div>
				)}
			</div>
		</div>
	);
}

export default Library;
