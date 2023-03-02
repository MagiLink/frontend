import SearchBar from '../components/SearchBar';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CategoryFilter from '../components/categoryFilter';
import RenderCards from '../components/RenderCards';
import { getAllComponents, groupBy } from '../utils/api';

function Library() {
	const [searchResults, setSearchResults] = useState([]);
	const [allComponents, setAllComponents] = useState([]);
	const [loading, setLoading] = useState(false);
	const [validSearch, setValidSearch] = useState(false);
	const [selectedCategories, setSelectedCategories] = useState('');

	const SERVER_URL = import.meta.env.VITE_SERVER_URL;

	const searchComponentLibrary = async (prompt) => {
		console.log('searching component library');
		try {
			setLoading(true);
			const result = await axios.post(`${SERVER_URL}/library/search`, {
				prompt,
				top_k: 3,
			});

			setSearchResults(result.data.matches);
			setLoading(false);
		} catch (error) {
			setLoading(false);
			console.log('error searching component library: ', error);
		}
	};

	const componentsToRender = validSearch ? searchResults : allComponents;

	const groupedComponents = groupBy(componentsToRender, 'category');
	const categories = Object.entries(groupedComponents);

	const filteredCategories =
		selectedCategories.length > 0
			? categories.filter(([category, components]) => {
					return selectedCategories.includes(category);
			  })
			: categories;

	useEffect(() => {
		getAllComponents(setAllComponents).then((res) => {
			setLoading(false);
		});
	}, []);

	return (
		<div className='w-1/2'>
			<SearchBar
				handleSearch={searchComponentLibrary}
				setValidSearch={setValidSearch}
			/>

			<CategoryFilter
				categories={Object.keys(groupedComponents)}
				setSelectedCategories={setSelectedCategories}
				selectedCategories={selectedCategories}
			/>

			<RenderCards
				categories={categories}
				selectedCategories={selectedCategories}
				loading={loading}
				filteredCategories={filteredCategories}
			/>
		</div>
	);
}

export default Library;
