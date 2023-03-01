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
			<div className="relative">
				<input
					type="search"
					id="default_standard"
					className="block w-full py-2.5 px-0 pl-2 w-full text-sm text-gray-900 bg-transparent border border-black rounded-xl appearance-none focus:outline-none"
					placeholder={''}
					value={prompt}
					onChange={(e) => setPrompt(e.target.value)}
					onKeyDown={handleKeyDown}
				/>
				<button
					className="absolute right-2.5 bottom-1.5 bg-transparent hover:bg-black/20 focus:outline-none rounded-xl px-3 py-1"
					onClick={() => handleSearch(prompt)}
				>
					<svg aria-hidden="true" class="w-5 h-5 text-black dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
				</button>
				
			</div>
			<label
				htmlFor="default_standard"
				className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
			>
				Search
			</label>
		</div>
	);
}

export default SearchBar;
