import React, { useState } from 'react';
import { useStateContext } from '../context/ContextProvider';
function SearchBar({ handleSearch }) {
	const { prompt, setPrompt } = useStateContext();
	const handleKeyDown = (e) => {
		if (e.key === 'Enter') {
			// Makes a request to the server to search the component library
			handleSearch(prompt);
		}
	};

	return (
		<div className="relative z-0 w-full">
			<input
				type="text"
				id="default_standard"
				className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none"
				placeholder={''}
				value={prompt}
				onChange={(e) => setPrompt(e.target.value)}
				onKeyDown={handleKeyDown}
			/>
			<label
				for="default_standard"
				className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
			>
				Search
			</label>
		</div>
	);
}

export default SearchBar;
